---
slug: second-blog-post
title: Why isn't the open-source database operator popular?
description: Kubernetes and open-source operators are becoming increasingly prevalent but why isn't the open-source database operator popular?
authors:
  name: Thomas
  url: https://github.com/realzyy
  image_url: https://avatars.githubusercontent.com/u/1814084?v=4
tags: [database operator, open source]
---

# Why isn't the open-source database operator popular?

It's unusual that even though Kubernetes and open-source operators are becoming increasingly prevalent, many Kubernetes developers still opt to use fully managed database services provided by cloud vendors to construct their applications. The database engines of AWS Aurora or Snowflake are robust, although they are not open source, so there's nothing inherently wrong with utilizing them in Kubernetes. However, what's most perplexing is the use of RDS (such as RDS for MySQL or RDS for PostgreSQL), whose database engine is essentially the same as the open-source community version; what is hindering developers from utilizing various open-source database operators to create a completely Kubernetes-native application architecture?

## A comparison of fully managed databases and open-source database operator

Surprisingly developers have not yet realized the cost discrepancy between fully-managed database services and equivalent computing resources, given that the cost of the former is 150% to 400% higher.
Comparison of fully managed database cost and computing resource cost:

| Public Cloud Provider | Deployment | Fully Managed Database Cost ($/hour) | Computing Resource Cost ($/hour) | Fully Managed Database Cost/Computing Resource Cost | Remarks | 
| :--   | :--           | :--    | :--    | :--  | :--                                | 
| AWS   | stand-alone   | 0.258  | 0.1344 | 192% | Oregon 4C/16GB <br />t4g.xlarge    |
| AWS   | one standby   | 0.517  | 0.2688 | 192% | Oregon 4C/16GB <br />t4g.xlarge    |
| AWS   | two standbys  | 1.044  | 0.5424 | 192% | Oregon 4C/16GB <br />m6gd.xlarge   |
| GCP   | stand-alone   | 0.2772 | 0.134  | 206% | Oregon 4C/16GB <br />e2-standard-4 |
| GCP   | HA            | 0.5544 | 0.268  | 206% | Oregon 4C/16GB <br />e2-standard-4 |
| Azure | stand-alone   | 0.39   | 0.198  | 197% | West US 4C/16GB <br />B4ms / D4as  |
| Azure | HA            | 1.47   | 0.396  | 371% | West US 4C/16GB <br />B4ms / D4as  |

In terms of capabilities, the open-source database operator offers a comprehensive deployment configuration. Although its functionality may not be completely covered by fully-managed database services, it cannot be argued that there is a significant difference. Let's take MySQL as an example.

  * Both AWS RDS and the open-source database operator support stand-alone and multiple standby/read replica configurations, with the latter utilizing Group Replication and Proxy to achieve the same functionality.
  * AWS RDS has the ability to perform data backups through physical or logical methods, while the open-source database operator can achieve similar results using CSI or backup software.
  * In terms of monitoring, AWS RDS has a robust Performance Insight, but the open-source database operator usually relies on a more common combination of Prometheus and Grafana. This difference may not be noticeable to developers.
  * There is a significant difference in terms of compliance and user experience. AWS RDS has passed SOC, PCI, and other compliance projects, but running the open-source database operator on AWS EKS with caution can provide a similar level of data protection.

## How far is the open-source operator from becoming popular?

While the open-source database operator offers a significantly lower cost and appears to provide essential features, it is not as widely adopted as the fully managed database service from cloud vendors. Our discussions with many users revealed an intriguing phenomenon: among offline users who have limited access to cloud vendors, the open-source database operator is more popular and comparable in popularity to Kubernetes itself.
Many users noted that even though fully managed database services encounter various issues, they are typically resolved through the cloud provider's automation program or the operations team. On the other hand, while the open-source database operator is rapidly improving, it still lacks the capability to self-repair and there is no support from operations personnel. This partially explains why the open-source database operator is favored among offline users as having a dedicated operations team handling problems can be more comforting from an operational efficiency standpoint.

The Kubernetes community primarily categorizes user roles into two types: developers who deploy applications and operations staff who manage the cluster. Developers can independently expand the database by utilizing the open-source database operator. However, if there is a lack of resources, operations staff need to quickly add resources to the Kubernetes cluster. While they usually understand the resource needs of the application, they may not have a good understanding of the resources required by the database, which can lead to occasional problems like abnormal database synchronization that are hard to handle and cause stress. If developers also handle operations tasks (known as DevOps), the added workload and cognitive burden may discourage them from handling database operators and adopting fully managing the database service instead.

Aside from the reasons mentioned earlier, the inadequate integration of open-source database operators may also contribute to a less smooth user experience compared to fully managed database services. For instance, when creating a backup for MySQL, an open-source database operator may require additional steps such as allocating resources and configuring accounts for an object storage service in the Kubernetes cluster to store the backup file, whereas fully managed database services do not need these steps. Additionally, complex applications often involve multiple types of databases, such as MySQL and Redis. This may result in inconsistent user experiences with open-source database operators, whereas fully managed database services offer a unified design across the console, command line, and API, although the experience is often criticized.

Even though there are challenges such as cognitive burden and limited integration, Kubernetes will continue to improve developer productivity and resource utilization, leading to a lasting influence on the world.
These difficulties will eventually be overcome. If you face any issues with Kubernetes that cannot be resolved by open-source database operators or have any valuable experiences to share, please respond to [KubeBlocks](https://join.slack.com/t/kubeblocks/shared_invite/zt-1oz1hjyfk-UZwOJt8fge2TtWkTnuVfJg) or [DoK](https://dokcommunity.slack.com/join/shared_invite/zt-10v7uncvp-jNFwulsVWvUO0SKMDTjwAw#/shared-invite/email) to assist the Kubernetes community in advancing more rapidly.