"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(r),f=s,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:s,i[1]=l;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(87462),s=(r(67294),r(3905));const o={title:"kbcli cluster list-logs"},i=void 0,l={unversionedId:"user_docs/cli/kbcli_cluster_list-logs",id:"version-release-0.4/user_docs/cli/kbcli_cluster_list-logs",title:"kbcli cluster list-logs",description:"List supported log files in cluster.",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_cluster_list-logs.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_list-logs",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-logs",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_cluster_list-logs.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli cluster list-logs"},sidebar:"docs",previous:{title:"kbcli cluster list-instances",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-instances"},next:{title:"kbcli cluster list-ops",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-ops"}},c={},a=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"List supported log files in cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kbcli cluster list-logs NAME [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  # Display supported log files in cluster mycluster with all instance\n  kbcli cluster list-logs mycluster\n  \n  # Display supported log files in cluster mycluster with specify component my-component\n  kbcli cluster list-logs mycluster --component my-component\n  \n  # Display supported log files in cluster mycluster with specify instance my-instance-0\n  kbcli cluster list-logs mycluster --instance my-instance-0\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      --component string   Component name.\n  -h, --help               help for list-logs\n  -i, --instance string    Instance name.\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command.")),(0,s.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,s.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}m.isMDXComponent=!0}}]);