---
slug: is-redis-containerization-an-easy-target
title: Is Redis Containerization an easy target?
description: Is Redis Containerization an easy target?
date: 2024-05-24
authors:
  name: Thomas
  url: https://github.com/realzyy
  image_url: https://avatars.githubusercontent.com/u/1814084?v=4
tags: [redis, containerization]
image: /img/blog-redis-containerization-discuss.png
---

# Is Redis Containerization an easy target?

In the era of Kubernetes' dominance, database containerization presents an extremely attractive yet often daunting challenge for cloud-native teams.
Open-source databases like MySQL and PostgreSQL were born in the PC server era and are often used to store critical business data. Migrating them to Kubernetes might require more investment and courage. However, for a database like Redis, which was born in the same era as container technology and is mostly used for caching purposes, would containerization be easier? **Many cloud-native teams indeed think so, but after actual practice, they find that Redis, this "easy target" is not as easy to handle as they thought.**

## Seems too easy, but...

Getting started with Redis containerization is very easy. You can pull up a Redis service in just a few seconds using the official Redis Docker image. Deploying applications and Redis in the same Kubernetes cluster significantly simplifies the onboarding process, but there are two "small" problems:

- Redis service is not highly available
  As soon as the Redis container is rescheduled, the IP of the Redis container will change, causing the connection pool configuration on the application side to fail. To adapt to the volatility of the container environment, the IP of the Redis container cannot be directly exposed to the application. Instead, a VIP (Virtual IP) or DNS domain name needs to be added to provide a fixed connection address.

- Redis service is not highly reliable
  If the host machine running the Redis container crashes, the persistent volume of the Redis container may be damaged, leading to data loss for the application. Although many developers use Redis as a volatile in-memory database, many developers rely on Redis as a persistent key-value storage. Therefore, Redis containerization inevitably involves solutions for distributed block storage or local disk synchronization to ensure data persistence.

## Unexpected surprises await

The ambitious cloud-native teams naturally cannot be satisfied with providing a toy-level Redis service, and the advanced solution for orchestrating multiple Redis containers has naturally been put on the agenda. In the advanced solution, the Redis service has multiple Redis containers (replicas) distributed across different host machines, which can withstand the failure of one or more Redis containers and provide continuous and reliable service.

The Redis kernel does not have native distributed capabilities, so external components are needed to handle the role determination and replication configuration for Redis containers. The Sentinel component, well-proven in this regard, has corresponding container orchestration solutions provided by the community. You can easily deploy a Redis PrimarySecondary cluster with a Sentinel component using the Bitnami-provided Redis Helm Chart. With the correct configuration of replicas, specification parameters, and minor adjustments to kernel parameters, the quality of the Redis service can be significantly elevated. If the application load is relatively stable, this solution works quite well. However, once it involves failure or scaling scenarios, several not-so-easy-to-solve issues arise:

- Risk of Permanent Degradation of Redis Service Capability
  Cloud-native teams often lack ready-to-use distributed block storage, while local disk resources are relatively common. When Redis containers are allocated to local disk host machines, the containers become effectively "fixed" to those hosts. In the event of hardware failure, if the host can be quickly restored, the Redis container on it can also quickly recover. Conversely, the Redis container will remain in a pending status and cannot be scheduled to other healthy hosts. Although the Redis service remains reliable and available, its capacity will be permanently degraded, and the pending container status can be a nightmare for engineers with OCD.

- Low ceiling of Redis service capabilities

  In scenarios where Redis is hosted on local disk hosts, the ceiling on Redis service capability is relatively low. Once "fixed" to the host machine, the memory usage limit of the Redis container is constrained by that host machine. The more containers that run on the host machine, the less memory the Redis container can use. The same issue also applies to the storage capacity that the Redis container can utilize. Because it is "fixed" to the host machine, the maximum storage capacity available to the Redis container is the remaining local disk space left by other containers on the host. The issue with CPU resources is not as pronounced, as Redis doesn't need multi-core processing, making it relatively unconcerned with extensive CPU usage.

- Issues with Scaling Redis Services
  When encountering business peaks, it is often necessary to scale Redis services. Based on the capacity challenges faced, scaling methods are divided into two major categories: vertical scaling and horizontal scaling. If the overall data volume of the business remains unchanged and only the amount of hotspot data needing caching increases, then vertically scaling the memory of the Redis container will suffice. However, once the overall data volume of the business increases and vertical scaling of storage capacity is required, the cloud-native teams cannot achieve reconfiguration by modifying the StatefulSet configuration through Helm; they can only switch to manual mode and hijack the underlying PVC to achieve this. The cost of hijacking will become apparent when horizontal scaling is later required. The newly added Redis containers will adopt the old configuration, turning the originally homogeneous, automated Redis service into a heterogeneous, manually-stitched patchwork.

