---
slug: Does-containerization-affect-the-performance-of-databases
title: Does containerization affect the performance of databases?
description: Does containerization affect the performance of databases?
date: 2024-01-26
authors:
  name: dullboy
  url: https://github.com/nayutah
  image_url: https://avatars.githubusercontent.com/u/111858489?v=4
tags: [containerization, database performance, Kubernetes]
image: /img/blog-banner.png
---

# Does containerization affect the performance of databases?

Containers are a hot topic, especially in scenarios where swift time-to-market is crucial for scaling operations. The trend of database containerization is becoming increasingly evident. As depicted in Fig.1., workloads related to databases and analytics have claimed a significant portion of the landscape. However, many individuals still grapple with a challenge when making technical choices: Does containerization affect database performance? If so, what are the influencing factors? How does one address performance and even stability issues introduced by containerization?

![Usage of containerized workloads by category](./../static/img/Usage-of-containerized-workloads-by%20category.png)
Fig. 1. Usage of containerized workloads by category [4]

# Advantages and technical principles of containerization

Containerization, a transformative technology, involves the encapsulation of applications along with their dependencies into a self-contained, portable runtime environment. This innovative approach streamlines the packaging, deployment, and management of applications. The process is facilitated by container runtimes, with popular examples being Docker and Containerd. These runtimes play a pivotal role in the creation, deployment, and orchestration of containers.

Taking the orchestration of containers to the next level, Kubernetes, commonly referred to as K8s, emerges as a powerful open-source platform. Functioning as a container orchestration and management system, Kubernetes provides a centralized and scalable infrastructure for automating various aspects of container operations. This includes seamless deployment, efficient scaling, comprehensive management, and intelligent scheduling, making it an indispensable tool in the dynamic landscape of containerized applications.

## Advantages of containerization

1. Flexibility and portability.
The deployment and migration of databases are simpler and more reliable. Containerization is also the foundation for Infrastructure as Code (IaC).

2. Resource isolation and scalability.
Containerization technology provides advantages in resource isolation and scalability through the use of container runtime engines. Each container has its own runtime environment and resource allocation, allowing database instances to run independently within containers, minimizing mutual interference. This resource isolation enables database instances to better utilize computing resources, providing improved performance and reliability.

3. More user-friendly scheduling strategies. 
With the smaller granularity of resources after containerization, it becomes more user-friendly for higher-level scheduling. Different scheduling strategies can be applied in various scenarios, such as staggered utilization of computing resources through a mix of offline and online deployments. Deploying multiple engines together enhances overall utilization, and increasing deployment density helps reduce computational costs.

## Technical principles and categories of containerization

### Virtualization

Speaking of containers, virtualization cannot be ignored. Virtualization is a technique that abstracts and isolates computing resources, allowing multiple virtual instances to run simultaneously on the same physical server. It is achieved by introducing a software layer called a hypervisor between the hardware and the operating system, dividing the physical server into multiple virtual machines, each equipped with an independent operating system and resources. Each virtual machine can run a complete operating system with its own kernel and resources, similar to running a full computer on a physical server.

Containerization is a lighter-weight virtualization technique that utilizes operating system-level virtualization to isolate and run applications along with their dependent environments. Containerization and virtualization are often used together to meet users' needs for various isolation scenarios.

### Categories of virtualization + containerization technologies

According to the resource isolation and virtualization methods of container runtimes, the current mainstream virtualization + container technologies can be categorized as follows:

1. Standard Containers: Compliant with the OCI (Open Container Initiative) specification, examples include Docker/Containerd, with the container runtime being runc. This is the predominant form of K8s workloads.
2. User-Space Kernel Containers: Examples include gVisor, also compliant with the OCI specification, with the container runtime being runsc. These containers offer good isolation and security but have relatively lower performance, suitable for lightweight workloads.
3. Microkernel Containers: Utilizing a hypervisor, examples include Firecracker and Kata-Container, compliant with the OCI specification, with container runtimes being runc or runv. These containers provide good security and isolation, with performance falling between standard containers and user-space kernel containers.
4. Pure Virtual Machines: Examples include KVM, Xen, VMWare, serving as the underlying virtualization technology for mainstream cloud provider servers. Generally, they exist as Nodes in K8s, one level lower than containers in terms of abstraction.

![Comparison of system architecture of various lightweight virtualization methods](./../static/img/Comparison-of-system-architecture.png)
Fig. 2. Comparison of system architecture of various lightweight virtualization methods. Orange parts are kernel space, while green parts are user space.[2]

### Implementations of OCI mainstream containerization technologies

The following paragraphs analyze several mainstream containerization technologies that comply with the OCI specification.

