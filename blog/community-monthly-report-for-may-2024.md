---
slug: Community-Monthly-Report-for-May-2024
title: Community Monthly Report for May 2024
description: Find out what's happening in the KubeBlocks community.
date: 2024-06-06
tags: [Monthly Report, Community]
image: /img/blog-2024-05-monthly-report.png
---

# Community Monthly Report for May 2024

## Overview

In May, KubeBlocks released v0.8.3 and continued the development of v0.9.0. The major updates are supporting cross-cluster referencing of configuration objects and NodeCountCluster. The community also fixed related defects.

Over the past month, the community merged 170 PRs, and resolved 133 issues, with contributions from 24 developers.

## Highlights

- [#7153 Supported to reference config across clusters](https://github.com/apecloud/kubeblocks/pull/7153).
- [#7258 Supported NodeCountScaler](https://github.com/apecloud/kubeblocks/pull/7258).

## Bug Fixes

- [#7475 Fixed the crash issue after executing a switchover for MongoDB](https://github.com/apecloud/kubeblocks/pull/7475).
- [#7447 Adapted rolecheck to accommodate cluster initialization for some database engines](https://github.com/apecloud/kubeblocks/pull/7447).
- [#7365 Supprted PVC to create idempotent](https://github.com/apecloud/kubeblocks/pull/7365).
- [#7352 Added labels to distinguish KubeBlocks from dataprotection](https://github.com/apecloud/kubeblocks/pull/7352).
- [#7323 Fixed the issue that the configmap 'xxx-rsm-env' was not found](https://github.com/apecloud/kubeblocks/pull/7323).
- [#7299 Added lorry ports to hostnetwork](https://github.com/apecloud/kubeblocks/pull/7299).
- [#7256 Removed the validation for the cluster component spec in webhook](https://github.com/apecloud/kubeblocks/pull/7256).
- [#7266 Fixed the issue that there were duplicate volumeMounts in the config-manager container](https://github.com/apecloud/kubeblocks/pull/7267).

## New Contributors

👏 Let's welcome

💙 @d976045024, duiniwukenaihe, starnop 💙!

Nice to have you here in the KubeBlocks family. All of them merged a PR to KubeBlocks last month.

<div style="width:100px;overflow-x:auto">
![d976045024](./../static/img/2024-05-certificate-d976045024.png)
![duiniwukenaihe](./../static/img/2024-05-certificate-duiniwukenaihe.png)
![starnop](./../static/img/2024-05-certificate-starnop.png)
</div>

## Good First Issues

We call for more developers to participate in the collaborative development of KubeBlocks. Starting with [good first issues](https://github.com/apecloud/kubeblocks/contribute), we hope to build the next-generation database management platform with each and every one of you！Claim now 👇

- [#7229 [Improvement] Specify backup/restore PORT by name](https://github.com/apecloud/kubeblocks/issues/7229)
- [#7031 [Improvement] doc API `opsrequest.spec.restoreSpec.restoreTimeStr`](https://github.com/apecloud/kubeblocks/issues/7031)

![2024-04-good-first-issues](./../static/images/2024-04-good-first-issues.jpg)

Related links:
- [Good first issue](https://github.com/apecloud/kubeblocks/contribute)
- [Contributing to KubeBlocks](https://github.com/apecloud/kubeblocks/blob/main/docs/CONTRIBUTING.md)
- [Developing KubeBlocks](https://github.com/apecloud/kubeblocks/blob/main/docs/00%20-%20index.md)

Feel free to join the GitHub Discussion or the [KubeBlocks Slack group](https://join.slack.com/t/kubeblocks/shared_invite/zt-29tx52d8n-vli24S6gtD5ODJlNUqLqbQ)!

![2024-05-overview](./../static/images/2024-05-overview.jpg)