## Hidden challenges

Issues related to high availability and high reliability are often apparent from architectural design and topology diagrams and are typically addressed by cloud-native teams on Day 1. However, challenges to service capability in specific scenarios are more subtle, depending on real business contexts and the experience of the cloud-native teams, and are often only noticed on Day 2. **A prudent cloud-native team should avoid using native Kubernetes workloads to run containerized databases in production environments; it's as risky as sailing a paper boat at sea**.

Kubernetes provides custom resources that can better aggregate storage, computing, and network resources, offering "declarative" database services through APIs. Currently, several well-known Redis Operators provide advanced solutions to help cloud-native teams address common Day 2 issues, including:

- Redis Enterprise Operator by RedisLabs
- KubeDB by AppsCode
- KubeBlocks by ApeCloud
- Redis Operator by Spotahome
- Redis Operator by OpsTree

The Operators provided by RedisLabs, AppsCode, and ApeCloud are enterprise-grade, offering more comprehensive capabilities. On the other hand, the Redis Operators provided by Spotahome and OpsTree are fully open-source; though less feature-rich, they are simpler and easier to understand. According to their release notes and changelogs, Spotahome's last release was on January 19, 2022, and OpsTree's on November 10, 2022, indicating potentially slower response times to issues, which need particular attention.

Regardless of which Redis Operator is chosen, the cloud-native teams should have the expectation that the network environment in real business scenarios is very complex, which may challenge the network solutions supported by Redis services. This challenge often arises when new applications deployed across Kubernetes need to read from and write to the existing Redis cluster. Without well-planned countermeasures, this could hinder business deployment efficiency. Considering the various SDK usage methods on the business side, Redis services need to support the following deployment models to meet long-term requirements:

- Single Node (Client only accesses the master)
  - Redis Server exposes the primary address via NodePort
  - Redis Server exposes the primary address via LoadBalancer
- Dual Nodes (Client only accesses the master)
  - Redis Server exposes the primary address via NodePort
  - Redis Server exposes the primary address via LoadBalancer
- Dual Nodes or Multiple Nodes (Client accesses Sentinel for read-write separation)
  - Redis Server and Sentinel components expose Redis and Sentinel replica addresses via HostNetwork
  - Redis Server and Sentinel components expose Redis and Sentinel replica addresses via NodePort
  - Redis Server and Sentinel components expose Redis and Sentinel replica addresses via LoadBalancer
- Sharding
  - Redis Server exposes replica addresses via HostNetwork
- Sharding + Proxy
  - Proxy Server exposes connection addresses via NodePort
  - Proxy Server exposes connection addresses via LoadBalancer

Why is Redis Sharding different from other forms and can only use HostNetwork? This involves various negotiations between Redis and cloud providers. In short, Redis wants to make Sharding a paid feature, but the code is under the BSD license. To prevent cloud providers from exploiting this, Redis deliberately did not implement the announce-ip feature, making native Redis Sharding unable to run in cloud network environments. However, cloud providers were not content and "helped" Redis by filling in the announce-ip functionality gap, allowing them to continue selling at a slightly higher cost. Unfortunately, the tug-of-war between Redis and cloud providers means that Redis Sharding in container environments can only expose addresses using HostNetwork, creating additional obstacles for cloud-native teams. **These commercial interests are ongoing concerns in the containerization of Redis**.

## I still want to give it a try

**Feeling that containerizing Redis isn't that easy and that the premium for fully managed public cloud services seems justified?**

You're right about that feeling, but don't give up just yet. One of the most important database technology directions for public cloud providers is containerization, and the starting point for containerization challenges is ensuring elasticity and supporting multiple network solutions. With the support of block storage, object storage, VPC networks, and layer 4 load balancing, public cloud providers find it easier to achieve database containerization, and their technical solutions tend to be more sophisticated (e.g., fixed container IPs, upgrading Kubernetes without restarting, etc.). However, most cloud-native teams lack the support of software-defined storage (SDS) and software-defined networking (SDN), making database containerization more challenging.

Fortunately, the business scenarios that most cloud-native teams need to support are not as complex as those faced by public cloud providers. If the right direction is chosen, requirements are narrowed down, and production experience is gradually accumulated, the challenges of database containerization will not come rushing in. The industry is not short of shared practices for containerizing Redis; some have significantly reduced costs, while others have enabled business teams to achieve self-serving capabilities.

**Aiming for the benefits of improved resource utilization and R&D efficiency, this endeavor might be tough, but it's worth the effort.**