1. runc
Runc is an OCI-compliant container runtime and is part of the core container engine for Docker/Containerd. It utilizes Linux namespaces and Cgroup technologies to achieve container isolation.
When running containers, runc employs namespace isolation for processes, networking, file systems, and IPC (Inter-Process Communication). It also utilizes Cgroups to restrict resource usage of processes within the container. This isolation technology enables applications within containers to run in a relatively independent environment, separated from the host system and other containers.
While runc's isolation techniques introduce some overhead, this overhead is limited to namespace mapping, restriction checks, and some accounting logic. In theory, the impact is minimal, and when syscalls are long-duration operations, this impact is nearly negligible. Generally, Namespace+Cgroup isolation technologies have a minimal impact on CPU, memory, and I/O performances.

![Architecture of runc](./../static/img/Architecture-of-runc.png)
Fig. 3. Architecture of runc

2. Kata Containers
Kata Containers is a container runtime implemented using virtualization technology, with enhanced isolation and security. It leverages Intel's Clear Containers technology and combines lightweight virtual machine (VM) monitors with container runtimes.
Kata Containers runs an independent virtual machine inside each container, with its own kernel and user space. This virtualization technology provides stricter isolation, preventing applications within the container from directly accessing host resources. However, due to the introduction of VM startup and overhead management, Kata Containers may incur some additional overhead compared to traditional container runtimes in terms of system calls and I/O performance.

![Architecture of Kata Containers](./../static/img/Architecture-of-Kata-Containers.png)
Fig. 4. Architecture of Kata Containers

3. gVisor
gVisor is a container runtime implemented using user-space virtualization technology, with enhanced isolation and security. It utilizes its own kernel implementation, known as "Sandboxed Kernel", to run inside containers.
The Sandboxed Kernel in gVisor provides emulation and management of operating system interfaces within the container. Applications and processes within the container are isolated from the host kernel, preventing direct access to or impact on host kernel resources. While this isolation technology improves security, it may introduce some additional system calls and I/O performance overhead compared to traditional container runtimes.

![Architecture of gVisor](./../static/img/Architecture-of-gVisor.png)
Fig. 5. Architecture of gVisor

4. Firecracker
Firecracker is a virtualization technology designed for serverless computing and lightweight workloads. It utilizes micro-virtualization to run each container as an independent virtual machine.
Firecracker employs Kernel-based Virtual Machine (KVM) as the underlying virtualization technology. Each container runs within its own virtual machine, together with its own kernel and root file system. It utilizes separate virtual device emulators to communicate with the host machine. In this way, the technology provides higher security and isolation. However, compared to traditional container runtimes, Firecracker may introduce greater system calls and I/O performance overhead.

![Architecture of Firecracker](./../static/img/Architecture-of-Firecracker.png)
Fig. 6. Architecture of Firecracker

### Comparisons of different implementation principles

Table. 1. Overview of implementations of virtualization and isolation in Containerization

|        | Containerd-runc  | Kata-Container |gVisor  |FireCracker-Containerd  |
|:----------------|:---------| :---------| :---------| :---------|
| Isolation Principles | Namespace + Cgroup| Guest Kernel| Sandboxed Kernel| microVM| 
| OCI Runtime| runc| Clear Container + runv| runsc| runc| 
| Virtualization| Namespace| QEMU/Cloud Hypervisor+KVM| Rule-Based Execution| rust-VMM + KVM| 
| vCPU| Cgroup| Cgroup| Cgroup| Cgroup| 
| Memory| Cgroup| Cgroup| Cgroup| Cgroup| 
| Syscall| Host| Guest + Host| Sentry| Guest + Host| 
| Disk I/O| Host| virtio| Gofer| virtio| 
| Network I/O| Host + veth| tc + veth| netstack| tap + virtio-net

There have also been comparisons made among different implementations of Container Engines, such as Containerd and CRI-O [3][5]. However, it is beyond the scope of this article and the part is left for you to explore.

# How K8s+containerization affect databases

Containerization has many positive impacts on databases. For example, it simplifies the deployment and management of databases, provides a standardized isolated runtime environment for databases, enables easy deployment and flexible migration of databases in different complex environments, and offers more standardized and convenient version management for databases. Moreover, with the support of Kubernetes (K8s), various roles and components within a database can be flexibly and organically orchestrated together.

## The challenges containerization presents databases

However, K8s+containerization also brings forth numerous challenges for databases, which are closely related to the inherent characteristics of databases. Unlike typical stateless applications, databases possess the following characteristics:

1. Databases are complex applications with multiple roles.
A complete database consists of various roles. For example, in a MySQL primary-secondary configuration, there are two MySQL containers, one serving as the primary and the other as the secondary. These roles are not equivalent, and it is crucial to express this asymmetrical relationship correctly. Additionally, managing these roles correctly during operations such as creation, restart, deletion, backup, and high availability is essential. Fundamentally, this involves interdependent data states between containers, and both containers and Kubernetes (K8s) currently lack a well-abstracted and resolved solution for handling such dependencies.

