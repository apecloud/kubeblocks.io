"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[4172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var s=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,l=function(e,t){if(null==e)return{};var r,s,l={},c=Object.keys(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=s.createContext({}),n=function(e){var t=s.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=n(e.components);return s.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,l=e.mdxType,c=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=n(r),d=l,m=p["".concat(o,".").concat(d)]||p[d]||k[d]||c;return r?s.createElement(m,i(i({ref:t},u),{},{components:r})):s.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var n=2;n<c;n++)i[n]=r[n];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>a,toc:()=>n});var s=r(87462),l=(r(67294),r(3905));const c={title:"kbcli cluster"},i=void 0,a={unversionedId:"user_docs/cli/kbcli_cluster",id:"version-release-0.4/user_docs/cli/kbcli_cluster",title:"kbcli cluster",description:"Cluster command",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_cluster.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_cluster.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli cluster"},sidebar:"docs",previous:{title:"kbcli bench tpcc run",permalink:"/docs/release-0.4/user_docs/cli/kbcli_bench_tpcc_run"},next:{title:"kbcli cluster backup",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_backup"}},o={},n=[{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:n},p="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cluster command"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -h, --help   help for cluster\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_backup"},"kbcli cluster backup"),"\t - Create a backup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_configure"},"kbcli cluster configure"),"\t - reconfigure parameters with the specified components in the cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_connect"},"kbcli cluster connect"),"\t - Connect to a cluster or instance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_create"},"kbcli cluster create"),"\t - Create a cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_delete"},"kbcli cluster delete"),"\t - Delete clusters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_delete-backup"},"kbcli cluster delete-backup"),"\t - Delete a backup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_delete-ops"},"kbcli cluster delete-ops"),"\t - Delete an OpsRequest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_delete-restore"},"kbcli cluster delete-restore"),"\t - Delete a restore job"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_describe"},"kbcli cluster describe"),"\t - Show details of a specific cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_describe-configure"},"kbcli cluster describe-configure"),"\t - Show details of a specific reconfiguring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_describe-ops"},"kbcli cluster describe-ops"),"\t - Show details of a specific OpsRequest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_diff-configure"},"kbcli cluster diff-configure"),"\t - List the constraint for supported configuration params"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_explain-configure"},"kbcli cluster explain-configure"),"\t - List the constraint for supported configuration params"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_expose"},"kbcli cluster expose"),"\t - Expose a cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_hscale"},"kbcli cluster hscale"),"\t - Horizontally scale the specified components in the cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list"},"kbcli cluster list"),"\t - List clusters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-accounts"},"kbcli cluster list-accounts"),"\t - List cluster accounts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-backups"},"kbcli cluster list-backups"),"\t - List backups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-components"},"kbcli cluster list-components"),"\t - List cluster components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-events"},"kbcli cluster list-events"),"\t - List cluster events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-instances"},"kbcli cluster list-instances"),"\t - List cluster instances"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-logs"},"kbcli cluster list-logs"),"\t - List supported log files in cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-ops"},"kbcli cluster list-ops"),"\t - List all opsRequests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-restores"},"kbcli cluster list-restores"),"\t - List all restore jobs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_logs"},"kbcli cluster logs"),"\t - Access cluster log file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_restart"},"kbcli cluster restart"),"\t - Restart the specified components in the cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_restore"},"kbcli cluster restore"),"\t - Restore a new cluster from backup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_start"},"kbcli cluster start"),"\t - start the cluster when cluster is stopped"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_stop"},"kbcli cluster stop"),"\t - stop the cluster and release all the pods of the cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_update"},"kbcli cluster update"),"\t - Update the cluster settings, such as enable or disable monitor or log"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_upgrade"},"kbcli cluster upgrade"),"\t - Upgrade the cluster version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_volume-expand"},"kbcli cluster volume-expand"),"\t - Expand volume with the specified components and volumeClaimTemplates in the cluster"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster_vscale"},"kbcli cluster vscale"),"\t - Vertically scale the specified components in the cluster")),(0,l.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,l.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}k.isMDXComponent=!0}}]);