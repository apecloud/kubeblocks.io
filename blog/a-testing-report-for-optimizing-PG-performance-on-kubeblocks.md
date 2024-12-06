---
slug: A-testing-report-for-optimizing-PG-performance-on-Kubernetes
title: A testing report for optimizing PG performance on Kubernetes
description: A testing report for optimizing PG performance on Kubernetes
date: 2023-09-21
authors:
  name: dullboy
  url: https://github.com/nayutah
  image_url: https://avatars.githubusercontent.com/u/111858489?v=4
tags: [KubeBlocks PG, ECS PG, optimization, performance]
image: /img/blog-pg.png
---

# A testing report for optimizing PG performance on Kubernetes

## Introduction

Nowadays, an increasing number of applications are being implemented within containers on Kubernetes. This trend has become so prominent that some have likened Kubernetes to the Linux of the cloud in terms of its ubiquity and influence. However, while this growth is evident at the application layer, containerization hasn't gained as much momentum in the realm of data management. Databases, as a stateful workload, are said to be the last thing you would run on Kubernetes. This is not surprising, given that containerized workloads inherently need to be robust in the face of restarts, scaling, virtualization, and various other constraints. 

However, attention is shifting to the data layer, as developers look to treat data infrastructure like application stacks. They aim to use the same tools for databases and applications, seeking the same benefits, such as rapid deployment and consistency across environments. In this blog, we run testing for a self-hosted PostgreSQL solution (we use KubeBlocks PG ) and a self-hosts PostgreSQL on ECS (ECS hereafter referred to as ECS PG), and explore how to optimize the database performance so the performance and stability in production environment can be same as or better than that of fully-managed database.

## Environment preparation
| | Version | CPU | Memory | Disk | Network | Instance Class Type | Replication Protocol |
|--|-------|--------|-----|------|--------|-----|------|
| ECS PG|12.14|16C|64G|ESSD PL1 500G|SLB|Dedicated|Asynchronous replication |
|KubeBlocks PG|12.14|16C|64G|ESSD PL1 300G|SLB|Dedicated|Asynchronous replication |

