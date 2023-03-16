"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[8932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"kbcli cluster update"},i=void 0,s={unversionedId:"user_docs/cli/kbcli_cluster_update",id:"version-release-0.4/user_docs/cli/kbcli_cluster_update",title:"kbcli cluster update",description:"Update the cluster settings, such as enable or disable monitor or log",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_cluster_update.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_update",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_update",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_cluster_update.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli cluster update"},sidebar:"docs",previous:{title:"kbcli cluster stop",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_stop"},next:{title:"kbcli cluster upgrade",permalink:"/docs/release-0.4/user_docs/cli/kbcli_cluster_upgrade"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update the cluster settings, such as enable or disable monitor or log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kbcli cluster update NAME [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # update cluster mycluster termination policy to Delete\n  kbcli cluster update mycluster --termination-policy=Delete\n  \n  # enable cluster monitor\n  kbcli cluster update mycluster --monitor=true\n  \n  # enable all logs\n  kbcli cluster update mycluster --enable-all-logs=true\n  \n  # update cluster topology keys and affinity\n  kbcli cluster update mycluster --topology-keys=kubernetes.io/hostname --pod-anti-affinity=Required\n  \n  # update cluster tolerations\n  kbcli cluster update mycluster --tolerations=\'"key=engineType,value=mongo,operator=Equal,effect=NoSchedule","key=diskType,value=ssd,operator=Equal,effect=NoSchedule"\'\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --allow-missing-template-keys    If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats. (default true)\n      --dry-run string[="unchanged"]   Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")\n      --enable-all-logs                Enable advanced application all log extraction, and true will ignore enabledLogs of component level (default true)\n  -h, --help                           help for update\n      --monitor                        Set monitor enabled and inject metrics exporter (default true)\n      --node-labels stringToString     Node label selector (default [])\n  -o, --output string                  Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file).\n      --pod-anti-affinity string       Pod anti-affinity type, one of: (Preferred, Required) (default "Preferred")\n      --show-managed-fields            If true, keep the managedFields when printing objects in JSON or YAML format.\n      --template string                Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].\n      --tenancy string                 Tenancy options, one of: (SharedNode, DedicatedNode) (default "SharedNode")\n      --termination-policy string      Termination policy, one of: (DoNotTerminate, Halt, Delete, WipeOut) (default "Delete")\n      --tolerations strings            Tolerations for cluster, such as \'"key=engineType,value=mongo,operator=Equal,effect=NoSchedule"\'\n      --topology-keys stringArray      Topology keys for affinity\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command")),(0,o.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}d.isMDXComponent=!0}}]);