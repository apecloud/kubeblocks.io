---
slug: take-specified-instances-offline
title: How to Take Specified Instances Offline?
description: This blog introduces how KubeBlocks takes specified instances offline using InstanceSet.
date: 2024-09-19
authors:
  name: free6om
  url: https://github.com/free6om
  image_url: https://avatars.githubusercontent.com/u/28781141?v=4
tags: [statefulset, kubernetes, instance, instanceset, instance offline, horizontal scale, scale in, scale out]
image: /img/blog-specified-instances-offline.png
---

# How to Take Specified Instances Offline?

In [the previous blog](https://kubeblocks.io/blog/instanceset-introduction), we introduced InstanceSet, along with a series of features derived from it to address high availability and other database needs. In this blog, we will introduce one of these features -- taking specified instances offline.

## Why is this feature needed?

Before v0.9.0, KubeBlocks generated workloads as ***StatefulSets***, which was a double-edged sword. While KubeBlocks could leverage the advantages of ***StatefulSets*** to manage stateful applications like databases, it inherited its limitations.

One of these limitations is evident in horizontal scaling scenarios, where ***StatefulSets*** offload Pods sequentially based on the *Ordinal* order, potentially impacting the availability of databases running within.

For example, managing a PostgreSQL database with one primary and two secondary replicas using a ***StatefulSet*** named `foo-bar`. And Pod `foo-bar-2` is selected as the primary node. Now, if we decide to scale in this database cluster due to low read load, according to ***StatefulSet*** rules, we can only offload Pod `foo-bar-2`, which is currently the primary node. In this way, we can either directly offload `foo-bar-2`, triggering a failover mechanism to elect a new primary pod from `foo-bar-0` and `foo-bar-1`, or use a switchover mechanism to convert `foo-bar-2` into a secondary pod before offloading it. Either way, there will be a period where write is not applicable.

Another issue arises in the same scenario: if the node hosting `foo-bar-1` experiences a hardware failure, causing disk damage and rendering data read-write inaccessible, according to best operation practices, we need to offload `foo-bar-1` and rebuild replicas on healthy nodes. However, performing such operation tasks based on ***StatefulSets*** isn't easy.

To solve the limitations mentioned above, starting from v0.9, KubeBlocks replaces ***StatefulSets*** with ***InstanceSet*** which is a general workload API and is in charge of a set of instances. With ***InstanceSet***, KubeBlocks introduces the specified instance scaling feature to improve the availability.

## How to take specified instances offline?

In KubeBlocks v0.9, the `OfflineInstances` field is added to the Cluster API to specify the instance that needs to be offloaded.

For example, the current status of the PostgreSQL cluster is as follows:

```yaml
apiVersion: apps.kubeblocks.io/v1alpha1
kind: Cluster
metadata:
  name: foo
spec:
  componentSpecs:
name: bar
    replicas: 3
...
```

If you need to scale in the replicas of this cluster to 2 and take the instance `foo-bar-1` offline, you can update the cluster object as follows:

```yaml
apiVersion: apps.kubeblocks.io/v1alpha1
kind: Cluster
metadata:
  name: foo
spec:
  componentSpecs:
name: bar
    replicas: 2
    offlineInstances: ["foo-bar-1"]
...
```

When KubeBlocks processes the above spec, it scales in the cluster to 2 replicas and takes the instance `foo-bar-1` offline. In the end, the instances remaining in the cluster will be: `foo-bar-0` and `foo-bar-2`.

## How to use this feature in an OpsRequest?

The OpsRequest API supports horizontal scaling and from KubeBlocks v0.9, the OpsRequest API adds the `onlineInstanceToOffline` field to support taking specified instance offline. For example,

```yaml
apiVersion: apps.kubeblocks.io/v1alpha1
kind: OpsRequest
metadata:
  generateName: foo-horizontalscaling-
spec:
  clusterRef: foo
  force: false
  horizontalScaling:
componentName: bar
    scaleIn:
      onlineInstancesToOffline: ["foo-bar-1"]
  ttlSecondsAfterSucceed: 0
  type: HorizontalScaling
```

During the execution process, the OpsRequest Controller will merge `onlineInstancesToOffline` into the corresponding `offlineInstances` in the Cluster object. Ultimately, the Cluster Controller will handle the task of offloading the instance named `foo-bar-1`.

By editing the cluster YAML or creating an OpsRequest task, taking a specified instance offline like `foo-bar-1` is achieved, breaking the limitations of StatefulSet and better supporting business needs. For more examples of horizontal scaling, refer to the [KubeBlocks documentation](https://kubeblocks.io/docs/preview/api_docs/maintenance/scale/horizontal-scale).

## Notes

In the Cluster API, both `OfflineInstances` and `Replicas` need to be modified simultaneously to achieve the goal of taking specified instances offline. Below are some uncommon combinations that are currently allowed by the API. It’s recommended to fully understand them before using, to avoid unintended consequences.

| Before | Configure the Offline Instances | After |
| :----: | :-----------------------: | :---: |
| `replicas=3, offlineInstances=[]` | `replicas=2,offlineInstances=["foo-bar-3"]` | `foo-bar-0, foo-bar-1` |
| `replicas=2, offlineInstances=["foo-bar-1"]` | `replicas=2, offlineInstances=[]` | `foo-bar-0, foo-bar-1` |
| `replicas=2, offlineInstances=["foo-bar-1"]` | `replicas=3, offlineInstances=["foo-bar-1"]` | `foo-bar-0, foo-bar-2, foo-bar-3` |

## References

- [Discussions on Pod in the K8s community](https://github.com/kubernetes/kubernetes/issues/83224)
- [The horizontal scale feature of KubeBlocks](https://kubeblocks.io/docs/release-0.9/api_docs/maintenance/scale/horizontal-scale)