1. Purchase K8s clusters on ACK and deploy KubeBlocks (refer to [this tutorial](https://kubeblocks.io/docs/preview/user_docs/installation/install-with-kbcli/install-kbcli).) Apply Terway network mode, where Pod IP is VPC IP. This ensures network connectivity within a VPC, simplifies network management, and reduces the cost of application development. Set the node specification to 16C64G.
   
2. In the production environment, developers may fail to create instances on dedicated nodes with a 16C64G specification. This is because resources are probably consumed by agents like kubelet. To solve the problem, set the resource requests and limits to 14C56G.
   
Now edit the resource specifications of a PG cluster with kubectl edit. Remove the restrictions on resource requests and limits. This ensures that during stress testings, the cluster can utilize the full 16 cores of CPU. Set the buffers to 16GB and then create the PG instance using the following command:
```bash
kbcli cluster create --cluster-definition=postgresql
```

## Testing plan
Sysbench Read-intensive testing: 80% read + 20% write.

In the testing scenario, reading is more than writing request and it is similar to that in real production scenarios.

## First round of stress testing: TPS dropped to 0

The testing was initiated by ECS, which accessed PG cluster via VPC IP.

<table>
<thead>
  <tr>
    <th>Threads</th>
    <th colspan="2">Throughput</th>
    <th colspan="2">Latency(ms)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td>KubeBlocks PG</td>
    <td>ECS PG</td>
    <td>KubeBlocks PG</td>
    <td>ECS PG</td>
  </tr>
  <tr>
    <td>25</td>
    <td>87264</td>
    <td>91310</td>
    <td>31.94</td>
    <td>28.67</td>
  </tr>
  <tr>
    <td>50</td>
    <td>111063</td>
    <td>140559</td>
    <td>55.82</td>
    <td>40.37</td>
  </tr>
  <tr>
    <td>100</td>
    <td>83032</td>
    <td>159386</td>
    <td>132.49</td>
    <td>92.42</td>
  </tr>
  <tr>
    <td>150</td>
    <td>61865</td>
    <td>140938</td>
    <td>272.27</td>
    <td>18654</td>
  </tr>
  <tr>
    <td>175</td>
    <td>56487</td>
    <td>134933</td>
    <td>350.33</td>
    <td>240.02</td>
  </tr>
</tbody>
</table>

Issues occurred: 

1. CPU failed to be fully loaded: When the database was tested by ECS, the CPU on the node where the database was hosted can't be fully loaded.
2. Rapid concurrency decay: As the concurrency numbers increased, the performance of KubeBlocks PG deteriorated faster compared to ECS PG.
3. Intermittent TPS drops to 0: TPS drops were frequently observed during the testing (starting at 307 seconds).
   
<img src='https://kubeblocks.io/images/k8s-1.jpeg' alt="TPS dropped to 0" width='80%' style={{margin: "0 10%"}} />

Since both the client- and server-side CPUs were not fully loaded, I doubted whether there was an issue with the network, especially whether SLB specifications had reached their limits. Therefore, I changed the SLB specification from the default 'slb.s2.small' to 'slb.s3.large' and re-initiated the stress testing. 

<img src='https://kubeblocks.io/images/k8s-2.jpeg' alt="Change spec" width='80%' style={{margin: "0 10%"}} />

However, problems remained.

## Second round of stress testing: Troubleshoot network links
To test SLB performance, cases were designed using 'sysbench select 1' to simulate end-to-end network latency. While simple ping tests can reflect certain latency issues, they have many limitations and cannot guarantee full end-to-end traversal. For example, SLB devices may directly respond to ICMP packets generated by ping tests, preventing the subsequent links from SLB to Pods from being detected.

The testing was again initiated by ECS :

1. ECS -> Pod IP, which had direct network access using VPC IP.
2. ECS -> SLB IP -> Pod IP, which had an additional SLB layer in the middle.
3. ECS -> ECS SLB IP, which had the SLB layer embedded by default at the front end of PG.

The results were as follows:

<table>
<thead>
  <tr>
    <th>Threads</th>
    <th colspan="3">Throughput</th>
    <th colspan="3">Latency(ms)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td>Pod IP</td>
    <td>SLB IP</td>
    <td>SLB IP</td>
    <td>PodIP</td>
    <td>SLB IP</td>
    <td>SLB IP</td>
  </tr>
  <tr>
    <td>25</td>
    <td>107309</td>
    <td>105298</td>
    <td>92163</td>
    <td>0.30</td>
    <td>0.30</td>
    <td>0.32</td>
  </tr>
</tbody>
</table>

As the result indicated, both ACK and SLB networks worked well, which meant they were unlikely to cause performance fluctuations. Therefore, we went on our stress testing.

## Third round of stress testing: Adjust IO bandwidth
Then we continued with the original testing plan and performed qualitative analysis of system by examining the ECS monitoring graphics.

<img src='https://kubeblocks.io/images/k8s-3.jpeg' alt="CPU busy rate" width='80%' style={{margin: "0 10%"}} />

We can tell from the monitoring graphics that:
1. The disk read/write bandwidth has reached its bottleneck. ESSD bandwidth is directly correlated with disk capacity, whose formula is min`{120+0.5*capacity, 350}`. For a 300GB disk, the corresponding bandwidth is 270MB, and the data showed that it has reached the bottleneck.
   
2. Upon checking the logs, I discovered that the CPU busy rate dropped when TPS dropped to 0.

<img src='https://kubeblocks.io/images/k8s-4.jpeg' alt="CPU busy rate" width='60%' style={{margin: "0 20%"}} />


Since the bandwidth reached its limit, an additional set of tests was conducted to assess the performance of a 500GB disk. The bandwidth for a 500GB disk is 350MB (min{120+0.5*500, 350} ). During stress testing, the CPU exhibited intermittent fluctuations even when the disk was full. These fluctuations may be related to checkpoints, but still, that should not lead to a complete TPS drop to 0.

Increasing the disk bandwidth and the TPS drop issue was mitigated. Therefore, we decided to maximize the disk bandwidth by switching to an ESSD PL2 1TB disk with a bandwidth of 620MB. The result showed that while fluctuations existed, they have been greatly reduced, and there has been a narrower decline in CPU busy rate.

<img src='https://kubeblocks.io/images/k8s-5.jpeg' alt="CPU busy rate" width='60%' style={{margin: "0 20%"}} />

We've taken a more aggressive approach to adjustment -- upgraded to an ESSD PL3 2TB disk with a bandwidth of 700MB.

<img src='https://kubeblocks.io/images/k8s-6.jpeg' alt="CPU busy rate" width='60%' style={{margin: "0 20%"}} />

This time, TPS drops and CPU fluctuations have been mitigated, but problems persisted. At 8183s, TPS plunged from 2400 to 1400, a drop of approximately 40% and CPU fluctuation range has narrowed but still persisted.

<img src='https://kubeblocks.io/images/k8s-7.jpeg' alt="TPS drops and CPU fluctuations" width='80%' style={{margin: "0 10%"}} />

To conclude, IO bandwidth had a significant impact on both CPU and TPS. As IO bandwidth increased, fluctuations decreased, and the TPS drop-to-0 disappeared. However, even with no IO bandwidth limitation, TPS still experienced a 40% decrease. Hardware constraints excluded, the issue was very likely related to PG cluster itself.

## Fourth round of stress testing: Analyze the checkpoint and lock

In this round of testing, I figured out the checkpoint mechanism and analyzed how I/O throttling affected checkpoints and transactions.

1. Why were PostgreSQL's checkpoints more severely impacted compared to other databases? I observed weaker fluctuations on MySQL with similar tests.
   
2. Even when I/O throttling was in effect, results indicated that I/O was still at capacity, so TPS should not drop to 0. Was it because the bandwidth was fully consumed by the checkpoint process?
   
To better monitor the database, I enabled Node Exporter integrated in KubeBlocks and started testing.
As a result, when TPS dropped to 0, I observed a 10GB memory reclamation in a single operation. Without Huge Pages, if a page frame is about 4KB, then 10GB roughly translates to around 2.5 million pages. Such a large-scale page traversal and reclamation could impose significant stress on the OS kernel page reclaim module. At that specific moment, the OS experienced a freeze for several tens of seconds, hanging all the processes above. 

This type of reclamation was typically related to an improper setting of dirty_background_ratio. Then I executed `sysctl -a | grep dirty_background_ratio` and found `vm.dirty_background_ratio = 10`.

<img src='https://kubeblocks.io/images/k8s-8.jpeg' alt="dirty_background_ratio = 10" width='80%' style={{margin: "0 10%"}} />


Adjust the background ratio to 5% with the command `sysctl -w vm.dirty_background_ratio=5`. It could flush some dirty page cache. 

This setting is crucial and closely related to PostgreSQL's mechanism. PostgreSQL relies on the OS page cache and differs from the I/O architecture of Oracle and MySQL. MySQL uses DirectIO and therefore lays less pressure on memory management. However, in some scenarios, DirectIO may introduce slightly greater latency compared to that of writing buffer cache.

Another discovery was about PostgreSQL's kernel and logs. Upon logging into the Pod, I found a WAL log was 16MB by default:

```bash
root@postgres-cluster-postgresql-0:/home/postgres/pgdata/pgroot/data/pg_wal# du -sh 0000000A000001F300000077 16M 0000000A000001F300000077
```

Moreover, PostgreSQL's background processes would clean WAL logs under pg_wal directory to free up space. With the strace command, I found that at most several hundred WAL files were deleted in a single operation, totaling 12GB in size.

(Due to the timezone issue, the time in the logs needed to be adjusted by adding 8 hours, e.g. 5:42 corresponded to 13:42 Beijing time.)
```bash
2023-05-18 05:42:42.352 GMT,,,129,,64657f66.81,134,,2023-05-18 01:29:10 GMT,,0,LOG,00000,"checkpoint complete: wrote 680117 buffers (32.4%); 0 WAL file(s) added, 788 removed, 0 recycled; write=238.224 s, sync=35.28 6 s, total=276.989 s; sync files=312, longest=1.348 s, average=0.114 s; distance=18756500 kB, estimate=19166525 kB",,,,,,,,,"" 2023-05-18 05:42:42.362 GMT,,,129,,64657f66.81,135,,2023-05-18 01:29:10 GMT,,0,LOG,00000,"checkpoint starting: wal",,,,,,,,,"" 2023-05-18 05:42:44.336 GMT,"sysbenchrole","pgbenchtest",65143,"::1:43962",6465928f.fe77,1157,"SELECT",2023-05-18 02:50:55 GMT,36/46849938,0,LOG,00000,"duration: 1533.532 ms execute sbstmt1641749330-465186528: SEL ECT c FROM sbtest46 WHERE id=$1","parameters: $1 = '948136'",,,,,,,,"" 2023-05-18 05:42:44.336 GMT,"sysbenchrole","pgbenchtest",65196,"::1:44028",6465928f.feac,1137,"UPDATE",2023-05-18 02:50:55 GMT,57/43973954,949436561,LOG,00000,"duration: 1533.785 ms execute sbstmt493865735-6481814 15: UPDATE sbtest51 SET k=k+1 WHERE id=$1","parameters: $1 = '996782'",,,,,,,,""
```

When a checkpoint was performed, CPU idle spiked to 80% (corresponding to a TPS drop to 0).

<img src='https://kubeblocks.io/images/k8s-9.png' alt="CPU idle spiked to 80%" width='80%' style={{margin: "0 10%"}} />

The duration of some transactions in the logs extended to over 1s.

The TPS drop issue also ended at 13:44:20.
```bash
2023-05-18 05:44:20.693 GMT,"sysbenchrole","pgbenchtest",65145,"::1:43964",6465928f.fe79,1178,"SELECT",2023-05-18 02:50:55 GMT,48/45617265,0,LOG,00000,"duration: 1942.633 ms execute sbstmt-1652152656-473838068: SE LECT c FROM sbtest37 WHERE id=$1","parameters: $1 = '1007844'",,,,,,,,""
```

At 13:45:41, the vacuum process started.
```bash
2023-05-18 05:45:41.512 GMT,,,87995,,646596d6.157bb,71,,2023-05-18 03:09:10 GMT,64/3879558,0,LOG,00000,"automatic aggressive vacuum of table ""pgbenchtest.public.sbtest45"": index scans: 1 pages: 0 removed, 66886 remain, 0 skipped due to pins, 2328 skipped frozen tuples: 14166 removed, 2005943 remain, 15904 are dead but not yet removable, oldest xmin: 944519757
```

At 13:47:04, the checkpoint was finally completed. 
```bash
2023-05-18 05:47:04.920 GMT,,,129,,64657f66.81,136,,2023-05-18 01:29:10 GMT,,0,LOG,00000,"checkpoint complete: wrote 680483 buffers (32.4%); 0 WAL file(s) added, 753 removed, 0 recycled; write=226.176 s, sync=32.53
```

The entire process was shown in the monitoring graph.

<img src='https://kubeblocks.io/images/k8s-10.jpeg' alt="Entire process" width='80%' style={{margin: "0 10%"}} />

CPU fluctuations were closely aligned with dirty page flush process during checkpoints.

And the disk bandwidth remained saturated.

<img src='https://kubeblocks.io/images/k8s-11.png' alt="Disk bandwidth saturated" width='80%' style={{margin: "0 10%"}} />

The periods when the TPS dropped to 0 closely coincided with the moments when the checkpoint flushed dirty pages.

<img src='https://kubeblocks.io/images/k8s-12.jpeg' alt="Checkpoint flush" width='80%' style={{margin: "0 10%"}} />

By monitoring memory fluctuations, it could be observed that the hang issue caused by memory reclamation has been effectively solved, indicating that adjusting `dirty_background_ratio` was effective.

Additionally, during the flush process, the number of locks remained relatively high, which was in stark contrast to the non-flushing state.

<img src='https://kubeblocks.io/images/k8s-13.jpeg' alt="Number of locks" width='80%' style={{margin: "0 10%"}} />

Locks included:

<img src='https://kubeblocks.io/images/k8s-14.png' alt="Locks" width='80%' style={{margin: "0 10%"}} />
<img src='https://kubeblocks.io/images/k8s-15.png' alt="Locks" width='80%' style={{margin: "0 10%"}} />

At times, multiple processes contended for the same lock.

<img src='https://kubeblocks.io/images/k8s-16.png' alt="Lock contentions" width='80%' style={{margin: "0 10%"}} />
<img src='https://kubeblocks.io/images/k8s-17.png' alt="Lock contentions" width='80%' style={{margin: "0 10%"}} />

During regular I/O operations, even though disk bandwidth may be fully utilized, there is rarely any lock contention among transactions, and TPS remains stable. However, when lock contention becomes pronounced, TPS easily drops to 0, which is directly related to the checkpoint process.

<img src='https://kubeblocks.io/images/k8s-18.png' alt="Lock contentions" width='80%' style={{margin: "0 10%"}} />

## Fifth round of stress testing: Analyze PG core codes and trace

Continuing my investigation, I studied some codes related to PostgreSQL checkpoints and WAL and traced the PostgreSQL backend processes. Then I found some problems with WAL log creation, whose duration data was calculated with log analysis of scripts.
```bash
duration:550 ms 11:50:03.951036 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EE000000E7.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 22 
duration:674 ms 11:50:09.733902 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EF00000003.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 22 
duration:501 ms 11:50:25.263054 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EF0000004B.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 23 
duration:609 ms 11:50:47.875338 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EF000000A8.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 25 
duration:988 ms 11:50:53.596897 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EF000000BD.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 29 
duration:1119 ms 11:51:10.987796 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002EF000000F6.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 29 
duration:1442 ms 11:51:42.425118 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F000000059.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 45 
duration:1083 ms 11:51:52.186613 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F000000071.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 51 
duration:503 ms 11:52:32.879828 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F0000000D8.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 75 
duration:541 ms 11:52:43.078011 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F0000000EB.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 84 
duration:1547 ms 11:52:56.286199 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F10000000C.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 84 
duration:1773 ms 11:53:19.821761 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F10000003D.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 94 
duration:2676 ms 11:53:30.398228 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F10000004F.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 101 
duration:2666 ms 11:54:05.693044 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F100000090.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 122 
duration:658 ms 11:54:55.267889 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F1000000E5.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 139 
duration:933 ms 11:55:37.229660 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F200000025.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 163 
duration:2681 ms 11:57:02.550339 openat(AT_FDCWD, "pg_wal/archive_status/00000010000002F200000093.ready", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 197
```

These WAL files took more than 500ms to become ready, and some even took as long as 2.6s. This was why some transactions had a duration longer than 2s, as transactions had to wait for WAL files to become ready before writing continued.

The process of creating a WAL file was as follows:
1. `stat(pg_wal/00000010000002F200000093)`- The file was not found.
2. Used `pg_wal/xlogtemp.129` to create a WAL file.
3. Zeroed out `pg_wal/xlogtemp.129`.
4. Created a symbolic link between (`pg_wal/xlogtemp.129` and `pg_wal/00000010000002F200000093`).
5. Opened `pg_wal/00000010000002F200000093`.
6. Wrote metadata at the end of the file.
7. Loaded the WAL file and applied it.

Judging from PostgreSQL logs, some client connections were reset at that moment, and it took more than 10s to execute certain transactions.
```bash
2023-05-22 11:56:08.355 GMT,,,442907,"100.127.12.1:23928",646b5858.6c21b,1,"",2023-05-22 11:56:08 GMT,,0,LOG,08006,"could not receive data from client: Connection reset by peer",,,,,,,,,"" 2023-05-22 11:56:10.427 GMT,,,442925,"100.127.12.1:38942",646b585a.6c22d,1,"",2023-05-22 11:56:10 GMT,,0,LOG,08006,"could not receive data from client: Connection reset by peer",,,,,,,,,"" 2023-05-22 11:56:12.118 GMT,,,442932,"100.127.13.2:41985",646b585c.6c234,1,"",2023-05-22 11:56:12 GMT,,0,LOG,08006,"could not receive data from client: Connection reset by peer",,,,,,,,,"" 2023-05-22 11:56:13.401 GMT,"postgres","pgbenchtest",3549,"::1:45862",646ae5d3.ddd,3430,"UPDATE waiting",2023-05-22 03:47:31 GMT,15/95980531,1420084298,LOG,00000,"process 3549 still waiting for ShareLock on transac tion 1420065380 after 1000.051 ms","Process holding the lock: 3588. Wait queue: 3549.",,,,"while updating tuple (60702,39) in relation ""sbtest44""","UPDATE sbtest44 SET k=k+1 WHERE id=$1",,,""
```
I compared logs and observed that whenever the WAL segment took a long time to complete, the client generated a batch of slow query (> 1s) logs. 

I cleared WAL files in the PG kernel:
```bash
/* do not use get_sync_bit() here --- want to fsync only at end of fill */
        fd = BasicOpenFile(tmppath, open_flags);
        if (fd < 0)
                ereport(ERROR,
                                (errcode_for_file_access(),
                                 errmsg("could not create file \"%s\": %m", tmppath)));

        pgstat_report_wait_start(WAIT_EVENT_WAL_INIT_WRITE);
        save_errno = 0;
        if (wal_init_zero)
        {
                ssize_t                rc;

                /*
                 * Zero-fill the file.  With this setting, we do this the hard way to
                 * ensure that all the file space has really been allocated.  On
                 * platforms that allow "holes" in files, just seeking to the end
                 * doesn't allocate intermediate space.  This way, we know that we
                 * have all the space and (after the fsync below) that all the
                 * indirect blocks are down on disk.  Therefore, fdatasync(2) or
                 * O_DSYNC will be sufficient to sync future writes to the log file.
                 */
                rc = pg_pwrite_zeros(fd, wal_segment_size, 0); // buffer write

                if (rc < 0)
                        save_errno = errno;
        }
        else
        {
                /*
                 * Otherwise, seeking to the end and writing a solitary byte is
                 * enough.
                 */
                errno = 0;
                if (pg_pwrite(fd, "\0", 1, wal_segment_size - 1) != 1)
                {
                        /* if write didn't set errno, assume no disk space */
                        save_errno = errno ? errno : ENOSPC;
                }
        }
        pgstat_report_wait_end();

        if (save_errno)
        {
                /*
                 * If we fail to make the file, delete it to release disk space
                 */
                unlink(tmppath);

                close(fd);

                errno = save_errno;

                ereport(ERROR,
                                (errcode_for_file_access(),
                                 errmsg("could not write to file \"%s\": %m", tmppath)));
        }

        pgstat_report_wait_start(WAIT_EVENT_WAL_INIT_SYNC);
        if (pg_fsync(fd) != 0)  // fsync data to disk
        {
                save_errno = errno;
                close(fd);
                errno = save_errno;
                ereport(ERROR,
                                (errcode_for_file_access(),
                                 errmsg("could not fsync file \"%s\": %m", tmppath)));
        }
        pgstat_report_wait_end();
```

As shown in the codes,  the clearing operations started with asynchronous writes, where each write was performed for one page block until the entire loop was completed. Subsequently, a single fsync operation was executed.

Generally, asynchronous writes are quite fast, with response times in the microsecond range when the system load is low. However, under heavy system loads, the latency for an asynchronous I/O operation can be 30 milliseconds or more. This is closely related to the I/O path in the OS kernel. When there is significant memory pressure, asynchronous writes may be transformed into synchronous writes. Additionally, the I/O process intertwines with the slow path of page reclaim, theoretically leading to long durations. This has indeed been observed in actual traces.

Below are two consecutive clearing operations monitored, where the interval between the two asynchronous IO operations exceeded 30 milliseconds:

```bash
11:56:57.238340 write(3, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"..., 8192) = 8192 
11:56:57.271551 write(3, "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"..., 8192) = 8192
```

The bandwidth of the disk was:

<img src='https://kubeblocks.io/images/k8s-19.png' alt="Disk bandwidth" width='80%' style={{margin: "0 10%"}} />

For a 16MB WAL segment, if it required 2,000 operations and each took 1ms, then it would take at least 2s to complete the overall zeroing.

For example:
```bash
# I traced a PostgreSQL backend process that was executing a transaction. It took 1.5s to wait for the lock. 
02:27:52.868356 recvfrom(10, "*\0c\304$Es\200\332\2130}\32S\250l\36\202H\261\243duD\344\321p\335\344\241\312/"..., 92, 0, NULL, NULL) = 92 
02:27:52.868409 getrusage(RUSAGE_SELF, {ru_utime={tv_sec=232, tv_usec=765624}, ru_stime={tv_sec=59, tv_usec=963504}, ...}) = 0 
02:27:52.868508 futex(0x7f55bebf9e38, FUTEX_WAIT_BITSET|FUTEX_CLOCK_REALTIME, 0, NULL, FUTEX_BITSET_MATCH_ANY) = 0 
02:27:54.211960 futex(0x7f55bebfa238, FUTEX_WAKE, 1) = 1 
02:27:54.215049 write(2, "\0\0\36\1\377\334\23\0T2023-05-23 02:27:54.215"..., 295) = 295 
02:27:54.215462 getrusage(RUSAGE_SELF, {ru_utime={tv_sec=232, tv_usec=765773}, ru_stime={tv_sec=59, tv_usec=963504}, ...}) = 0 
```

The corresponding SQL was:

```bash
2023-05-23 02:27:54.215 GMT,"postgres","pgbenchtest",1301759,"::1:56066",646c1ef3.13dcff,58,"SELECT",2023-05-23 02:03:31 GMT,43/198458539,0,LOG,00000,"duration: 1346.558 ms execute sbstmt-13047857631771152290: SEL ECT c FROM sbtest39 WHERE id=$1","parameters: $1 = '1001713'",,,,,,,,""
```

So far, it could be drawn that TPS drops to 0 and CPU fluctuations were related to WAL zeroing. The mechanism was as follows:

WAL creation -> WAL zeroing -> I/O contention during dirty page flush and zeroing processes -> Transaction duration became longer -> Lock holding time became longer -> More blocked transactions -> Transactions timeout. 

<img src='https://kubeblocks.io/images/k8s-20.jpg' alt="TPS drops mechanism" width='80%' style={{margin: "0 10%"}} />

The biggest problem with zeroing was that it generated a large amount of IO and required all transactions to wait for syncing data until the new WAL file was ready. During this process, all transactions had to wait for WALWrite and wal_insert locks, which was the top reason for jitters. 

As the root cause of the problem was still IO contention, had the IO load been low and zeroing speed been relatively fast, jitters would have not been so significant, and the problem would not have been exposed. For now, severe jitters only occurred during stress testing, so increasing the IO bandwidth in the earlier rounds has helped alleviate TPS drops and CPU issues.

What's more, since locking is required when creating a new WAL file, adjusting the size of WAL files to reduce the frequency of locking is also one of the solutions.

## Sixth round of stress testing: Disable wal_init_zero

Now I tried to solve the problem. 

Zeroing WAL logs depends on whether WAL log slots are functioning correctly, which is a suboptimal but somewhat efficient approach. Ideally WAL logs should be self-explanatory, not relying on zeroing to ensure the correctness. However, this solution would require modifying the PG kernel, which is not practical. Another approach is to clear WAL logs by the filesystem without the need for explicit PG kernel calls. This solution requires the filesystem to support this feature.

ZFS and XFS happen to have this COW eature. For more details, refer to [this answer on Reddit](https://www.reddit.com/r/bcachefs/comments/fhws6h/the_state_of_linux_cow_file_systems_what_to_choose/?rdt=58971).

Since the EXT4 filesystem used for testing did not have this feature, I switched to the ZFS filesystem. 

However, during ZFS testings, I found filesystem hang-ups several times:
```bash
root@pgclusterzfs-postgresql-0:~# cat /proc/4328/stack 
[<0>] zil_commit_impl+0x105/0x650 [zfs] 
[<0>] zfs_fsync+0x71/0xf0 [zfs] 
[<0>] zpl_fsync+0x63/0x90 [zfs] 
[<0>] do_fsync+0x38/0x60 
[<0>] __x64_sys_fsync+0x10/0x20 
[<0>] do_syscall_64+0x5b/0x1d0 
[<0>] entry_SYSCALL_64_after_hwframe+0x44/0xa9 
[<0>] 0xffffffffffffffff
```

For stability considerations, I opted for XFS and set wal_init_zero=off. To reduce the frequency of WAL log file creation, I also adjusted wal_segment_size from 16MB to 1GB, reducing the locking frequency.

This time, TPS drops and CPU jitters were significantly mitigated.

<img src='https://kubeblocks.io/images/k8s-21.jpeg' alt="Disable wal_init_zero" width='60%' style={{margin: "0 20%"}} />

Although avoiding zeroing operations and reducing the locking frequency took effect, during checkpoints, flushing dirty pages and writing WAL logs still brought contentions for bandwidth and locks, resulting in jittering. To further optimize the problem, I focused on reducing the IO volume of individual transactions.

For data safety, previous stress testings enabled full_page_write, which was to ensure data recovery when page block data might be corrupted due to a power outage. The specific principles could be found in [this article](http://mysql.taobao.org/monthly/2015/11/05/). If the storage could guarantee atomic writes (no partial success or failure) or if PG could recover from a backup set (correct full data + incremental WAL replay), then it might be possible to consider disabling full_page_write without compromising data safety.

## Seventh round of stress testing: Disable full_page_write
This time, both CPU and IO bandwidth presented quite different performances before and after disabling `full_page_write`.

<img src='https://kubeblocks.io/images/k8s-22.jpeg' alt="CPU performance with full_page_write off" width='60%' style={{margin: "0 20%"}} />
<img src='https://kubeblocks.io/images/k8s-23.jpeg' alt="IO bandwidth performance with full_page_write off" width='60%' style={{margin: "0 20%"}} />

It can be seen that IO contention had a significant impact on PG, and even after disabling `full_page_write`, there was hardly any CPU jitter during checkpoints.

Then I conducted another three testings:
1. Enabling `full_page_write` with a 16MB WAL segment size.
2. Enabling `full_page_write` with a 1GB WAL segment size.
3. Disabling `full_page_write` with a 1GB WAL segment size.

<img src='https://kubeblocks.io/images/k8s-24.jpeg' alt="KubeBlocks PG wal_segment 1GB vs 16MB" width='60%' style={{margin: "0 20%"}} />

When `full_page_write` was on, a 1GB segment performed slightly better compared to a 16MB one, which confirmed that increasing segment size helped to reduce locking frequency. After disabling `full_page_write`, PG performance was very good.

Finally, I chose a combination of settings for testing: (`wal_init_zero off` + XFS) + (`full_page_write` off) + (`wal_segment_size` 1GB). The results were as follows:

<img src='https://kubeblocks.io/images/k8s-25.png' alt="CPU performance" width='60%' style={{margin: "0 20%"}} />
<img src='https://kubeblocks.io/images/k8s-26.png' alt="Disk R/W data performance" width='60%' style={{margin: "0 20%"}} />

During checkpoints, the system ran very smoothly with no jitters. PG also transitioned from being IO-bound to CPU-bound. This time, the crux of the problem should be PG's locking mechanism.

## Eighth round of stress testing: Final performance comparisons
However, based on my experience, PG, a process-based model where one session corresponds to one process, incurs a high cost in terms of page table and process context switching when the concurrency is relatively high, therefore pgBouncer should be introduced. Users often self-build ECS PG instances to address concurrency issues, and so enable Huge Pages, while KubeBlocks PG, being deployed on ACK, does not have Huge Page on.

To ensure fairness, I enabled `full_page_write` on KubeBlocks in the following tests.

<img src='https://kubeblocks.io/images/k8s-27.jpeg' alt="KubeBlocks PG vs ECS PG throughput" width='60%' style={{margin: "0 20%"}} />
After introducing pgBouncer, PG could handle more connections without significant performance degradation. KubeBlocks PG performed similarly to PG, but it worked slightly better in lower concurrency scenarios and offered overall better stability.

<img src='https://kubeblocks.io/images/k8s-28.jpeg' alt="KubeBlocks PG vs ECS PG latency" width='60%' style={{margin: "0 20%"}} />

## Conclusions
1. Zeroing WAL segments has a significant impact on both the performance and stability of PG. If the filesystem supports zeroing, you can disable the `wal_init_zero` option to effectively reduce CPU and TPS fluctuations.
2. `full_page_write` also greatly impacts PG's performance and stability. If your storage or backups can ensure data safety, consider disabling it to effectively reduce CPU and TPS jitters.
3. Increasing the WAL segment size can reduce the locking frequency during log rotation, which can also mitigate CPU and TPS jitters, though the effect may not be as pronounced.
4. PG is a multi-process model. Introducing pgBouncer can support a larger number of concurrent connections and significantly improve stability. If possible, you can enable Huge Page to achieve similar effects, even though the principles are different.
5. By default, PG is IO-bound, but after the optimizations mentioned above, it becomes CPU-bound.
6. ACK and SLB networks are robust, meeting performance and stability requirements.
7. K8s offers convenient adjustments to filesystem and PG parameters, and different combinations of tests can be conducted rapidly and effectively. Moreover, running a database on K8s does not incur performance degradation. With general tuning, the database can exhibit excellent results. K8s provides more freedom and autonomy to users with fewer restrictions.
