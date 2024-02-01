---
slug: Does-running-MySQL-on-Kubernetes-lead-to-significant-performance-degradation
title: Does running MySQL on Kubernetes lead to significant performance degradation?
description: Does running MySQL on Kubernetes lead to significant performance degradation?
date: 2023-08-18
authors:
  name: Thomas
  url: https://github.com/realzyy
  image_url: https://avatars.githubusercontent.com/u/1814084?v=4
tags: [benchmark, MySQL database operator]
image: /img/blog-mysql.png
---

# Does running MySQL on Kubernetes lead to significant performance degradation?
 
Does running MySQL on Kubernetes lead to significant performance degradation? Although concerns about this have been raised recently, few tests have been conducted, and results have rarely been shared publicly.
To answer this question, we used a popular benchmarking tool to evaluate MySQL throughput and latency in the following typical scenarios and tried to give a report and our insights:
- MySQL and the benchmarking tool are deployed in the same K8s cluster to simulate the application and database running in the same K8s cluster.
- MySQL and the benchmarking tool are deployed in two K8s clusters to simulate the application and database running in two K8s clusters.

Furthermore, we obtained Amazon RDS MySQL performance data using the same testing method. By comparing the performance data of Amazon RDS MySQL, users can gain a more comprehensive understanding of whether MySQL's performance on K8s can meet their production requirements.


## Methodology

### The Application Workloads
As part of the LAMP stack, MySQL is often used to build websites and web applications. Users generally do not run long transactions or complex queries in MySQL, so we used OLTP workloads that contain relatively simple transactions and queries to test performance. Here are several representative workloads:
- Read-intensive workload: 80% of operations are reads, and 20% are writes
- Read-write balanced workload: 50% of operations are reads, and 50% are writes
- Write-intensive workload: 20% of operations are reads, and 80% are writes

