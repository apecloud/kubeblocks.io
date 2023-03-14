"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?o.createElement(b,s(s({ref:t},p),{},{components:a})):o.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Monitor database",description:"How to monitor your database",sidebar_position:1},s="Observability of KubeBlocks",i={unversionedId:"user_docs/kubeblocks-for-postgresql/observability/monitor-database",id:"user_docs/kubeblocks-for-postgresql/observability/monitor-database",title:"Monitor database",description:"How to monitor your database",source:"@site/docs/user_docs/kubeblocks-for-postgresql/observability/monitor-database.md",sourceDirName:"user_docs/kubeblocks-for-postgresql/observability",slug:"/user_docs/kubeblocks-for-postgresql/observability/monitor-database",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/observability/monitor-database",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-postgresql/observability/monitor-database.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Monitor database",description:"How to monitor your database",sidebar_position:1},sidebar:"docs",previous:{title:"Access logs",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/observability/access-logs"},next:{title:"Configure IM alert",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/observability/alert"}},l={},c=[{value:"Monitor PostgreSQL database",id:"monitor-postgresql-database",level:2},{value:"Enable database monitor",id:"enable-database-monitor",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"observability-of-kubeblocks"},"Observability of KubeBlocks"),(0,n.kt)("p",null,"With the built-in database observability, you can observe the database health status and track and measure your database in real-time to optimize database performance. This section shows you how database observability works with KubeBlocks and how to use the function."),(0,n.kt)("h2",{id:"monitor-postgresql-database"},"Monitor PostgreSQL database"),(0,n.kt)("p",null,"KubeBlocks integrates open-source monitoring components such as Prometheus, AlertManager, and Granfana. KubeBlocks also uses open-source and customized Prometheus Exporter for exporting database indicators. The monitoring function is enabled by default when you install KubeBlocks and no other operation is required."),(0,n.kt)("h2",{id:"enable-database-monitor"},"Enable database monitor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Steps:"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install monitor components.\nIf you didn't install KubeBlocks, monitoring components (Prometheus/AlertManager/Grafana) are installed by default with the installation of KubeBlocks. The installation command line is as follows, see detailed information in ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"},"Install KubeBlocks"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install\n")),(0,n.kt)("p",{parentName:"li"}," You can disable the monitoring function when installing KubeBlocks by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"--monitor")," option. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install --monitor=false\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"--monitor")," is set as true by default and it is not recommended to disable the monitoring function.")),(0,n.kt)("p",{parentName:"li"},"If you have KubeBlocks installed, you can install monitoring components with ",(0,n.kt)("inlineCode",{parentName:"p"},"kbcli kubeblocks upgrade"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks upgrade --monitor=true\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," "),(0,n.kt)("p",{parentName:"blockquote"},"Prometheus uses PersistentVolume to ensure the historical data is not lost in case of failover or reinstallation. When Prometheus is installed, the default setting is to save 3 days of historical data with a PersistentVolume of 8Gi, which can ensure normal startup in most environments. As for production environments, it is recommended to evaluate the data retention days and the size of the PersistentVolume. You can also enable high availability or use ",(0,n.kt)("inlineCode",{parentName:"p"},"remote write")," to write to remote storage. ")),(0,n.kt)("p",{parentName:"li"}," To configure saving days, volume size, HA, and remote write, when installing or updating KubeBlocks, enable Prometheus with the following parameters."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli kubeblocks [install | upgrade] --monitor=true\\\n--set "prometheus.server.remoteWrite={url1,url2}" # remoteWrite address. Multiple addresses are supported. It is recommended to enable this option in the production environment for long-term data storage.\n--set prometheus.server.persistentVolume.size=8Gi # PersistentVolume size. The default value is 1Gi. It is recommended to set the value to 8Gi or more in a production environment. You can evaluate this value according to the retention period and the collected database instance amount.\n--set prometheus.server.replicaCount=2 # Set the instance amount of Prometheus. The default value is 1. If there is a demand for high availability,  you can set it to 2 and then deduplication capability is required for remote write to remote storage.\n--set prometheus.server.retention=15d  # Set the data retention period. The default is 15 days.\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"View the Web Console of the monitoring components.\nRun the command below to view the Web Console list of the monitoring components after the components are installed."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard list\n>\nNAME                                      NAMESPACE        PORT        CREATED-TIME\nkubeblocks-grafana                        default          3000        Jan 13,2023 10:53 UTC+0800\nkubeblocks-prometheus-alertmanager        default          9093        Jan 13,2023 10:53 UTC+0800\nkubeblocks-prometheus-server              default          9090        Jan 13,2023 10:53 UTC+0800\n")),(0,n.kt)("p",{parentName:"li"},"For the Web Console list returned by the above command, if you want to view the Web Console of a specific monitoring component, run the command below and this command enables the port-forward of your local host and opens the default browser:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard open <name>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the database monitoring function.\nThe monitoring function is enabled by default when a database is created. The open-source or customized Exporter is injected after the monitoring function is enabled. This Exporter can be found by Prometheus server automatically and scrape monitoring indicators at regular intervals. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For a new cluster, run the command below to create a database cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create <name> --cluster-definition='xxx'\n")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Example"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create pg-cluster --cluster-definition='postgresql'\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," "),(0,n.kt)("p",{parentName:"blockquote"},"The setting of ",(0,n.kt)("inlineCode",{parentName:"p"},"monitor")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by default and it is not recommended to disable it. For example,"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create mycluster --cluster-definition='postgresql' --monitor=false\n")),(0,n.kt)("p",{parentName:"blockquote"},"You can change the value to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," to disable the monitor function if required."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the existing cluster, you can update it to enable the monitor function with ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster update <name> --monitor=true\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Example"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster update pg-cluster --monitor=true\n")))))),(0,n.kt)("p",null,"You can view the dashboard of the corresponding cluster via Grafana Web Console. For more detailed information, see ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/"},"Grafana documentation"),"."))}m.isMDXComponent=!0}}]);