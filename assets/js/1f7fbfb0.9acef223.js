"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1641],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>b});var i=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,i,r=function(e,t){if(null==e)return{};var l,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)l=c[i],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)l=c[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=i.createContext({}),n=function(e){var t=i.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},u=function(e){var t=n(e.components);return i.createElement(o.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var l=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),k=n(l),d=r,b=k["".concat(o,".").concat(d)]||k[d]||p[d]||c;return l?i.createElement(b,s(s({ref:t},u),{},{components:l})):i.createElement(b,s({ref:t},u))}));function b(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=l.length,s=new Array(c);s[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[k]="string"==typeof e?e:r,s[1]=a;for(var n=2;n<c;n++)s[n]=l[n];return i.createElement.apply(null,s)}return i.createElement.apply(null,l)}d.displayName="MDXCreateElement"},44850:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>n});var i=l(87462),r=(l(67294),l(3905));const c={title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",sidebar_position:1},s=void 0,a={unversionedId:"user_docs/cli/cli",id:"user_docs/cli/cli",title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",source:"@site/docs/user_docs/cli/cli.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/",permalink:"/docs/preview/user_docs/cli/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/cli.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"KubeBlocks CLI Overview",description:"KubeBlocks CLI overview",sidebar_position:1},sidebar:"docs",previous:{title:"Configure pod affinity for database clusters",permalink:"/docs/preview/user_docs/resource-scheduling/"},next:{title:"kbcli",permalink:"/docs/preview/user_docs/cli/kbcli"}},o={},n=[{value:"addon",id:"addon",level:2},{value:"alert",id:"alert",level:2},{value:"bench",id:"bench",level:2},{value:"class",id:"class",level:2},{value:"cluster",id:"cluster",level:2},{value:"clusterdefinition",id:"clusterdefinition",level:2},{value:"clusterversion",id:"clusterversion",level:2},{value:"dashboard",id:"dashboard",level:2},{value:"kubeblocks",id:"kubeblocks",level:2},{value:"migration",id:"migration",level:2},{value:"options",id:"options",level:2},{value:"playground",id:"playground",level:2},{value:"plugin",id:"plugin",level:2},{value:"version",id:"version",level:2}],u={toc:n},k="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(k,(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"addon"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_addon"},"addon")),(0,r.kt)("p",null,"Addon command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_addon_describe"},"kbcli addon describe"),"\t - Describe an addon specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_addon_disable"},"kbcli addon disable"),"\t - Disable an addon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_addon_enable"},"kbcli addon enable"),"\t - Enable an addon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_addon_list"},"kbcli addon list"),"\t - List addons.")),(0,r.kt)("h2",{id:"alert"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_alert"},"alert")),(0,r.kt)("p",null,"Manage alert receiver, include add, list and delete receiver."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_alert_add-receiver"},"kbcli alert add-receiver"),"\t - Add alert receiver, such as email, slack, webhook and so on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_alert_delete-receiver"},"kbcli alert delete-receiver"),"\t - Delete alert receiver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_alert_list-receivers"},"kbcli alert list-receivers"),"\t - List all alert receivers.")),(0,r.kt)("h2",{id:"bench"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_bench"},"bench")),(0,r.kt)("p",null,"Run a benchmark."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_bench_tpcc"},"kbcli bench tpcc"),"\t - Run a TPCC benchmark.")),(0,r.kt)("h2",{id:"class"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_class"},"class")),(0,r.kt)("p",null,"Manage classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_class_create"},"kbcli class create"),"\t - Create a class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_class_list"},"kbcli class list"),"\t - List classes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_class_template"},"kbcli class template"),"\t - Generate class definition template")),(0,r.kt)("h2",{id:"cluster"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_cluster"},"cluster")),(0,r.kt)("p",null,"Cluster command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_backup"},"kbcli cluster backup"),"\t - Create a backup for the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_connect"},"kbcli cluster connect"),"\t - Connect to a cluster or instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_create"},"kbcli cluster create"),"\t - Create a cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_create-account"},"kbcli cluster create-account"),"\t - Create account for a cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_delete"},"kbcli cluster delete"),"\t - Delete clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_delete-account"},"kbcli cluster delete-account"),"\t - Delete account for a cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_delete-backup"},"kbcli cluster delete-backup"),"\t - Delete a backup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_delete-ops"},"kbcli cluster delete-ops"),"\t - Delete an OpsRequest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_describe"},"kbcli cluster describe"),"\t - Show details of a specific cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_describe-account"},"kbcli cluster describe-account"),"\t - Describe account roles and related information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_describe-config"},"kbcli cluster describe-config"),"\t - Show details of a specific reconfiguring."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_describe-ops"},"kbcli cluster describe-ops"),"\t - Show details of a specific OpsRequest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_diff-config"},"kbcli cluster diff-config"),"\t - Show the difference in parameters between the two submitted OpsRequest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_edit-backup-policy"},"kbcli cluster edit-backup-policy"),"\t - Edit backup policy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_edit-config"},"kbcli cluster edit-config"),"\t - Edit the config file of the component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_explain-config"},"kbcli cluster explain-config"),"\t - List the constraint for supported configuration params."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_expose"},"kbcli cluster expose"),"\t - Expose a cluster with a new endpoint, the new endpoint can be found by executing 'kbcli cluster describe NAME'."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_grant-role"},"kbcli cluster grant-role"),"\t - Grant role to account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_hscale"},"kbcli cluster hscale"),"\t - Horizontally scale the specified components in the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_label"},"kbcli cluster label"),"\t - Update the labels on cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list"},"kbcli cluster list"),"\t - List clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-accounts"},"kbcli cluster list-accounts"),"\t - List accounts for a cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-backup-policy"},"kbcli cluster list-backup-policy"),"\t - List backups policies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-backups"},"kbcli cluster list-backups"),"\t - List backups."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-components"},"kbcli cluster list-components"),"\t - List cluster components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-events"},"kbcli cluster list-events"),"\t - List cluster events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-instances"},"kbcli cluster list-instances"),"\t - List cluster instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-logs"},"kbcli cluster list-logs"),"\t - List supported log files in cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_list-ops"},"kbcli cluster list-ops"),"\t - List all opsRequests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_logs"},"kbcli cluster logs"),"\t - Access cluster log file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_reconfigure"},"kbcli cluster reconfigure"),"\t - Reconfigure parameters with the specified components in the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_restart"},"kbcli cluster restart"),"\t - Restart the specified components in the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_restore"},"kbcli cluster restore"),"\t - Restore a new cluster from backup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_revoke-role"},"kbcli cluster revoke-role"),"\t - Revoke role from account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_start"},"kbcli cluster start"),"\t - Start the cluster if cluster is stopped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_stop"},"kbcli cluster stop"),"\t - Stop the cluster and release all the pods of the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_update"},"kbcli cluster update"),"\t - Update the cluster settings, such as enable or disable monitor or log."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_upgrade"},"kbcli cluster upgrade"),"\t - Upgrade the cluster version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_volume-expand"},"kbcli cluster volume-expand"),"\t - Expand volume with the specified components and volumeClaimTemplates in the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster_vscale"},"kbcli cluster vscale"),"\t - Vertically scale the specified components in the cluster.")),(0,r.kt)("h2",{id:"clusterdefinition"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_clusterdefinition"},"clusterdefinition")),(0,r.kt)("p",null,"ClusterDefinition command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_clusterdefinition_list"},"kbcli clusterdefinition list"),"\t - List ClusterDefinitions.")),(0,r.kt)("h2",{id:"clusterversion"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_clusterversion"},"clusterversion")),(0,r.kt)("p",null,"ClusterVersion command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_clusterversion_list"},"kbcli clusterversion list"),"\t - List ClusterVersions.")),(0,r.kt)("h2",{id:"dashboard"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_dashboard"},"dashboard")),(0,r.kt)("p",null,"List and open the KubeBlocks dashboards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_dashboard_list"},"kbcli dashboard list"),"\t - List all dashboards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_dashboard_open"},"kbcli dashboard open"),"\t - Open one dashboard.")),(0,r.kt)("h2",{id:"kubeblocks"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks"},"kubeblocks")),(0,r.kt)("p",null,"KubeBlocks operation commands."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_config"},"kbcli kubeblocks config"),"\t - KubeBlocks config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_describe-config"},"kbcli kubeblocks describe-config"),"\t - describe KubeBlocks config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_install"},"kbcli kubeblocks install"),"\t - Install KubeBlocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_list-versions"},"kbcli kubeblocks list-versions"),"\t - List KubeBlocks versions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_preflight"},"kbcli kubeblocks preflight"),"\t - Run and retrieve preflight checks for KubeBlocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_status"},"kbcli kubeblocks status"),"\t - Show list of resource KubeBlocks uses or owns."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_uninstall"},"kbcli kubeblocks uninstall"),"\t - Uninstall KubeBlocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_upgrade"},"kbcli kubeblocks upgrade"),"\t - Upgrade KubeBlocks.")),(0,r.kt)("h2",{id:"migration"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_migration"},"migration")),(0,r.kt)("p",null,"Data migration between two data sources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_create"},"kbcli migration create"),"\t - Create a migration task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_describe"},"kbcli migration describe"),"\t - Show details of a specific migration task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_list"},"kbcli migration list"),"\t - List migration tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_logs"},"kbcli migration logs"),"\t - Access migration task log file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_templates"},"kbcli migration templates"),"\t - List migration templates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_migration_terminate"},"kbcli migration terminate"),"\t - Delete migration task.")),(0,r.kt)("h2",{id:"options"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_options"},"options")),(0,r.kt)("p",null,"Print the list of flags inherited by all commands."),(0,r.kt)("h2",{id:"playground"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_playground"},"playground")),(0,r.kt)("p",null,"Bootstrap a playground KubeBlocks in local host or cloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_playground_destroy"},"kbcli playground destroy"),"\t - Destroy the playground kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_playground_guide"},"kbcli playground guide"),"\t - Display playground cluster user guide."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_playground_init"},"kbcli playground init"),"\t - Bootstrap a kubernetes cluster and install KubeBlocks for playground.")),(0,r.kt)("h2",{id:"plugin"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_plugin"},"plugin")),(0,r.kt)("p",null,"Provides utilities for interacting with plugins."),(0,r.kt)("p",null," Plugins provide extended functionality that is not part of the major command-line distribution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_plugin_list"},"kbcli plugin list"),"\t - List all visible plugin executables on a user's PATH")),(0,r.kt)("h2",{id:"version"},(0,r.kt)("a",{parentName:"h2",href:"/docs/preview/user_docs/cli/kbcli_version"},"version")),(0,r.kt)("p",null,"Print the version information, include kubernetes, KubeBlocks and kbcli version."))}p.isMDXComponent=!0}}]);