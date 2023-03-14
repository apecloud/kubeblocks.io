"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"ApeCloud MySQL introduction",description:"What is Apeloud MySQL?",sidebar_position:1},o="ApeCloud MySQL introduction",i={unversionedId:"user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/apecloud-mysql-intro",id:"version-release-0.4/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/apecloud-mysql-intro",title:"ApeCloud MySQL introduction",description:"What is Apeloud MySQL?",source:"@site/versioned_docs/version-release-0.4/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/apecloud-mysql-intro.md",sourceDirName:"user_docs/kubeblocks-for-mysql/apecloud-mysql-intro",slug:"/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/apecloud-mysql-intro.md",tags:[],version:"release-0.4",sidebarPosition:1,frontMatter:{title:"ApeCloud MySQL introduction",description:"What is Apeloud MySQL?",sidebar_position:1},sidebar:"docs",previous:{title:"Configure pod affinity for database clusters",permalink:"/docs/release-0.4/user_docs/resource-scheduling-and-management/configure-pod-affinity-for-database-cluster"},next:{title:"Configure a cluster",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/configuration/"}},s={},d=[{value:"Instance Roles",id:"instance-roles",level:2},{value:"Failover",id:"failover",level:3},{value:"Read-only",id:"read-only",level:3},{value:"Fault tolerance",id:"fault-tolerance",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apecloud-mysql-introduction"},"ApeCloud MySQL introduction"),(0,n.kt)("p",null,"ApeCloud MySQL is a high-availability MySQL database provided by ApeCloud. It is fully compatible with MySQL with high availability(HA) and disaster recovery(DR) to help ensure business continuity for your database workloads."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When there are 3 or more replicas,  a strong consistent high-availability cluster is created with the consensus algorithm protocol to ensure that RPO=0 in the case of a single availability zone failure. Among them, the primary instance provides read/write capacity, and the remaining instances provide read-only services."),(0,n.kt)("li",{parentName:"ul"},"When there are 2 replicas, a Primary-Secondary replication cluster is created, in which the primary instance provides read/write capacity, and the secondary instance keeps in sync with the primary instance with asynchronous replication, providing read-only and fault tolerance capabilities."),(0,n.kt)("li",{parentName:"ul"},"When there is only 1 instance, a standalone cluster is created to provide read/write capacity. Automatic fault recovery capability is still provided, and RPO=0 remains ensured if the cloud disk is not damaged.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:")),"  "),(0,n.kt)("p",{parentName:"blockquote"},"In this guide, we use KubeBlocks to manage ApeCloud MySQL.")),(0,n.kt)("h2",{id:"instance-roles"},"Instance Roles"),(0,n.kt)("p",null,"ApeCloud MySQL supports four roles, Leader, Follower, Candidate, and Learner. The Leader and a Follower form a high-availability cluster and ensure RPO=0."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leader: This role is the primary instance of the cluster, and supports R/W with forced consistency. It is voted by all the Candidates participating in the election. The Candidates with the majority of votes become the Leader, and the other Candidates become the Follower.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Follower: Follower supports data consistency with read-only capacity, and forms a high-availability cluster with Leader and other Followers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Learner: This role is usually used for cross-regional consistent read-only data. Data synchronization is performed through the Paxos protocol, and the data source can be a Leader or a Follower. The learner is a special role in the consensus algorithm protocol, and does not participate in voting or being elected as a Candidate role.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Candidate: The Candidate is an intermediate role that exists only during the election process or when a majority number is not enough to select the Leader role.  Normally, all Candidates in a high availability cluster will eventually become a Leader or a Follower after the election is completed."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role"),(0,n.kt)("th",{parentName:"tr",align:null},"Leader"),(0,n.kt)("th",{parentName:"tr",align:null},"Follower"),(0,n.kt)("th",{parentName:"tr",align:null},"Learner"),(0,n.kt)("th",{parentName:"tr",align:null},"Candidate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Capcity")),(0,n.kt)("td",{parentName:"tr",align:null},"RW/HA"),(0,n.kt)("td",{parentName:"tr",align:null},"RO/HA"),(0,n.kt)("td",{parentName:"tr",align:null},"RO"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Role_changing",src:a(37617).Z,width:"527",height:"333"})),(0,n.kt)("h3",{id:"failover"},"Failover"),(0,n.kt)("p",null,"A failover is the redirection of traffic and switches the running tasks from a primary instance to a secondary instance. "),(0,n.kt)("h3",{id:"read-only"},"Read-only"),(0,n.kt)("p",null,"Replicas provide read-only capabilities. In addition to the Follower that can provide read-only capabilities, you can also expand the read-only capabilities of the cluster by adding Learner roles. It should be noted that when performing read-only operations through Follower or Learner, there may be a data delay with the Leader. This delay may be caused by a log synchronization delay or a log playback delay."),(0,n.kt)("h2",{id:"fault-tolerance"},"Fault tolerance"),(0,n.kt)("p",null,"The cluster supports node fault tolerance. Suppose the number of replicas is n, then the number of faulty replicas that can be tolerated is ",(0,n.kt)("inlineCode",{parentName:"p"},"floor (n/2) + 1\uff0cn=[1,99]"),", which meets the requirements of the Paxos algorithm protocol. Based on this, it can be obtained that under the specified tolerable number f of ApeCloud MySQL cluster nodes, the number of replicas that need to be created is n=2*f+1, f>=0. For example, if the tolerable number of faulty replicas is 1, then according to the formula, the minimum number of replicas in the cluster is 3, that is, in a Paxos group, the continuous service capability of the cluster with 1 faulty replica is guaranteed. According to the table below, it can be seen that it is more cost-effective to create an odd number of replicas."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Replicas in Cluster"),(0,n.kt)("th",{parentName:"tr",align:null},"Node Majority"),(0,n.kt)("th",{parentName:"tr",align:null},"Nodes Tolerable"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"4")))))}p.isMDXComponent=!0},37617:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/intro_role_changing-b4123a1d9126c52316bc479e5c81ffab.png"}}]);