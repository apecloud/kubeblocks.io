---
slug: announcing-kubeblocks-v0-9-2
title: Announcing KubeBlocks v0.9.2
description: This blog introduces major changes in KubeBlocks v0.9.2.
date: 2024-12-03
tags: [KubeBlocks v0.9.2, release notes]
image: /img/blog-release-0.9.2.png
---

# Announcing KubeBlocks v0.9.2

We are delighted to announce the release of KubeBlocks v0.9.2. This release includes several new features, bug fixes, and various improvements.

Read the full release note and [upgrade to KubeBlocks v0.9.2](https://kubeblocks.io/docs/release-0.9/user_docs/upgrade/upgrade-with-kbcli/upgrade-kubeblocks-to-0.9.1) to explore more features! The upgrade process for v0.9.2 is identical to that of v0.9.1. Simply follow the v0.9.1 tutorial, updating the version number as needed to complete the upgrade to v0.9.2.

## KubeBlocks

- Added support for rolling updates of container images, enabling seamless updates with minimal downtime. ([#8389](https://github.com/apecloud/kubeblocks/pull/8389))  
- Introduced component-level stop/start capabilities, allowing fine-grained control over cluster components. ([#8480](https://github.com/apecloud/kubeblocks/pull/8480))  
- Enhanced  Host Network support for shardings. ([#8517](https://github.com/apecloud/kubeblocks/pull/8517), [#8502](https://github.com/apecloud/kubeblocks/pull/8502))  
- Improved horizontal scaling OpeRequest for shardings. ([#8530](https://github.com/apecloud/kubeblocks/pull/8530))  
- Added support for recreate pod update policies to enhance update strategies. ([#8466](https://github.com/apecloud/kubeblocks/pull/8466))  
- Kubeblocks Installation improvements: Support for defining extra annotations and environment variables. ([#8454](https://github.com/apecloud/kubeblocks/pull/8454))

## Addons

### MySQL

- Added Jemalloc support for improved memory management. ([#1158](https://github.com/apecloud/kubeblocks-addons/pull/1158))

### Redis

- Added NodePort announce mode support for Redis Sentinel. ([#1227](https://github.com/apecloud/kubeblocks-addons/pull/1227))
- Introduced support for fixed pod IPs, custom master names, and full FQDN domains.([#1222](https://github.com/apecloud/kubeblocks-addons/pull/1222))  
- Updated user ACL backup frequency for PITR backups. ([#1180](https://github.com/apecloud/kubeblocks-addons/pull/1180))  

### RabbitMQ

- Added support for member leave operations to enable scale-in scenarios.  ([#1229](https://github.com/apecloud/kubeblocks-addons/pull/1229))  
- Enhanced RabbitMQ configuration with config constraints and file-based logs. ([#1199](https://github.com/apecloud/kubeblocks-addons/pull/1199))  

### MongoDB

- Added support for host networking. ([#1152](https://github.com/apecloud/kubeblocks-addons/pull/1152))  

### PostgreSQL

- Enhanced vanilla PostgreSQL integration and added support for PostgreSQL 15. ([#1092](https://github.com/apecloud/kubeblocks-addons/pull/1092))  
- Added support for Supabase PostgreSQL. ([#1154](https://github.com/apecloud/kubeblocks-addons/pull/1154))  
Xinference
- Added support for Xinference v0.15.4. ([#1248](https://github.com/apecloud/kubeblocks-addons/pull/1248))

You can view the [full changelog here](https://github.com/apecloud/kubeblocks/compare/v0.9.1...v0.9.2).