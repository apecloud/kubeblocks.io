---
slug: announcing-kubeblocks-v0-8-0
title: Announcing KubeBlocks v0.8.0
description: This blog introduces major changes in KubeBlocks v0.8.0.
date: 2024-01-12
tags: [KubeBlocks v0.8.0, release notes]
image: /img/blog-banner.png
---

# Announcing KubeBlocks v0.8.0

Exciting news! KubeBlocks v0.8.0 is officially released! 🚀 🎉 🎈

KubeBlocks v0.8.0 takes a big step forward in user experience by introducing component-level APIs, which makes standardized building blocks even smaller and more convenient to be reused.

For example, popular meta-database components like ETCD and ZK, which are widely used in various database clusters, now can be directly referenced after component modularization.

We also made Vitess Proxy a standard component, so that developers do not need to repeat their work (heavy lifting) when defining the read-write separation topology of MySQL or PostgreSQL engines in various distributions.

Further, the Add-on mechanism has also been significantly improved. The helm chart of the database engine has been split from the KubeBlocks repo. From then on, changes in the database engine or version have been unbound from the KubeBlocks release.

## Highlights

### Independent Component API

When integrating the new database engine, we found deficiencies in the abstract design of KubeBlocks. The v0.8.0 splits Component from Cluster definition to better support database types with multiple components. It supports variable references between Components, including ConfigMap, Secret, Service, ServiceReference and other variable reference types, which can better connect the relationships between components and lay the foundation for building clusters with different topologies.

### Removes the addon helm chart from KubeBlocks repo

In previous versions, Helm charts for database engines were located in the "deploy" directory, tightly coupled with the KubeBlocks Operator. However, this caused two problems: first, upgrading KubeBlocks would trigger the upgrade of the database engine; second, upgrading the database engine would overwrite existing CD/CV, restarting all the clusters.

To address these problems, KubeBlocks v0.8.0 has placed the database engines into a standalone repository called "kubeblocks-addon", with version numbers added for both the database engines and associated resources. This ensures that new installations do not overwrite existing resources, thereby eliminating cluster restarts. And KubeBlocks provides the "kbcli addon" command, which allows users to download, install, use, and uninstall specific engine versions.

### Supports multiple versions of database engine definitions

Prior to v0.8.0, KubeBlocks upgrades might trigger a restart of the database cluster. KubeBlocks v0.8.0, with the new Component API and Addon helm chart storage mechanism, this problem has been solved to a certain extent. We will continue to optimize the design of multiple versions in the future, and ultimately achieve burden-free upgrades.

## What's Changed

### New features

#### Pika

Supports multiple Pulsar clusters that can share a zookeeper component.

#### Clickhouse

Integrates monitoring, scale-out and high availability.

#### Oceanbase

Adds new active and standby cluster modes to support the complete life cycle and integrate backup, restore, monitoring and switching.

#### MySQL

- The Community Edition of MySQL 5.7 and 8.0 supports a full lifecycle with integrated backup recovery, monitoring, and HA.
- Adds log audit function on ApeCloud MySQL.

#### PostgreSQL

Supports wal-g full backup and PITR.

#### OpsRequest

Supports custom OpsRequest, enabling specific operational actions. For example, create and delete Kafka topics.

#### NodePort

Enables NodePort access for Redis.

### Compatibility

Compatible with the pre-refactored ClusterDefinition and ClusterVersion APIs.

### Usability

- OpsRequest supports task queuing, allowing users to submit multiple tasks at once. For tasks that cannot run concurrently, the system will automatically execute the next task after the previous one is completed.
- During KubeBlocks installation, specifying the image repository address is now possible, speeding up image pull.

### Observability

Unifies configuration and management for logs and metrics collection.

### API

- Adds interface definition in ComponentDefinition.
- Adds OpsDefinition API.
- Adds PreDelete Action for ActionSet. You can perform this action before deleting backup.

### Stability

Stability testings and related improvements. [WIP] KubeBlocks Fault Test.

### kbcli

Enhances addon sub-command. You can install the addon from the index repository.

## Incompatible changes

- In KubeBlocks 0.8.0, we have made improvements to Oceanbase (adding functions like creating primary/standby clusters, supporting host network and dynamic ports, supporting backup/restore, monitoring, logging, etc.). The clusters created in v0.7.0 are incompatible with those in v0.8.0, so if you are using v0.7.0 to manage Oceanbase, you are recommended to upgrade to v0.8.0. Upgrade KubeBlocks first, then upgrade Oceanbase Addon. It is recommended to use OceanBase official data import and export tools (OBLOADER and OBDUMPER) to migrate data.

- KubeBlocks 0.8.0 streamlines the data engines installed by default when deploying KubeBlocks by removing greptime, influxdb, neon, oracle-mysql, oroledb, tdengine, mariadb, nebula, risingwave, starrocks, tidb, zookeeper. You can install them on-demand from the addon indexing repository with the kbcli addon subcommand or the kubectl apply command; if you are upgrading from a lower version, follow the upgrade manual to avoid deleting addons that are in use, which may affect running clusters.

- The Helm Chart of KubeBlocks 0.8.0 no longer contains dependent CRDs. When installing or upgrading KubeBlocks with the helm command, you need to install the corresponding CRDs before installing or upgrading KubeBlocks, please refer to the upgrade manual for details.