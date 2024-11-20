---
slug: run-redis-on-k8s
title: Is Redis on K8s a Good Idea? Kuaishou Made it Happen!
description:  Drawing from Kuaishou's experience in implementing cloud-native Redis at scale, this blog delves into practical solutions and critical considerations for managing stateful services in Kubernetes environments.
date: 2024-11-21
authors:
  name: Yuxing Liu
tags: [Redis, kubernetes, Kuaishou, stateful service]
image: /img/blog-in-place-update.png
---

# Is Redis on K8s a Good Idea? Kuaishou Made it Happen!

While containerizing stateless services has become an industry standard, the question of running stateful services, such as databases and Redis, on Kubernetes (K8s) remains a topic of debate. Drawing from Kuaishou's experience in implementing cloud-native Redis at scale, this blog delves into practical solutions and critical considerations for managing stateful services in Kubernetes environments.

## Background

As technology evolves, Kuaishou's infrastructure is transitioning toward cloud-native architecture. With support from various teams, the container cloud at Kuaishou has become the interface between services and infrastructure. While stateless services at Kuaishou have almost fully adopted Kubernetes, the path toward cloud-native stateful services presents several challenges:

- **Is Kubernetes suitable for running stateful services?**
- **How can the cloud-native transformation of stateful services be realized and implemented?**

Redis serves as a case. As one of Kuaishou's most widely deployed stateful services, its **massive scale** means that **even minor optimizations can bring significant benefits to the organization**. Recognizing the long-term value of cloud-native Redis, Kuaishou has prioritized this transformation to unlock potential cost savings through improved resource utilization. This blog details Kuaishou's journey to cloud-native Redis, providing an in-depth analysis of strategies and considerations for stateful services in a cloud-native environment.

## Are Stateful Services Suitable for Kubernetes?

### Benefits and Risks of Running Stateful Services on Kubernetes

Running stateful services on Kubernetes comes with notable benefits:

- **Improved resource utilization**: Kubernetes optimizes resource use through merging resource pools, unified scheduling, and colocation, which can significantly reduce costs.
- **Enhanced operation efficiency**: With its declarative APIs and controller model, Kubernetes simplifies service management and drives technological advancements.
- **Lower maintenance costs**: A unified infrastructure minimizes maintenance overhead, improving overall management efficiency.

However, despite these advantages, running stateful services like databases on Kubernetes introduces risks that must be carefully evaluated due to their critical roles and stringent stability requirements. Key risks include:

1. **Performance degradation**: Does the additional abstraction layer introduced by containerization impact service performance?
2. **Stability concerns**:

   - Will building database systems on Kubernetes compromise the stability of stateful services?
   - Does it increase operational complexity?
   - When issues occur, would resolving them require expertise in both databases and Kubernetes?

![Figure 1](./../static/images/blog-redis-kuaishou-1.png)

The following sections explore these risks in more detail.

### The Viability of Stateful Services on Kubernetes

Before evaluating stateful services, it’s essential to understand what state entails:

**Data State:**

Data unique to each instance, which distinguishes it from others. Instances often serve different roles and store unique data, making them irreplaceable. Managing this data during instance lifecycle events (e.g. backup, recovery, rebalancing) requires extra care.

**Topology State:**

The relationship and state between instances, which are often dynamic during runtime.

In summary, these attributes introduce new challenges for stateful services on Kubernetes compared to stateless ones, such as ensuring data availability, managing data lifecycles, maintaining topology, and enabling topology-based service discovery and gradual rollouts. Kubernetes addresses these challenges through:

#### Approach 1: StatefulSet Workloads

- Kubernetes introduced **StatefulSet Workload** to assign globally unique, incrementally ordered identifiers to instances, ensuring stable network and storage identities while preserving both topology and data states.
- However, dynamic topology changes during runtime often exceed the capabilities of StatefulSet's fixed numbering system.

#### Approach 2: Custom Workload and Operators

- For complex scenarios like dynamic topology changes that the existing Workloads cannot handle, custom Workloads and Operators provide extensibility. This has led to the creation of stateful Operators such as Redis Operator and MySQL Operator.
- However, building a custom operator from scratch is resource-intensive, deterring many database teams. Even when reusing existing operators, integrating custom operational logic with existing frameworks remains a challenging task.

Deploying stateful services on Kubernetes demands a higher level of risk management and implementation effort compared to stateless services. The upfront costs and complexity are substantial, but the benefits of cloud-native architecture—such as improved resource efficiency, scalability, and operational agility—are long-term and compounding. Enterprises should carefully weigh these factors to make strategic, future-oriented decisions.

## How Did Kuaishou Run Redis on Kubernetes?

