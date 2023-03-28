"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[2151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={title:"kbcli cluster create"},s=void 0,c={unversionedId:"user_docs/cli/kbcli_cluster_create",id:"user_docs/cli/kbcli_cluster_create",title:"kbcli cluster create",description:"Create a cluster.",source:"@site/docs/user_docs/cli/kbcli_cluster_create.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_create",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_create",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_cluster_create.md",tags:[],version:"current",frontMatter:{title:"kbcli cluster create"},sidebar:"docs",previous:{title:"kbcli cluster create-user",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_create-user"},next:{title:"kbcli cluster delete-account",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_delete-account"}},l={},a=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kbcli cluster create [CLUSTER_NAME] [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # Create a cluster with cluster definition apecloud-mysql and cluster version ac-mysql-8.0.30\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --cluster-version ac-mysql-8.0.30\n  \n  # --cluster-definition is required, if --cluster-version is not specified, will use the most recently created version\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql\n  \n  # Create a cluster and set termination policy DoNotTerminate that will prevent the cluster from being deleted\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --termination-policy DoNotTerminate\n  \n  # In scenarios where you want to delete resources such as statements, deployments, services, pdb, but keep PVCs\n  # when deleting the cluster, use termination policy Halt\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --termination-policy Halt\n  \n  # In scenarios where you want to delete resource such as statements, deployments, services, pdb, and including\n  # PVCs when deleting the cluster, use termination policy Delete\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --termination-policy Delete\n  \n  # In scenarios where you want to delete all resources including all snapshots and snapshot data when deleting\n  # the cluster, use termination policy WipeOut\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --termination-policy WipeOut\n  \n  # Create a cluster and set cpu to 1 core, memory to 1Gi, storage size to 20Gi and replicas to 3\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --set cpu=1,memory=1Gi,storage=20Gi,replicas=3\n  \n  # Create a cluster and use a URL to set cluster resource\n  kbcli cluster create mycluster --cluster-definition apecloud-mysql --set-file https://kubeblocks.io/yamls/my.yaml\n  \n  # Create a cluster and load cluster resource set from stdin\n  cat << EOF | kbcli cluster create mycluster --cluster-definition apecloud-mysql --set-file -\n  - name: my-test ...\n  \n  # Create a cluster forced to scatter by node\n  kbcli cluster create --cluster-definition apecloud-mysql --topology-keys kubernetes.io/hostname --pod-anti-affinity Required\n  \n  # Create a cluster in specific labels nodes\n  kbcli cluster create --cluster-definition apecloud-mysql --node-labels \'"topology.kubernetes.io/zone=us-east-1a","disktype=ssd,essd"\'\n  \n  # Create a Cluster with two tolerations\n  kbcli cluster create --cluster-definition apecloud-mysql --tolerations \'"key=engineType,value=mongo,operator=Equal,effect=NoSchedule","key=diskType,value=ssd,operator=Equal,effect=NoSchedule"\'\n  \n  # Create a cluster, with each pod runs on their own dedicated node\n  kbcli cluster create --tenancy=DedicatedNode\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --backup string                Set a source backup to restore data\n      --cluster-definition string    Specify cluster definition, run "kbcli cd list" to show all available cluster definitions\n      --cluster-version string       Specify cluster version, run "kbcli cv list" to show all available cluster versions, use the latest version if not specified\n      --enable-all-logs              Enable advanced application all log extraction, and true will ignore enabledLogs of component level (default true)\n  -h, --help                         help for create\n      --monitor                      Set monitor enabled and inject metrics exporter (default true)\n      --node-labels stringToString   Node label selector (default [])\n      --pod-anti-affinity string     Pod anti-affinity type, one of: (Preferred, Required) (default "Preferred")\n      --set stringArray              Set the cluster resource including cpu, memory, replicas and storage, each set corresponds to a component.(e.g. --set cpu=1,memory=1Gi,replicas=3,storage=20Gi)\n  -f, --set-file string              Use yaml file, URL, or stdin to set the cluster resource\n      --tenancy string               Tenancy options, one of: (SharedNode, DedicatedNode) (default "SharedNode")\n      --termination-policy string    Termination policy, one of: (DoNotTerminate, Halt, Delete, WipeOut) (default "Delete")\n      --tolerations strings          Tolerations for cluster, such as \'"key=engineType,value=mongo,operator=Equal,effect=NoSchedule"\'\n      --topology-keys stringArray    Topology keys for affinity\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command.")),(0,o.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}p.isMDXComponent=!0}}]);