"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var a=2;a<c;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const c={title:"kbcli cluster connect"},i=void 0,s={unversionedId:"user_docs/cli/kbcli_cluster_connect",id:"version-release-0.4/user_docs/cli/kbcli_cluster_connect",title:"kbcli cluster connect",description:"Connect to a cluster or instance",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_cluster_connect.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_connect",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_connect",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_cluster_connect.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli cluster connect"},sidebar:"docs",previous:{title:"kbcli cluster configure",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_configure"},next:{title:"kbcli cluster create",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_create"}},l={},a=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Connect to a cluster or instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kbcli cluster connect (NAME | -i INSTANCE-NAME) [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # connect to a specified cluster, default connect to the leader or primary instance\n  kbcli cluster connect mycluster\n  \n  # connect to a specified instance\n  kbcli cluster connect -i mycluster-instance-0\n  \n  # show cli connection example\n  kbcli cluster connect mycluster --show-example --client=cli\n  \n  # show java connection example\n  kbcli cluster connect mycluster --show-example --client=java\n  \n  # show all connection examples\n  kbcli cluster connect mycluster --show-example\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --client string     Which client connection example should be output, only valid if --show-example is true.\n  -h, --help              help for connect\n  -i, --instance string   The instance name to connect.\n      --show-example      Show how to connect to cluster or instance from different client.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command")),(0,o.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}f.isMDXComponent=!0}}]);