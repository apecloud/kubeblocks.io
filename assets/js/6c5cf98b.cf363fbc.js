"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={slug:"second-blog-post",title:"Why isn't the open-source database Operator popular?",description:"Kubernetes and open-source Operators are becoming increasingly prevalent but why isn't the open-source database Operator popular?",authors:{name:"Thomas",url:"https://github.com/realzyy",image_url:"https://avatars.githubusercontent.com/u/1814084?v=4"},tags:["database operator","open source"],image:"https://github.com/apecloud/kubeblocks.io/blob/master/blog/assets/test.png"},s="Why isn't the open-source database Operator popular?",i={permalink:"/blog/second-blog-post",editUrl:"https://github.com/apecloud/kubeblocks.io/tree/master/blog/2023-02-15-discuss-on-open-source-operator.md",source:"@site/blog/2023-02-15-discuss-on-open-source-operator.md",title:"Why isn't the open-source database Operator popular?",description:"Kubernetes and open-source Operators are becoming increasingly prevalent but why isn't the open-source database Operator popular?",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"database operator",permalink:"/blog/tags/database-operator"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:4.845,hasTruncateMarker:!1,authors:[{name:"Thomas",url:"https://github.com/realzyy",image_url:"https://avatars.githubusercontent.com/u/1814084?v=4",imageURL:"https://avatars.githubusercontent.com/u/1814084?v=4"}],frontMatter:{slug:"second-blog-post",title:"Why isn't the open-source database Operator popular?",description:"Kubernetes and open-source Operators are becoming increasingly prevalent but why isn't the open-source database Operator popular?",authors:{name:"Thomas",url:"https://github.com/realzyy",image_url:"https://avatars.githubusercontent.com/u/1814084?v=4",imageURL:"https://avatars.githubusercontent.com/u/1814084?v=4"},tags:["database operator","open source"],image:"https://github.com/apecloud/kubeblocks.io/blob/master/blog/assets/test.png"}},l={authorsImageUrls:[void 0]},p=[{value:"A comparison of fully managed databases and open-source database operator",id:"a-comparison-of-fully-managed-databases-and-open-source-database-operator",level:2},{value:"How far is the open-source operator from becoming popular?",id:"how-far-is-the-open-source-operator-from-becoming-popular",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It's unusual that even though Kubernetes and open-source Operators are becoming increasingly prevalent, many Kubernetes developers still opt to use fully managed database services provided by cloud vendors to construct their applications. The database engines of AWS Aurora or Snowflake are robust, although they are not open source, so there's nothing inherently wrong with utilizing them in Kubernetes. However, what's most perplexing is the use of RDS (such as RDS for MySQL or RDS for PostgreSQL), whose database engine is essentially the same as the open-source community version; what is hindering developers from utilizing various open-source database Operators to create a completely Kubernetes-native application architecture?"),(0,n.kt)("h2",{id:"a-comparison-of-fully-managed-databases-and-open-source-database-operator"},"A comparison of fully managed databases and open-source database operator"),(0,n.kt)("p",null,"Surprisingly developers have not yet realized the cost discrepancy between fully-managed database services and equivalent computing resources, given that the cost of the former is 150% to 400% higher.\nComparison of fully managed database cost and computing resource cost:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Public Cloud Provider"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Deployment"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Fully Managed Database Cost ($/hour)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Computing Resource Cost ($/hour)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Fully Managed Database Cost/Computing Resource Cost"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"stand-alone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.258"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1344"),(0,n.kt)("td",{parentName:"tr",align:"left"},"192%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oregon 4C/16GB ",(0,n.kt)("br",null),"t4g.xlarge")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"one standby"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.517"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2688"),(0,n.kt)("td",{parentName:"tr",align:"left"},"192%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oregon 4C/16GB ",(0,n.kt)("br",null),"t4g.xlarge")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"two standbys"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.5424"),(0,n.kt)("td",{parentName:"tr",align:"left"},"192%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oregon 4C/16GB ",(0,n.kt)("br",null),"m6gd.xlarge")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"stand-alone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2772"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.134"),(0,n.kt)("td",{parentName:"tr",align:"left"},"206%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oregon 4C/16GB ",(0,n.kt)("br",null),"e2-standard-4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.5544"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.268"),(0,n.kt)("td",{parentName:"tr",align:"left"},"206%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oregon 4C/16GB ",(0,n.kt)("br",null),"e2-standard-4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure"),(0,n.kt)("td",{parentName:"tr",align:"left"},"stand-alone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.39"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.198"),(0,n.kt)("td",{parentName:"tr",align:"left"},"197%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"West US 4C/16GB ",(0,n.kt)("br",null),"B4ms / D4as")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Azure"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.47"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.396"),(0,n.kt)("td",{parentName:"tr",align:"left"},"371%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"West US 4C/16GB ",(0,n.kt)("br",null),"B4ms / D4as")))),(0,n.kt)("p",null,"In terms of capabilities, the open-source database Operator offers a comprehensive deployment configuration. Although its functionality may not be completely covered by fully-managed database services, it cannot be argued that there is a significant difference. Let's take MySQL as an example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both AWS RDS and the open-source database Operator support stand-alone and multiple standby/read replica configurations, with the latter utilizing Group Replication and Proxy to achieve the same functionality."),(0,n.kt)("li",{parentName:"ul"},"AWS RDS has the ability to perform data backups through physical or logical methods, while the open-source database Operator can achieve similar results using CSI or backup software."),(0,n.kt)("li",{parentName:"ul"},"In terms of monitoring, AWS RDS has a robust Performance Insight, but the open-source database Operator usually relies on a more common combination of Prometheus and Grafana. This difference may not be noticeable to developers."),(0,n.kt)("li",{parentName:"ul"},"There is a significant difference in terms of compliance and user experience. AWS RDS has passed SOC, PCI, and other compliance projects, but running the open-source database Operator on AWS EKS with caution can provide a similar level of data protection.")),(0,n.kt)("h2",{id:"how-far-is-the-open-source-operator-from-becoming-popular"},"How far is the open-source operator from becoming popular?"),(0,n.kt)("p",null,"While the open-source database Operator offers a significantly lower cost and appears to provide essential features, it is not as widely adopted as the fully managed database service from cloud vendors. Our discussions with many users revealed an intriguing phenomenon: among offline users who have limited access to cloud vendors, the open-source database Operator is more popular and comparable in popularity to Kubernetes itself.\nMany users noted that even though fully managed database services encounter various issues, they are typically resolved through the cloud provider's automation program or the operations team. On the other hand, while the open-source database Operator is rapidly improving, it still lacks the capability to self-repair and there is no support from operations personnel. This partially explains why the open-source database Operator is favored among offline users as having a dedicated operations team handling problems can be more comforting from an operational efficiency standpoint."),(0,n.kt)("p",null,"The Kubernetes community primarily categorizes user roles into two types: developers who deploy applications and operations staff who manage the cluster. Developers can independently expand the database by utilizing the open-source database operator. However, if there is a lack of resources, operations staff need to quickly add resources to the Kubernetes cluster. While they usually understand the resource needs of the application, they may not have a good understanding of the resources required by the database, which can lead to occasional problems like abnormal database synchronization that are hard to handle and cause stress. If developers also handle operations tasks (known as DevOps), the added workload and cognitive burden may discourage them from handling database operators and adopting fully managing the database service instead."),(0,n.kt)("p",null,"Aside from the reasons mentioned earlier, the inadequate integration of open-source database operators may also contribute to a less smooth user experience compared to fully managed database services. For instance, when creating a backup for MySQL, an open-source database operator may require additional steps such as allocating resources and configuring accounts for an object storage service in the Kubernetes cluster to store the backup file, whereas fully managed database services do not need these steps. Additionally, complex applications often involve multiple types of databases, such as MySQL and Redis. This may result in inconsistent user experiences with open-source database operators, whereas fully managed database services offer a unified design across the console, command line, and API, although the experience is often criticized."),(0,n.kt)("p",null,"Even though there are challenges such as cognitive burden and limited integration, Kubernetes will continue to improve developer productivity and resource utilization, leading to a lasting influence on the world.\nThese difficulties will eventually be overcome. If you face any issues with Kubernetes that cannot be resolved by open-source database operators or have any valuable experiences to share, please respond to ",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/kubeblocks/shared_invite/zt-1oz1hjyfk-UZwOJt8fge2TtWkTnuVfJg"},"KubeBlocks")," or ",(0,n.kt)("a",{parentName:"p",href:"https://dokcommunity.slack.com/join/shared_invite/zt-10v7uncvp-jNFwulsVWvUO0SKMDTjwAw#/shared-invite/email"},"DoK")," to assist the Kubernetes community in advancing more rapidly."))}d.isMDXComponent=!0}}]);