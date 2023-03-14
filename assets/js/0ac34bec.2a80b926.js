"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||i[d]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"Delete a MySQL Cluster",description:"How to delete a MySQL Cluster",sidebar_position:6},o="Delete a MySQL Cluster",s={unversionedId:"user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster",id:"user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster",title:"Delete a MySQL Cluster",description:"How to delete a MySQL Cluster",source:"@site/docs/user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster.md",sourceDirName:"user_docs/kubeblocks-for-mysql/cluster-management",slug:"/user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster",permalink:"/docs/user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-mysql/cluster-management/delete-mysql-cluster.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Delete a MySQL Cluster",description:"How to delete a MySQL Cluster",sidebar_position:6},sidebar:"docs",previous:{title:"Start/Stop a MySQL cluster",permalink:"/docs/user_docs/kubeblocks-for-mysql/cluster-management/start-stop-a-cluster"},next:{title:"Handle an exception",permalink:"/docs/user_docs/kubeblocks-for-mysql/cluster-management/handle-an-exception"}},c={},p=[],u={toc:p},m="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-a-mysql-cluster"},"Delete a MySQL Cluster"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))," "),(0,a.kt)("p",{parentName:"blockquote"},"The termination policy determines how you delete a cluster.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"terminationPolicy")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Deleting Operation")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DoNotTerminate")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DoNotTerminate")," blocks delete operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Halt")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Halt")," deletes workload resources such as statefulset, deployment workloads but keep PVCs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Delete ")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Delete")," delete workload resources and PVCs but keep backups.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"WipeOut")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"WipeOut")," deletes workload resources, PVCs and all relevant resources included backups.")))),(0,a.kt)("p",null,"To check the termination policy, execute the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list mysql-cluster\n>\nNAME            NAMESPACE   CLUSTER-DEFINITION  VERSION         TERMINATION-POLICY  STATUS  CREATED-TIME\nmysql-cluster   default     apecloud-mysql      ac-mysql-8.0.30 Delete              Running Feb 06,2023 18:27 UTC+0800\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Steps:"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option 1.")," Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli"),"."),(0,a.kt)("p",null,"Configure the cluster name and run the command below to delete the specified cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete <name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mysql-cluster\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option 2.")," Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,a.kt)("p",null,"Configure the cluster name and run the command below to delete the specified cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete cluster <name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete cluster mysql-cluster\n")))}i.isMDXComponent=!0}}]);