"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(a,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"kbcli cluster hscale"},i=void 0,c={unversionedId:"user_docs/cli/kbcli_cluster_hscale",id:"version-release-0.4/user_docs/cli/kbcli_cluster_hscale",title:"kbcli cluster hscale",description:"Horizontally scale the specified components in the cluster.",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_cluster_hscale.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_hscale",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_hscale",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_cluster_hscale.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli cluster hscale"},sidebar:"docs",previous:{title:"kbcli cluster expose",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_expose"},next:{title:"kbcli cluster list-accounts",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_list-accounts"}},a={},l=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Horizontally scale the specified components in the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kbcli cluster hscale [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # expand storage resources of specified components, separate with commas when <component-name> more than one\n  kbcli cluster hscale <my-cluster> --component-names=<component-name> --replicas=3\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --component-names strings       Component names to this operations\n  -h, --help                         help for hscale\n      --name string                  OpsRequest name. if not specified, it will be randomly generated \n      --replicas int                 Replicas with the specified components\n      --ttlSecondsAfterSucceed int   Time to live after the OpsRequest succeed\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command.")),(0,o.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}m.isMDXComponent=!0}}]);