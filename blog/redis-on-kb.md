---
slug: manage-redis-on-k8s
title: Streamlining Redis Cluster for Kubernetes with KubeBlocks and Solving Network Compatibility Problems
description: How we solve problems when managing redis on K8s with KubeBlocks.
date: 2024-05-28
authors:
  name: dullboy
  url: https://github.com/nayutah
  image_url: https://avatars.githubusercontent.com/u/111858489?v=4
tags: [containerization, database performance, network compatibility, redis]
image: /img/blog-redis-on-kb.png
---

# Streamlining Redis Cluster for Kubernetes with KubeBlocks and Solving Network Compatibility Problems

Redis Cluster is the distributed solution for the Redis database, used to distribute data across multiple nodes to provide high availability and scalability. It allows storing a large amount of data sharded across multiple nodes and automatically handles data sharding and migration.
Redis Cluster uses the hash slots to manage data distribution. Data is divided into a fixed number of hash slots, and each slot can be assigned to a different node. Each node is responsible for handling a portion of the data within the assigned hash slots. Clients can directly connect to any node without the need for an intermediate proxy.
In application deployment, the overall architecture is generally composed of the backend Redis Cluster and the application-side smart client.
Redis Cluster provides the following features:

1. Automatic sharding and data migration: When nodes join or leave the cluster, Redis Cluster automatically migrates data to the correct nodes to maintain a balanced data distribution.
2. High availability: Redis Cluster uses a master-slave replication mechanism, where each master node has multiple slave nodes. When a master node fails, a slave node can automatically take over, providing high availability.
3. Load balancing: Redis Cluster implements automatic load balancing between clients and nodes. Clients can directly connect to any node, and the nodes will automatically forward requests, achieving load balancing.
By distributing data across multiple nodes and providing automatic failover and load balancing mechanisms, Redis Cluster enables applications to handle large-scale data sets and high-concurrency access requirements. It is a powerful distributed solution commonly used in scenarios that require high performance and scalability, such as caching, session storage, and real-time counting.
Many of Kubeblocks' clients have a strong demand for Redis Cluster, so we have adapted Redis Cluster based on Kubeblocks. During the adaptation process, we also discovered some network standard compatibility issues that Redis Cluster faces in the Kubernetes container scenario.

## Reproducing the Issue

1. Install KubeBlocks 0.9.0.

```
slc@slcmac kbcli % ./bin/kbcli kubeblocks list-versions --devel
VERSION         RELEASE-NOTES
0.9.0-beta.8    https://github.com/apecloud/kubeblocks/releases/tag/v0.9.0-beta.8
0.9.0-beta.7    https://github.com/apecloud/kubeblocks/releases/tag/v0.9.0-beta.7
slc@slcmac kbcli % kbcli kubeblocks install --version="0.9.0-beta.8"
```

2. Install redis-cluster addon.

Although Redis cluster addon is installed by default, the network standard compatibility caused some issue, we need to install it manually.

```
# Disable addon
slc@slcmac addons % kbcli addon disable redis
# Install the latest addon on the branch
slc@slcmac addons % git clone git@github.com:apecloud/kubeblocks-addons.git
slc@slcmac addons % cd kubeblocks-addons/addons/redis 
slc@slcmac addons % helm dependency build && cd ..
slc@slcmac addons % helm install redis ./redis
slc@slcmac addons % helm list
NAME          NAMESPACE        REVISION        UPDATED                                     STATUS          CHART                      APP VERSION
redis         default          1               2024-04-15 21:29:37.953119 +0800 CST        deployed        redis-0.9.0                7.0.6
```
To reproduce the issue, we modify the configuration of the addon before executing `helm install redis` command.
[img](/static/img/redis-helm.png)
3. Create Redis cluster.

The cluster created using NodePort mode with 3 primary nodes and 3 secondary nodes.

```
slc@slcmac addons % helm install redisc ./redis-cluster --set mode=cluster --set nodePortEnabled=true --set redisCluster.shardCount=3
slc@slcmac addons % kg pods | grep -v job
NAME                                           READY   STATUS    RESTARTS   AGE
redisc-shard-hxx-1                             3/3     Running   0          14m
redisc-shard-hxx-0                             3/3     Running   0          14m
redisc-shard-xwz-0                             3/3     Running   0          14m
redisc-shard-xwz-1                             3/3     Running   0          14m
redisc-shard-5g8-0                             3/3     Running   0          14m
redisc-shard-5g8-1                             3/3     Running   0          14m
```
We can see clearly that 3 primary-secondary pods are created, but the relationship between nodes is not built.
Announce ip/port/bus-port

