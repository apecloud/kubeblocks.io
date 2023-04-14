"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(r),m=s,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(87462),s=(r(67294),r(3905));const i={title:"kbcli cluster list"},o=void 0,l={unversionedId:"user_docs/cli/kbcli_cluster_list",id:"user_docs/cli/kbcli_cluster_list",title:"kbcli cluster list",description:"List clusters.",source:"@site/docs/user_docs/cli/kbcli_cluster_list.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_list",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_list",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_cluster_list.md",tags:[],version:"current",frontMatter:{title:"kbcli cluster list"},sidebar:"docs",previous:{title:"kbcli cluster list-restores",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_list-restores"},next:{title:"kbcli cluster logs",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_logs"}},c={},a=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"List clusters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kbcli cluster list [NAME] [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  # list all clusters\n  kbcli cluster list\n  \n  # list a single cluster with specified NAME\n  kbcli cluster list mycluster\n  \n  # list a single cluster in YAML output format\n  kbcli cluster list mycluster -o yaml\n  \n  # list a single cluster in JSON output format\n  kbcli cluster list mycluster -o json\n  \n  # list a single cluster in wide output format\n  kbcli cluster list mycluster -o wide\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -A, --all-namespace     If present, list the requested object(s) across all namespaces. Namespace in current context is ignored even if specified with --namespace.\n  -h, --help              help for list\n  -o, --output format     prints the output in the specified format. Allowed values: table, json, yaml, wide (default table)\n  -l, --selector string   Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Matching objects must satisfy all of the specified label constraints.\n      --show-labels       When printing, show all labels as the last column (default hide labels column)\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command.")),(0,s.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,s.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}f.isMDXComponent=!0}}]);