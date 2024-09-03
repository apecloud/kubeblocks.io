---
slug: announcing-kubeblocks-v0-9-0
title: Announcing KubeBlocks v0.9.0
description: This blog introduces major changes in KubeBlocks v0.9.0.
date: 2024-07-09
tags: [KubeBlocks v0.9.0, release notes]
image: /img/blog-release-0.9.png
---

# Announcing KubeBlocks v0.9.0

We are thrilled to announce the release of KubeBlocks v0.9.0, which brings us one step closer to the highly anticipated v1.0 release. This version introduces several significant improvements and new features that enhance the overall functionality and user experience of the KubeBlocks platform.

## API Highlights

- In KubeBlocks v0.9, with the introduction of topology support in KubeBlocks, the cluster building experience has become much more flexible and intuitive, akin to assembling a cluster using building blocks. The ClusterDefinition API has added the `topologies` field, allowing developers to provide various deployment patterns with different topologies. Database users can choose a topology when creating a Cluster through the `topology` field. For instance, the Redis Addon offers three topologies: Standalone, Replication, and Proxy. The Standalone topology only includes one Component - RedisServer, the Replication topology includes both RedisServer and Sentinel Components, and the Proxy topology adds a third Component, such as Twemproxy.
- KubeBlocks now supports managing horizontal scaling (Reshard) of distributed databases. You can represent a horizontal shard with a Component, and scale up or down this horizontal shard by adding or removing Components. This scaling capability will also be used in the distributed deployment of Redis and Pika.
- KubeBlocks now uses InstanceSet instead of StatefulSet to manage Pods. InstanceSet supports taking a specified Pod offline and Pod in-place update, and also the primary and secondary databases can adopt different Pod specs in a database Replication architecture (StatefulSet doesn't support these features).
- Developers can add more custom event handlers for Components! The ComponentDefinition API, introduced in v0.8, includes the `lifeCycleActions` field, allowing you to define various custom event handlers. Building on this, KubeBlocks v0.9 provides more handlers for custom addon implementation, including roleprobe (node role probing), memberLeave (node offline), preTerminate (Component offline), and postProvision (Component online). The expansion of event handlers enhances KubeBlocks' expression capabilities. For example, preTerminate and postProvision can be used to execute cross-shard data redistribution (Rebalance) in distributed databases or initiate registration to third-party HA managers like Sentinel and Orchestrator.

## Addon Highlights

- KubeBlocks supports Redis Cluster mode (sharding mode)
  
  Redis Cluster is designed to provide horizontal write scalability and intelligent client high-availability strategies, in addition to its excellent failover capability. Redis Cluster distributes data across multiple Redis nodes, significantly enhancing system capacity, performance, and availability.

- KubeBlocks introduces MySQL Replication mode
  
  Compared to MGR clusters, the MySQL Replication topology requires fewer resources (only two database replicas) and incurs less overhead for data replication. When there is no extreme demands for service availability and data reliability, the Replication topology is a more cost-effective choice. You can actively switch MySQL replica roles using `kbcli` or trigger a passive failover by deleting specified Kubernetes pods via `kubectl`. If there are no long transactions and large table DDLs, the failover generally can be completed within 30 seconds.

## What's Changed

### New Features

#### KubeBlocks

- ClusterDefinition API
  - Supports topology API, allowing developers to customize various topologies.
- Cluster API
  - Supports ShardingSpec API.
  - Supports sharding scaling.
- ComponentDefinition  API
  - `lifecycleActions` API supports user-defined operation actions, including roleprobe, memberLeave, preTerminate, postProvision.
  - New Vars API for referencing instance-related dynamic resources and information, including secret, service, and service reference.
    - Supports Vars API.
    - Supports cross-Component Vars referencing.
    - Optimizes ServiceRef referencing.
  - Supports dynamic configuration, regenerating specified variables after vertical scaling or horizontal scaling is performed.
- Component
  - Supports deleting Component.
  - Supports ComponentVersion.
- InstanceSet API
  - InstanceSet replaces StatefulSet to manage Pods.
  - Supports Instance Template.
  - Supports specified instance scaling down.
  - Supports In-place Update.
- OpsRequest API
  - Supports rebuilding faulty backup instances.
  - Supports the force flag to control concurrency.
  - Supports custom multi-task sequential execution.
- Supports NodeCountScaler.
- Supports PITR.
- Supports cross-Namespace restore.

#### kbcli

- Supports PostgreSQL point-in-time recovery.
- `cluster` supports the `rebuild-instance` subcommand to rebuild instances.
- `cluster create` subcommand supports `elasticsearch`.
- Supports specifying the path prefix when creating a backup repository.

#### Addons

##### Redis

- Supports the official Redis Cluster topology.
- Enhances the functionality and stability of Redis.
  - Adapts to new APIs such as ComponentDefinition and ComponentVersion, supporting multiple topology forms.
  - Optimizes Redis Replication Cluster initialization logic, removing dependency on DownwardAPI.
  - Supports Redis v7.2.4.
- Redis sharding cluster supports backup and restore.

##### MySQL

- Adds the open-source component Orchestrator Addon to manage MySQL.

##### PostgreSQL

- Supports PostgreSQL PITR.
- Supports PostgreSQL v15.7.

##### Qdrant

- Qdrant sharding cluster supports backup and restore.

##### MogDB

- Supports the creation, scaling, backup and switchover of MogDB Replication Cluster in v5.0.5.

##### ElasticSearch

- Supports Elasticsearch v7.7.1, v7.10.1, and v8.8.2.

##### Pulsar

- Supports v3.0.2.
- Supports NodePort.

##### VictoriaMetrics

- Supports VictoriaMetrics v1.100.1.

### API  deprecations, and other changes for Release 0.9

- ConfigConstraint API becomes stable and upgrades from v1alpha1 to v1beta1.
- The group of StorageProvider changes and is migrated from `storage.kubeblocks.io` to `dataprotection.kubeblocks.io`.
- ClusterVersion v1alpha1 CRD will be removed in Release 1.0.
- ComponentClassDefinition v1alpha1 CRD will be removed in Release 1.0.
- ComponentResourceConstraint v1alpha1 CRD will be removed in Release 1.0.
- ClusterDefinition API
  - `type`, `componentDefs`, `connectionCredential` will be removed in Release 1.0.
- Cluster API
  - Scheduling: `tenancy` and `availabilityPolicy` will be removed in Release 1.0.
  - API simplification: `replicas`, `resources`, `storage`, and `network` will be removed in Release 1.0.
- ComponentDefinition  API
  - switchPolicy will be removed in Release 1.0. The same capability can be achieved using the `componentDefinition.spec.lifecycleActions.switchover` API.
- ServiceRef API
  - `cluster` will be removed in Release 1.0. The same capability can be achieved using `serviceRef.clusterServiceSelector`.

Additionally, all fields referencing the above APIs are also marked as deprecated and will be removed in Release 1.0.

- `clusterVersionRef`
- `componentDefRef`
- `classDefRef`

KubeBlocks Release 0.9 still maintains the compatibility with API marked as deprecated.

### Deprecated Features

#### kbcli Deprecated features

- `bench`, `fault`, and `migration` subcommands are removed to streamline functions.

## Upgrade to v0.9

Refer to [Upgrade to KubeBlocks v0.9](https://kubeblocks.io/docs/release-0.9/user_docs/installation/upgrade/upgrade-kubeblocks-to-0.9).
