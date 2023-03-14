"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(k,o(o({ref:t},i),{},{components:r})):n.createElement(k,o({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",sidebar_position:4},o="Restart MySQL cluster",l={unversionedId:"user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",id:"user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",source:"@site/docs/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster.md",sourceDirName:"user_docs/kubeblocks-for-mysql/cluster-management",slug:"/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-mysql/cluster-management/restart-mysql-cluster.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Restart MySQL cluster",description:"How to restart a MySQL cluster",sidebar_position:4},sidebar:"docs",previous:{title:"Expand volume",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/cluster-management/expand-volume"},next:{title:"Start/Stop a MySQL cluster",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/cluster-management/start-stop-a-cluster"}},c={},p=[],i={toc:p},u="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restart-mysql-cluster"},"Restart MySQL cluster"),(0,a.kt)("p",null,"You can restart all pods of the cluster. When an exception occurs in a database, you can try to restart it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))," "),(0,a.kt)("p",{parentName:"blockquote"},"All pods restart in the order of ",(0,a.kt)("inlineCode",{parentName:"p"},"learner -> follower -> leader")," and the leader may change after the cluster restarts.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How KubeBlocks restarts a cluster")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Restart a cluster",src:r(95391).Z,width:"1474",height:"1054"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A user creates a restarting OpsRequest CR."),(0,a.kt)("li",{parentName:"ol"},"This CR passes the webhook validation."),(0,a.kt)("li",{parentName:"ol"},"The OpsRequest controller adds the restart annotation to the podTemplate of the StatefulSet/Deployment controller corresponding to the component."),(0,a.kt)("li",{parentName:"ol"},"The OpsRequest controller updates the cluster phase to ",(0,a.kt)("inlineCode",{parentName:"li"},"Rebooting"),"."),(0,a.kt)("li",{parentName:"ol"},"The component controller watches the StatefulSet/Deployment controller and pods."),(0,a.kt)("li",{parentName:"ol"},"When the component type is Stateful/Stateless, the Kubernetes StatefulSet/Deployment controller applies a rolling update to pods. When the component type is Consensus/ReplicationSet, the component controller applies the restarting operation to pods. "),(0,a.kt)("li",{parentName:"ol"},"When restarting is completed, the component controller updates the cluster CR component to ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),"."),(0,a.kt)("li",{parentName:"ol"},"The cluster controller watches the component phase changes and when all components are ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),", the cluster controller updates the cluster phase to ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),"."),(0,a.kt)("li",{parentName:"ol"},"The OpsRequest controller reconciles the status when the cluster component status changes.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Steps:"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart a cluster.\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli")," or create an OpsRequest to restart a cluster."),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},"Option 1.")," (Recommended) Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli"),"."),(0,a.kt)("p",{parentName:"li"}," Configure the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"component-names")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterSucceed")," and run the command below to restart a specified cluster."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster restart NAME --component-names="mysql" \\\n--ttlSecondsAfterSucceed=30\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"component-names")," describes the component name that needs to be restarted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterSucceed")," describes the time to live of OpsRequest job after the restarting succeeds."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 2.")," Create an OpsRequest."),(0,a.kt)("p",{parentName:"li"},"Run the command below to apply the restarting to a cluster. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: apps.kubeblocks.io/v1alpha1\nkind: OpsRequest\nmetadata:\n  name: ops-restart\nspec:\n  clusterRef: mysql-cluster\n  type: Restart \n  restart:\n  - componentName: mysql\nEOF\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Validate the restarting.\nRun the command below to check the cluster status to check the restarting status."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"STATUS=Updating: means the cluster is restarting."),(0,a.kt)("li",{parentName:"ul"},"STATUS=Running means the cluster is restarted.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list mysql-cluster\n>\nNAME                 NAMESPACE        CLUSTER-DEFINITION        VERSION                TERMINATION-POLICY        STATUS         CREATED-TIME\nmysql-cluster        default          apecloud-mysql            ac-mysql-8.0.30        Delete                    Running        Jan 29,2023 14:29 UTC+0800\n")))))}m.isMDXComponent=!0},95391:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mysql_cluster_restart-8c7d91cb70903c7bafe5a29386f635a8.png"}}]);