2. Databases require high levels of data persistence and consistency.
Databases have stringent requirements for storage, and simple containerization alone cannot fulfill the needs of a production-level workload. Additional components such as Container Storage Interface (CSI) and PersistentVolume are necessary. The choice of storage also impacts the available operations for the database. For example, cloud disks offer high durability, snapshot backup functionality, and the ability to attach and detach from different compute nodes, which are beneficial for database backup, recovery, and high availability. However, on local disks, such options may be limited. For instance, when a node failure occurs, a data replica may be permanently lost, making high availability more challenging, and the backup may be limited to physical/file-based or logical backups. Different storage solutions correspond to varying levels of persistence and different database architectures.

3. Databases have high performance requirements.
Databases have diverse performance demands. If these demands are categorized based on CPU, memory, network, and storage, there are CPU + storage I/O intensive OLAP products like ClickHouse and Greenplum. There are also memory + network I/O intensive databases like Redis and in-memory databases. Furthermore, there are CPU + storage I/O intensive databases like MySQL, PostgreSQL, and other traditional OLTP databases. Additionally, even within the same database process, the resource requirements can vary significantly depending on the query scenario.

4. Databases have security requirements.
Data stored in databases is typically critical and sensitive, hence there are specific requirements for environment isolation, data access control, and audit logging.

In summary, running databases on containers+K8s poses significant challenges for both the databases and the containers+K8s. Databases need to adapt to the transient nature of containers, floating IPs, frequent updates to the underlying infrastructure, and complex performance environments. On the other hand, containerization and Kubernetes face challenges such as introducing roles, managing states and data dependencies between containers, meeting demanding performance requirements, and ensuring compliance with comprehensive security systems.

Regarding the aforementioned points 1, 2, and 4, KubeBlocks has developed comprehensive solutions. If you're interested, you can visit kubeblocks.io for more information. Now, let's get back to the subject of this article. The following sections provide a deeper analysis of the impact of containerization on database performance.

## How K8s+containerization affect the performance of databases

As mentioned above, the performance of databases is primarily influenced by factors such as CPU, memory, storage, and network. This part will analyze the impact of K8s and containerization on database performance in relation to these factors. While certain scheduling and affinity policies within K8s can potentially affect performance, these policies are not directly related to containerization and are therefore beyond the scope of this discussion.

The following sections will provide an overview of the impact of containerization on application performance, including databases, from the perspectives mentioned above. These sections have compiled industry research papers and test data from recent years and will analyze some of the test data and identify reasons and inconsistencies. Additional tests are also conducted to address certain scenarios that were lacking, such as the impact of K8s Container Network Interface (CNI) on network performance.

### CPU

Test server: Quad-Core Hyper Thread 4 Intel Core i5-7500, 8GB RAM, 1TB disk, Ubuntu 18.04 LTS.

Test scenario: The data and test scenarios here are based on the paper [1]. Case 1 involves performing prime number calculations using sysbench with a concurrency of 4. The reported metric is the number of events per second. This scenario represents a pure computational workload where almost all instructions run in the user space, and syscalls can be ignored. Therefore, in theory, the performance of different container technologies should be similar.

Test results: The CPU performance of various containers is similar. Compared to bare metal, the performance degradation in other scenarios is around 4%.

Analysis: This 4% performance degradation is likely caused by Cgroup's CPU limitations. When the Sysbench concurrency equals the number of Hyper Threads, the probability of being throttled by Cgroup is significant. When a Cgroup throttle occurs, the process is forced to wait for a jiffy (10 ms). Cgroup calculates resource allocation based on jiffies, not seconds, so it is almost impossible for a 4 vCPU container to reach 400% utilization. Some loss is expected, and the frequency of throttling can be found in the cpu.stat file in the Cgroup.

![CPU performance (Sysbench benchmark)](./../static/img/CPU-performance-Sysbench-benchmark.png)
Fig. 7. CPU performance (Sysbench benchmark) (Xingyu Wang 2022)

Test scenario: Video decoding using Davi1d, with video sizes around several hundred MB. In this test, there are a significant number of syscalls due to the need to read data from the disk. Syscalls can have some impact on application performance.

Test results: runc and kata-qemu experience a loss of approximately 4%, similar to the prime number test results. gVisor-ptrace has a loss of 13%, while gVisor-KVM performs on par with bare metal.

