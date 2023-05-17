"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[9260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"kbcli fault time"},s=void 0,a={unversionedId:"user_docs/cli/kbcli_fault_time",id:"user_docs/cli/kbcli_fault_time",title:"kbcli fault time",description:"Clock skew failure.",source:"@site/docs/user_docs/cli/kbcli_fault_time.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_fault_time",permalink:"/docs/preview/user_docs/cli/kbcli_fault_time",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_fault_time.md",tags:[],version:"current",frontMatter:{title:"kbcli fault time"},sidebar:"docs",previous:{title:"kbcli fault stress",permalink:"/docs/preview/user_docs/cli/kbcli_fault_stress"},next:{title:"kbcli kubeblocks",permalink:"/docs/preview/user_docs/cli/kbcli_kubeblocks"}},c={},l=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Clock skew failure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kbcli fault time [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Affects the first container in default namespace's all pods.Shifts the clock back five seconds.\n  kbcli fault time --time-offset=-5s\n  \n  # Affects the first container in default namespace's all pods.\n  kbcli fault time --time-offset=-5m5s\n  \n  # Affects the first container in mycluster-mysql-0 pod. Shifts the clock forward five seconds.\n  kbcli fault time mycluster-mysql-0 --time-offset=+5s50ms\n  \n  # Affects the mysql container in mycluster-mysql-0 pod. Shifts the clock forward five seconds.\n  kbcli fault time mycluster-mysql-0 --time-offset=+5s -c=mysql\n  \n  # The clock that specifies the effect of time offset is CLOCK_REALTIME.\n  kbcli fault time mycluster-mysql-0 --time-offset=+5s --clock-id=CLOCK_REALTIME -c=mysql\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --annotation stringToString      Select the pod to inject the fault according to Annotation. (default [])\n      --clock-id stringArray           Specifies the clock on which the time offset acts.If it\'s empty, it will be set to [\'CLOCK_REALTIME\'].See clock_gettime [https://man7.org/linux/man-pages/man2/clock_gettime.2.html] document for details.\n  -c, --container stringArray          Specifies the injected container name. For example: mysql. If it\'s empty, the first container will be injected.\n      --dry-run string[="unchanged"]   Must be "client", or "server". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")\n      --duration string                Supported formats of the duration are: ms / s / m / h. (default "10s")\n  -h, --help                           help for time\n      --label stringToString           label for pod, such as \'"app.kubernetes.io/component=mysql, statefulset.kubernetes.io/pod-name=mycluster-mysql-0. (default [])\n      --mode string                    You can select "one", "all", "fixed", "fixed-percent", "random-max-percent", Specify the experimental mode, that is, which Pods to experiment with. (default "all")\n      --node stringArray               Inject faults into pods in the specified node.\n      --node-label stringToString      label for node, such as \'"kubernetes.io/arch=arm64,kubernetes.io/hostname=minikube-m03,kubernetes.io/os=linux. (default [])\n      --ns-fault stringArray           Specifies the namespace into which you want to inject faults. (default [default])\n  -o, --output format                  prints the output in the specified format. Allowed values: JSON and YAML (default yaml)\n      --phase stringArray              Specify the pod that injects the fault by the state of the pod.\n      --time-offset string             Specifies the length of the time offset. For example: -5s, -10m100ns.\n      --value string                   If you choose mode=fixed or fixed-percent or random-max-percent, you can enter a value to specify the number or percentage of pods you want to inject.\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_fault"},"kbcli fault"),"\t - Inject faults to pod.")),(0,i.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,i.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}p.isMDXComponent=!0}}]);