```
redisc-shard-5g8-0
kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set re 30039
kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 32461
redisc-shard-hxx-0
kubectl exec -it redisc-shard-hxx-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
kubectl exec -it redisc-shard-hxx-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-port 30182
kubectl exec -it redisc-shard-hxx-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 31879
redisc-shard-xwz-0
kubectl exec -it redisc-shard-xwz-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
kubectl exec -it redisc-shard-xwz-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-port 31993
kubectl exec -it redisc-shard-xwz-0 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 30105
```

Create Slot

```
kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS cluster ADDSLOTSRANGE 0 5461
kubectl exec -it redisc-shard-hxx-0 -c redis-cluster -- redis-cli -a O3605v7HsS cluster ADDSLOTSRANGE 5462 10922
kubectl exec -it redisc-shard-xwz-0 -c redis-cluster -- redis-cli -a O3605v7HsS cluster ADDSLOTSRANGE 10923 16383
```
Cluster Meet

```
# login to one of the primary nodes 
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- /bin/bash
root@redisc-shard-5g8-0:/# redis-cli -a O3605v7HsS
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 myself,master - 0 0 0 connected 0-5461
# Only one node found, we have to meet other two nodes. 
slc@slcmac redis %  kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS cluster meet 172.18.0.2 30182 31879
OK
slc@slcmac redis %  kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- redis-cli -a O3605v7HsS cluster meet 172.18.0.2 31993 30105
OK
# Check the topology again.
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-0 -c redis-cluster -- /bin/bash
root@redisc-shard-5g8-0:/# redis-cli -a O3605v7HsS
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 myself,master - 0 1713324462000 0 connected 0-5461
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713324462989 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713324463091 1 connected 5462-10922
```
At this moment, a 3-node cluster is created.

4. join headless slave

We use the pod `redisc-shard-5g8-1` as the standby of primary pod `redisc-shard-5g8-0`.
Check the link on primary pod, it is not connected to any other primary pod.

```
# Check link
root@redisc-shard-5g8-1:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:46948         ESTABLISHED 1/redis-server *:63  keepalive (123.22/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
Headless address of the secondary pod: redisc-shard-5g8-1.redisc-shard-5g8-headless:6379
The complete `join` command is:

```
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-1 -c redis-cluster -- /bin/bash
root@redisc-shard-5g8-1:/# redis-cli -a O3605v7HsS --cluster add-node redisc-shard-5g8-1.redisc-shard-5g8-headless:6379 172.18.0.2:30039 --cluster-slave --cluster-master-id ff935854b7626a7e4374598857d5fbe998297799
>>> Adding node redisc-shard-5g8-1.redisc-shard-5g8-headless:6379 to cluster 172.18.0.2:30039
>>> Performing Cluster Check (using node 172.18.0.2:30039)
M: ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039
   slots:[0-5461] (5462 slots) master
M: e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993
   slots:[10923-16383] (5461 slots) master
M: a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182
   slots:[5462-10922] (5461 slots) master
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
>>> Send CLUSTER MEET to node redisc-shard-5g8-1.redisc-shard-5g8-headless:6379 to make it join the cluster.
Waiting for the cluster to join

>>> Configure node as replica of 172.18.0.2:30039.
[OK] New node added correctly.
```
172.18.0.2:30039  is the announced ip/port of the primary pod.

Check connection:
```
root@redisc-shard-5g8-1:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.237:48424       172.18.0.2:31879        ESTABLISHED 1/redis-server *:63  off (0.00/0/0) // master-2 announced bus port
tcp        0      0 10.42.0.237:36154       172.18.0.2:32461        ESTABLISHED 1/redis-server *:63  off (0.00/0/0) // master-1 announced bus port
tcp        0      0 10.42.0.237:33504       172.18.0.2:30039        ESTABLISHED 1/redis-server *:63  keepalive (285.22/0/0) // master-1 announced port
tcp        0      0 127.0.0.1:6379          127.0.0.1:46948         ESTABLISHED 1/redis-server *:63  keepalive (279.99/0/0) // local redis-cli
tcp        0      0 10.42.0.237:58576       172.18.0.2:30105        ESTABLISHED 1/redis-server *:63  off (0.00/0/0) // master-3 announced bus port
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
The secondary pod and other 3 primary pods are connected on announced bus port, and also the secondary pod is connected to its primary pod.
Check the cluster topology on the secondary pod.