Analysis: Video decoding involves sequential reading, and Linux has read-ahead optimization for sequential reads. Therefore, the majority of I/O operations directly read data from the page cache. runc is primarily influenced by Cgroup limitations, while the other three solutions are more affected by the syscall implementation. The paper does not further analyze the differences between gVisor-ptrace and gVisor-KVM. gVisor uses gofer for file system operations, and gofer has its own cache strategy. Further analysis may need to focus on gVisor's syscall implementation and cache strategies.

![CPU performance (Dav1d benchmark) ](./../static/img/CPU-performance-Dav1d-benchmark.png)
Fig. 8. CPU performance (Dav1d benchmark) (Xingyu Wang 2022)

### Memory

Test scenario: RAMSpeed, with 4 sub-scenarios (Copy, Scale, Add, Triad). The specific details of the underlying principles are not elaborated here.

Test results: The performance of various solutions is similar.

Analysis: Once memory is allocated and page fault is handled, in theory, containerization should not have a significant impact on memory access. The real factors that affect memory performance are syscalls such as mmap and brk. However, in this test, the proportion of such syscalls is minimal.

![Memory access performance](./../static/img/Memory-access-performance.png)
Fig. 9. Memory access performance (Xingyu Wang 2022)


Test scenario: Redis-Benchmark with sub-scenarios (GET, SET, LPUSH, LPOP, SADD).

Test results: K8s+containerization has minimal impact on runc and kata-qemu, while gVisor experiences significant degradation. gVisor-ptrace has a loss of around 95%, and gVisor-KVM has a loss of around 56%.

Analysis: Redis is a single-threaded application with heavy network I/O. All network I/O operations are performed through syscalls, which results in significant performance degradation for gVisor. The original paper mistakenly attributed the performance loss mainly to memory allocation. However, Redis internally uses the user-space memory management tool jemalloc, which leverages mmap syscalls to request large blocks of memory from the operating system and then performs local small block allocations. Due to jemalloc's mature memory allocation and caching mechanisms, the frequency of mmap syscalls is minimal. When Redis is under full load, CPU sys usage for network I/O is around 70%. Therefore, the performance degradation of gVisor in this scenario is primarily caused by syscall interception and the internal network stack (netstack). This test also indicates that gVisor is currently not suitable for scenarios with heavy network I/O.

![Redis performance for different container runtimes](./../static/img/Redis-performance-for-different-container%20runtimes.png)
Fig. 10. Redis performance for different container runtimes (Xingyu Wang 2022)

### Disk I/O

Test scenario: IOZone reads and writes a 16GB file.

Test results: K8s+containerization has minimal impact on sequential read and write. kata-qemu experiences a significant impact, with a range of 12-16% degradation.

Analysis: Large-block read and write is essentially sequential read and write. As mentioned earlier, sequential read benefits from read-ahead optimization by the operating system, and most of the operations in sequential read and write are performed on the page cache. The original paper analyzed the impact on kata-qemu and attributed it to the virtio-9p file system. Virtio-9p is designed for network usage and does not have specific optimizations for virtualization scenarios.

![Disk read and write performance](./../static/img/Disk-read-and-write-performance.png)
Fig. 11. Disk read and write performance (Xingyu Wang 2022)


Test scenario: Testing directly on tmpfs (shared memory) to solely measure the impact of syscalls and memory copies on performance.

Test results: Except for gVisor, the performance of other solutions is similar.

Analysis: gVisor incurs higher syscall overhead, resulting in similar performance degradation as observed in the redis-benchmark scenario.

![Disk read and write performance (tmpfs overlay)](./../static/img/Disk-read-and-write-performance-tmpfs-overlay.png)
Fig. 12. Disk read and write performance (tmpfs overlay) (Xingyu Wang 2022)


Test scenario: SQLite single-threaded insertion test, where shorter execution time is preferred.

Test results: runc performs similarly to bare metal, kata has a 17% increase in execution time, and gVisor has a 125% increase in execution time.

Analysis: Database workloads are complex and involve a combination of CPU, memory, network, and disk I/O. They also frequently make syscall calls. gVisor is not well-suited for such scenarios.

![Database record insertion performance](./../static/img/Database-record-insertion-performance%20.png)
Fig. 13. Database record insertion performance (Xingyu Wang 2022)

### Network I/O

Test scenario: TCP stream throughput test, where higher throughput is preferred.

Test results: gVisor exhibits poorer network performance, similar to what was observed in the redis-benchmark scenario. The impact on the other solutions is minimal.

Analysis: gVisor is limited by its syscall mechanism and netstack implementation, resulting in overall lower throughput.

![TCP_STREAM network performance](./../static/img/TCP_STREAM-network-performance.png)
Fig. 14. TCP_STREAM network performance (Xingyu Wang 2022)


Test scenario: Testing TCP_RR, TCP_CRR, and UDP_RR. RR stands for request and response, referring to a TCP request and its corresponding response, where the TCP connection is established only once and reused for subsequent requests. CRR indicates creating a new TCP connection for each test. TCP_RR corresponds to a long connection scenario, while TCP_CRR corresponds to a short connection scenario.

