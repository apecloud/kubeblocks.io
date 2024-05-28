---
slug: kubeblocks-on-kata
title: Securing Your Workloads with Kata Containers - Running KubeBlocks on Kata
description: How do you increase your container security with Kata?
date: 2024-05-28
authors:
  name: dullboy
  url: https://github.com/nayutah
  image_url: https://avatars.githubusercontent.com/u/111858489?v=4
tags: [containerization, database performance, runtime, kata]
image: /img/blog-kata.png
---

# Securing Your Workloads with Kata Containers: Running KubeBlocks on Kata

Traditional containers run on the same operating system kernel, which may have some security vulnerabilities, such as privilege escalation and kernel vulnerabilities. If you are concerned about container security, run KubeBlocks on Kata Containers might be a solution. We have built a Kata Containers environment and performed some basic functional verification.
Kata Containers (Kata for short) is an open-source project that provides a secure and high-performance container runtime environment. The goal of Kata Containers is to combine virtualization technology with container technology, providing a user experience similar to lightweight containers while offering higher isolation and security.

## The key features of Kata Containers

1. Secure Isolation: Each container runs in its own virtual machine, providing hardware-level isolation to deliver higher security and isolation. This makes Kata Containers more suitable for multi-tenant environments and security-sensitive workloads.
2. Performance and Resource Efficiency: Despite running in virtual machines, Kata Containers can still provide performance and resource efficiency close to that of lightweight containers. Kata Containers leverage the benefits of hardware virtualization and utilize technologies like hardware acceleration to achieve fast startup and high performance.
3. Ecosystem Compatibility: Kata Containers are compatible with the container ecosystem, supporting Docker and Kubernetes, and can seamlessly integrate with existing container tools and platforms.
4. Flexibility and Scalability: Kata Containers can run on various virtualization platforms, including those based on KVM, Firecracker, and others. This allows users to choose the appropriate virtualization solution based on their specific requirements.

## The preparation for the virtualization environment
1. Virtualization Requirements
Before installing Kata Containers, you need to prepare a server that supports virtualization. There are generally two sources for this:
    A. Bare-metal servers: The CPUs on these servers typically support virtualization, and this type of virtualization is called L1 virtualization.
    B. VMs with support for nested virtualization: These VMs support the virtualization instruction set and can be used for L2 virtualization.
      [img](/static/img/hypervisor.png)
To determine whether a server supports virtualization, you can execute the following command:
`grep vmx /proc/cpuinfo`

```
slc@kata-1:~$ grep vmx /proc/cpuinfo
flags                : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid tsc_known_freq pni pclmulqdq vmx ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm abm invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid xsaveopt arat vnmi md_clear arch_capabilities
vmx flags        : vnmi preemption_timer invvpid ept_x_only ept_ad flexpriority tsc_offset vtpr mtf vapic ept vpid unrestricted_guest vapic_reg vid shadow_vmcs
```
If the server supports virtualization, the output of the `grep vmx /proc/cpuinfo` command will show information related to the 'vmx' flag, which indicates the support for hardware-assisted virtualization (Intel VT-x).

2.Creating Virtual Machines on GCP
The level of support for nested virtualization varies among different cloud providers. Among them, GCP (Google Cloud Platform) is said to have the best support for nested virtualization. For more details, please refer to the GCP nested virtualization documentation.
To create 3 nested virtualization servers on GCP, you can use the following gcloud command:

```
slc@bogon aws % gcloud compute instances create kata-1 \
    --enable-nested-virtualization \
    --project=apecloud-labs \
    --zone=us-central1-c \
    --machine-type=n1-standard-4 \
    --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --service-account=822787046197-compute@developer.gserviceaccount.com \
    --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append \
    --create-disk=auto-delete=yes,boot=yes,device-name=instance-20240407-035747,image=projects/ubuntu-os-cloud/global/images/ubuntu-2204-jammy-v20240319,mode=rw,size=100,type=projects/apecloud-labs/zones/us-central1-c/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```
