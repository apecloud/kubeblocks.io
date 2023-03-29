"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"kbcli addon enable"},s=void 0,i={unversionedId:"user_docs/cli/kbcli_addon_enable",id:"version-release-0.4/user_docs/cli/kbcli_addon_enable",title:"kbcli addon enable",description:"Enable an addon.",source:"@site/versioned_docs/version-release-0.4/user_docs/cli/kbcli_addon_enable.md",sourceDirName:"user_docs/cli",slug:"/user_docs/cli/kbcli_addon_enable",permalink:"/docs/release-0.4/user_docs/cli/kbcli_addon_enable",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/cli/kbcli_addon_enable.md",tags:[],version:"release-0.4",frontMatter:{title:"kbcli addon enable"},sidebar:"docs",previous:{title:"kbcli addon disable",permalink:"/docs/release-0.4/user_docs/cli/kbcli_addon_disable"},next:{title:"kbcli addon list",permalink:"/docs/release-0.4/user_docs/cli/kbcli_addon_list"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Go Back to CLI Overview Homepage.",id:"go-back-to-cli-overview-homepage",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enable an addon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kbcli addon enable ADDON_NAME [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  # Enabled "prometheus" addon\n  kbcli addon enable prometheus\n  \n  # Enabled "prometheus" addon with custom resources settings\n  kbcli addon enable prometheus --memory 512Mi/4Gi --storage 8Gi --replicas 2\n  \n  # Enabled "prometheus" addon and its extra alertmanager component with custom resources settings\n  kbcli addon enable prometheus --memory 512Mi/4Gi --storage 8Gi --replicas 2 \\\n  --memory alertmanager:16Mi/256Mi --storage: alertmanager:1Gi --replicas alertmanager:2\n  \n  # Enabled "prometheus" addon with tolerations\n  kbcli addon enable prometheus --tolerations \'[[{"key":"taintkey","operator":"Equal","effect":"NoSchedule","value":"true"}]]\' \\\n  --tolerations \'alertmanager:[[{"key":"taintkey","operator":"Equal","effect":"NoSchedule","value":"true"}]]\'\n  \n  # Enabled "prometheus" addon with helm like custom settings\n  kbcli addon enable prometheus --set prometheus.alertmanager.image.tag=v0.24.0\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --allow-missing-template-keys    If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang and jsonpath output formats. (default true)\n      --cpu stringArray                Sets addon CPU resource values (--cpu [extraName:]<request>/<limit>) (can specify multiple if has extra items))\n      --dry-run string[="unchanged"]   Must be "none", "server", or "client". If client strategy, only print the object that would be sent, without sending it. If server strategy, submit server-side request without persisting the resource. (default "none")\n  -h, --help                           help for enable\n      --memory stringArray             Sets addon memory resource values (--memory [extraName:]<request>/<limit>) (can specify multiple if has extra items))\n  -o, --output string                  Output format. One of: (json, yaml, name, go-template, go-template-file, template, templatefile, jsonpath, jsonpath-as-json, jsonpath-file).\n      --replicas stringArray           Sets addon component replica count (--replicas [extraName:]<number>) (can specify multiple if has extra items))\n      --set stringArray                set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2), it\'s only being processed if addon\'s type is helm.\n      --show-managed-fields            If true, keep the managedFields when printing objects in JSON or YAML format.\n      --storage stringArray            Sets addon storage size (--storage [extraName:]<request>) (can specify multiple if has extra items))\n      --storage-class stringArray      Sets addon storage class name (--storage-class [extraName:]<storage class name>) (can specify multiple if has extra items))\n      --template string                Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates [http://golang.org/pkg/text/template/#pkg-overview].\n      --tolerations stringArray        Sets addon pod tolerations (--tolerations [extraName:]<toleration JSON list items>) (can specify multiple if has extra items))\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --as string                      Username to impersonate for the operation. User could be a regular user or a service account in a namespace.\n      --as-group stringArray           Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --as-uid string                  UID to impersonate for the operation.\n      --cache-dir string               Default cache directory (default "$HOME/.kube/cache")\n      --certificate-authority string   Path to a cert file for the certificate authority\n      --client-certificate string      Path to a client certificate file for TLS\n      --client-key string              Path to a client key file for TLS\n      --cluster string                 The name of the kubeconfig cluster to use\n      --context string                 The name of the kubeconfig context to use\n      --disable-compression            If true, opt-out of response compression for all requests to the server\n      --insecure-skip-tls-verify       If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n      --kubeconfig string              Path to the kubeconfig file to use for CLI requests.\n      --match-server-version           Require server version to match client version\n  -n, --namespace string               If present, the namespace scope for this CLI request\n      --request-timeout string         The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don\'t timeout requests. (default "0")\n  -s, --server string                  The address and port of the Kubernetes API server\n      --tls-server-name string         Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used\n      --token string                   Bearer token for authentication to the API server\n      --user string                    The name of the kubeconfig user to use\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/cli/kbcli_addon"},"kbcli addon"),"\t - Addon command.")),(0,a.kt)("h4",{id:"go-back-to-cli-overview-homepage"},"Go Back to ",(0,a.kt)("a",{parentName:"h4",href:"/docs/release-0.4/user_docs/cli/"},"CLI Overview")," Homepage."))}d.isMDXComponent=!0}}]);