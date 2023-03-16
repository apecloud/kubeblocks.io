"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var i=2;i<l;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=n(87462),a=(n(67294),n(3905));const l={title:"Expand volume",description:"How to expand the volume of a MySQL cluster",sidebar_position:3,sidebar_label:"Expand volume"},r="Expand volume",s={unversionedId:"user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume",id:"user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume",title:"Expand volume",description:"How to expand the volume of a MySQL cluster",source:"@site/docs/user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume.md",sourceDirName:"user_docs/kubeblocks-for-postgresql/cluster-management",slug:"/user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Expand volume",description:"How to expand the volume of a MySQL cluster",sidebar_position:3,sidebar_label:"Expand volume"},sidebar:"docs",previous:{title:"Scale",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql"},next:{title:"Restart",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/restart-postgresql-cluster"}},p={},i=[{value:"How KubeBlocks expands the volume",id:"how-kubeblocks-expands-the-volume",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Option 1. Use kbcli",id:"option-1-use-kbcli",level:2},{value:"Option 2. Create an OpsRequest",id:"option-2-create-an-opsrequest",level:2},{value:"Option 3. Change the YAML file of the cluster",id:"option-3-change-the-yaml-file-of-the-cluster",level:3}],c={toc:i},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expand-volume"},"Expand volume"),(0,a.kt)("p",null,"You can expand the storage volume size of each pod."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Volume expansion triggers pod restart, all pods restart in the order of learner -> follower -> leader and the leader pod may change after the operation.")),(0,a.kt)("h2",{id:"how-kubeblocks-expands-the-volume"},"How KubeBlocks expands the volume"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Expand volume",src:n(71343).Z,width:"1394",height:"766"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A user creates a volume expansion OpsRequest CR."),(0,a.kt)("li",{parentName:"ol"},"This CR passes the webhook validation."),(0,a.kt)("li",{parentName:"ol"},"The OpsRequest controller handles this OpsRequest and updates the storage size of the specified component and VolumeClaimTemplate to the configured amount."),(0,a.kt)("li",{parentName:"ol"},"The OpsRequest controller updates the cluster phase to ",(0,a.kt)("inlineCode",{parentName:"li"},"VolumeExpanding"),"."),(0,a.kt)("li",{parentName:"ol"},"The cluster controller watches the cluster CR."),(0,a.kt)("li",{parentName:"ol"},"The cluster controller changes the capacity of the corresponding PVC."),(0,a.kt)("li",{parentName:"ol"},"The PVC controller listens to the PVC changes and asks the OpsRequest controller to reconcile the phases of the cluster and OpsRequest."),(0,a.kt)("li",{parentName:"ol"},"If the PVC of a component is expanded successfully, the OpsRequest controller updates this component phase to ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),". When all components are expanded successfully, the OpsRequest controller updates this OpsRequest to ",(0,a.kt)("inlineCode",{parentName:"li"},"Succeed"),"."),(0,a.kt)("li",{parentName:"ol"},"The cluster controller watches the component phase changes and when all components are Running, the cluster controller updates the cluster phase to ",(0,a.kt)("inlineCode",{parentName:"li"},"Running"),".")),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"Run the command below to check whether the cluster STATUS is ",(0,a.kt)("inlineCode",{parentName:"p"},"Running"),". Otherwise, the following operations may fail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list mysql-cluster\n>\nNAME                 NAMESPACE        CLUSTER-DEFINITION        VERSION                TERMINATION-POLICY        STATUS         CREATED-TIME\nmysql-cluster        default          apecloud-mysql            ac-mysql-8.0.30        Delete                    Running        Jan 29,2023 14:29 UTC+0800\n")),(0,a.kt)("h2",{id:"option-1-use-kbcli"},"Option 1. Use kbcli"),(0,a.kt)("p",null,"Configure the values of ",(0,a.kt)("inlineCode",{parentName:"p"},"--component-names"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-claim-template-names"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"--storage"),", and run the command below to expand the volume."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster volume-expand mysql-cluster --component-names="mysql" \\\n--volume-claim-template-names="data" --storage="2Gi"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--component-names")," describes the component name for volume expansion."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--volume-claim-template-names")," describes the VolumeClaimTemplate names in components."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--storage")," describes the volume storage size.\n")),(0,a.kt)("h2",{id:"option-2-create-an-opsrequest"},"Option 2. Create an OpsRequest"),(0,a.kt)("p",null,"Run the command below to expand the volume of a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apps.kubeblocks.io/v1alpha1\nkind: OpsRequest\nmetadata:\n  name: ops-volume-expansion\nspec:\n  clusterRef: mysql-cluster\n  type: VolumeExpansion\n  volumeExpansion:\n  - componentName: mysql\n    volumeClaimTemplates:\n  - name: data\n    storage: "2Gi"\nEOF\n')),(0,a.kt)("h3",{id:"option-3-change-the-yaml-file-of-the-cluster"},"Option 3. Change the YAML file of the cluster"),(0,a.kt)("p",null,"Change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.components.volumeClaimTemplates.spec.resources")," in the cluster YAML file. ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.components.volumeClaimTemplates.spec.resources")," is the storage resource information of the pod and changing this value triggers the volume expansion of a cluster. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: mysql-cluster\n  namespace: default\nspec:\n  clusterDefinitionRef: apecloud-mysql\n  clusterVersionRef: ac-mysql-8.0.30\n  components:\n  - name: mysql\n    type: mysql\n    replicas: 1\n    volumeClaimTemplates:\n    - name: data\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 1Gi # Change the volume storage size.\nterminationPolicy: Halt\n")))}m.isMDXComponent=!0},71343:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pgsql_cluster_expand_volume-75f0e29e7e752bb255a90709c543d474.png"}}]);