To create the 3 VMs that support the `vmx` flag, you can execute the gcloud command 3 times.
This will create the 3 VMs that support the `vmx` flag. Additionally, you'll need to configure the VPC firewall rules to allow `ipip` and `dns53` traffic between the Kubernetes internal nodes for proper communication. This can be done through the GCP console or using the `gcloud` command-line tool.

## Prepare environment for k8s and Kata 

We have chosen to use K3s as the Kubernetes foundation for our deployment. K3s is a lightweight, production-ready Kubernetes distribution that is simple and quick to install. See https://k3s.io/.

***Steps:***

1. Install k3s.
```
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644
```

2. Create bootstrap token.
```
sudo k3s token create
```

3. Join other Node.

```
 curl -sfL https://get.k3s.io | K3S_URL=https://10.128.0.49:6443 K3S_TOKEN="K1027e02d430f1a7c8a4e9a67b9a8a354875ff92c366a830d66ceada5784518e8c8::2bhamg.xd7vwu3dlkqyipvh" sh -
 ```

4. Verify cluster status. 

```
kubectl get nodes
slc@kata-1:~$ kg nodes
NAME     STATUS   ROLES                  AGE    VERSION
kata-2   Ready    <none>                 100m   v1.28.8+k3s1
kata-1   Ready    control-plane,master   104m   v1.28.8+k3s1
kata-3   Ready    <none>                 99m    v1.28.8+k3s1
```

5. Install Kata environment.

Here we use cloud hypervisor as the default hypervisor. See kata-deploy. 

```
git clone https://github.com/kata-containers/kata-containers.git
cd kata-containers/tools/packaging/kata-deploy/
kubectl apply -f kata-rbac/base/kata-rbac.yaml
kubectl apply -k kata-deploy/overlays/k3s
kubectl apply -f https://raw.githubusercontent.com/kata-containers/kata-containers/main/tools/packaging/kata-deploy/runtimeclasses/kata-runtimeClasses.yaml
kubectl apply -f https://raw.githubusercontent.com/kata-containers/kata-containers/main/tools/packaging/kata-deploy/examples/test-deploy-kata-clh.yaml
```

6. Verify the kata environment.
```
kubectl get pods -A
slc@kata-1:~$ kg pods -A
NAMESPACE     NAME                                            READY   STATUS      RESTARTS   AGE
kube-system   local-path-provisioner-6c86858495-z4fm5         1/1     Running     0          106m
kube-system   svclb-traefik-5010304c-zldjh                    2/2     Running     0          106m
kube-system   svclb-traefik-5010304c-wlmtb                    2/2     Running     0          103m
kube-system   svclb-traefik-5010304c-49jz5                    2/2     Running     0          102m
kube-system   kata-deploy-6hw8t                               1/1     Running     0          98m
kube-system   kata-deploy-g4j9s                               1/1     Running     0          98m
kube-system   kata-deploy-drn8w                               1/1     Running     0          98m
kube-system   helm-install-traefik-zl849                      0/1     Completed   1          106m
kube-system   helm-install-traefik-crd-rhfl4                  0/1     Completed   0          106m
default       php-apache-kata-clh-67f67d6f89-h2dw6            1/1     Running     0          94m
kube-system   metrics-server-54fd9b65b-hqpm7                  1/1     Running     0          106m
kube-system   coredns-6799fbcd5-68wxv                         1/1     Running     0          106m
kube-system   traefik-f4564c4f4-4crfq                         1/1     Running     0          106m     
```

