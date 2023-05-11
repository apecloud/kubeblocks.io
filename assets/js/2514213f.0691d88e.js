"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"kbcli fault network loss"},i=void 0,s={unversionedId:"user_docs/cli/kbcli_fault_network_loss",id:"user_docs/cli/kbcli_fault_network_loss",title:"kbcli fault network loss",description:"Cause pods to communicate with other objects to drop packets.",source:"@site/docs/user_docs/cli/kbcli_fault_network_loss.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_fault_network_loss",permalink:"/docs/preview/user_docs/cli/kbcli_fault_network_loss",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_fault_network_loss.md",tags:[],version:"current",frontMatter:{title:"kbcli fault network loss"},sidebar:"docs",previous:{title:"kbcli fault network http replace",permalink:"/docs/preview/user_docs/cli/kbcli_fault_network_http_replace"},next:{title:"kbcli fault network partition",permalink:"/docs/preview/user_docs/cli/kbcli_fault_network_partition"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cause pods to communicate with other objects to drop packets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kbcli fault network loss [flags]\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  # Isolate all pods network under the default namespace from the outside world, including the k8s internal network.\n  kbcli fault network partition\n  \n  # The specified pod is isolated from the k8s external network "kubeblocks.io".\n  kbcli fault network partition --label=statefulset.kubernetes.io/pod-name=mycluster-mysql-1 --external-targets=kubeblocks.io\n  \n  # Isolate the network between two pods.\n  kbcli fault network partition --label=statefulset.kubernetes.io/pod-name=mycluster-mysql-1 --target-label=statefulset.kubernetes.io/pod-name=mycluster-mysql-2\n  \n  // Like the partition command, the target can be specified through --target-label or --external-targets. The pod only has obstacles in communicating with this target. If the target is not specified, all communication will be blocked.\n  # Block all pod communication under the default namespace, resulting in a 50% packet loss rate.\n  kbcli fault network loss --loss=50\n  \n  # Block the specified pod communication, so that the packet loss rate is 50%.\n  kbcli fault network loss --label=statefulset.kubernetes.io/pod-name=mysql-cluster-mysql-2 --loss=50\n  \n  kbcli fault network corrupt --corrupt=50\n  \n  # Blocks specified pod communication with a 50% packet corruption rate.\n  kbcli fault network corrupt --label=statefulset.kubernetes.io/pod-name=mysql-cluster-mysql-2 --corrupt=50\n  \n  kbcli fault network duplicate --duplicate=50\n  \n  # Block specified pod communication so that the packet repetition rate is 50%.\n  kbcli fault network duplicate --label=statefulset.kubernetes.io/pod-name=mysql-cluster-mysql-2 --duplicate=50\n  \n  kbcli fault network delay --latency=10s\n  \n  # Block the communication of the specified pod, causing its network delay for 10s.\n  kbcli fault network delay --label=statefulset.kubernetes.io/pod-name=mysql-cluster-mysql-2 --latency=10s\n')),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -c, --correlation string                 Indicates the correlation between the probability of a packet error occurring and whether it occurred the previous time. Value range: [0, 100]. (default "0")\n      --direction string                   You can select "to"" or "from"" or "both"". (default "to")\n      --dry-run string[="unchanged"]       Must be "client", or "server". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")\n      --duration string                    Supported formats of the duration are: ms / s / m / h. (default "10s")\n  -e, --external-targets stringArray       a network target outside of Kubernetes, which can be an IPv4 address or a domain name,\n                                             such as "www.baidu.com". Only works with direction: to.\n  -h, --help                               help for loss\n      --label stringToString               label for pod, such as \'"app.kubernetes.io/component=mysql, statefulset.kubernetes.io/pod-name=mycluster-mysql-0"\' (default [])\n      --loss string                        Indicates the probability of a packet error occurring. Value range: [0, 100].\n      --mode string                        You can select "one", "all", "fixed", "fixed-percent", "random-max-percent", Specify the experimental mode, that is, which Pods to experiment with. (default "all")\n      --namespace-selector stringArray     Specifies the namespace into which you want to inject faults. (default [default])\n  -o, --output format                      prints the output in the specified format. Allowed values: JSON and YAML (default yaml)\n      --target-label stringToString        label for pod, such as \'"app.kubernetes.io/component=mysql, statefulset.kubernetes.io/pod-name=mycluster-mysql-0"\' (default [])\n      --target-mode string                 You can select "one", "all", "fixed", "fixed-percent", "random-max-percent", Specify the experimental mode, that is, which Pods to experiment with. (default "all")\n      --target-namespace-selector string   Specifies the namespace into which you want to inject faults. (default "default")\n      --target-value string                If you choose mode=fixed or fixed-percent or random-max-percent, you can enter a value to specify the number or percentage of pods you want to inject.\n      --value string                       If you choose mode=fixed or fixed-percent or random-max-percent, you can enter a value to specify the number or percentage of pods you want to inject.\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_fault_network"},"kbcli fault network"),"\t - Network chaos.")),(0,n.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,n.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}d.isMDXComponent=!0}}]);