```
root@redisc-shard-5g8-1:/# redis-cli -a O3605v7HsS
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 master - 0 1713327060494 0 connected 0-5461
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 :6379@16379 myself,slave ff935854b7626a7e4374598857d5fbe998297799 0 0 0 connected
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713327060696 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713327060605 1 connected 5462-10922
```
Check the cluster topology on the primary pod, and the newly added secondary pod is missing.

```
root@redisc-shard-5g8-0:/# redis-cli -a O3605v7HsS
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 myself,master - 0 1713327106000 0 connected 0-5461
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713327107004 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713327107106 1 connected 5462-10922
```

During the previous `add-node` process, the` cluster meet` operation reported success, but the primary node did not actually see the new replica node. After reviewing the ·/data/running.log·, the following error information was found:

```
root@redisc-shard-5g8-0:/data# grep 16379 running.log
1:M 17 Apr 2024 04:05:37.610 - Connection with Node 30e6d55c687bfc08e4a2fcd2ef586ba5458d801f at 10.42.0.1:16379 failed: Connection refused
**10 times repeated**
30e6d55c687bfc08e4a2fcd2ef586ba5458d801f at 10.42.0.1:16379 failed: Connection refused
```
Therefore, actually this `cluster meet` operation is failed. But why? 

## Troubleshooting

1. The mysterious IP address.
The default Redis Cluster bus port is 16379 = 6379 + 10000. If the bus port is not explicitly announced, Redis Cluster will use this default address. So the issue seems to be that when the primary pod received the meet request, it tried to reconnect to the other pod's default bus port (16379), but was unable to connect. However, the replica pod's IP (10.42.0.237) is not the same as the IP (10.42.0.1) mentioned in the error message. Why would the primary pod try to reconnect to an inconsistent IP?

```
slc@slcmac redis %  kg pods -A -o wide | grep redisc-shard-5g8-1
default       redisc-shard-5g8-1                             3/3     Running     0              72m    10.42.0.237   k3d-k3s-default-server-0
```
Continuing the investigation, it was found that 10.42.0.1 is actually the address of the k3d (the Kubernetes version we use in the development environment) CNI0. 
```
slc@slcmac redis % docker ps
CONTAINER ID   IMAGE                            COMMAND                  CREATED        STATUS        PORTS                             NAMES
8f8958df3298   moby/buildkit:buildx-stable-1    "buildkitd --allow-i…"   6 weeks ago    Up 6 weeks                                      buildx_buildkit_project-v3-builder0
f8f349b2faab   ghcr.io/k3d-io/k3d-proxy:5.4.6   "/bin/sh -c nginx-pr…"   6 months ago   Up 3 months   80/tcp, 0.0.0.0:57830->6443/tcp   k3d-k3s-default-serverlb
3e291f02144a   rancher/k3s:v1.24.4-k3s1         "/bin/k3d-entrypoint…"   6 months ago   Up 3 months                                     k3d-k3s-default-server-0
slc@slcmac redis % docker exec -it 3e291f02144a /bin/sh
/ # ifconfig
cni0      Link encap:Ethernet  HWaddr 32:22:34:47:9D:BF
          inet addr:10.42.0.1  Bcast:10.42.0.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1450  Metric:1
          RX packets:219424018 errors:0 dropped:0 overruns:0 frame:0
          TX packets:238722923 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:33805804056 (31.4 GiB)  TX bytes:199941577234 (186.2 GiB)

eth0      Link encap:Ethernet  HWaddr 02:42:AC:12:00:02
          inet addr:172.18.0.2  Bcast:172.18.255.255  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:74602028 errors:0 dropped:0 overruns:0 frame:0
          TX packets:68167266 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:39814942542 (37.0 GiB)  TX bytes:17167663962 (15.9 GiB)
slc@slcmac redis % kg node -o wide
NAME                       STATUS   ROLES                  AGE    VERSION        INTERNAL-IP   EXTERNAL-IP   OS-IMAGE   KERNEL-VERSION      CONTAINER-RUNTIME
k3d-k3s-default-server-0   Ready    control-plane,master   183d   v1.24.4+k3s1   172.18.0.2    <none>        K3s dev    5.10.104-linuxkit   containerd://1.6.6-k3s1
```