We can see the corresponding runtime.
```
root        6902  0.0  0.2 1419432 39560 ?       Sl   07:22   0:03 /opt/kata/bin/containerd-shim-kata-v2 -namespace k8s.io -address /run/k3s/containerd/containerd.sock -publish-binary  -id 9e7c835d4868398b062d9735e
root        6914  0.0  0.0   2612  1920 ?        S    07:22   0:00  \_ /opt/kata/libexec/virtiofsd --syslog --cache=auto --shared-dir=/run/kata-containers/shared/sandboxes/9e7c835d4868398b062d9735eb28115be58e5ab8ce
root        6919  0.0  0.1 2106124 26756 ?       Sl   07:22   0:00  |   \_ /opt/kata/libexec/virtiofsd --syslog --cache=auto --shared-dir=/run/kata-containers/shared/sandboxes/9e7c835d4868398b062d9735eb28115be58e5a
root        6915  0.3  0.9 2385428 151808 ?      Sl   07:22   0:18  \_ /opt/kata/bin/cloud-hypervisor --api-socket /run/vc/vm/9e7c835d4868398b062d9735eb28115be58e5ab8ce7111f0e729f651b7a3c2c3/clh-api.sock
```

## Install KubeBlocks

```
curl -fsSL https://kubeblocks.io/installer/install_cli.sh | bash
kbcli kubeblocks  list-versions
kbcli kubeblocks  install --version="0.8.2"
```
Error message: 
```
slc@kata-1:~$ kbcli kubeblocks  install --version="0.8.2"
The connection to the server localhost:8080 was refused - did you specify the right host or port?
```

The reason for the issue is that the kbcli tool was unable to locate the kubeconfig file when enumerating the Kubernetes contexts. As a result, it ended up trying to connect to localhost:8080 as a last resort.
To resolve this, we can create a symbolic link (soft link) to the `kubeconfig` file, which should allow `kbcli` to properly detect and use the correct Kubernetes context.
```
ln -sf /etc/rancher/k3s/k3s.yaml /home/slc/.kube/.kubeconfig
```
Wait until KubeBlocks is installed.

## Create database cluster

***Steps:***

1. Create normal cluster.
The cluster is hosted by runc. 
```
kbcli cluster create --cluster-definition=apecloud-mysql
kbcli cluster connect aloe03

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| kubeblocks         |
| mydb               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```

Runtime information:
```
root       11801  0.1  0.0 1238384 15136 ?       Sl   08:21   0:02 /var/lib/rancher/k3s/data/ef92c15b8f1c59f266ea4a9589be87b1b799d1682673f29721e8a1f7b0a4a97b/bin/containerd-shim-runc-v2 -namespace k8s.io -id 604c9d603425ef5c172e94a7598af3fd1b7e2004dfef4e7517e5e731e5123fc7 -address /run/k3s/containerd/containerd.sock
65535      11822  0.0  0.0    972   512 ?        Ss   08:21   0:00  \_ /pause
ubuntu     12032  0.9  1.4 1105756 217004 ?      Ssl  08:21   0:25  \_ mysqld
root       12181  0.0  0.0  22716  2320 ?        Ss   08:21   0:00  |   \_ crond -i -s
root       12590  0.0  0.0   1604   896 ?        Ss   08:21   0:00  \_ /bin/sh /scripts/agamotto.sh
root       12602  0.1  0.6 885824 99328 ?        Sl   08:21   0:03  |   \_ /bin/agamotto --config=/opt/agamotto/agamotto-config.yaml
root       12752  0.0  0.0   2388  1664 ?        Ss   08:22   0:00  \_ /bin/bash /scripts/vttablet.sh
root       14978  0.0  0.0   2312  1280 ?        S    09:06   0:00  |   \_ sleep 60
65532      12911  0.1  0.3 1287692 52068 ?       Ssl  08:22   0:03  \_ lorry --port 3501 --grpcport 50001
65532      12950  0.0  0.2 1271036 35072 ?       Ssl  08:22   0:00  \_ /bin/reloader --log-level info --operator-update-enable --tcp 9901 --config /opt/config-manager/config-manager.yaml
```