Kuaishou uses a classic master-slave architecture for Redis, comprising three core components: Server, Sentinel, and Proxy.

![Figure 2](./../static/images/blog-redis-kuaishou-2.png)

### Migrate Individual Redis Clusters to Kubernetes

#### The Cloud-native Redis Solution in Kuaishou

Given the challenges discussed earlier, the cloud-native Redis solution at Kuaishou could not be achieved using standard Kubernetes community workloads. Kuaishou faced several key challenges:

- **Expressing multi-shard and multi-instance relationships:**

   A clear definition of multi-shard architecture and the hierarchical relationship within each shard (multiple instances per shard) is essential. The architecture also needed to support dynamic adjustments to shard numbers and instance counts within shards to meet varying workloads.
- **Data management during lifecycle changes:**

   Managing data effectively during shard or instance lifecycle events posed significant challenges. This included ensuring data consistency and reliability during shard rebalancing or instance addition/removal, and developing robust backup and recovery strategies.
- **Expressing dynamic topology of multiple instances within one shard:**

   Within one shard, Kuaishou needed to express dynamic topology changes among instances in real-time. This would enable features like service discovery and canary releases based on real-time topology information.

Kuaishou addressed these challenges with the following strategies:

- **Layered architectural design:**
  
   This design separates workloads to manage individual shards and instances. Specifically, instances within a shard are managed by a StatefulSet, while a new workload layer manages multiple shards across the Redis Server cluster. This layered approach allowed for unified management of Redis clusters.
- **Lifecycle hook support:**

   Lifecycle hooks were added at both the shard and instance levels, enabling custom data management actions during various lifecycle phases.
- **Dynamic topology awareness and service discovery:**

   Role detection and tagging capabilities were introduced to support service discovery and canary releases based on dynamic topology relationships.

#### The KubeBlocks Solution

