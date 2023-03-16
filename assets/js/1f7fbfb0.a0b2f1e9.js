"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1641],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>b});var r=l(67294);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,r,c=function(e,t){if(null==e)return{};var l,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)l=s[r],t.indexOf(l)>=0||(c[l]=e[l]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)l=s[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(c[l]=e[l])}return c}var n=r.createContext({}),o=function(e){var t=r.useContext(n),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=o(e.components);return r.createElement(n.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var l=e.components,c=e.mdxType,s=e.originalType,n=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=o(l),p=c,b=d["".concat(n,".").concat(p)]||d[p]||k[p]||s;return l?r.createElement(b,i(i({ref:t},u),{},{components:l})):r.createElement(b,i({ref:t},u))}));function b(e,t){var l=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=l.length,i=new Array(s);i[0]=p;var a={};for(var n in t)hasOwnProperty.call(t,n)&&(a[n]=t[n]);a.originalType=e,a[d]="string"==typeof e?e:c,i[1]=a;for(var o=2;o<s;o++)i[o]=l[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}p.displayName="MDXCreateElement"},44850:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=l(87462),c=(l(67294),l(3905));const s={title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",sidebar_position:1},i=void 0,a={unversionedId:"user_docs/cli/cli",id:"user_docs/cli/cli",title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",source:"@site/docs/user_docs/cli/cli.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/",permalink:"/docs/next/user_docs/cli/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/cli.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",sidebar_position:1},sidebar:"docs",previous:{title:"Configure pod affinity for database clusters",permalink:"/docs/next/user_docs/resource-scheduling/"},next:{title:"kbcli",permalink:"/docs/next/user_docs/cli/kbcli"}},n={},o=[{value:"addon",id:"addon",level:2},{value:"alert",id:"alert",level:2},{value:"app",id:"app",level:2},{value:"backup-config",id:"backup-config",level:2},{value:"bench",id:"bench",level:2},{value:"cluster",id:"cluster",level:2},{value:"clusterdefinition",id:"clusterdefinition",level:2},{value:"clusterversion",id:"clusterversion",level:2},{value:"dashboard",id:"dashboard",level:2},{value:"kubeblocks",id:"kubeblocks",level:2},{value:"options",id:"options",level:2},{value:"playground",id:"playground",level:2},{value:"version",id:"version",level:2}],u={toc:o},d="wrapper";function k(e){let{components:t,...l}=e;return(0,c.kt)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"addon"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_addon"},"addon")),(0,c.kt)("p",null,"Addon command."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_addon_describe"},"kbcli addon describe"),"\t - Describe an addon specification."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_addon_disable"},"kbcli addon disable"),"\t - Disable an addon."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_addon_enable"},"kbcli addon enable"),"\t - Enable an addon."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_addon_list"},"kbcli addon list"),"\t - List addons.")),(0,c.kt)("h2",{id:"alert"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_alert"},"alert")),(0,c.kt)("p",null,"Manage alert receiver, include add, list and delete receiver."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_alert_add-receiver"},"kbcli alert add-receiver"),"\t - Add alert receiver, such as email, slack, webhook and so on."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_alert_delete-receiver"},"kbcli alert delete-receiver"),"\t - Delete alert receiver."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_alert_list-receivers"},"kbcli alert list-receivers"),"\t - List all alert receivers.")),(0,c.kt)("h2",{id:"app"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_app"},"app")),(0,c.kt)("p",null,"Manage external applications related to KubeBlocks."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_app_install"},"kbcli app install"),"\t - Install the application with the specified name."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_app_uninstall"},"kbcli app uninstall"),"\t - Uninstall the application with the specified name.")),(0,c.kt)("h2",{id:"backup-config"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_backup-config"},"backup-config")),(0,c.kt)("p",null,"KubeBlocks backup config."),(0,c.kt)("h2",{id:"bench"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_bench"},"bench")),(0,c.kt)("p",null,"Run a benchmark."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_bench_tpcc"},"kbcli bench tpcc"),"\t - Run a TPCC benchmark.")),(0,c.kt)("h2",{id:"cluster"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_cluster"},"cluster")),(0,c.kt)("p",null,"Cluster command."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_backup"},"kbcli cluster backup"),"\t - Create a backup."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_configure"},"kbcli cluster configure"),"\t - Reconfigure parameters with the specified components in the cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_connect"},"kbcli cluster connect"),"\t - Connect to a cluster or instance."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_create"},"kbcli cluster create"),"\t - Create a cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_delete"},"kbcli cluster delete"),"\t - Delete clusters."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_delete-backup"},"kbcli cluster delete-backup"),"\t - Delete a backup."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_delete-ops"},"kbcli cluster delete-ops"),"\t - Delete an OpsRequest."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_delete-restore"},"kbcli cluster delete-restore"),"\t - Delete a restore job."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_describe"},"kbcli cluster describe"),"\t - Show details of a specific cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_describe-configure"},"kbcli cluster describe-configure"),"\t - Show details of a specific reconfiguring."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_describe-ops"},"kbcli cluster describe-ops"),"\t - Show details of a specific OpsRequest."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_diff-configure"},"kbcli cluster diff-configure"),"\t - Show the difference in parameters between the two submitted OpsRequest."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_explain-configure"},"kbcli cluster explain-configure"),"\t - List the constraint for supported configuration params."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_expose"},"kbcli cluster expose"),"\t - Expose a cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_hscale"},"kbcli cluster hscale"),"\t - Horizontally scale the specified components in the cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list"},"kbcli cluster list"),"\t - List clusters."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-accounts"},"kbcli cluster list-accounts"),"\t - List cluster accounts."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-backups"},"kbcli cluster list-backups"),"\t - List backups."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-components"},"kbcli cluster list-components"),"\t - List cluster components."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-events"},"kbcli cluster list-events"),"\t - List cluster events."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-instances"},"kbcli cluster list-instances"),"\t - List cluster instances."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-logs"},"kbcli cluster list-logs"),"\t - List supported log files in cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-ops"},"kbcli cluster list-ops"),"\t - List all opsRequests."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_list-restores"},"kbcli cluster list-restores"),"\t - List all restore jobs."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_logs"},"kbcli cluster logs"),"\t - Access cluster log file."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_restart"},"kbcli cluster restart"),"\t - Restart the specified components in the cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_restore"},"kbcli cluster restore"),"\t - Restore a new cluster from backup."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_start"},"kbcli cluster start"),"\t - Start the cluster if cluster is stopped."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_stop"},"kbcli cluster stop"),"\t - Stop the cluster and release all the pods of the cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_update"},"kbcli cluster update"),"\t - Update the cluster settings, such as enable or disable monitor or log."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_upgrade"},"kbcli cluster upgrade"),"\t - Upgrade the cluster version."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_volume-expand"},"kbcli cluster volume-expand"),"\t - Expand volume with the specified components and volumeClaimTemplates in the cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_cluster_vscale"},"kbcli cluster vscale"),"\t - Vertically scale the specified components in the cluster.")),(0,c.kt)("h2",{id:"clusterdefinition"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_clusterdefinition"},"clusterdefinition")),(0,c.kt)("p",null,"ClusterDefinition command."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_clusterdefinition_list"},"kbcli clusterdefinition list"),"\t - List ClusterDefinitions.")),(0,c.kt)("h2",{id:"clusterversion"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_clusterversion"},"clusterversion")),(0,c.kt)("p",null,"ClusterVersion command."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_clusterversion_list"},"kbcli clusterversion list"),"\t - List ClusterVersions.")),(0,c.kt)("h2",{id:"dashboard"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_dashboard"},"dashboard")),(0,c.kt)("p",null,"List and open the KubeBlocks dashboards."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_dashboard_list"},"kbcli dashboard list"),"\t - List all dashboards."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_dashboard_open"},"kbcli dashboard open"),"\t - Open one dashboard.")),(0,c.kt)("h2",{id:"kubeblocks"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_kubeblocks"},"kubeblocks")),(0,c.kt)("p",null,"KubeBlocks operation commands."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_install"},"kbcli kubeblocks install"),"\t - Install KubeBlocks."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_list-versions"},"kbcli kubeblocks list-versions"),"\t - List KubeBlocks versions."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_preflight"},"kbcli kubeblocks preflight"),"\t - Run and retrieve preflight checks for KubeBlocks."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_status"},"kbcli kubeblocks status"),"\t - Show list of resource KubeBlocks uses or owns."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_uninstall"},"kbcli kubeblocks uninstall"),"\t - Uninstall KubeBlocks."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_kubeblocks_upgrade"},"kbcli kubeblocks upgrade"),"\t - Upgrade KubeBlocks.")),(0,c.kt)("h2",{id:"options"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_options"},"options")),(0,c.kt)("p",null,"Print the list of flags inherited by all commands."),(0,c.kt)("h2",{id:"playground"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_playground"},"playground")),(0,c.kt)("p",null,"Bootstrap a playground KubeBlocks in local host or cloud."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_playground_destroy"},"kbcli playground destroy"),"\t - Destroy the playground kubernetes cluster."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_playground_guide"},"kbcli playground guide"),"\t - Display playground cluster user guide."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/next/user_docs/cli/kbcli_playground_init"},"kbcli playground init"),"\t - Bootstrap a kubernetes cluster and install KubeBlocks for playground.")),(0,c.kt)("h2",{id:"version"},(0,c.kt)("a",{parentName:"h2",href:"/docs/next/user_docs/cli/kbcli_version"},"version")),(0,c.kt)("p",null,"Print the version information, include kubernetes, KubeBlocks and kbcli version."))}k.isMDXComponent=!0}}]);