2. Create kata mysql cluster.
If you need to enable Kata Containers support, you will need to modify the Pod specification (podSpec) in your Kubernetes configuration.
```
      podSpec:
        runtimeClassName: kata-clh
```
Download kubeblocks-addon version 0.8.3 
```
wget https://github.com/apecloud/kubeblocks-addons/archive/refs/tags/v0.8.3-beta.5.tar.gz
tar zxf v0.8.3-beta.5.tar.gz
```
Change ClusterDefinition of apecloud-mysql addon
```  
cd kubeblocks-addons-0.8.3-beta.5/addons
vi apecloud-mysql/templates/clusterdefinition.yaml
All podSpec support kata
      podSpec:
        runtimeClassName: kata-clh
        containers:
          - name: mysql
```
Save and render the new apecloud-mysql addon.
```
helm template apecloud-mysql --set resourceNamePrefix="kata-apecloud-mysql" > /tmp/a
kubectl apply -f /tmp/a
slc@kata-1:~$ kubectl get cd
NAME                  MAIN-COMPONENT-NAME   STATUS      AGE
redis                 redis                 Available   105m
clickhouse            clickhouse            Available   105m
mongodb-sharding      mongos                Available   105m
mongodb               mongodb               Available   105m
kafka                 kafka-server          Available   105m
pulsar-zookeeper      zookeeper             Available   105m
postgresql            postgresql            Available   105m
apecloud-mysql        mysql                 Available   105m
pulsar                pulsar-broker         Available   105m
kata-apecloud-mysql   mysql                 Available   13m
```

Create apecloud-mysql cluster on Kata.
```
slc@kata-1:~$ kbcli cluster create --cluster-definition=kata-apecloud-mysql
Info: --cluster-version is not specified, ClusterVersion kata-apecloud-mysql-8.0.30 is applied by default
Cluster cornel23 created
```

Login to kata mysql.
```
kbcli cluster connect cornel23
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| kubeblocks         |
| mydb               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```
Test other command.
```
slc@kata-1:~$ kubectl exec -it cornel23-mysql-0 -- /bin/sh
Defaulted container "mysql" out of: mysql, metrics, vttablet, lorry, config-manager
sh-4.2# ls
anaconda-post.log  apecloud  bin  data        dev  docker-entrypoint-initdb.d  etc  home  lib  lib64        media  mnt  opt  proc  root  run  sbin        scripts  srv  sys  tmp        usr  var
sh-4.2#
```

Check runtime progress.
```
root       19681  0.2  0.2 1419688 40612 ?       Sl   09:52   0:01 /opt/kata/bin/containerd-shim-kata-v2 -namespace k8s.io -address /run/k3s/containerd/containerd.sock -publish-binary  -id 115051aa1546b66657f14cd9a
root       19702  0.0  0.0   2612  1920 ?        S    09:52   0:00  \_ /opt/kata/libexec/virtiofsd --syslog --cache=auto --shared-dir=/run/kata-containers/shared/sandboxes/115051aa1546b66657f14cd9a19f4223f98370377b
root       19708  1.4  2.4 3155940 380292 ?      Sl   09:52   0:10  |   \_ /opt/kata/libexec/virtiofsd --syslog --cache=auto --shared-dir=/run/kata-containers/shared/sandboxes/115051aa1546b66657f14cd9a19f4223f98370
root       19703 13.1  3.8 3436120 591872 ?      Sl   09:52   1:31  \_ /opt/kata/bin/cloud-hypervisor --api-socket /run/vc/vm/115051aa1546b66657f14cd9a19f4223f98370377b3145354b8703bbcf2939c5/clh-api.sock
```

## Conclusion

With KubeBlocks, we can easily run data on Kata Containers. However, to better support Kata Containers, KubeBlocks still needs to natively support the Kubernetes runtimeClass mechanism, in order to support more runtime environments.

Furthermore, we can also feel that due to its good compatibility with CRI, Kata Containers can provide a good user experience while ensuring security.