---
slug: announcing-kubeblocks-v0-9-1
title: Announcing KubeBlocks v0.9.1
description: This blog introduces major changes in KubeBlocks v0.9.1.
date: 2024-10-11
tags: [KubeBlocks v0.9.1, release notes]
image: /img/blog-release-0.9.1.png
---

# Announcing KubeBlocks v0.9.1

We're thrilled to announce that KubeBlocks v0.9.1 now is released!

In this release, KubeBlocks further optimizes its APIs and Addons to bring you new features and better user experience. This release includes new features like stopping/starting a cluster by Cluster API, instance rebuild capability in OpsRequest, PITR and key-based recovery for Redis. We also fixed some bugs and introduced several improvements to enhance the overall funtionality.

Read the full release note and [upgrade to KubeBlocks v0.9.1](https://kubeblocks.io/docs/preview/user_docs/upgrade/upgrade-with-kbcli/upgrade-kubeblocks-to-0.9.1) to explore more features!

## Highlights

### KubeBlocks

- Supports cluster stop & start operations via Cluster API

   This feature provides a new option to meet different needs in various scenarios.

- Enhanced instance rebuild capability in OpsRequest

   Combined with KubeBlocks’ [InstanceSet](https://kubeblocks.io/blog/instanceset-introduction), this feature greatly improves the system’s recovery capability in failure scenarios.

### Addons

- Redis
  
   Supports PITR (Point-in-Time Recovery) and key-based recovery.

- ZooKeeper

   Supports backup.

- New Versions

   MySQL and PostgreSQL Addons support more versions. For the latest versions of Addons, refer to the [Addon List](https://github.com/apecloud/kubeblocks-addons?tab=readme-ov-file#supported-add-ons).

## What's Changed

### New Features

#### KubeBlocks

- OpsDefinition and BackupPolicyTemplate support cmpdName prefix and regex matching [#8174](https://github.com/apecloud/kubeblocks/pull/8174)

   OpsDefinition and BackupPolicyTemplate now support component name prefixes and regular expression matching, offering greater flexibility.

- High Availability (HA) records [#8089](https://github.com/apecloud/kubeblocks/pull/8089)

   KubeBlocks supports HA records, enhancing fault tolerance and system reliability.

- Supports cluster start and stop operations via Cluster API [#7783](https://github.com/apecloud/kubeblocks/pull/7783)

   KubeBlocks supports starting and stopping clusters via Cluster API, simplifying cluster management.

- Supports horizontal scaling on instance rebuilds  [#7710](https://github.com/apecloud/kubeblocks/pull/7710)

   You can choose how to rebuild certain instance, in-place-rebuild or remote-rebuild, via inPlace field in OpsRequest API.

- Automatic cleanup of failed OpsRequests [#7796](https://github.com/apecloud/kubeblocks/pull/7796)

   KubeBlocks adds a mechanism to automatically clean up failed OpsRequests, improving resource management.

- Log Collection on Backup Failure [#8208](https://github.com/apecloud/kubeblocks/pull/8208)

   KubeBlocks supports collecting logs when backup operations fail.

#### Addons

- Redis Addon
  - PITR for Standalone Replicas [#7998](https://github.com/apecloud/kubeblocks/pull/7998)
  - Key-based recovery for Redis [#8129](https://github.com/apecloud/kubeblocks/pull/8129)
- Supports Loki Addon [#707](https://github.com/apecloud/kubeblocks-addons/pull/707)
- Supports Minio Addon [#926](https://github.com/apecloud/kubeblocks-addons/pull/926)
- Supports RabbitMQ Addon [#746](https://github.com/apecloud/kubeblocks-addons/pull/746)
- Supports MySQL 8.4 [#987](https://github.com/apecloud/kubeblocks-addons/pull/987)
- Supports PostgreSQL 16 [#973](https://github.com/apecloud/kubeblocks-addons/pull/973)
- ZooKeeper Addon

   - Supports backup. [#794](https://github.com/apecloud/kubeblocks-addons/pull/794), [#851](https://github.com/apecloud/kubeblocks-addons/pull/851)

### Others

- ComponentDefinition immutability check

   KubeBlocks adds a default immutability check for ComponentDefinition to avoid accidental changes, enhancing system stability.

- Removal of the Application Addon (#7866)

   The Application Addon has been removed from the codebase and is no longer installed by default. However, you can still install it manually if needed.
