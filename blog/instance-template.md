---
slug: configure-instance-template
title: How to configure an instace template in KubeBlocks?
description: This blog introduces how to configure an instance template in KubeBlocks.
date: 2024-12-3
authors:
  name: free6om
  url: https://github.com/free6om
  image_url: https://avatars.githubusercontent.com/u/28781141?v=4
tags: [instance, instance template, kubernetes, instanceset]
image: /img/
---

# How to configure an instace template in KubeBlocks?

## Why do we introduce the instance template

In KubeBlocks, a *Cluster* is composed of several Components, each of which manages multiple Pods and auxiliary objects.

Before v0.9, these Pods were rendered from a shared PodTemplate, as defined in either ClusterDefinition or ComponentDefinition. However, this design can’t fully address several key use cases:

1. Clusters rendered from the same Addon, needed the ability to configure separate scheduling settings, such as *NodeName*, *NodeSelector*, or *Tolerations*.
2. Components rendered from the same Addon required the flexibility to apply custom *Annotations*, *Labels*, or *ENV variables* to the Pods they manage.
3. Pods managed by the same Component required the ability to define different *CPU*, *Memory*, and other *Resource Requests* and *Limits*.

As these requirements became more common, the Instance Template feature was introduced into the Cluster API in KubeBlocks v0.9 to meet these needs and provide more granular control over Pod configuration.

## What is an instance template

An *instance* serves as the fundamental unit in KubeBlocks, comprising a Pod along with several auxiliary objects. To simplify, you can initially think of it as a Pod, and henceforth, we'll consistently refer to it as an "Instance."

Starting from v0.9, KubeBlocks introduces the ability to define multiple instance templates for a given Component within a Cluster. These instance templates include several fields such as Name, Replicas, Annotations, Labels, Env, Tolerations, NodeSelector, etc. These fields will ultimately override the corresponding ones in the default template (i.e. PodTemplate defined in ClusterDefinition and ComponentDefinition) to generate the final template for rendering the instance.

## How to  apply an instance template

Instance templates can be applied to many scenarios. In this section, we take a RisingWave cluster as an example.

KubeBlocks now supports managing RisingWave clusters. The RisingWave Addon is a contribution from the RisingWave team. For optimal performance, RisingWave requires an external storage solution, such as AWS S3 or Alibaba Cloud OSS, to function as its state backend. When setting up a RisingWave cluster, it is necessary to configure credentials and other storage-related details. These configurations can vary between clusters and ensuring they are set correctly is crucial for the smooth operation of the cluster.

In the official image of RisingWave, this information can be injected via environment variables. With KubeBlocks v0.9, we enable the configuration of these environment variables directly within the instance template. This allows you to specify the necessary credentials and storage details each time a cluster is created, injecting the required information into the RisingWave container seamlessly.

