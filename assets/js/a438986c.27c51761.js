"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?a.createElement(k,l(l({ref:t},i),{},{components:r})):a.createElement(k,l({ref:t},i))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",sidebar_position:4,sidebar_label:"Restart"},l="Restart MySQL cluster",o={unversionedId:"user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",id:"user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",source:"@site/docs/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster.md",sourceDirName:"user_docs/kubeblocks-for-mysql/cluster-management",slug:"/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",permalink:"/docs/preview/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",sidebar_position:4,sidebar_label:"Restart"},sidebar:"docs",previous:{title:"Expand volume",permalink:"/docs/preview/user_docs/kubeblocks-for-mysql/cluster-management/expand-volume"},next:{title:"Stop/Start",permalink:"/docs/preview/user_docs/kubeblocks-for-mysql/cluster-management/start-stop-a-cluster"}},c={},p=[{value:"Steps",id:"steps",level:2}],i={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"restart-mysql-cluster"},"Restart MySQL cluster"),(0,n.kt)("p",null,"You can restart all pods of the cluster. When an exception occurs in a database, you can try to restart it."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"All pods restart in the order of learner -> follower -> leader and the leader may change after the cluster restarts.")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart a cluster.\nYou can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kbcli")," or create an OpsRequest to restart a cluster."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},"Option 1.")," (",(0,n.kt)("strong",{parentName:"p"},"Recommended"),") Use kbcli"),(0,n.kt)("p",{parentName:"li"}," Configure the values of ",(0,n.kt)("inlineCode",{parentName:"p"},"component-names")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterSucceed")," and run the command below to restart a specified cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster restart NAME --component-names="mysql" \\\n--ttlSecondsAfterSucceed=30\n')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"component-names")," describes the component name that needs to be restarted.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterSucceed")," describes the time to live of an OpsRequest job after the restarting succeeds."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Option 2.")," Create an OpsRequest"),(0,n.kt)("p",{parentName:"li"},"Run the command below to apply the restarting to a cluster. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: apps.kubeblocks.io/v1alpha1\nkind: OpsRequest\nmetadata:\n  name: ops-restart\nspec:\n  clusterRef: mysql-cluster\n  type: Restart \n  restart:\n  - componentName: mysql\nEOF\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Validate the restarting.\nRun the command below to check the cluster status to check the restarting status."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"STATUS=Updating: it means the cluster is restarting."),(0,n.kt)("li",{parentName:"ul"},"STATUS=Running: it means the cluster is restarted.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Example"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list mysql-cluster\n>\nNAME                 NAMESPACE        CLUSTER-DEFINITION        VERSION                TERMINATION-POLICY        STATUS         CREATED-TIME\nmysql-cluster        default          apecloud-mysql            ac-mysql-8.0.30        Delete                    Running        Jan 29,2023 14:29 UTC+0800\n")))))}m.isMDXComponent=!0}}]);