In other words, 10.42.* is the default pod CIDR network segment for k3d, and 172.18.0.2 is the physical address of the only k3d node (which is why the node port addresses seen are all 172.18.0.2).

2. A not-so-obvious link.

It turns out that the link corresponding to the gossip protocol (local 16379 -> remote NodePort) has undergone NAT translation on the target end. By capturing packets with tcpdump, we were able to locate a gossip session link. Although this session link has been NAT-translated by the CNI, we can still fully restore it using the TS Val and ECR information. The following is the restored gossip link between the established primary-1 and primary-2.

Link information of primary- 1 redisc-shard-5g8-0:

```
root@redisc-shard-5g8-0:/data# netstat -anop | grep redis
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:46798         ESTABLISHED 1/redis-server *:63  keepalive (117.47/0/0)
tcp        0      0 10.42.0.236:58412       172.18.0.2:31879        ESTABLISHED 1/redis-server *:63  off (0.00/0/0) // Other part is primary-2 nodeport
tcp        0      0 10.42.0.236:6379        10.42.0.1:45255         ESTABLISHED 1/redis-server *:63  keepalive (118.11/0/0)
tcp        0      0 10.42.0.236:36528       172.18.0.2:30105        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:16471         ESTABLISHED 1/redis-server *:63  keepalive (1.20/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:30788         ESTABLISHED 1/redis-server *:63  keepalive (0.08/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:20521         ESTABLISHED 1/redis-server *:63  keepalive (1.42/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
Link information of primary-2 redisc-shard-hxx-0:

```
root@redisc-shard-hxx-0:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.232:16379       10.42.0.1:24780         ESTABLISHED 1/redis-server *:63  keepalive (0.72/0/0) // master-1 被 NAT 之后的地址
tcp        0      0 10.42.0.232:41974       172.18.0.2:30105        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.232:16379       10.42.0.1:6717          ESTABLISHED 1/redis-server *:63  keepalive (1.34/0/0)
tcp        0      0 10.42.0.232:16379       10.42.0.1:24130         ESTABLISHED 1/redis-server *:63  keepalive (0.33/0/0)
tcp        0      0 10.42.0.232:33306       172.18.0.2:32461        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:46626         ESTABLISHED 1/redis-server *:63  keepalive (24.56/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
Mapping relationship between two links:

```
# On primary-1 redisc-shard-5g8-0, capture packets on NodePort 31879 (primary  -2 redisc-shard-hxx-0):
05:40:04.817984 IP redisc-shard-5g8-0.redisc-shard-5g8-headless.default.svc.cluster.local.58412 > k3d-k3s-default-server-0.31879: Flags [P.], seq 6976:9336, ack 7081, win 10027, options [nop,nop,TS val 4191410578 ecr 867568717], length 2360
05:40:04.818428 IP k3d-k3s-default-server-0.31879 > redisc-shard-5g8-0.redisc-shard-5g8-headless.default.svc.cluster.local.58412: Flags [.], ack 9336, win 498, options [nop,nop,TS val 867569232 ecr 4191410578], length 0
05:40:04.819269 IP k3d-k3s-default-server-0.31879 > redisc-shard-5g8-0.redisc-shard-5g8-headless.default.svc.cluster.local.58412: Flags [P.], seq 7081:9441, ack 9336, win 501, options [nop,nop,TS val 867569233 ecr 4191410578], length 2360
05:40:04.819309 IP redisc-shard-5g8-0.redisc-shard-5g8-headless.default.svc.cluster.local.58412 > k3d-k3s-default-server-0.31879: Flags [.], ack 9441, win 10026, options [nop,nop,TS val 4191410580 ecr 867569233], length 0

# On primary-2 redisc-shard-hxx-0, capture packets on local Port 24780 (primary-1 redisc-shard-5g8-0): 
05:40:04.818178 IP 10.42.0.1.24780 > redisc-shard-hxx-0.redisc-shard-hxx-headless.default.svc.cluster.local.16379: Flags [P.], seq 32624:34984, ack 32937, win 10027, options [nop,nop,TS val 4191410578 ecr 867568717], length 2360
05:40:04.818371 IP redisc-shard-hxx-0.redisc-shard-hxx-headless.default.svc.cluster.local.16379 > 10.42.0.1.24780: Flags [.], ack 34984, win 498, options [nop,nop,TS val 867569232 ecr 4191410578], length 0
05:40:04.819239 IP redisc-shard-hxx-0.redisc-shard-hxx-headless.default.svc.cluster.local.16379 > 10.42.0.1.24780: Flags [P.], seq 32937:35297, ack 34984, win 501, options [nop,nop,TS val 867569233 ecr 4191410578], length 2360
05:40:04.819327 IP 10.42.0.1.24780 > redisc-shard-hxx-0.redisc-shard-hxx-headless.default.svc.cluster.local.16379: Flags [.], ack 35297, win 10026, options [nop,nop,TS val 4191410580 ecr 867569233], length 0
```
As we can see, all the Pod and NodePort traffic on the communication counterpart has been NAT-translated to the CNI0 address 10.42.0.1.

3. The truth has been revealed.

So the reason for the failed meet operation is now quite clear. The secondary-1 pod, without announcing its address, tried to meet primary-1 using the pod IP (10.42.0.237). The meet message was NAT-translated to 10.42.0.1 on the primary-1 pod. Primary-1 then tried to reconnect to secondart-1 using the default bus port 16379 and the source IP address (10.42.0.1) extracted from the message. When trying to connect to 10.42.0.1:16379, since this is not an actual Redis pod, there is no Redis-server process listening on port 16379, so a "connection refused" error was returned.


## Problem fixing

1. Secondary-1 announce & remeet
Now that the root cause is known, the problem becomes easier to solve.

For this kind of "meet failure" scenario, we can have secondary-1 explicitly announce its IP/port/bus-port, and then have it actively join the cluster. This way, when primary-1 tries to reconnect, it will use the announced IP to establish the connection.

```
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-port 31309
slc@slcmac redis % kubectl exec -it redisc-shard-5g8-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 31153

# Execute cluster nodes on redisc-shard-5g8-1, we can see the newly announced IP address and port No. are used.
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 master - 0 1713334354116 0 connected 0-5461
# before announcing :6379@16379
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309@31153 myself,slave ff935854b7626a7e4374598857d5fbe998297799 0 0 0 connected
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713334354325 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713334354532 1 connected 5462-10922

# meet primary-1 again
127.0.0.1:6379> cluster meet 172.18.0.2 30039 32461
OK
```
Check primary-1 to see the difference after `meet`.
```
root@redisc-shard-5g8-0:/data# redis-cli -a O3605v7HsS
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 myself,master - 0 1713334463000 0 connected 0-5461
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713334463613 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713334463613 1 connected 5462-10922
127.0.0.1:6379> cluster nodes
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 myself,master - 0 1713334506000 0 connected 0-5461
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309@31153 slave ff935854b7626a7e4374598857d5fbe998297799 0 1713334506133 0 connected
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713334506133 2 connected 10923-16383
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713334506233 1 connected 5462-10922
```
A gossip link for secondary-1 can be found on primary-1. 

```
root@redisc-shard-5g8-0:/data# netstat -anop | grep redis
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:46798         ESTABLISHED 1/redis-server *:63  keepalive (22.34/0/0)
tcp        0      0 10.42.0.236:58412       172.18.0.2:31879        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.236:6379        10.42.0.1:45255         ESTABLISHED 1/redis-server *:63  keepalive (22.15/0/0)
tcp        0      0 10.42.0.236:43732       172.18.0.2:31153        ESTABLISHED 1/redis-server *:63  off (0.00/0/0) // to slave-1 nodeport
tcp        0      0 10.42.0.236:36528       172.18.0.2:30105        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:16471         ESTABLISHED 1/redis-server *:63  keepalive (1.17/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:30788         ESTABLISHED 1/redis-server *:63  keepalive (0.97/0/0)
tcp        0      0 10.42.0.236:16379       10.42.0.1:20521         ESTABLISHED 1/redis-server *:63  keepalive (1.48/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```

We can see three new gossip links from primary-1/2/3 on secondary-1.
```
root@redisc-shard-5g8-1:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.237:48424       172.18.0.2:31879        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.237:16379       10.42.0.1:35577         ESTABLISHED 1/redis-server *:63  keepalive (1.11/0/0) // from NAT master
tcp        0      0 10.42.0.237:36154       172.18.0.2:32461        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.237:16379       10.42.0.1:32078         ESTABLISHED 1/redis-server *:63  keepalive (0.15/0/0) // from NAT master
tcp        0      0 10.42.0.237:33504       172.18.0.2:30039        ESTABLISHED 1/redis-server *:63  keepalive (0.00/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:46948         ESTABLISHED 1/redis-server *:63  keepalive (0.00/0/0)
tcp        0      0 10.42.0.237:58576       172.18.0.2:30105        ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 10.42.0.237:16379       10.42.0.1:35265         ESTABLISHED 1/redis-server *:63  keepalive (1.22/0/0) // from NAT master
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
Those three links are actually the primary pod connecting successfully through the NodePort of secondary-1, and then being NATed to the CNI0 addresses on the pod.




2. Secondary-2 announce & meet

Announce ip/port/bus-port

```
slc@slcmac redis % kubectl exec -it redisc-shard-hxx-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
slc@slcmac redis % kubectl exec -it redisc-shard-hxx-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-port 30662
slc@slcmac redis % kubectl exec -it redisc-shard-hxx-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 30960
slc@slcmac redis % kubectl exec -it redisc-shard-hxx-1 -c redis-cluster -- /bin/bash
```
Add-node secondary-2 (This process includes `meet` operation)

```
redis-cli -a O3605v7HsS --cluster add-node 172.18.0.2:30662 172.18.0.2:30182 --cluster-slave --cluster-master-id a54e8fa9474c620154f4c1abc9628116deb3dc7e
```
Check cluster topology on secondary-2.

```
127.0.0.1:6379> cluster nodes
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309@31153 slave ff935854b7626a7e4374598857d5fbe998297799 0 1713335442641 0 connected
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 master - 0 1713335442328 1 connected 5462-10922
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713335442328 2 connected 10923-16383
4d497f9b4ff459b8c65f50afa6621e122e1d8470 172.18.0.2:30662@30960 myself,slave a54e8fa9474c620154f4c1abc9628116deb3dc7e 0 1713335442000 1 connected
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 master - 0 1713335442641 0 connected 0-5461
```
Check cluster topology on primary-2.

```
127.0.0.1:6379> cluster nodes
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713335448690 2 connected 10923-16383
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 master - 0 1713335448892 0 connected 0-5461
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 myself,master - 0 1713335448000 1 connected 5462-10922
4d497f9b4ff459b8c65f50afa6621e122e1d8470 172.18.0.2:30662@30960 slave a54e8fa9474c620154f4c1abc9628116deb3dc7e 0 1713335448998 1 connected
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309@31153 slave ff935854b7626a7e4374598857d5fbe998297799 0 1713335448794 0 connected
```

3.Secondary-3 announce & meet

Announce ip/port/bus-port and then add node.

```
slc@slcmac redis % kubectl exec -it redisc-shard-xwz-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 172.18.0.2
slc@slcmac redis % kubectl exec -it redisc-shard-xwz-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-port 30110
slc@slcmac redis % kubectl exec -it redisc-shard-xwz-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-bus-port 30971
slc@slcmac redis % kubectl exec -it redisc-shard-xwz-1 -c redis-cluster -- /bin/bash
root@redisc-shard-xwz-1:/# redis-cli -a O3605v7HsS --cluster add-node 172.18.0.2:30110 172.18.0.2:31993 --cluster-slave --cluster-master-id e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b
>>> Adding node 172.18.0.2:30110 to cluster 172.18.0.2:31993
>>> Performing Cluster Check (using node 172.18.0.2:31993)
M: e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993
   slots:[10923-16383] (5461 slots) master
M: ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039
   slots:[0-5461] (5462 slots) master
   1 additional replica(s)
S: 3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309
   slots: (0 slots) slave
   replicates ff935854b7626a7e4374598857d5fbe998297799
M: a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182
   slots:[5462-10922] (5461 slots) master
   1 additional replica(s)
S: 4d497f9b4ff459b8c65f50afa6621e122e1d8470 172.18.0.2:30662
   slots: (0 slots) slave
   replicates a54e8fa9474c620154f4c1abc9628116deb3dc7e
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
>>> Send CLUSTER MEET to node 172.18.0.2:30110 to make it join the cluster.
Waiting for the cluster to join

>>> Configure node as replica of 172.18.0.2:31993.
[OK] New node added correctly.
```

Check cluster topology on any primary pod.

```
127.0.0.1:6379> cluster nodes
e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 172.18.0.2:31993@30105 master - 0 1713335724101 2 connected 10923-16383
ff935854b7626a7e4374598857d5fbe998297799 172.18.0.2:30039@32461 master - 0 1713335724101 0 connected 0-5461
a54e8fa9474c620154f4c1abc9628116deb3dc7e 172.18.0.2:30182@31879 myself,master - 0 1713335724000 1 connected 5462-10922
4d497f9b4ff459b8c65f50afa6621e122e1d8470 172.18.0.2:30662@30960 slave a54e8fa9474c620154f4c1abc9628116deb3dc7e 0 1713335724404 1 connected
3a136cd50eb3f2c0dcc3844a0de63d5e44b462d7 172.18.0.2:31309@31153 slave ff935854b7626a7e4374598857d5fbe998297799 0 1713335724510 0 connected
161ff6ea42047be45d986ed8ba4505afd07096d9 172.18.0.2:30110@30971 slave e4d9b914e7ee7c4fd399bdf3dd1c98f7a0a1791b 0 1713335724101 2 connected
```
With that, the cluster is now in a complete 3-primary and 3-secondary configuration.

## About CNI

1. k3s, Flannel and NodePort/Pod.

The default CNI used by k3s/k3d is Flannel, and as analyzed above, Flannel will have the issue of NAT mapping.

2. k3s, Calico and NodePort

We also tested the scenario of k3s and Calico, where Calico uses vxlan to establish the Pod network. We found that when using NodePort, there is still a NAT problem on Calico. Assuming the NodePort we use is 10.128.0.52:32135, on the inbound direction, the communication to the local port 16379 through the NodePort (10.128.0.52) will still be translated to the address of the Node's vxlan.calico network device (192.168.238.0).
This is the network connection of one of the secondary pods:

```
root@redisc-shard-ffv-1:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:41800    10.128.0.52:32135       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:45578    10.128.0.52:31952       ESTABLISHED 1/redis-server *:63  keepalive (277.76/0/0) // 到远端的 NodePort
tcp        0      0 127.0.0.1:6379          127.0.0.1:45998         ESTABLISHED 1/redis-server *:63  keepalive (185.62/0/0)
tcp        0      0 192.168.32.136:53280    10.128.0.52:32675       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    192.168.238.0:8740      ESTABLISHED 1/redis-server *:63  keepalive (8.79/0/0) // 来自远端的经过 NAT 的 NodePort
tcp        0      0 192.168.32.136:16379    192.168.238.0:9617      ESTABLISHED 1/redis-server *:63  keepalive (1.70/0/0)
tcp        0      0 192.168.32.136:34040    10.128.0.52:31454       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    192.168.238.0:18110     ESTABLISHED 1/redis-server *:63  keepalive (1.82/0/0)
tcp        0      0 192.168.32.136:39006    10.128.0.52:30390       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    192.168.238.0:32651     ESTABLISHED 1/redis-server *:63  keepalive (1.57/0/0)
tcp        0      0 192.168.32.136:54986    10.128.0.52:30459       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    192.168.238.0:43310     ESTABLISHED 1/redis-server *:63  keepalive (1.83/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```

On Node 10.128.0.52, the are two devices. 

```
ens4: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1460
        inet 10.128.0.52  netmask 255.255.255.255  broadcast 0.0.0.0
        inet6 fe80::4001:aff:fe80:34  prefixlen 64  scopeid 0x20<link>
        ether 42:01:0a:80:00:34  txqueuelen 1000  (Ethernet)
        RX packets 3228477  bytes 3975395572 (3.9 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 3025699  bytes 2382110168 (2.3 GB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
vxlan.calico: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1410
        inet 192.168.238.0  netmask 255.255.255.255  broadcast 0.0.0.0
        inet6 fe80::64b2:cdff:fe99:7f96  prefixlen 64  scopeid 0x20<link>
        ether 66:b2:cd:99:7f:96  txqueuelen 1000  (Ethernet)
        RX packets 587707  bytes 714235654 (714.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 810205  bytes 682665081 (682.6 MB)
        TX errors 0  dropped 31 overruns 0  carrier 0  collisions 0
```

If the NodePort uses the Node that the Pod is located on, it will not be NATed in Calico.

```
slc@cluster-1:~$ kubectl exec -it redisc-shard-ffv-1 -c redis-cluster -- redis-cli -a O3605v7HsS config set cluster-announce-ip 10.128.0.54 // Set the announced IP to the local Node IP where the Pod is located.
OK
slc@cluster-1:~$ kubectl exec -it redisc-shard-ffv-1 -c redis-cluster -- /bin/bash
root@redisc-shard-ffv-1:/# netstat -anop | grep redis
tcp        0      0 0.0.0.0:16379           0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    10.128.0.54:44757       ESTABLISHED 1/redis-server *:63  keepalive (6.92/0/0)
tcp        0      0 192.168.32.136:41800    10.128.0.52:32135       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    10.128.0.54:16772       ESTABLISHED 1/redis-server *:63  keepalive (0.64/0/0)
tcp        0      0 192.168.32.136:45578    10.128.0.52:31952       ESTABLISHED 1/redis-server *:63  keepalive (70.79/0/0)
tcp        0      0 127.0.0.1:6379          127.0.0.1:45998         ESTABLISHED 1/redis-server *:63  keepalive (0.00/0/0)
tcp        0      0 192.168.32.136:53280    10.128.0.52:32675       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    10.128.0.54:16440       ESTABLISHED 1/redis-server *:63  keepalive (8.62/0/0)
tcp        0      0 192.168.32.136:34040    10.128.0.52:31454       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    10.128.0.54:28655       ESTABLISHED 1/redis-server *:63  keepalive (0.14/0/0)
tcp        0      0 192.168.32.136:39006    10.128.0.52:30390       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:54986    10.128.0.52:30459       ESTABLISHED 1/redis-server *:63  off (0.00/0/0)
tcp        0      0 192.168.32.136:16379    10.128.0.54:29959       ESTABLISHED 1/redis-server *:63  keepalive (8.62/0/0)
tcp6       0      0 :::16379                :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
tcp6       0      0 :::6379                 :::*                    LISTEN      1/redis-server *:63  off (0.00/0/0)
```
So in the Calico vxlan solution, whether the NodePort performs SNAT is related to the source Node address. If it's the local Node, then no SNAT is needed. If it's a remote Node, then SNAT is required. But since we have done an explicit announce, there will also be no problem when the Redis cluster meets.

3. k3s， Calico and Pod.
If using only the pod IP, the Redis cluster will meet normally, and the cluster topology will be correct.

## Summary

1. In some Kubernetes versions, depending on the CNI implementation, the pod and nodeport may be NATed, and the NATed IP and port cannot be reconnected by other roles in the cluster, causing the meet to fail.
2. Due to the above mechanism, when creating a Redis cluster in Kubernetes, either use host network, or use NodePort and explicitly announce IP/port/bus-port. For the pure pod network and no explicit announce scenario, NAT needs to be prevented, which depends on the CNI implementation.
3. The internal communication and external communication of the Redis cluster share the same set of IP addresses. After announcing the IP, the announced IP will override the pod IP for subsequent communication, causing the internal gossip negotiation process to also go through the announced network, which is an unnecessary waste. The future recommendation is to separate the internal protocol link and the external application data link.
4. Even if the pod IP and announce IP are used separately, with the internal communication going through the pod network and the external and client data link going through the announced network, it cannot solve the problem of CNI NAT conversion. Due to the existence of the Redis cluster reconnection mechanism, the addresses after NAT cannot be directly reconnected. Here, an extension of the Redis cluster communication protocol is needed. The ideal situation is:
   - Internal communication: pod network, needs to reconnect, carry the original pod IP as the source IP, even if it is NATed, the source IP can still be obtained.
   - External communication: announced network, can be NodePort/LoadBalancer, no need to reconnect, doesn't matter if NAT or not.
   Of course, internal communication can also go through NodePort and LoadBalancer, but the prerequisite is to carry the original source IP (the announced IP is also a kind of source IP), 5. which is also the current solution of KubeBlocks.
5. Using NodePort will introduce another problem. When the Node is down, the cluster nodes' announced IP needs to be updated, which is also not an easy implementation, requiring the cooperation of the operator and HA node.