We have chosen [sysbench](https://github.com/akopytov/sysbench) as our benchmarking tool. It is a widely used tool that can be scripted and run on multiple threads. Sysbench can simulate the application workloads mentioned above and output throughput in terms of queries per second (QPS) and latency in terms of the 99th percentile (ms).

### The Open Source MySQL Operators

For K8s, MySQL is a complex stateful application that requires deployment and configuration with an operator. We have selected several open-source MySQL operators for testing, and their information is as follows:
- [MySQL Operator for Kubernetes](https://github.com/mysql/mysql-operator) by the Oracle team  
The MySQL Operator for Kubernetes is an operator for managing MySQL InnoDB Cluster setups inside a Kubernetes Cluster. It manages the full lifecycle with set up and maintenance that includes automating upgrades and backup.

- [XtraDB Cluster Operator](https://github.com/percona/percona-xtradb-cluster-operator) by the Percona team  
Based on our best practices for deployment and configuration, Percona Operator for MySQL based on Percona XtraDB Cluster contains everything you need to quickly and consistently deploy and scale Percona XtraDB Cluster instances in a Kubernetes-based environment on-premises or in the cloud.

- [KubeBlocks](https://github.com/apecloud/kubeblocks) by the ApeCloud team  
KubeBlocks is an open-source Kubernetes operator that manages relational, NoSQL, vector, and streaming databases on the public cloud or on-premise. It is designed for production purposes, providing reliable, performant, observable, and cost-effective data infrastructure for most scenarios.


### The Infrastructure - Computing, Storage, and Network

We utilized AWS, the world's largest cloud computing vendor, to provide the necessary computing, storage, and network resources for benchmarking. We established baseline performance by testing Amazon RDS Multi-AZ with two standbys.

We tested three mainstream instance types: one with 4 vCPUs and 16GB of memory, another with 8 vCPUs and 32GB of memory, and a third with 16 vCPUs and 64GB of memory. We chose these instance types because smaller ones are commonly used in development without performance bottlenecks, while larger ones are less widely used and therefore less representative. We selected the latest Intel CPU platforms for our instance types. Although AMD and ARM platforms may perform better in specific scenarios, testing them would remain the same conclusion as our tests.

We have designated gp3 as the primary block storage option. This selection ensures a consistent baseline performance of 3,000 IOPS, while allowing for scalable IOPS and throughput regardless of volume size. In cases where gp3 is unsuitable, we may consider io2 as an alternative. Although both gp3 and io2 offer excellent performance, there are cost differences to keep in mind. We have configured various volume sizes for different vCPU numbers and adjusted IOPS to achieve optimal performance under both CPU-bound and IO-bound scenarios.

To meet disaster recovery requirements in production, we deployed MySQL on EC2 instances within the same region but across different availability zones. This allowed us to observe the impact of cross-AZ container networks on MySQL performance. Additionally, we configured a layer 4 load balancer on top of MySQL to handle requests from sysbench deployed on other K8s clusters.

## Insights

### The default value of parameters has the greatest impact on throughput

Both fully-managed MySQL services and self-hosted MySQL provide automatic configuration of parameters and allow users to manually adjust them. Since most users are not familiar with MySQL parameters, default values for these parameters are particularly important. The following parameters have a significant impact on MySQL performance in the tests used in the report: innodb_flush_log_at_trx_commit, innodb_redo_log_capacity, and sync_binlog. Their default values are shown below:

|                                | AWS RDS MySQL Cluster | KubeBlocks operator | Percona operator | MySQL operator |
|--------------------------------|-----------------------|---------------------|------------------|----------------|
| innodb_flush_log_at_trx_commit | 1                     | 1                   | 0                | 1              |
| innodb_redo_log_capacity       | 100M                  | 2G                  | 100M             | 100M           |
| sync_binlog                    | 1                     | 1                   | 1                | 1              |

To achieve AZ-level fault recovery capability in MySQL, users must set both innodb_flush_log_at_trx_commit and sync_binlog to 1. However, this may result in some performance loss. The parameter default values for AWS RDS MySQL Cluster, KubeBlocks operator, and MySQL operator follow this best practice, while Percona operator adopts different default values due to its implementation of data replication.
To achieve better performance, users should set innodb_redo_log_capacity to 2G. This may require sacrificing some storage space, but better throughput can be obtained. AWS RDS MySQL Cluster, Percona operator, and MySQL operator have room for improvement in this regard. By manually modifying the innodb_redo_log_capacity setting of AWS RDS MySQL Cluster, throughput can be greatly improved.

### IOPS has the biggest impact on response time

Whether it is a fully managed MySQL service or a self-hosted MySQL, response time (RT) is positively correlated with concurrent threads. Increasing the number of concurrent threads will lead to an increase in RT. When the load is heavy, increasing the number of concurrent threads will bring extra burden, reduce the overall throughput, and even cause database crashes. In general, most MySQL connections are in an idle state, and active connections are not that high. In the test with 10 concurrent threads, the RT data of MySQL is as follows:

<div>
  <img src='https://kubeblocks.io/images/mysql-rt.png' alt="mysql rt" style={{padding: "10px 10%"}} />
</div>

The three workloads chosen in this article all involve a large amount of read and write operations on EBS. By setting innodb_redo_log_capacity to 2G, KubeBlocks has lower RT in IO-bound situations. After adjusting the IOPS to 12000, the RT of AWS RDS MySQL cluster has improved significantly. To achieve better performance, users should purchase enough IOPS. However, it is important to remember that AWS IOPS can be expensive, so more is not necessarily better.

### Running MySQL on K8s does not necessarily result in performance degradation

This report includes testing of additional scenarios with sufficient IOPS to verify the potential impacts of buffer pool hit rates and cross-K8s cluster networks. The specific test data is as follows:

<div>
  <img src='https://kubeblocks.io/images/max-throughput.png' alt="max throughput" style={{padding: "10px 10%"}} />
</div>

When data is not fully loaded into memory, the throughput of AWS RDS MySQL cluster is slightly lower than that of MySQL managed by KubeBlocks operator. Subsequently, sysbench was deployed to another K8s cluster to access AWS RDS MySQL Cluster and MySQL managed by KubeBlocks operator. The three workloads simulated by sysbench all achieved some performance improvements, but the throughput of AWS RDS MySQL cluster was still slightly lower than that of MySQL managed by KubeBlocks operator.
We can draw the following conclusions:
1. Improper parameter configuration can lead to a decrease in MySQL performance.
2. Insufficient IOPS can lead to a decrease in MySQL performance.
3. A low buffer pool hit rate can lead to a decrease in MySQL performance.
4. If none of the above three situations occur, running MySQL on K8s will not have a negative impact on performance.
The above points have been verified on AWS and are likely to still hold true on other public clouds. However, please note that this report has not been verified on bare-metal servers, so the results may be biased.

## Detailed benchmarks

### MySQL and sysbench are deployed in the same K8s cluster

<div>
  <img src='https://kubeblocks.io/images/MySQL-and-sysbench-are-deployed-in-the-same-K8s-cluster.png' alt="Deploy MySQL and sysbench in the same K8s cluster" style={{padding: "10px 10%"}} />
</div>

#### Read-intensive workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-intensive-workload-1.png' alt="Image 1" width='33%' style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-intensive-workload-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-7.png' alt="Image 7" width="33%" style={{padding: "5px"}} />
</div>

#### Read-write balanced workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-1.png' alt="Image 1" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-4.png' alt="Image 4" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>

#### Write-intensive workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Write-intensive-workload-1.png' alt="Image 1" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Write-intensive-workload-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-4.png' alt="Image 4" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>

### MySQL and sysbench are deployed in two K8s clusters

<div>
  <img src='https://kubeblocks.io/images/MySQL-and-sysbench-are-deployed-in-two-K8s-clusters.png' alt="MySQL and sysbench are deployed in two K8s clusters" style={{padding: "10px 10%"}} />
</div>

#### Read-intensive workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-1.png' alt="Image 1" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-4.png' alt="Image 4" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-intensive-workload-two-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>

#### Read-write balanced workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-1.png' alt="Image 1" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-4.png' alt="Image 4" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Read-write-balanced-workload-two-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>

#### Write-intensive workload

<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-1.png' alt="Image 1" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-3.png' alt="Image 3" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-5.png' alt="Image 5" width="33%" style={{padding: "5px"}} />
</div>
<div style={{display: "flex"}}>
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-2.png' alt="Image 2" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-4.png' alt="Image 4" width="33%" style={{padding: "5px"}} />
  <img src='https://kubeblocks.io/images/Write-intensive-workload-two-6.png' alt="Image 6" width="33%" style={{padding: "5px"}} />
</div>
