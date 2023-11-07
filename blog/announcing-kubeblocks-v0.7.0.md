---
slug: announcing-kubeblocks-v0-7-0
title: Announcing KubeBlocks v0.7.0
description: This blog introduces major changes in KubeBlocks v0.7.0.
date: 2023-11-06
tags: [KubeBlocks v0.7.0, release notes]
image: /img/blog-banner.png
---

# Announcing KubeBlocks v0.7.0

We are excited to announce the official release of KubeBlocks v0.7.0!

In this release, KubeBlocks has already supported 31 open-source database engines, including new add-ons such as MariaDB, Elasticsearch, Pulsar, and Pika. This offers Kubernetes users a wider range of choices while maintaining the same user experience.

## Highlights

### External components

Some database clusters rely on metadata storage for distributed coordination and dynamic configuration. However, as the number of database clusters increases, the metadata storage itself can consume a significant amount of resources. Examples of such components include Zookeeper in Pulsar. To reduce overhead, users can reference the same external component in multiple database clusters now.

### Backup API

Some lifecycle management functions of the database cluster rely on the backup and restore functionality, which depends on object storage. However, if object storage is missing, certain lifecycle management functions of KubeBlocks may not work properly. For example, creating new replicas or recovering data to another node may be affected.

To address this issue, we plan to decouple the cluster's lifecycle management functions from the backup and restore functionality. The first step is to separate the API. With the new backup API, backup and restore actions are abstracted, allowing users to define their own backup methods. Additionally, the API supports GCS, OBS, and COS object storage now.

### Pika v3.5

Pika, an open-source NoSQL database developed by Qihoo, supports the Redis protocol and offers a cost advantage for handling data volumes exceeding 100 GB. The transition from Redis to Pika is smooth, as Pika preserves the same operational and usage patterns, ensuring minimal disruption to existing workflows. As of now, KubeBlocks supports the deployment of the Pika v3.5 sharding cluster.

## Overview of Integrated Engines

The table below provides an overview of the integrated engines and their capabilities in KubeBlocks.

| v0.7.0                                | Vscale | Hscale | Volumeexpand | Stop/Start | Restart | Backup/Restore | Logs | Config | Upgrade (DB engine version) | Account | Failover | Switchover | Monitor |
|---------------------------------------|--------|--------|--------------|------------|---------|----------------|------|--------|-----------------------------|---------|----------|------------|---------|
| apecloud-mysql                        | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | ✔️              | ✔️    | ✔️      | N/A                         | ✔️       | ✔️        | ✔️          | ✔️       |
| postgresql                            | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | ✔️              | ✔️    | ✔️      | ✔️                           | ✔️       | ✔️        | ✔️          | ✔️       |
| redis                                 | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | ✔️              | ✔️    | ✔️      | N/A                         | ✔️       | ✔️        | N/A        | ✔️       |
| mongodb                               | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | ✔️              | ✔️    | ✔️      | N/A                         | N/A     | ✔️        | ✔️          | ✔️       |
| kafka                                 | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | ✔️      | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| pulsar                                | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | ✔️      | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| weaviate                              | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | ✔️      | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| qdrant                                | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | ✔️              | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| greptimedb                            | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| nebula                                | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| risingwave                            | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| starrocks                             | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| etcd                                  | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| oceanbase                             |        | ✔️      | ✔️            | N/A        | N/A     | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| foxlake                               | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| orioledb                              | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| oracle-mysql                          | ✔️      | N/A    | ✔️            | ✔️          | ✔️       | ✔️              | N/A  | ✔️      | N/A                         | N/A     | N/A      | N/A        | N/A     |
| official-postgresql                   | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| mysql (Primary-Secondary replication) | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| openldap                              | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| neon                                  | ✔️      | N/A    | N/A          | N/A        | N/A     | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| opensearch                            | ✔️      | N/A    | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| vllm                                  | N/A    | N/A    | N/A          | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| ggml                                  |        | N/A    | N/A          | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| milvus                                | ✔️      | N/A    | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| elasticsearch                         | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| tdengine                              | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| clickhouse                            | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
| PolarDB-X                             | ✔️      | ✔️      | N/A          | ✔️          | N/A     | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | ✔️       |
| Zookeeper                             | ✔️      | ✔️      | ✔️            | ✔️          | ✔️       | N/A            | ✔️    | ✔️      | N/A                         | N/A     | N/A      | N/A        | N/A     |
| MariaDB                               | ✔️      | N/A    | ✔️            | ✔️          | ✔️       | N/A            | N/A  | N/A    | N/A                         | N/A     | N/A      | N/A        | N/A     |
