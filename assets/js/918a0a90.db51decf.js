"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[7060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,f=p["".concat(l,".").concat(k)]||p[k]||m[k]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=k;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"kbcli kubeblocks install"},s=void 0,a={unversionedId:"user_docs/cli/kbcli_kubeblocks_install",id:"user_docs/cli/kbcli_kubeblocks_install",title:"kbcli kubeblocks install",description:"Install KubeBlocks.",source:"@site/docs/user_docs/cli/kbcli_kubeblocks_install.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_kubeblocks_install",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks_install",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_kubeblocks_install.md",tags:[],version:"current",frontMatter:{title:"kbcli kubeblocks install"},sidebar:"docs",previous:{title:"kbcli kubeblocks describe-config",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks_describe-config"},next:{title:"kbcli kubeblocks list-versions",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks_list-versions"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Install KubeBlocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kbcli kubeblocks install [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Install KubeBlocks, the default version is same with the kbcli version, the default namespace is kb-system\n  kbcli kubeblocks install\n  \n  # Install KubeBlocks with specified version\n  kbcli kubeblocks install --version=0.4.0\n  \n  # Install KubeBlocks with specified namespace, if the namespace is not present, it will be created\n  kbcli kubeblocks install --namespace=my-namespace --create-namespace\n  \n  # Install KubeBlocks with other settings, for example, set replicaCount to 3\n  kbcli kubeblocks install --set replicaCount=3\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --check                    Check kubernetes environment before install (default true)\n      --create-namespace         Create the namespace if not present\n      --force                    If present, just print fail item and continue with the following steps\n  -h, --help                     help for install\n      --monitor                  Auto install monitoring add-ons including prometheus, grafana and alertmanager-webhook-adaptor (default true)\n      --set stringArray          Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n      --set-file stringArray     Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)\n      --set-json stringArray     Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2)\n      --set-string stringArray   Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n      --timeout duration         Time to wait for installing KubeBlocks, such as --timeout=10m (default 5m0s)\n  -f, --values strings           Specify values in a YAML file or a URL (can specify multiple)\n      --version string           KubeBlocks version\n      --wait                     Wait for KubeBlocks to be ready, including all the auto installed add-ons. It will wait for as long as --timeout (default true)\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_kubeblocks"},"kbcli kubeblocks"),"\t - KubeBlocks operation commands.")),(0,i.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,i.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}m.isMDXComponent=!0}}]);