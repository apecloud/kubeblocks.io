"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(m,c(c({ref:t},u),{},{components:n})):a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Connect database in production environment",description:"How to connect to a database in production environment",sidebar_position:3},c="Connect database in production environment",s={unversionedId:"user_docs/connect_database/connect-database-in-production-environment",id:"version-release-0.4/user_docs/connect_database/connect-database-in-production-environment",title:"Connect database in production environment",description:"How to connect to a database in production environment",source:"@site/versioned_docs/version-release-0.4/user_docs/connect_database/connect-database-in-production-environment.md",sourceDirName:"user_docs/connect_database",slug:"/user_docs/connect_database/connect-database-in-production-environment",permalink:"/docs/release-0.4/user_docs/connect_database/connect-database-in-production-environment",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/connect_database/connect-database-in-production-environment.md",tags:[],version:"release-0.4",sidebarPosition:3,frontMatter:{title:"Connect database in production environment",description:"How to connect to a database in production environment",sidebar_position:3},sidebar:"docs",previous:{title:"Connect database in testing environment",permalink:"/docs/release-0.4/user_docs/connect_database/connect-database-in-testing-environment"},next:{title:"Configure pod affinity for database clusters",permalink:"/docs/release-0.4/user_docs/resource-scheduling-and-management/configure-pod-affinity-for-database-cluster"}},i={},l=[{value:"Procedure 3.  To connect database in the same Kubernetes cluster.",id:"procedure-3--to-connect-database-in-the-same-kubernetes-cluster",level:2},{value:"Procedure 4. To connect database with clients in other VPCs or public networks",id:"procedure-4-to-connect-database-with-clients-in-other-vpcs-or-public-networks",level:2},{value:"Procedure 5. The client is outside the Kubernetes cluster but in the same VPC as the Kubernetes cluster",id:"procedure-5-the-client-is-outside-the-kubernetes-cluster-but-in-the-same-vpc-as-the-kubernetes-cluster",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-database-in-production-environment"},"Connect database in production environment"),(0,r.kt)("p",null,"In the production environment, it is normal to connect a database with CLI and SDK clients. There are three scenarios."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scenario 1: Client1 and the database are in the same Kubernetes cluster. To connect client1 and the database, see ",(0,r.kt)("a",{parentName:"li",href:"#procedure-3--to-connect-database-in-the-same-kubernetes-cluster"},"Procedure 3"),"."),(0,r.kt)("li",{parentName:"ul"},"Scenario 2: Client2 is outside the Kubernetes cluster, but it is in the same VPC as the database. To connect client2 and the database, see ",(0,r.kt)("a",{parentName:"li",href:"#procedure-5-the-client-is-outside-the-kubernetes-cluster-but-in-the-same-vpc-as-the-kubernetes-cluster"},"Procedure 5"),"."),(0,r.kt)("li",{parentName:"ul"},"Scenario 3: Client3 and the database are in different VPCs, such as other VPCs or the public network. To connect client3 and the database, see ",(0,r.kt)("a",{parentName:"li",href:"#procedure-4-to-connect-database-with-clients-in-other-vpcs-or-public-networks"},"Procedure 4"),".")),(0,r.kt)("p",null,"See the figure below to get a clear image of the network location.\n",(0,r.kt)("img",{alt:"Example",src:n(75328).Z,width:"868",height:"604"})),(0,r.kt)("h2",{id:"procedure-3--to-connect-database-in-the-same-kubernetes-cluster"},"Procedure 3.  To connect database in the same Kubernetes cluster."),(0,r.kt)("p",null,"You can connect with the database ClusterIP or domain name. To check the database endpoint, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli cluster describe ${cluster-name}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe x\n>\nName: x         Created Time: Mar 01,2023 11:45 UTC+0800\nNAMESPACE   CLUSTER-DEFINITION   VERSION           STATUS    TERMINATION-POLICY\ndefault     apecloud-mysql       ac-mysql-8.0.30   Running   Delete\n\nEndpoints:\nCOMPONENT   MODE        INTERNAL                                 EXTERNAL\nx           ReadWrite   x-mysql.default.svc.cluster.local:3306   <none>\n\nTopology:\nCOMPONENT   INSTANCE    ROLE     STATUS    AZ                NODE                                                       CREATED-TIME\nmysql       x-mysql-0   leader   Running   cn-northwest-1b   ip-10-0-2-184.cn-northwest-1.compute.internal/10.0.2.184   Mar 01,2023 11:45 UTC+0800\n\nResources Allocation:\nCOMPONENT   DEDICATED   CPU(REQUEST/LIMIT)   MEMORY(REQUEST/LIMIT)   STORAGE-SIZE   STORAGE-CLASS\nmysql       false       1 / 1                1Gi / 1Gi               data:10Gi      <none>\n\nImages:\nCOMPONENT   TYPE    IMAGE\nmysql       mysql   registry.cn-hangzhou.aliyuncs.com/apecloud/apecloud-mysql-server:8.0.30-5.alpha2.20230105.gd6b8719.2\n\nEvents(last 5 warnings, see more:kbcli cluster list-events -n default x):\nTIME   TYPE   REASON   OBJECT   MESSAGE\n")),(0,r.kt)("h2",{id:"procedure-4-to-connect-database-with-clients-in-other-vpcs-or-public-networks"},"Procedure 4. To connect database with clients in other VPCs or public networks"),(0,r.kt)("p",null,"You can enable the External LoadBalancer of the cloud vendor."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"The following command will create a LoadBalancer instance for the database instance, which will incur costs from cloud vendor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster expose ${cluster-name} --type internet --enable=true\n")),(0,r.kt)("p",null,"To disable the LoadBalancer instance, execute the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster expose ${cluster-name} --type internet --enable=false\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"The instance is inaccessible after you disable the LoadBalancer instance.")),(0,r.kt)("h2",{id:"procedure-5-the-client-is-outside-the-kubernetes-cluster-but-in-the-same-vpc-as-the-kubernetes-cluster"},"Procedure 5. The client is outside the Kubernetes cluster but in the same VPC as the Kubernetes cluster"),(0,r.kt)("p",null,"A stable domain name for long-term connections is required. An Internal LoadBalancer provided by the cloud vendor can be used for this purpose."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"The following command will create a LoadBalancer instance for the database instance, which will incur costs from cloud vendor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster expose ${cluster-name} --type vpc --enable=true\n")),(0,r.kt)("p",null,"To disable the LoadBalancer instance, execute the following command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"Once disabled, the instance is not accessible.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster expose ${cluster-name} --type vpc --enable=false\n")))}p.isMDXComponent=!0},75328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect_database_in_a_production_environment-74db396069575adf8fe190c6205d27c5.png"}}]);