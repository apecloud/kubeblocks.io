"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3964],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(f,a(a({ref:r},u),{},{components:t})):o.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},817:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const i={title:"kbcli alert add-receiver"},a=void 0,c={unversionedId:"user_docs/cli/kbcli_alert_add-receiver",id:"version-release-0.4/user_docs/cli/kbcli_alert_add-receiver",title:"kbcli alert add-receiver",description:"Add alert receiver, such as email, slack, webhook and so on.",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_alert_add-receiver.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_alert_add-receiver",permalink:"/docs/release-0.4/user_docs/cli/kbcli_alert_add-receiver",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_alert_add-receiver.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli alert add-receiver"},sidebar:"docs",previous:{title:"kbcli alert",permalink:"/docs/release-0.4/user_docs/cli/kbcli_alert"},next:{title:"kbcli alert delete-receiver",permalink:"/docs/release-0.4/user_docs/cli/kbcli_alert_delete-receiver"}},s={},l=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Add alert receiver, such as email, slack, webhook and so on."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kbcli alert add-receiver [flags]\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  # add webhook receiver without token, for example feishu\n  kbcli alert add-receiver --webhook='url=https://open.feishu.cn/open-apis/bot/v2/hook/foo'\n  \n  # add webhook receiver with token, for example feishu\n  kbcli alert add-receiver --webhook='url=https://open.feishu.cn/open-apis/bot/v2/hook/foo,token=XXX'\n  \n  # add email receiver\n  kbcli alter add-receiver --email='a@foo.com,b@foo.com'\n  \n  # add email receiver, and only receive alert from cluster mycluster\n  kbcli alter add-receiver --email='a@foo.com,b@foo.com' --cluster=mycluster\n  \n  # add email receiver, and only receive alert from cluster mycluster and alert severity is warning\n  kbcli alter add-receiver --email='a@foo.com,b@foo.com' --cluster=mycluster --severity=warning\n  \n  # add slack receiver\n  kbcli alert add-receiver --slack api_url=https://hooks.slackConfig.com/services/foo,channel=monitor,username=kubeblocks-alert-bot\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --cluster stringArray    Cluster name, such as mycluster, more than one cluster can be specified, such as mycluster,mycluster2\n      --email stringArray      Add email address, such as bar@foo.com, more than one emailConfig can be specified separated by comma\n  -h, --help                   help for add-receiver\n      --severity stringArray   Alert severity, critical, warning or info, more than one severity can be specified, such as critical,warning\n      --slack stringArray      Add slack receiver, such as api_url=https://hooks.slackConfig.com/services/foo,channel=monitor,username=kubeblocks-alert-bot\n      --webhook stringArray    Add webhook receiver, such as url=https://open.feishu.cn/open-apis/bot/v2/hook/foo,token=xxxxx\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_alert"},"kbcli alert"),"\t - Manage alert receiver, include add, list and delete receiver.")),(0,n.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,n.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}p.isMDXComponent=!0}}]);