Test results: runc performs similarly to bare metal; kata experiences a small loss; gVisor still incurs significant performance degradation, the underlying principles of which are the same as mentioned before.

![TCP_RR, TCP_CRR and UDP_RR performance](./../static/img/TCP_RR-TCP_CRR-and-UDP_RR-performance.png)
Fig. 15. TCP_RR, TCP_CRR and UDP_RR performance (Xingyu Wang 2022)

### CNI network

Containers are commonly used with K8s, and container orchestration based on K8s has become the de facto standard. In a K8s environment, networking is typically implemented through a combination of CNI and container technologies. There are many popular CNIs available, such as Calico, Flannel, and Cilium. In the latest versions, both Calico and Cilium extensively utilize eBPF (extended Berkeley Packet Filter) technology. Although the specific implementations may differ, these two CNIs exhibit comparable performance in many testing scenarios. For specific test data, please refer to [CNI Benchmark: Understanding Cilium Network Performance](https://cilium.io/blog/2021/05/11/cni-benchmark/) [6].


The following tests compare the Cilium eBPF legacy host-routing mode and the Cilium eBPF mode to examine the specific impact of the CNI on database performance.

Legacy host-routing：

In the Cilium eBPF legacy host-routing mode, Cilium utilizes iptables for packet filtering and forwarding. iptables is still required and used for configuring and managing the forwarding rules of network traffic. Cilium directs traffic to the Cilium proxy through iptables rules, and then the proxy handles and forwards the traffic.

In the legacy host-routing mode, Cilium leverages the NAT (Network Address Translation) of iptables to modify the source and destination IP addresses for NAT and service load balancing.

eBPF-based host-routing：

In the new eBPF-based routing mode, Cilium no longer relies on iptables. Instead, it leverages the extended Berkeley Packet Filter (eBPF) of the Linux kernel for packet filtering and forwarding. eBPF host-routing allows bypassing all iptables and upper stack overhead within the host namespace, as well as reducing some context switch overhead during traversal of virtual network interfaces. Network packets are captured early from the network device facing network and directly delivered into the network namespace of the K8s Pod. On the egress side, packets still traverse through a veth pair, where they are captured by eBPF and directly delivered to the external network-facing interface. Routing tables are queried directly by eBPF, making this optimization completely transparent and compatible with any other service running on the system that provides routing distribution.

![Comparison of legacy and eBPF container networking](./../static/img/Comparison-of-legacy-and-eBPF-container-networking.png)
Fig. 16. Comparison of legacy and eBPF container networking [6]

Test environment:

Kubernetes: v1.25.6 CNI: cilium:v1.12.14

Node CPU: Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz RAM 128G

Redis: 7.0.6, 2 vCPU, Maxmemory: 2Gi

Test scenario:

Table. 2. Overview of different service routing paths in K8s

|        | Network  | Source |Target  |
|:----------------|:---------| :---------| :---------| 
| NodeLocal2HostPod	  | Hostnetwork  | 	Node  | 	Local Pod  | 
| NodeLocal	  | Ethernet	  | Node  | 	Local Process  | 
| PodLocal2Pod|	Pod|	Pod	|Local Pod|
|Node2HostPod	|Hostnetwork|	Node	|Remote Pod|
|NodeLocal2NodePort	|NodePort	|Node	|Local| NodePort|
|Node2Node	|Ethernet|	Node|	Remote Process|
|NodeLocal2Pod|	Pod	|Node	|Local Pod|
|Pod2Pod	|Pod|	Pod	|Remote Pod|
|Node2NodePort|	NodePort	|Node|	Remote NodePort|
|Pod2NodePort	|Pod + NodePort	|Pod	|Remote NodePort|
|Node2Pod|	Pod|	Node	|Remote Pod|

Test results:

Legacy host-routing with iptables:

![Redis benchmark under legacy host-routing with iptables](./../static/img/Redis-benchmark-under-legacy-host-routing-with-iptables.png)
Fig. 17. Redis benchmark under legacy host-routing with iptables

![Comparison between Host network and Pod network under legacy host-routing](./../static/img/Comparison-between-Host-network-and-Pod-network-under-legacy-host-routing.png)
Fig. 18. Comparison between Host network and Pod network under legacy host-routing

eBPF-based host-routing:
![Redis benchmark under eBPF-based host-routing](./../static/img/Redis-benchmark-under-eBPF-based-host-routing.png)
Fig. 19. Redis benchmark under eBPF-based host-routing

![Comparison between Host network and Pod network under eBPF-based host-routing](./../static/img/Comparison-between-Host-network-and-Pod-network-under-eBPF-based-host-routing.png)
Fig. 20. Comparison between Host network and Pod network under eBPF-based host-routing


Analysis: The legacy host-routing mode has a significant impact on network performance, resulting in a 40% performance difference between the Pod network and the host network. On the other hand, the eBPF-based host-routing mode effectively equalizes the latency between the Pod network and the host network. It achieves this regardless of the number of routing rules and completely eliminates the gap between the host network and the Pod network. This improvement is universally applicable and particularly suitable for network-intensive applications such as Redis.

### Summary

In terms of CPU, memory, and disk I/O, runc exhibits performance closest to bare metal. Kata Containers has slightly lower performance compared to runc but offers better security and isolation. gVisor, due to its syscall implementation, has the poorest performance. This could be attributed to gVisor's emphasis on security features. However, newer versions of gVisor are continuously improving its performance.

Networking is a special consideration as it also involves the impact of the K8s CNI. In the combination test of Cilium eBPF with runc, the container network performance can achieve the same level as the host network. Cilium also supports kata-containers, although its support for other container technologies is limited.

Overall, runc demonstrates performance comparable to bare metal across various aspects, making it the most commonly used choice for Kubernetes workloads. Kata Containers, although slightly lower in performance compared to runc, offers better isolation and is a suitable choice for balancing performance and security. gVisor provides flexible isolation but suffers from poorer performance, making it more suitable for scenarios where high security is prioritized over performance. Firecracker has similar use cases to kata-containers.

Therefore, if running database workloads, runc and kata-containers are recommended as the top choices.

## Common database performance issues

This article will summarize and analyze the common scenarios of database performance problems, offering a glimpse of the complexity of databases and infrastructure, as well as the direction our team is striving towards.

### Disk IO hang

When there is a large number of BufferedIO operations, such as writing temporary tables in MySQL, the writes are directed to the page cache, and the Ext4 file system's metadata is frequently updated. During this process, both the CPU and I/O can become busy. The MySQL process may experience frequent CPU throttling, leading to a continuous increase in dirty pages. Subsequently, the file system triggers the flushing of dirty pages, causing a high volume of dirty I/O that saturates the hardware channels. If the process is scheduled away due to CPU throttling and happens to hold the Ext4 Journal Lock at the same time, other processes sharing the same Ext4 file system will be suspended. Then, if the suspension occurs frequently and for a long duration, it can result in IO hang. This phenomenon is common in scenarios where local disks are shared, such as bare metal and hostpath CSI. And the mainstream solution is to throttle BufferedIO, which is already supported by Cgroup V2.

The above example demonstrates that bottlenecks are not always determined by a single factor but are the result of multiple interconnected factors. In the case of Disk IO hang, the page cache is related to memory and Disk I/O, and CPU throttling is related to CPU scheduling, while the Ext4 Journal is related to locks. Therefore, all these factors interact and influence each other to create a complete IO hang.

It is worth mentioning that many database vendors recommend using XFS as the preferred file system to optimize I/O operations. For a deeper understanding of the profound impact of Disk I/O on databases, you can refer to [A testing report for optimizing PG performance on Kubernetes](./../blog/a-testing-report-for-optimizing-PG-performance-on-kubeblocks.md) [7].

### Out of memory (OOM)

When using Cgroup for memory isolation, the memory management path of the operating system (OS) becomes different from that of bare metal. It faces higher pressure in page allocation and page reclaim.

For example, consider a Pod with a memory request and limit set to 1G. Both page allocation and reclaim must be performed within the physical memory space of 1G. Databases, a type of workload that requires substantial memory resources, can consume several hundred megabytes of memory by just starting an empty database process. This leaves very little space for the actual application. If combined with monitoring or log collection sidecars, it will probably exhaust database memory.

However, the real danger is not the Out-of-Memory (OOM) event itself, but the slow death process leading up to it. This process can be incredibly prolonged. Before triggering the OOM event, the page reclaim module tries everything to reclaim enough memory and invokes time-consuming slow paths. This process is repeated again and again until it exceeds a predefined limit. During this process, the database clients may observe numerous transaction timeouts and exits.

The impact of it is not limited to a single Cgroup namespace. Many data structures in the OS are shared at the host level. Although the memory of a Pod logically belongs to a specific Cgroup namespace, in the host kernel, the actual memory management is still based on a shared Buddy System. The management of this physical memory requires a global locking mechanism. Therefore, triggering the page reclaim slow path in a memory-intensive Pod can also affect the memory management path of other healthy Pods. Sometimes, the entire database on a node may become slow simply because one Pod has a small memory limit.

To address such issues, more advanced isolation solutions are needed. For example, isolation schemes based on microkernels or virtual machines (VMs) can ensure that two Pods belong to different memory management spaces. Another improvement is to evaluate various runtime metrics at the database level when memory reclaim becomes inevitable, achieving a "fail fast" approach.

### Too many connections

For OLTP databases, there is typically a dedicated pre-allocated buffer pool with a relatively fixed memory. The changeable part comes from connection structures, intermediate computation results in work mem, page tables, page cache, etc.

In the case of multi-process model databases like PostgreSQL and Oracle, each connection corresponds to a separate process. When the buffer pool itself is large, forking a process requires a significant number of page table entries. Assuming a page size of 4KB and page table entry size of 8 bytes, the ratio between page tables and the buffer pool is 8/4K = 1/512. When there are 512 connections, the memory required for page tables becomes as large as that of the buffer pool. This multi-process model severely impacts the scalability of the database and incurs significant additional memory costs in high-concurrency scenarios. However, these costs are often overlooked.

There are generally two solutions to address this issue. The first is to add a proxy layer in front of the database, which handles a large number of connections, while establishing only a few connections with the actual database backend. For example, the proxy may establish P connections with the backend database, while accepting C connections (C >> P) from the application side. This connection pooling approach reduces the connection pressure on the backend database. Another solution is to use Hugepages. Assuming a Hugepage size of 2MB, the ratio between page tables and the buffer pool is 8/2M = 1/256k. The cost of page tables becomes negligible, and the number of connections that the multi-process model can handle increases significantly. However, the Hugepage solution also comes with various side effects and imposes a burden on resource management. Therefore, the proxy approach is generally considered a more friendly choice.

There are two types of multi-threaded models. One type is where each connection corresponds to a separate thread. While this eliminates the page table copy issue, it can lead to resource contention, excessive context switching, and ongoing performance degradation as the number of connections increases. Proxy can also be used to address these issues. The other type is where C connections correspond to P threads (C >> P). This approach is commonly known as Thread Pool. For example, Percona MySQL adopts this type of solution.

Proxy and Thread Pool are essentially the same, as they both aim to reuse connections, but they differ in their implementation, and these two approaches can be used together to further increase capacity and reduce load.

Table. 3. Overview of different database process-connection models
|       | | Number of Connections: Number of Processes	  | Page Tables	 |Notes  |
|:----------------|:---------| :---------| :---------|:---------|
|Multi-Process	|Proxy|	C:P	|*P	|C >> P|
|Multi-Process	|Direct Connection|	C:C|	*C	| |
|Multi-Thread	|Thread Pool|	C:P	|*1|	C >> P|
|Multi-Thread	|Per Thread	|C:C	|*1	||

### TCP retran

Networking will affect databases in mainly two aspects.

One is latency. Network latency affects the duration of data transmission, which in turn impacts the overall response time of the client. When the request latency on the client side increases, the number of connections required to complete the same number of requests per unit of time will increase. An increase in the number of client connections can lead to higher memory consumption, more context switches, and increased contention, ultimately resulting in a gradual decline in performance.

The other is about bandwidth. Both the effective bandwidth of individual TCP connections and the maximum transmission bandwidth of network interfaces and switch ports have a significant impact on network transmission quality and latency. When a TCP connection, switch port, or network interface queue becomes congested, packet loss occurs at the OS kernel or hardware level. Packet loss further triggers retransmission and out-of-order delivery, which leads to increased latency and subsequently initiates a series of performance issues.

Networking issues not only trigger performance problems but also affect availability and stability. For example, problems such as failover due to excessive network latency causing heartbeat timeouts or significant replication delay between primary and standby systems can occur.

### CPU schedule wait

In some VM-based containerization solutions, the processes within the container and those in the host kernel do not often correspond. From the perspective of the host kernel, only the processes related to VM virtualization are visible. When you see a process in the VM in the "running" state, it does not necessarily mean that it has acquired resources and started running on the host. The host and VM have separate CPU scheduling systems. The VM process inside the container can only truly run when the corresponding VM process on the host is also in the "running" state.

The additional time between a process transitioning to the "running" state and actually being executed  is the extra scheduling wait time. The time gap can affect the performance of the database. In scenarios with strict performance requirements, you can reduce the host load or set VM CPU affinity to mitigate the impact.

### Lock & latch

In the database field, locks generally protect resources, while latches protect critical regions. However, both technologies are ultimately implemented internally at the OS level. In Linux, futex is commonly used to implement higher-level mutexes and wait variables.

When CPU, I/O, and memory are abundant, the scalability of a database is usually limited by its internal transaction and locking mechanisms. For example, in the TPC-C benchmark, the scalability of most standalone databases typically ranges from 32 cores (64 hyper-threads) to 64 cores (128 hyper-threads). Beyond 32 cores, the marginal contribution of CPU count to database performance becomes very low.

The topic is not closely related to containerization, so it will not be elaborated upon in this article.

### Analysis of database performance bottlenecks

Table. 4. Overview of different database performance bottlenecks

|       |  Storage Engine|Disk I/O |I/O unit|Process Model|Performance Bottleneck |
|:----------------|:---------| :---------| :---------|:---------|:---------|
|MySQL|InnoDB|DirectIO + BufferedIO|Page|Multi-Thread|I/O bandwidth + Lock + Connections|
|PostgreSQL|HeapTable|BufferedIO|Page|Multi-Thread|I/O bandwidth + Lock + Connections|
|MongoDB|WiredTiger|BufferedIO/DirectIO|Page|Multi-Thread|I/O bandwidth + Lock + Connections|
|Redis|RDB + Aof|BufferedIO|Key-Value|Single-Thread*|CPU Sys（Network）|

- MySQL requires special attention to temporary tables. Since temporary tables use BufferedI/O, if there are no Cgroup limitations, it can quickly trigger a large number of dirty page flushes by the OS. This flushing process can occupy almost all channels of the storage device, causing normal requests to hang, which is a classic case of Disk I/O hang.
- PostgreSQL operates in a multi-process model, so it is important to pay attention to the number of connections and the size of the page table. Although using the Hugepage scheme can reduce the burden on the page table, Hugepage itself has several side effects. Utilizing proxies like pgBouncer for connection pooling is a better solution. When enabling full-page writes, PostgreSQL has a strong demand for I/O bandwidth, making I/O bandwidth the bottleneck. When both I/O and the number of connections work well, PostgreSQL's internal lock mechanism can become the bottleneck under higher concurrency. For more details, you can refer to [A testing report for optimizing PG performance on Kubernetes](./../blog/a-testing-report-for-optimizing-PG-performance-on-kubeblocks.md) [7].
- MongoDB generally exhibits stable performance. The main issues typically arise from Disk I/O and the number of connections. WiredTiger performs well in controlling the flow from cache to I/O, so although there may be I/O contention, the probability of an IO hang is relatively low. However, the workload of an OLTP database can be more complex than MongoDB and it is often harder to strike a balance.
- The bottleneck for Redis mainly lies in networking. Therefore, it is important to pay special attention to the network latency between the application and Redis services. This latency is determined by the network link. When Redis is heavily loaded, more than 70% of CPU consumption is on the network stack. To address the scalability issues of network performance, Redis 6.0 introduced network multi-threading functionality. The actual worker thread is still single-threaded. This feature significantly improves its performance while maintaining its simplicity and elegance.

# Summary

Based on a comprehensive review of industry research, this article complements the testing of the container + network CNI. It further analyzes the impact of containerization on CPU, memory, disk I/O, and network performance. This analysis sheds light on the mechanisms and solutions for addressing the performance impact of containerization. Through the analysis of test data, it is found that the combination of runc + cilium eBPF offers containerization performance that is nearly on par with bare metal. Additionally, considering improved security and isolation, kata-containers is also a viable option.

Furthermore, building upon containerization, the article provides a theoretical analysis of common performance bottlenecks in databases. It highlights the complex dependencies of heavy workload databases on the host kernel, drawing attention to often-overlooked factors such as page tables, Journal Lock, TCP Retran, and CPU schedule wait. Many of these issues are not specific to containerization, but are prevalent in general. Lastly, the article provides a qualitative analysis of several popular databases and summarizes common issues based on the team's years of operational experiences. It is hoped that these issues will receive ongoing attention and be addressed at the architectural level.

Database containerization has become a frequently discussed topic. To be, or not to be? The question lingers in the minds of every decision-maker. From our perspective, the key challenges of database containerization, such as performance, stability, and stateful dependencies, are being addressed one by one. Each challenge will have a perfect answer as long as there is a demand.

# References

[1] Wang, Xing et al. “Performance and isolation analysis of RunC, gVisor and Kata Containers runtimes.” Cluster Computing 25 (2022): 1497-1513.
[2] Goethals, Tom et al. “A Functional and Performance Benchmark of Lightweight Virtualization Platforms for Edge Computing.” 2022 IEEE International Conference on Edge Computing and Communications (EDGE) (2022): 60-68.
[3] Espe, Lennart et al. “Performance Evaluation of Container Runtimes.” International Conference on Cloud Computing and Services Science (2020).
[4] https://www.datadoghq.com/container-report/
[5] https://www.reddit.com/r/kubernetes/comments/x75sb4/kube_container_performance_crio_vs_containerd/
[6] https://cilium.io/blog/2021/05/11/cni-benchmark/
[7] [A testing report for optimizing PG performance on Kubernetes](./../blog/a-testing-report-for-optimizing-PG-performance-on-kubeblocks.md)