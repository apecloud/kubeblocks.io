---
slug: in-place-update-in-k8s
title: How to Realize Pod In-Place Update in K8s?
description: This blog introduces how KubeBlocks implement in-place update in Kubernetes.
date: 2024-11-19
authors:
  name: free6om
  url: https://github.com/free6om
  image_url: https://avatars.githubusercontent.com/u/28781141?v=4
tags: [statefulset, kubernetes, instance, instanceset, in-place update, high availability]
image: /img/blog-in-place-update.png
---

# How to Realize Pod In-Place Update in K8s?

## Why is in-place update needed?

In earlier versions, as described in "[Taking Specified Instance Offline](https://kubeblocks.io/blog/take-specified-instances-offline)," KubeBlocks used StatefulSet as the final workload type, inheriting its limitations.

One key drawback of StatefulSet is its update mechanism: changes to the PodTemplate trigger updates to all Pods, using the Recreate strategy. This process deletes and recreates Pods, which is far from ideal for systems like databases that require high availability.

To address this issue, starting from v0.9, KubeBlocks replaced StatefulSet with InstanceSet and introduced the in-place update feature. This feature allows InstanceSet to update instances by in-place Pod update or expand PVC volumes when certain fields in instance templates updates, significantly reducing the impact on system availability.

## Which fields support in-place updates?

KubeBlocks leverages Kubernetes' native Pod API for in-place updates. The supported fields include:

- `annotations`
- `labels`
- `spec.activeDeadlineSeconds`
- `spec.initContainers[*].image`
- `spec.containers[*].image`
- `spec.tolerations` (only supports adding new Toleration)

Starting from Kubernetes v1.27, the InPlacePodVerticalScaling feature enables in-place updates for CPU and memory resources. KubeBlocks also integrates this feature to further support the following capabilities:

For Kubernetes v1.27 or later, with InPlacePodVerticalScaling enabled, supported fields are as follow:

- `spec.containers[*].resources.requests["cpu"]`
- `spec.containers[*].resources.requests["memory"]`
- `spec.containers[*].resources.limits["cpu"]`
- `spec.containers[*].resources.limits["memory"]`
  
Note that after resizing resources, some applications may require a restart to detect the updated resource configurations. You can manage this behavior using the container  `restartPolicy` in ClusterDefinition or ComponentDefinition.

For PVCs, KubeBlocks utilizes the PVC API to support volume expansion. If volume expansion fails, the PVC can be reverted to its original size. In contrast, StatefulSet does not allow modifications to the `VolumeClaimTemplate` after declaration. Although Kubernetes plans to address this limitation, it is expected to be resolved only after v1.32.

## Which API fields trigger in-place updates?

The KubeBlocks APIs—`Cluster`, `ClusterDefinition`, `ClusterVersion`, `ComponentDefinition`, and `ComponentVersion`—contain fields that may directly or indirectly trigger in-place updates. These fields are used to render instance objects and determine update behavior.

There are plenty of such fields and the table below provides a concise overview. Note that deprecated and immutable fields are excluded.

| API |   Fields    |   Description  |
|:-----|:-------|:-----------|
|Cluster| `annotations`, <p>`labels`, </p><p>`spec.tolerations`, </p><p>`spec.componentSpecs[*].serviceVersion`, </p><p>`spec.componentSpecs[*].tolerations`, </p><p>`spec.componentSpecs[*].resources`, </p><p>`spec.componentSpecs[*].volumeClaimTemplates`, </p><p>`spec.componentSpecs[*].instances[*].annotations`, </p><p>`spec.componentSpecs[*].instances[*].labels`, </p><p>`spec.componentSpecs[*].instances[*].image`, </p><p>`spec.componentSpecs[*].instances[*].tolerations`, </p><p>`spec.componentSpecs[*].instances[*].resources`, </p><p>`spec.componentSpecs[*].instances[*].volumeClaimTemplates`, </p><p>`spec.shardingSpecs[*].template.serviceVersion`, </p><p>`spec.shardingSpecs[*].template.tolerations`, </p><p>`spec.shardingSpecs[*].template.resources`, </p><p>`spec.shardingSpecs[*].template.volumeClaimTemplates`</p> | Resources related fields means: <p>`requests["cpu"]`,</p><p>`requests["memory"]`,</p><p>`limits["cpu"]`,</p>`limits["memory"]` |
|   ComponentVersion  | `spec.releases[*].images`   | Whether in-place update is triggered depends on whether the corresponding image is changed.            |
| KubeBlocks Built-in |  `annotations`, `labels` |    |

## The IgnorePodVerticalScaling feature switch

Demand for in-place resource updates has been consistently high. In Kubernetes earlier than v1.27, many Kubernetes distributions offer in-place updates for Resources through custom implementations. These methods vary across distributions.

To ensure compatibility, KubeBlocks introduces the IgnorePodVerticalScaling switch. When enabled, KubeBlocks ignores CPU and memory updates in Resources during instance updates, ensuring the running Pod’s Resources configuration remains unchanged. This helps maintain consistency across different Kubernetes distributions.