After evaluating several solutions, Kuaishou chose **KubeBlocks** as a key partner. As an open-source Kubernetes Operator, KubeBlocks abstracts APIs of various databases to support running and managing databases on Kubernetes. As stated on [its website](https://kubeblocks.io/), KubeBlocks' vision is to "Run any database on Kubernetes".

Through close collaboration with the KubeBlocks community, Kuaishou implemented Redis cluster orchestration using the following components:

![Figure 3](./../static/images/blog-redis-kuaishou-3.png)

1. **InstanceSet Workload**

   - Unlike StatefulSet, **InstanceSet** introduces abstractions for role definitions, role detection mechanisms, and role update strategies. The InstanceSet controller dynamically detects role changes during runtime, updating role information as labels on instance metadata to facilitate role-based service discovery.
   - Kuaishou co-developed several enhancements with the KubeBlocks community, including direct Pod and PVC management, heterogeneous instance configurations, instance-specific scaling down, concurrency control, and multiple update strategies. These features made InstanceSet highly flexible and able to accommodate complex business scenarios.

2. **Component, Shard, and Cluster Workloads**

   - **Component**: Decouples the component definition from its instances. By referencing a component definition, corresponding InstanceSets are generated, allowing for flexible component management and lifecycle handling at the instance level.
   - **Shard**: Generates a set of identical Component instances, simplifying shard-level management and expansion. Shard-level lifecycle management is also supported.
   - **Cluster**: Provides a unified definition for the entire stateful service cluster. For Redis, this includes the Proxy, Server, and Sentinel, along with their startup topology relationships.

### Migrate Large-scale Redis Clusters to Kubernetes

As mentioned earlier, Kuaishou's Redis deployment is characterized by its massive scale, with instance counts far exceeding the capacity of a single Kubernetes cluster. This necessitates the use of multiple Kubernetes clusters to support the workload. Unlike traditional setups where resources are pooled across all hosts, Kubernetes' cluster capacity constraints require partitioning the resource pool across multiple clusters. However, exposing the complexity of managing multiple clusters directly to Redis users would significantly increase cloud migration costs.

#### Federated Cluster Architecture

At Kuaishou, a federated cluster approach is adopted to provide unified scheduling and a unified interface to simplify operations, enabling users to focus on their core business. Key features of this architecture include:

- **Unified scheduling**:

   Federation serves as a centralized entry for resource distribution, enabling the placement of Redis instances across multiple member clusters.
- **Unified view**:

    Federation acts as a centralized entry for resource retrieval, offering a consolidated view of both federated and member cluster resources.

To implement the KubeBlocks-based solution within this federated architecture, the following architecture reveals more details:

![Figure 4](./../static/images/blog-redis-kuaishou-4.png)

1. **Splitting the KubeBlocks Operator**:

   Kuaishou split KubeBlocks into several parts:

   - The **InstanceSet Controller** resides within member clusters.
   - **Cluster Operator** and Component Operator are deployed in the federated cluster.

2. **Fed-InstanceSet Controller**:

   Kuaishou developed the Fed-InstanceSet Controller to manage interactions between the federated cluster and its members. Its primary responsibilities include:

   - **Scheduling decisions**: Determining the number of instances each member cluster should deploy based on scheduling policies.
   - **InstanceSet partitioning and distribution**: Splitting InstanceSets and distributing them across member clusters.

#### Fed-InstanceSet Controller

The Fed-InstanceSet Controller addresses two critical challenges in federated deployments:

- Instance partitioning management:

   Ensures the global uniqueness and order of Redis instances under the federated deployment.
- Control rule partitioning:

   Ensures that the control rules of InstanceSet are globally aligned with expectations in the federated deployment. This includes managing the order of gray changes and controlling concurrency during changes.

To tackle the first issue, Kuaishou collaborated with KubeBlocks community and designed the Ordinals field, allowing the assignment of specific index values to instances.The Fed-InstanceSet Controller leverages this mechanism to assign unique index ranges to each member cluster, **ensuring global uniqueness and maintaining the correct order across clusters**.

![Figure 5](./../static/images/blog-redis-kuaishou-5.png)

For the second issue, Kuaishou implemented a Directed Acyclic Graph (DAG) to model global sequencing, role relationships, gray deployment strategies, concurrency controls, and role change strategies. This DAG ensures that global changes are managed consistently and predictably across multiple Kubernetes clusters, maintaining stability and reliability during updates.

### Mitigate Risks of Running Redis on Kubernetes

#### Performance

Containerizing Redis within a cloud-native architecture introduces an additional abstraction layer compared to traditional host-based deployments. However, industry benchmarks and Kuaishou’s internal testing show that performance differences are generally within 10%, which is often negligible in most use cases. While this variance is typically acceptable, organizations are advised to conduct their own performance testing to ensure the solution meets the specific needs of their workloads.

#### Stability

After migrating stateful services to Kubernetes, the automation capabilities it provides significantly boosted operational efficiency. However, this also made the execution processes more opaque, with even small configuration changes potentially impacting a wide range of business instances. To mitigate the stability risks from unexpected operational actions—such as pod evictions, user errors by cluster admins, or issues with operator logic—Kuaishou has focused on the following efforts:

1. **How to distinguish expected and unexpected operations?**

   To identify whether an operation is expected, Kuaishou uses the operation administrators' input as the primary criterion. Based on this, a **ServiceAccount certificate** is generated for the Redis team, allowing operations to be distinguished through the user information included in the request.
2. **How to prevent unexpected changes systematically?**
  
   To address this challenge, Kuaishou utilizes the **Admission Webhook mechanism** within the Kubernetes API server to intercept and validate change requests. This approach allows Kuaishou to directly reject any unauthorized operations. Given the multi-cluster Kubernetes setup across multiple availability zones (AZs), it's critical to ensure change control across clusters. To achieve this, Kuaishou developed an internal risk mitigation system called kube-shield.

   Additionally, it’s worth mentioning that Kuaishou has further enhanced business high availability and stability by improving support for fine-grained scheduling distribution and introducing load balancing features based on resource utilization.

#### Operation Complexity

Migrating from a host-based system to a Kubernetes-based environment, while ensuring ongoing maintenance, requires deep expertise in both Redis and container cloud technologies. Relying solely on the Redis team or the container cloud team for independent support would be challenging. Proper division of responsibilities not only enhances productivity but also allows each team to fully leverage their expertise in their respective domains.

For example, in Kuaishou's cloud-native Redis solution:

- **Redis Team**: Focused on defining Redis cluster objects and encapsulating their operational expertise into declarative configurations.
- **Container Cloud Team**: Managed the Kubernetes side, including developing and maintaining the Operator, handling scheduling, and ensuring the cluster's lifecycle.

![Figure 6](./../static/images/blog-redis-kuaishou-6.png)

## Conclusion

Cloud-native transformation for stateful services is a complex journey requiring careful evaluation of its pros and cons, and one filled with challenges. However, for Kuaishou, its value is self-evident. Starting with Redis, Kuaishou has worked closely with the KubeBlocks community to implement a cost-effective, cloud-native solution for Redis.

Looking forward, Kuaishou aims to build upon this experience to drive the cloud-native transformation of more stateful services, such as databases and middleware, thus reaping dual benefits in technology and cost efficiency.

At KubeCon Hong Kong in August, Kuaishou and the KubeBlocks team delivered a joint presentation. If you're interested, you can revisit [the talk](https://kubeblocks.io/blog/migrate-redis-at-kuaishou-from-bare-metal-to-k8s) for further insights.
