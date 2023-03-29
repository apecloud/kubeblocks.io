"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=a(r),m=s,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:s,i[1]=l;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(87462),s=(r(67294),r(3905));const o={title:"kbcli cluster logs"},i=void 0,l={unversionedId:"user_docs/cli/kbcli_cluster_logs",id:"user_docs/cli/kbcli_cluster_logs",title:"kbcli cluster logs",description:"Access cluster log file.",source:"@site/docs/user_docs/cli/kbcli_cluster_logs.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_cluster_logs",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_logs",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/cli/kbcli_cluster_logs.md",tags:[],version:"current",frontMatter:{title:"kbcli cluster logs"},sidebar:"docs",previous:{title:"kbcli cluster list",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_list"},next:{title:"kbcli cluster restart",permalink:"/docs/preview/user_docs/cli/kbcli_cluster_restart"}},c={},a=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:a},f="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Access cluster log file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kbcli cluster logs NAME [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  # Return snapshot logs from cluster mycluster with default primary instance (stdout)\n  kbcli cluster logs mycluster\n  \n  # Display only the most recent 20 lines from cluster mycluster with default primary instance (stdout)\n  kbcli cluster logs mycluster --tail=20\n  \n  # Display stdout info of specific instance my-instance-0 (cluster name comes from annotation app.kubernetes.io/instance)\n  kbcli cluster logs --instance my-instance-0\n  \n  # Return snapshot logs from cluster mycluster with specific instance my-instance-0 (stdout)\n  kbcli cluster logs mycluster --instance my-instance-0\n  \n  # Return snapshot logs from cluster mycluster with specific instance my-instance-0 and specific container\n  # my-container (stdout)\n  kbcli cluster logs mycluster --instance my-instance-0 -c my-container\n  \n  # Return slow logs from cluster mycluster with default primary instance\n  kbcli cluster logs mycluster --file-type=slow\n  \n  # Begin streaming the slow logs from cluster mycluster with default primary instance\n  kbcli cluster logs -f mycluster --file-type=slow\n  \n  # Return the specific file logs from cluster mycluster with specific instance my-instance-0\n  kbcli cluster logs mycluster --instance my-instance-0 --file-path=/var/log/yum.log\n  \n  # Return the specific file logs from cluster mycluster with specific instance my-instance-0 and specific\n  # container my-container\n  kbcli cluster logs mycluster --instance my-instance-0 -c my-container --file-path=/var/log/yum.log\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -c, --container string    Container name.\n      --file-path string    Log-file path. Specify target file path and have a premium priority. No set file-path and file-type will output stdout/stderr of target container.\n      --file-type string    Log-file type. Can see the output info of list-logs cmd. No set file-path and file-type will output stdout/stderr of target container.\n  -f, --follow              Specify if the logs should be streamed.\n  -h, --help                help for logs\n      --ignore-errors       If watching / following pod logs, allow for any errors that occur to be non-fatal. Only take effect for stdout&stderr.\n  -i, --instance string     Instance name.\n      --limit-bytes int     Maximum bytes of logs to return.\n      --prefix              Prefix each log line with the log source (pod name and container name). Only take effect for stdout&stderr.\n  -p, --previous            If true, print the logs for the previous instance of the container in a pod if it exists. Only take effect for stdout&stderr.\n      --since duration      Only return logs newer than a relative duration like 5s, 2m, or 3h. Defaults to all logs. Only one of since-time / since may be used. Only take effect for stdout&stderr.\n      --since-time string   Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used. Only take effect for stdout&stderr.\n      --tail int            Lines of recent log file to display. Defaults to -1 with showing all log lines. (default -1)\n      --timestamps          Include timestamps on each line in the log output. Only take effect for stdout&stderr.\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/preview/user_docs/cli/kbcli_cluster"},"kbcli cluster"),"\t - Cluster command.")),(0,s.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,s.kt)("a",{parentName:"h4",href:"/docs/preview/user_docs/cli/"},"CLI Overview")," Homepage."))}p.isMDXComponent=!0}}]);