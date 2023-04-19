"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[8468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),a=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=a(r),b=i,f=k["".concat(l,".").concat(b)]||k[b]||p[b]||n;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[k]="string"==typeof e?e:i,s[1]=c;for(var a=2;a<n;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var o=r(87462),i=(r(67294),r(3905));const n={title:"kbcli kubeblocks"},s=void 0,c={unversionedId:"user_docs/cli/kbcli_kubeblocks",id:"user_docs/cli/kbcli_kubeblocks",title:"kbcli kubeblocks",description:"KubeBlocks operation commands.",source:"@site/docs/user_docs/cli/kbcli_kubeblocks.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_kubeblocks",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_kubeblocks.md",tags:[],version:"current",frontMatter:{title:"kbcli kubeblocks"},sidebar:"docs",previous:{title:"kbcli dashboard open",permalink:"/docs/preview/user_docs/cli/kbcli_dashboard_open"},next:{title:"kbcli kubeblocks config",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks_config"}},l={},a=[{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},k="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(k,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KubeBlocks operation commands."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for kubeblocks\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_config"},"kbcli kubeblocks config"),"\t - KubeBlocks config."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_describe-config"},"kbcli kubeblocks describe-config"),"\t - describe KubeBlocks config."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_install"},"kbcli kubeblocks install"),"\t - Install KubeBlocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_list-versions"},"kbcli kubeblocks list-versions"),"\t - List KubeBlocks versions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_preflight"},"kbcli kubeblocks preflight"),"\t - Run and retrieve preflight checks for KubeBlocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_status"},"kbcli kubeblocks status"),"\t - Show list of resource KubeBlocks uses or owns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_uninstall"},"kbcli kubeblocks uninstall"),"\t - Uninstall KubeBlocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks_upgrade"},"kbcli kubeblocks upgrade"),"\t - Upgrade KubeBlocks.")),(0,i.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,i.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}p.isMDXComponent=!0}}]);