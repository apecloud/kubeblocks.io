"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[29],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const o={slug:"third-blog-post",title:"A Comparison and Analysis of ApeCloud MySQL High Availability Solutions",description:"This is a comparison and analysis of current high availability solutions.",authors:{name:"Dehao Wang",url:"https://github.com/IWonderWang",image_url:"https://avatars.githubusercontent.com/u/8622632?v=4"},tags:["high availability"]},r="A Comparison and Analysis of ApeCloud MySQL High Availability Solutions",l={permalink:"/blog/third-blog-post",editUrl:"https://github.com/apecloud/kubeblocks.io/tree/master/blog/2023-03-28-comparison-and-analysis-of-apecloud-mysql-high-availability-solutions.md",source:"@site/blog/2023-03-28-comparison-and-analysis-of-apecloud-mysql-high-availability-solutions.md",title:"A Comparison and Analysis of ApeCloud MySQL High Availability Solutions",description:"This is a comparison and analysis of current high availability solutions.",date:"2023-03-28T00:00:00.000Z",formattedDate:"March 28, 2023",tags:[{label:"high availability",permalink:"/blog/tags/high-availability"}],readingTime:12.53,hasTruncateMarker:!1,authors:[{name:"Dehao Wang",url:"https://github.com/IWonderWang",image_url:"https://avatars.githubusercontent.com/u/8622632?v=4",imageURL:"https://avatars.githubusercontent.com/u/8622632?v=4"}],frontMatter:{slug:"third-blog-post",title:"A Comparison and Analysis of ApeCloud MySQL High Availability Solutions",description:"This is a comparison and analysis of current high availability solutions.",authors:{name:"Dehao Wang",url:"https://github.com/IWonderWang",image_url:"https://avatars.githubusercontent.com/u/8622632?v=4",imageURL:"https://avatars.githubusercontent.com/u/8622632?v=4"},tags:["high availability"]},nextItem:{title:"Why isn't the open-source database Operator popular?",permalink:"/blog/second-blog-post"}},s={authorsImageUrls:[void 0]},c=[{value:"Overview of Database High Availability",id:"overview-of-database-high-availability",level:2},{value:"What is Database High Availability?",id:"what-is-database-high-availability",level:3},{value:"Four Capabilities for Achieving High Availability",id:"four-capabilities-for-achieving-high-availability",level:3},{value:"Compute Redundancy",id:"compute-redundancy",level:4},{value:"Data Redundancy/Replication",id:"data-redundancyreplication",level:4},{value:"Failover Management",id:"failover-management",level:4},{value:"Service Endpoint Provisioning",id:"service-endpoint-provisioning",level:4},{value:"Comparison between ApeCloud MySQL and other Main Stream MySQL High Availability Solutions",id:"comparison-between-apecloud-mysql-and-other-main-stream-mysql-high-availability-solutions",level:2},{value:"MySQL primary-replica/primary-primary replication",id:"mysql-primary-replicaprimary-primary-replication",level:3},{value:"MySQL Group Replication",id:"mysql-group-replication",level:3},{value:"Percona XtraDB Cluster",id:"percona-xtradb-cluster",level:3},{value:"ApeCloud MySQL Paxos Group",id:"apecloud-mysql-paxos-group",level:3},{value:"Comparison",id:"comparison",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview-of-database-high-availability"},"Overview of Database High Availability"),(0,n.kt)("p",null,"In today\u2019s always-on digital world, any downtime can lead to lost revenue, decreased productivity, and unhappy customers. This is especially true for businesses that rely heavily on databases to store and manage data. Achieving high availability in a database system is crucial to ensure that a business\u2019s databases are always accessible and operational. In this article, we will provide an overview of database high availability and the four capabilities required to achieve it."),(0,n.kt)("h3",{id:"what-is-database-high-availability"},"What is Database High Availability?"),(0,n.kt)("p",null,"Database high availability is the ability of a database system to remain operational and accessible even in the event of failures or outages. This is achieved by implementing various techniques like failover, replication, clustering, and load balancing. The goal of high availability is to ensure that the database can continue to function and provide access to data even if one or more components fail."),(0,n.kt)("h3",{id:"four-capabilities-for-achieving-high-availability"},"Four Capabilities for Achieving High Availability"),(0,n.kt)("p",null,"To achieve high availability in a database system, the following four capabilities are required:"),(0,n.kt)("h4",{id:"compute-redundancy"},"Compute Redundancy"),(0,n.kt)("p",null,"The computing layer redundancy is responsible for ensuring that when one instance fails, another can quickly take its place and continue providing read and write services. This can be achieved through creating multiple database instances to form a cluster. There are two ways to deploy redundancy at the computing layer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active-Passive Mode"),": Only one replica in the cluster provides read-write services, while the others can only offer read-only services.  Examples of this approach include MySQL primary-replica replication, SQL Server Failover Cluster Instance (FCI), and others. It's important to note that replicas can share a copy of the data (such as in SQL Server FCI), or they can store a separate copy of the data and synchronize it using a replication protocol (like in MySQL)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Active-Active Mode"),": Multiple copies in the cluster provide read and write services simultaneously, such as Oracle RAC, MySQL Group Replication, and similar systems. Compared to the active-passive mode, this method has a faster switching speed and potentially higher resource utilization and load capacity. However, it requires addressing or bypassing write conflicts to ensure data consistency.")),(0,n.kt)("h4",{id:"data-redundancyreplication"},"Data Redundancy/Replication"),(0,n.kt)("p",null,"Data redundancy or replication ensures that multiple copies of the service have their own copy of the data, enhancing database durability, and preventing data loss resulting from data corruption. Different levels of data redundancy can be achieved using the following approaches:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage-Level Redundancy"),": Multiple instances mount the same EBS, DRBD, establishing disk data mirroring between two servers, or rely on a clustered file system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database-Level Redundancy"),": The replication module of the database system realizes data synchronization between replicas. The choice of synchronization method may affect the consistency, availability, and performance of the database system. Common synchronization methods include: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Asynchronous replication, such as MySQL Asynchronous Replication. Data is persisted in the primary copy first, and the data is asynchronously transmitted to other copies. This method has low write latency, and the failure of any copy does not affect availability. However, there is no guarantee that data will not be lost."),(0,n.kt)("li",{parentName:"ul"},"Synchronous replication, such as MySQL primary-replica synchronous replication and Percona XtraDB Cluster. Only after the data is persisted in the replicas can the user be notified of the successful writing. If any copy fails, there will be zero data loss, but it will also cause a large write delay. When any replica fails, the database system may be unable to provide service."),(0,n.kt)("li",{parentName:"ul"},"Replication based on consensus protocols, such as MySQL Group Replication and ApeCloud MySQL Paxos Group. Based on the consensus protocol represented by Paxos, data is synchronized among multiple replicas (generally no less than 3) to ensure consistency. It steps on the sweet spot between synchronous and asynchronous replication: a fixed number (more than half) of replicas need to be in sync to tell the user that the write was successful, but it doesn't matter which replicas. Guaranteed no data loss (RPO = 0) while tolerating certain node/network failures."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External/Application-Level Redundancy"),": Uses Kafka to pass messages to synchronize data or self-developed data synchronization programs, such as DTS, to achieve high availability on top of the database.")))),(0,n.kt)("p",null,"The implementation of storage-level redundancy and external redundancy relies on non-database systems, which is not the focus of this article."),(0,n.kt)("h4",{id:"failover-management"},"Failover Management"),(0,n.kt)("p",null,"Failover management monitors the failure of the primary of the database and upgrades another replica to a primary to provide external services."),(0,n.kt)("h4",{id:"service-endpoint-provisioning"},"Service Endpoint Provisioning"),(0,n.kt)("p",null,"Service endpoint provisioning ensures that the application system remains connected to the database even in the event of a failover, and can be achieved through elastic load balancing or adding a layer of Proxy."),(0,n.kt)("h2",{id:"comparison-between-apecloud-mysql-and-other-main-stream-mysql-high-availability-solutions"},"Comparison between ApeCloud MySQL and other Main Stream MySQL High Availability Solutions"),(0,n.kt)("h3",{id:"mysql-primary-replicaprimary-primary-replication"},"MySQL primary-replica/primary-primary replication"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MySQL primary-replica/primary-primary replication",src:a(80639).Z,width:"1166",height:"655"})),(0,n.kt)("p",null,"MySQL's official high-availability solution is now the most popular method for building a multi-copy database cluster and establishing a one-way (primary-replica) or two-way (primary-primary) replication channel. With primary-primary replication, two MySQL instances are mutually active acting as each others' backup, and synchronize data. However, MySQL does not automatically handle write conflicts in this scenario. To avoid affecting database consistency, application developers usually have to find ways to bypass the write conflicts of multiple nodes, such as having each node write to different tables."),(0,n.kt)("p",null,"MySQL primary-replica supports asynchronous and semi-synchronous replication of data. In semi-synchronous mode, when network problems or node downtime occur, affecting availability, it will be automatically downgraded to asynchronous replication. However, there is still a significant risk of data loss and RPO=0 cannot be guaranteed in asynchronous replication scenarios if the primary copy fails, and other copies may not have pulled all the data."),(0,n.kt)("p",null,"The principle of the semi-synchronous mode is that when the data is successfully persisted on the Primary and the specified number of Replicas during the commit process, the success message is returned to the client. Therefore, even if the Primary fails, all the data that has notified the client of successful commit must be found on a certain Replica. However, transaction commit in semi-synchronous mode involves multiple nodes and does not adopt a distributed coordination protocol such as a two-phase commit (2PC). If there is a failure in the commit process, there is still a risk of data inconsistency."),(0,n.kt)("p",null,"For example, suppose transaction T is being committed, and a failure occurs when the primary is in the Wait ACK phase. Assume that the replica has not received the binlog of T at this time, and when the replica is upgraded to primary, the modification of transaction T is not included. During the original Primary recovery process, the transaction T will be applied according to the persistent log. At this time, the data of the two copies is inconsistent."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The architecture is simple, widely validated, natively supported by MySQL, and has a good mass base."),(0,n.kt)("li",{parentName:"ol"},"Only two nodes are required at least, with fewer resource requirements. It can be extended with more nodes when needed."),(0,n.kt)("li",{parentName:"ol"},"Flexible configuration, supporting user trade-offs between consistency and performance/availability.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Only solve the problem of data transmission, and rely on third-party HA components to help fault detection and primary and replica switchover."),(0,n.kt)("li",{parentName:"ol"},"Cannot guarantee data consistency between primary and replica."),(0,n.kt)("li",{parentName:"ol"},"Asynchronous replication can lead to data loss."),(0,n.kt)("li",{parentName:"ol"},"No conflict detection for multi-primary writes.")),(0,n.kt)("h3",{id:"mysql-group-replication"},"MySQL Group Replication"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MySQL group replication",src:a(58843).Z,width:"1550",height:"1062"})),(0,n.kt)("p",null,"The Paxos protocol has shined in the database field in recent years. Many database systems have introduced various variants of Paxos to ensure the consistency of data synchronization in multiple copies. The benefits of introducing the Paxos protocol are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On the premise of ensuring consistency, availability is maximized."),(0,n.kt)("li",{parentName:"ol"},"Decouple transaction commit logic and data synchronization logic.")),(0,n.kt)("p",null,"MySQL Group Replication (MGR) is a replication function based on the Paxos protocol officially launched by MySQL, which is embedded in MySQL as a plug-in. MGR supports single-node and multi-node writing, supports Leader election for single-node writing, and supports conflict detection and resolution for multi-node writing (multi-node writing mode has many restrictions, such as not supporting Serializable isolation level)."),(0,n.kt)("p",null,"However, there are certain problems in the design of MGR. The XCOM module (Paxos ) is embedded in MySQL as a plug-in. It is only responsible for deciding the commit order of transactions at the network level, not for persistence. The transaction commit is synchronized to other nodes through Paxos, and returns immediately after the log is persisted. That is to say, at the moment the transaction is committed, only the node (Primary) that accepts the request guarantees that the transaction is persistent. There are two problems with this design:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In extreme cases, if the three machines are down at the same time, and the primary node data is damaged. After the other nodes are restarted, the transaction that has just been successfully submitted disappears. That is to say, in the case of the loss of minority nodes, MGR may also experience data loss."),(0,n.kt)("li",{parentName:"ol"},'Even if the Primary node is not damaged, in order to ensure that data is not lost, it is necessary to manually designate the original leader node as the "seed" node when restarting.')),(0,n.kt)("p",null,"It can be seen that the current design of MGR does not fully utilize the power of Paxos, essentially because the Paxos protocol layer has no control over MySQL logs. You may ask: Why does the Replica node of MGR not wait for the log to be persisted before sending an ACK to the Primary node? Because of the current plug-in design of MGR, it is impossible to control the replica log apply. A Replica node persists the log successfully, but if the transaction fails to commit for some reason, the Replica will still apply the failed transaction."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Advantages"),"\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In theory, the Paxos protocol strictly guarantees the consistency of data on multiple copies."),(0,n.kt)("li",{parentName:"ol"},"Support multi-node update to improve resource utilization."),(0,n.kt)("li",{parentName:"ol"},"Compared with primary-replica clusters, it has failover management and automatic scaling capabilities.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Disadvatages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In order to support multi-node writing, there are more restrictions. See:"),(0,n.kt)("li",{parentName:"ol"},"Only the InnoDB engine is supported."),(0,n.kt)("li",{parentName:"ol"},"At least three nodes are required, and the cost is relatively high."),(0,n.kt)("li",{parentName:"ol"},"Many operation and maintenance operations require manual intervention, such as restarting to select seed nodes."),(0,n.kt)("li",{parentName:"ol"},"In extreme cases, minority data damage may result in data loss in the cluster.")),(0,n.kt)("h3",{id:"percona-xtradb-cluster"},"Percona XtraDB Cluster"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Percona XtraDB Cluster",src:a(10962).Z,width:"697",height:"990"})),(0,n.kt)("p",null,"Percona XtraDB Cluster (PXC) is an open-source high-availability deployment solution developed by Percona, which relies on the open-source Galera library for data synchronization in the cluster. It is named after its enhanced version of the InnoDB storage engine - XtraDB. "),(0,n.kt)("p",null,"p.s. MariaDB Galera Cluster, released by MariaDB, is also based on the Galera library and has similar capabilities to PXC."),(0,n.kt)("p",null,"Galera is a relatively complex distributed protocol. Below are some of the features of PXC based on Galera:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multiple primary synchronous replication is used, with instances in the cluster being equal and mutually primary-replica, and clients can connect to any instance."),(0,n.kt)("li",{parentName:"ul"},"Transaction commit requires successful writing to all nodes. Optimistic strategies are used for transaction commit, where transactions are broadcast to all nodes after being locally submitted, and each node determines whether to roll back (locally first, then notifies other nodes to roll back) in the event of a conflict."),(0,n.kt)("li",{parentName:"ul"},"When a node or network partition occurs, a majority of nodes that can still communicate with each other can automatically tolerate faults (exclude a minority of nodes that cannot write) and continue to provide writing. Therefore, it is recommended to deploy a single instance in the cluster.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Strong consistency of data across multiple nodes."),(0,n.kt)("li",{parentName:"ol"},"Supports multi-node updates, improving resource utilization."),(0,n.kt)("li",{parentName:"ol"},"Compared to primary-replica clusters, it has failover management and automatic scalability.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Disadvantages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Limited support for multi-node writing. For details, please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.percona.com/percona-xtradb-cluster/8.0/limitation.html"},"Percona XtraDB Cluster limitations - Percona XtraDB Cluster"),"."),(0,n.kt)("li",{parentName:"ol"},"Only supports the InnoDB engine."),(0,n.kt)("li",{parentName:"ol"},"Requires at least three nodes, which is costly."),(0,n.kt)("li",{parentName:"ol"},"All nodes synchronize writing, and performance depends on the worst-performing node's resources, so reasonable resource planning and scheduling are required.")),(0,n.kt)("h3",{id:"apecloud-mysql-paxos-group"},"ApeCloud MySQL Paxos Group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ApeCloud MySQL Paxos Group",src:a(45478).Z,width:"801",height:"1062"})),(0,n.kt)("p",null,"ApeCloud MySQL Paxos Group (AC-MPG) synchronizes data between replicas based on Raft, a variant of the Paxos protocol. Unlike MGR, AC-MPG has only one Leader to accept read and write requests, and other Follower nodes only respond to read requests. This design does not need to consider conflict detection. In terms of design, the Raft protocol layer is not embedded in MySQL as a plug-in, but is deeply integrated into the MySQL kernel, replacing the original replication module. The data synchronization between replicas is driven by the Raft Layer, and how to replicate and apply does not require external intervention. In order to realize higher efficiency, AC-MPG transforms Binlog as Raft log, so that Raft Layer can directly operate MySQL log."),(0,n.kt)("p",null,"Therefore, AC-MPG does not have the same problems as MGR mentioned in the previous section, because:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The condition for successful AC-MPG transaction commit is that the majority nodes persist the transaction log. The reason why this can be specified is that the Raft Layer is responsible for log transmission and apply. Even if the logs are successfully persisted on some nodes but the final transaction is not committed, the Raft Layer will not apply these logs according to the protocol. This is a capability that MGR does not have. In any case, if the data of the minority nodes is damaged, it will not cause the loss of cluster data."),(0,n.kt)("li",{parentName:"ol"},"Restarted nodes can automatically join the cluster without manual intervention.")),(0,n.kt)("p",null,"In addition to Leader and Follower, AC-MPG also supports other roles: (1) Low-cost Logger nodes that do not store data and have voting rights but not the right to be elected. When necessary, AC-MPG can be equivalent to the cost of MySQL primary and backup. (2) A Learner node that does not have voting rights and only synchronizes data."),(0,n.kt)("p",null,"In addition to supporting the InnoDB engine, AC-MPG also supports the LSM-Tree engine X-Engine with a higher compression rate to achieve lower costs."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Advantages"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Multi-copy data consistency, RPO=0."),(0,n.kt)("li",{parentName:"ol"},"Supports low-cost Logger nodes and flexible Learner nodes."),(0,n.kt)("li",{parentName:"ol"},"Support low-cost X-Engine."),(0,n.kt)("li",{parentName:"ol"},"With failover management and automatic scaling capabilities, no manual intervention is required.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Disadvantage"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Only single-node write is supported.")),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Redundancy (Cost)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Failover Management"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Consistency"),(0,n.kt)("th",{parentName:"tr",align:"left"},"RPO"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Write Performance"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multi-Write"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multi-Engine"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MySQL Replication Asynchronization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Low"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Weak"),(0,n.kt)("td",{parentName:"tr",align:"left"},"> 0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Strong"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MySQL Replication Synchronization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Low"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Strong"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MGR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"High"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Strong"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2248 0"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PXC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"High"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Strong"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ApeCloud MySQL Paxos Group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configurable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Strong"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")))))}h.isMDXComponent=!0},45478:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/apecloud-mysql-paxos-group-3c9e150c0acb1d2ad933db9cada669b0.png"},58843:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mysql-group-replication-fe68e60e4ab58a5b0cebdef512d3e899.png"},80639:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mysql-primary-replication-b9880df7a2e9c184b43b09bed21d7410.png"},10962:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/percona-xtraDB-cluster-54677dc13a3e3b971f3cb82a9f1d779d.png"}}]);