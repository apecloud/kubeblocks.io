"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[4843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"Scale for PostgreSQL",description:"How to scale a MPostgreSQL cluster, horizontal scaling, vertical scaling",sidebar_position:2,sidebar_label:"Scale"},o="Scale for PostgreSQL",l={unversionedId:"user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql",id:"user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql",title:"Scale for PostgreSQL",description:"How to scale a MPostgreSQL cluster, horizontal scaling, vertical scaling",source:"@site/docs/user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql.md",sourceDirName:"user_docs/kubeblocks-for-postgresql/cluster-management",slug:"/user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-postgresql/cluster-management/scale-for-postgresql.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Scale for PostgreSQL",description:"How to scale a MPostgreSQL cluster, horizontal scaling, vertical scaling",sidebar_position:2,sidebar_label:"Scale"},sidebar:"docs",previous:{title:"Create and connect",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/create-and-connect-a-postgresql-cluster"},next:{title:"Expand volume",permalink:"/docs/next/user_docs/kubeblocks-for-postgresql/cluster-management/expand-volume"}},i={},c=[{value:"Vertical scaling",id:"vertical-scaling",level:2},{value:"Before you start",id:"before-you-start",level:3},{value:"Steps",id:"steps",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scale-for-postgresql"},"Scale for PostgreSQL"),(0,a.kt)("p",null,"You can scale PostgreSQL DB instances in two ways, horizontal scaling and vertical scaling. "),(0,a.kt)("h2",{id:"vertical-scaling"},"Vertical scaling"),(0,a.kt)("p",null,"You can vertically scale a cluster by changing resource requirements and limits (CPU and storage). For example, if you need to change the resource demand from 1C2G to 2C4G, vertical scaling is what you need."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"During the vertical scaling process, all pods restart in the order of learner -> follower -> leader and the leader pod may change after the restarting.")),(0,a.kt)("h3",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"Run the command below to check whether the cluster STATUS is ",(0,a.kt)("inlineCode",{parentName:"p"},"Running"),". Otherwise, the following operations may fail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list pg-cluster\n>\nNAME         NAMESPACE   CLUSTER-DEFINITION           VERSION             TERMINATION-POLICY   STATUS    CREATED-TIME\npg-cluster   default     postgresql-cluster           postgresql-14.7.0   Delete               Running   Mar 03,2023 18:00 UTC+0800\n")),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change configuration. There are 3 ways to apply vertical scaling."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 1.")," (",(0,a.kt)("strong",{parentName:"p"},"Recommended"),") Use kbcli"),(0,a.kt)("p",{parentName:"li"},"Configure the parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"component-names"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"requests"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"limits")," and run the command."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster vscale pg-cluster \\\n--component-names="postgresql" \\\n--requests.memory="2Gi" --requests.cpu="1" \\\n--limits.memory="4Gi" --limits.cpu="2"\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"component-names")," describes the component name ready for vertical scaling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requests")," describes the minimum amount of computing resources required. If ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," is omitted for a container, it uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," value if ",(0,a.kt)("inlineCode",{parentName:"li"},"limits")," is explicitly specified, otherwise uses an implementation-defined value. For more details, see ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Resource Management for Pods and Containers"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--limits")," describes the maximum amount of computing resources allowed. For more details, see ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Resource Management for Pods and Containers"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 2.")," Create an OpsRequest"),(0,a.kt)("p",{parentName:"li"},"Run the command below to apply an OpsRequest to the specified cluster. Configure the parameters according to your needs."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apps.kubeblocks.io/v1alpha1\nkind: OpsRequest\nmetadata:\n  name: ops-vertical-scaling\nspec:\n  clusterRef: pg-cluster\n  type: VerticalScaling \n  verticalScaling:\n  - componentName: postgresql\n    requests:\n      memory: "2Gi"\n      cpu: "1000m"\n    limits:\n      memory: "4Gi"\n      cpu: "2000m"\nEOF\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Option 3.")," Change the YAML file of the cluster"),(0,a.kt)("p",{parentName:"li"},"Change the configuration of ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.components.resources")," in the YAML file. ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.components.resources")," controls the requirement and limit of resources and changing them triggers a vertical scaling. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: pg-cluster\n  namespace: default\nspec:\n  clusterDefinitionRef: postgresql-cluster\n  clusterVersionRef: postgre-14.7.0\n  components:\n  - name: postgresql\n    type: postgresql\n    replicas: 1\n    resources: # Change the values of resources.\n      requests:\n        memory: "2Gi"\n        cpu: "1000m"\n      limits:\n        memory: "4Gi"\n        cpu: "2000m"\n    volumeClaimTemplates:\n    - name: data\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 1Gi\n  terminationPolicy: Halt\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Validate the vertical scaling.\nRun the command below to check the cluster status to identify the vertical scaling status."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list <name>\n")),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list pg-cluster\n>\nNAME              NAMESPACE        CLUSTER-DEFINITION            VERSION                TERMINATION-POLICY   STATUS    CREATED-TIME\npg-cluster        default          postgresql-cluster            postgresql-14.7.0      Delete               Running   Mar 03,2023 18:00 UTC+0800\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"STATUS=Running: it means the vertical scaling operation is applied."),(0,a.kt)("li",{parentName:"ul"},"STATUS=Updating: it means the vertical scaling is in progress."),(0,a.kt)("li",{parentName:"ul"},"STATUS=Abnormal: it means the vertical scaling is abnormal. The reason may be the normal instances number is less than the total instance number or the leader instance is running properly while others are abnormal. ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"To solve the problem, you can check manually to see whether resources are sufficient. If AutoScaling is supported, the system recovers when there are enough resources, otherwise, you can create enough resources and check the result with kubectl describe command.")))))))}u.isMDXComponent=!0}}]);