"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,y=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Configure pod affinity for database clusters",description:"How to configure pods affinity for database clusters",sidebar_position:1},i="Configure pod affinity for database clusters",l={unversionedId:"user_docs/resource-scheduling/resource-scheduling",id:"user_docs/resource-scheduling/resource-scheduling",title:"Configure pod affinity for database clusters",description:"How to configure pods affinity for database clusters",source:"@site/docs/user_docs/resource-scheduling/resource-scheduling.md",sourceDirName:"user_docs/resource-scheduling",slug:"/user_docs/resource-scheduling/",permalink:"/docs/next/user_docs/resource-scheduling/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/resource-scheduling/resource-scheduling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure pod affinity for database clusters",description:"How to configure pods affinity for database clusters",sidebar_position:1},sidebar:"docs",previous:{title:"Production environment",permalink:"/docs/next/user_docs/connect_database/connect-database-in-production-environment"},next:{title:"KubeBlocks CLI Overview",permalink:"/docs/next/user_docs/cli/"}},s={},d=[{value:"Option 1. Use kbcli",id:"option-1-use-kbcli",level:2},{value:"Option 2. Use a YAML file",id:"option-2-use-a-yaml-file",level:2},{value:"Examples",id:"examples",level:2},{value:"Default configuration",id:"default-configuration",level:3},{value:"Spread evenly as much as possible",id:"spread-evenly-as-much-as-possible",level:3},{value:"Forced spread evenly",id:"forced-spread-evenly",level:3},{value:"Deploy pods in specified nodes",id:"deploy-pods-in-specified-nodes",level:3},{value:"Deploy pods in dedicated nodes",id:"deploy-pods-in-dedicated-nodes",level:3},{value:"One node only for one pod",id:"one-node-only-for-one-pod",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-pod-affinity-for-database-clusters"},"Configure pod affinity for database clusters"),(0,a.kt)("p",null,"Affinity controls the selection logic of pod allocation on nodes. By a reasonable allocation of Kubernetes pods on different nodes, the business availability, resource usage rate, and stability are improved.\nAffinity and toleration can be set by ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli")," or the CR YAML file of the cluster. ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli")," only supports the cluster-level configuration and the CR YAML file supports both the cluster-level and component-level configurations."),(0,a.kt)("h2",{id:"option-1-use-kbcli"},"Option 1. Use kbcli"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli cluster create -h")," to view the examples and the parameter options of affinity and toleration configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create -h\n>\nCreate a cluster\n\nExamples:\n  ......\n  \n  # Create a cluster forced to scatter by node\n  kbcli cluster create --cluster-definition apecloud-mysql --topology-keys kubernetes.io/hostname --pod-anti-affinity\nRequired\n  \n  # Create a cluster in specific labels nodes\n  kbcli cluster create --cluster-definition apecloud-mysql --node-labels\n'\"topology.kubernetes.io/zone=us-east-1a\",\"disktype=ssd,essd\"'\n  \n  # Create a Cluster with two tolerations\n  kbcli cluster create --cluster-definition apecloud-mysql --tolerations\n'\"key=engineType,value=mongo,operator=Equal,effect=NoSchedule\",\"key=diskType,value=ssd,operator=Equal,effect=NoSchedule\"'\n  \n  # Create a cluster, with each pod runs on their own dedicated node\n  kbcli cluster create --tenancy=DedicatedNode\n\nOptions:\n    ......\n    --node-labels=[]:\n        Node label selector\n\n    --pod-anti-affinity='Preferred':\n        Pod anti-affinity type, one of: (Preferred, Required)\n        \n    --tenancy='SharedNode':\n        Tenancy options, one of: (SharedNode, DedicatedNode)\n\n    --tolerations=[]:\n        Tolerations for cluster, such as '\"key=engineType,value=mongo,operator=Equal,effect=NoSchedule\"'\n\n    --topology-keys=[]:\n        Topology keys for affinity\n    ......\n.......\n")),(0,a.kt)("h2",{id:"option-2-use-a-yaml-file"},"Option 2. Use a YAML file"),(0,a.kt)("p",null,"You can configure pod affinity and toleration in either the spec of a cluster or the spec of a component.\nThe cluster-level configuration is used as the default configuration of all components; if the pod affinity configuration exists in a component, the component-level configuration will take effect and cover the default cluster-level configuration. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"spec:\n  affinity:\n    podAntiAffinity: Preferred\n    topologyKeys:\n    - kubernetes.io/hostname\n    nodeLabels:\n    - topology.kubernetes.io/zone: us-east-1a\n    tenancy: sharedNode\n  tolerations:\n  - key: EngineType\n    operator: Equal\n    value: mysql\n    effect: NoSchedule\n  componentSpecs:\n  - name: mysql\n    componentDefRef: mysql\n    affnity:\n      podAntiAffinity: Required\n      topologyKeys:\n        - kubernetes.io/hostname\n    ......\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameter description in YAML file")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Affinity\nParameters related to pod affinity are under the object of ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.affinity")," in the Cluster CR YAML file.\nThe pod affinity configuration can be applied to the cluster or component and the component-level configuration covers the cluster-level configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Toleration\nParameters related to toleration are under the object of ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.tolerations")," in the Cluster CR YAML file and Kubernetes native semantics are used. For the toleration parameter configuration, refer to the Kubernetes official document ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"Taints and Tolerations"),".\nLike affinity configuration, toleration also supports component-level and cluster-level configurations. The cluster-level configuration is set as default and the component-level configuration covers the cluster-level configuration."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Value")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"podAntiAffinity"),(0,a.kt)("td",{parentName:"tr",align:"left"},"- Required ",(0,a.kt)("br",null)," - Prefferred (default)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"It stands for the anti-affinity level of the pod under the current component.",(0,a.kt)("br",null)," - Required means pods must be spread evenly in the fault domain specified by ",(0,a.kt)("inlineCode",{parentName:"td"},"topologyKeys"),". ",(0,a.kt)("br",null)," - Preferred means pods can be spread as evenly as possible in the fault domain specified by ",(0,a.kt)("inlineCode",{parentName:"td"},"topologyKeys"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topologyKeys"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"TopologyKey is the key of the node label. The node with the same value as this key is considered to be in the same topology, i.e. the same fault domain.",(0,a.kt)("br",null),"For example, if the TopologyKey is ",(0,a.kt)("inlineCode",{parentName:"td"},"kubernetes.io/hostname"),", every node is a domain of this topology. If the TopologyKey is ",(0,a.kt)("inlineCode",{parentName:"td"},"topology.kubernetes.io/zone"),", every available zone is a domain of this topology.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nodeLabels"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NodeLabels specifies a pod can only be scheduled to the node with the specified node label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tenancy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"- SharedNode (default) ",(0,a.kt)("br",null)," - DedicatedNode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"It refers to the pod tenancy type:",(0,a.kt)("br",null)," - SharedNode means that multiple pods share a node.",(0,a.kt)("br",null)," - DedicatedNode means that a node is dedicated to a pod.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The following examples use ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli")," to create cluster instances and show the common situations of how to use pod affinity and toleration configuration."),(0,a.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,a.kt)("p",null,"No affinity parameters are required."),(0,a.kt)("h3",{id:"spread-evenly-as-much-as-possible"},"Spread evenly as much as possible"),(0,a.kt)("p",null,'You can configure the pod affinity as "Preferred" if you want the pods of the cluster to be deployed in different topological domains, but do not want deployment failure due to failing to meet distribution requirements.\nThe example below creates and sets the cluster to be deployed across nodes as much as possible.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --topology-keys kubernetes.io/hostname --pod-anti-affinity Preferred\n")),(0,a.kt)("h3",{id:"forced-spread-evenly"},"Forced spread evenly"),(0,a.kt)("p",null,'You can configure the pod affinity as "Required" if the pods of the cluster must be deployed in different topological domains to ensure that the cluster can be disaster-tolerant across topological domains.\nThe example below creates and sets the cluster that must be deployed across nodes.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --topology-keys kubernetes.io/hostname --pod-anti-affinity Required\n")),(0,a.kt)("h3",{id:"deploy-pods-in-specified-nodes"},"Deploy pods in specified nodes"),(0,a.kt)("p",null,"You can specify a node label to deploy a cluster on the specified node.\nThe example below creates and sets the cluster to be deployed on the node with the available zone label of ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone=us-east-1a"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --node-labels '\"topology.kubernetes.io/zone=us-east-1a\"'\n")),(0,a.kt)("h3",{id:"deploy-pods-in-dedicated-nodes"},"Deploy pods in dedicated nodes"),(0,a.kt)("p",null,"If you want to manage node groups by the taint and node labels and need the clusters to be deployed on a dedicated host group, you can set tolerations and specify a node label.\nFor example, you have a host group for deploying database clusters and this host is added with a taint named ",(0,a.kt)("inlineCode",{parentName:"p"},"database=true:NoSchedule")," and a label ",(0,a.kt)("inlineCode",{parentName:"p"},"database=true"),", then you can follow the command below to create a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster create --node-labels \'"databa=true"\' --tolerations \'"key=database,value=true,operator=Equal,effect=NoSchedule"\n')),(0,a.kt)("h3",{id:"one-node-only-for-one-pod"},"One node only for one pod"),(0,a.kt)("p",null,"If you need one cluster only for the online core business and need to ensure every pod of this cluster has its own node to avoid being affected by the cluster of the cluster, you can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"tenancy"),' as "DedicatedNode".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --tenancy=DedicatedNode\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This command will be performed successfully based on the prerequisite that you have added taints for these nodes. Otherwise, the business that is not managed by KubeBlocks can still be deployed on these nodes.")))}u.isMDXComponent=!0}}]);