In the default template of RisingWave Addon, [the environment variables](https://github.com/apecloud/kubeblocks-addons/blob/main/addons/risingwave/templates/cmpd-compute.yaml#L26) are configured as follows:

```yaml
apiVersion: apps.kubeblocks.io/v1alpha1
kind: ClusterDefinition
metadata:
  name: risingwave
...
spec:
  componentDefs:
name: compute
...
    podSpec:
      containers:
      - name: compute
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
          privileged: false
        command:
        - /risingwave/bin/risingwave
        - compute-node
        env:
        - name: RUST_BACKTRACE
          value: "1"
        - name: RW_CONFIG_PATH
          value: /risingwave/config/risingwave.toml
        - name: RW_LISTEN_ADDR
          value: 0.0.0.0:5688
        - name: RW_ADVERTISE_ADDR
          value: $(KB_POD_FQDN):5688
        - name: RW_META_ADDR
          value: load-balance+http://$(metaSvc)-headless:5690
        - name: RW_METRICS_LEVEL
          value: "1"
        - name: RW_CONNECTOR_RPC_ENDPOINT
          value: $(connectorSvc):50051
        - name: RW_PROMETHEUS_LISTENER_ADDR
          value: 0.0.0.0:1222
...
```

After adding an instance template to [the cluster resources](https://github.com/apecloud/kubeblocks-addons/blob/main/addons-cluster/risingwave/templates/cluster.yaml), the environment variables are configured as below:

```yaml
apiVersion: apps.kubeblocks.io/v1alpha1
kind: Cluster
metadata:
  name: {{ include "risingwave-cluster.name" . }}
  namespace: {{ .Release.Namespace }}
...
spec:
  componentSpecs:
componentDefRef: compute
    name: compute
    replicas: {{ .Values.risingwave.compute.replicas }}
    instances:
    - name: instance
      replicas: {{ .Values.risingwave.compute.replicas }}
      env:
      - name: RW_STATE_STORE
        value: "hummock+s3://{{ .Values.risingwave.stateStore.s3.bucket }}"
      - name: AWS_REGION
        value: "{{ .Values.risingwave.stateStore.s3.region }}"
      {{- if eq .Values.risingwave.stateStore.s3.authentication.serviceAccountName "" }}
      - name: AWS_ACCESS_KEY_ID
        value: "{{ .Values.risingwave.stateStore.s3.authentication.accessKey }}"
      - name: AWS_SECRET_ACCESS_KEY
        value: "{{ .Values.risingwave.stateStore.s3.authentication.secretAccessKey }}"
      {{- end }}
      - name: RW_DATA_DIRECTORY
        value: "{{ .Values.risingwave.stateStore.dataDirectory }}"
      {{- if .Values.risingwave.stateStore.s3.endpoint }}
      - name: RW_S3_ENDPOINT
        value: "{{ .Values.risingwave.stateStore.s3.endpoint }}"
      {{- end }}
      {{- if .Values.risingwave.metaStore.etcd.authentication.enabled }}
      - name: RW_ETCD_USERNAME
        value: "{{ .Values.risingwave.metaStore.etcd.authentication.username }}"
      - name: RW_ETCD_PASSWORD
        value: "{{ .Values.risingwave.metaStore.etcd.authentication.password }}"
      {{- end }}
      - name: RW_ETCD_ENDPOINTS
        value: "{{ .Values.risingwave.metaStore.etcd.endpoints }}"
      - name: RW_ETCD_AUTH
        value: "{{ .Values.risingwave.metaStore.etcd.authentication.enabled}}"
...
```

In the example above, we added an instance template named `instance` through the `instances` field. This template defines several environment variables, including `RW_STATE_STORE` and `AWS_REGION`. These environment variables will be appended by KubeBlocks to the list of environment variables defined in the default template. Consequently, the rendered instance will contain both the environment variables from the default template and those specified in this instance template.

Additionally, the `replicas` field in the instance template is identical to the one defined in the `componentSpec` (both are `{{ .Values.risingwave.compute.replicas }}`), indicating that after overriding the default template, this instance template will be used to render all instances within this component.

## Detailed information on instance template

Each Component can define multiple instance templates and each template should have a unique name configured by the Name field. Instance template names within the same Component must remain unique.

The `Replicas` field in each template determines the number of instances rendered from that template, with a default value of 1. The total number of `Replicas` across all instance templates within a Component must not exceed the `Replicas` value defined for the Component. If the instances rendered from instance templates fall short of the total required by the Component, the remaining instances will be rendered using the default template.

The pattern for the names of instances rendered based on instance templates is `(clustername)-(component name)-$(instance template name)-ordinal`. For example, in the above RisingWave cluster, the Cluster name is `risingwave`, the Component name is `compute`, the instance template name is `instance`, and the number of `Replicas` is 3. Therefore, the rendered instance names are `risingwave-compute-instance-0`, `risingwave-compute-instance-1`, and `risingwave-compute-instance-2`.

Instance templates can be used during cluster creation and can be updated during the operations period, including adding, deleting, or updating instance templates. Updating instance templates may update, delete, or reconstruct instances. You are recommended to carefully evaluate whether the final changes meet expectations before performing updates.

### Annotations

The `Annotations` field in the instance template is used to override the `Annotations` field in the default template. If a Key in the `Annotations` of the instance template already exists in the default template, the `value` from the instance template will take precedence. If the Key does not exist in the default template, the Key-Value pair will be added to the final `Annotations`.

The `Annotations` in the default template are:

```yaml
annotations:
  "foo0": "bar0"
  "foo1": "bar"
```

And the `Annotations` in the instance templates are:

```yaml
annotations:
  "foo1": "bar1"
  "foo2": "bar2"
```

Then, after rendering, the actual `Annotations` are:

```yaml
annotations:
  "foo0": "bar0"
  "foo1": "bar1"
  "foo2": "bar2"
```

Note that KubeBlocks adds system `Annotations`, and these system annotations cannot be overwritten by instance templates.

### Labels

Before KubeBlocks v0.9, labels could be defined in the default template, at the cluster level, and at the component level. Additionally, KubeBlocks automatically adds some system-default labels. Together, these labels form the final set of `Labels` for a resource.

From KubeBlocks v0.9, you can set `Labels` via the instance template.

Similar to `Annotations`, `Labels` in instance templates follow the same overriding logic applied to existing labels.

`Labels` in instance templates follow the same overriding logic as Annotations.

Instance template `Labels` have the highest priority. However, they cannot override system `Labels` added by KubeBlocks.

### Image

The `Image` field in the instance template is used to override the Image field of the first container in the default template.

The `Image` field should be used with caution: for the StatefulSet application like databases, changing the `Image` often involves compatibility issues, particularly with data formats. When changing this field, please ensure that the image version in the instance template is fully compatible with that in the default template.

From KubeBlocks v0.9 onward, detailed design for image versions is provided through `ComponentVersion`. It is recommended to manage versions using `ComponentVersion`.

### SchedulingPolicy.SchedulerName

The `SchedulerName` field in the instance template overrides the same field in the default template.

### SchedulingPolicy.NodeName

The `NodeName` field in the instance template overrides the same field in the default template.

### SchedulingPolicy.NodeSelector

The `NodeSelector` field in the instance template overrides the same field in the default template.

### SchedulingPolicy.Tolerations

The `Tolerations` field in the instance template overrides the same field in the default template.

If the `Toleration` field in the instance template is identical to a `Toleration` field in the default template (all attributes—`Key`, `Operator`, `Value`, `Effect`, and `TolerationSeconds`—are identical), then that `Toleration` will be ignored. Otherwise, it will be added to the list of `Tolerations` in the default template.

### SchedulingPolicy.Affinity

The `Affinity` field in the instance template overrides the same field in the default template.

### SchedulingPolicy.TopologySpreadConstraints

The `TopologySpreadConstraints` field in the instance template overrides the same field in the default template.

### Resources

Before v0.9, KubeBlocks supported defining `Resources` values at multiple levels: the default template, Cluster, and Component levels. The final resource values were determined through a cascading override mechanism, where Component-level settings had the highest priority. Starting from v0.9, `Resource` values can also be overridden at the instance template level. These settings take precedence over Component-level configurations.

### Env

Before v0.9, environment variables (Env) in KubeBlocks could be set at the default template and Component levels, either directly or indirectly. Additionally, KubeBlocks provided certain system default Env variables through ConfigMaps using the `EnvVarSource` mechanism. These variables were combined to form the final Env list.

Starting with v0.9, instance templates introduced a new way to define Env variables. The values defined in instance templates will override other Env variables, except for KubeBlocks’ system default Env variables. The override logic follows the same principles as for `Annotations` and `Labels`: if an Env `Name` matches, the `Value` or `ValueFrom` from the instance template takes precedence; if there’s no match, the new Env is added to the list.

### Volumes

The `Volumes` field in the instance template overrides the same field in the first Container in the default template. The overriding logic follows the same principles as for `Env` variables: if the Volume `Name` matches, the `VolumeSource` from the instance template is applied; if not, the volume will be added as a new entry in the final volume list.

### VolumeMounts

The `VolumeMounts` field in the instance template overrides the same field in the first Container in the default template. The overriding logic is similar to that of Volumes: if the VolumeMount `Name` matches, the `MountPath` and other related values from the instance template are applied. If the name does not match, the VolumeMount is added as a new entry.

### VolumeClaimTemplates

The `VolumeClaimTemplates` field in the instance template overrides the same field generated by ClusterComponentVolumeClaimTemplates in the Component. The overriding logic is similar to that of Volumes: if the PersistentVolumeClaim `Name` is the same, the `PersistentVolumeClaimSpec` values from the instance template will be applied; otherwise, it will be added as a new PersistentVolumeClaim.

## References

[1] RisingWave: https://github.com/risingwavelabs/risingwave
[2] Env variable configuration: https://github.com/apecloud/kubeblocks-addons/blob/main/addons/risingwave/templates/cmpd-compute.yaml#L26
[3] Cluster resources: https://github.com/apecloud/kubeblocks-addons/blob/main/addons-cluster/risingwave/templates/cluster.yaml
