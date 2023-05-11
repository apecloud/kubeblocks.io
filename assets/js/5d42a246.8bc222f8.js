"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[2451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={slug:"why-do-we-choose-the-dag-model-part-1",title:"Unveiling KubeBlocks Technology (Part 1) -- Why Do We Choose the DAG Model?",description:"This article discusses the problems with the current implementation of Kubernetes' Cluster Controller and introduces KubeBlocks, a new model that uses a Directed Acyclic Graph (DAG) to express a cluster.",authors:{name:"free6om",url:"https://github.com/free6om",image_url:"https://avatars.githubusercontent.com/u/28781141?v=4"},tags:["DAG Model"],image:"/img/blog-banner.png"},s="Unveiling KubeBlocks Technology (Part 1): Why Do We Choose the DAG Model?",l={permalink:"/blog/why-do-we-choose-the-dag-model-part-1",editUrl:"https://github.com/apecloud/kubeblocks.io/tree/master/blog/2023-05-10-why-do-we-choose-dag-model.md",source:"@site/blog/2023-05-10-why-do-we-choose-dag-model.md",title:"Unveiling KubeBlocks Technology (Part 1) -- Why Do We Choose the DAG Model?",description:"This article discusses the problems with the current implementation of Kubernetes' Cluster Controller and introduces KubeBlocks, a new model that uses a Directed Acyclic Graph (DAG) to express a cluster.",date:"2023-05-10T00:00:00.000Z",formattedDate:"May 10, 2023",tags:[{label:"DAG Model",permalink:"/blog/tags/dag-model"}],readingTime:10.38,hasTruncateMarker:!1,authors:[{name:"free6om",url:"https://github.com/free6om",image_url:"https://avatars.githubusercontent.com/u/28781141?v=4",imageURL:"https://avatars.githubusercontent.com/u/28781141?v=4"}],frontMatter:{slug:"why-do-we-choose-the-dag-model-part-1",title:"Unveiling KubeBlocks Technology (Part 1) -- Why Do We Choose the DAG Model?",description:"This article discusses the problems with the current implementation of Kubernetes' Cluster Controller and introduces KubeBlocks, a new model that uses a Directed Acyclic Graph (DAG) to express a cluster.",authors:{name:"free6om",url:"https://github.com/free6om",image_url:"https://avatars.githubusercontent.com/u/28781141?v=4",imageURL:"https://avatars.githubusercontent.com/u/28781141?v=4"},tags:["DAG Model"],image:"/img/blog-banner.png"},nextItem:{title:"A Comparison and Analysis of ApeCloud MySQL High Availability Solutions",permalink:"/blog/third-blog-post"}},i={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Current Model - <code>prepare-checkedCreate</code> pattern",id:"current-model---prepare-checkedcreate-pattern",level:2},{value:"The KubeBlocks Model",id:"the-kubeblocks-model",level:2},{value:"Why do we use DAG?",id:"why-do-we-use-dag",level:3},{value:"The <em>Plan</em>",id:"the-plan",level:3},{value:"How to obtain the old version of the <code>cluster</code> object?",id:"how-to-obtain-the-old-version-of-the-cluster-object",level:3},{value:"Comparison",id:"comparison",level:4},{value:"Stale Cache Problem Analysis",id:"stale-cache-problem-analysis",level:2},{value:"Problem Abstraction",id:"problem-abstraction",level:3},{value:"Problem Analysis",id:"problem-analysis",level:3},{value:"Scenario 1. Latest Cluster Snapshot Is Not Updated",id:"scenario-1-latest-cluster-snapshot-is-not-updated",level:4},{value:"Scenario 2. Latest Cluster Snapshot Is Update",id:"scenario-2-latest-cluster-snapshot-is-update",level:4},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"In the current implementation of Kubernetes, the Cluster Controller is responsible for most of the Reconcile logic, which is the core control logic used to maintain the consistency of the Kubernetes system. However, the Cluster Controller is too bulky and complex, and lacks clear abstraction levels and separation of concerns in its design. This makes it difficult to modify and add new logic, which can increase the difficulty of maintenance and modification during continuous iterations. In other words, modifying a small logical point may affect the entire system, causing unnecessary risks."),(0,o.kt)("p",null,"We analyzed the main logic of the current code. In this article, we provide a more structured plan for refactoring, including detailed explanations of several key issues in the plan."),(0,o.kt)("h2",{id:"current-model---prepare-checkedcreate-pattern"},"Current Model - ",(0,o.kt)("inlineCode",{parentName:"h2"},"prepare-checkedCreate")," pattern"),(0,o.kt)("p",null,"In the Cluster Controller, the operation of the cluster object is mainly in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/blob/main/controllers/apps/lifecycle_utils.go#L77"},(0,o.kt)("inlineCode",{parentName:"a"},"reconcileClusterWorkloads"))," function, which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"prepare-checkedCreate")," pattern: First, prepare all the required K8s objects according to ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.spec")," (prepare phase); then try to create these objects. When the API Server returns an object already exists error (",(0,o.kt)("inlineCode",{parentName:"p"},"metav1.StatusReasonAlreadyExists"),"), call the update function again to update these objects (checkedCreate phase)."),(0,o.kt)("p",null,"This pattern has two problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first problem is that when a particular object has special business logic, it needs to be patched. For example, in KubeBlocks, once the configuration file is generated, it cannot be modified. Therefore, when updating the cluster, the ConfigMap of the configuration file needs to be filtered out in the prepare phase. Similarly, if the credential corresponds to the Secret needs to be created before other objects, the generation logic of the Secret needs to be placed before other objects. If the order is not noticed in subsequent iterations, it can cause unexpected problems."),(0,o.kt)("li",{parentName:"ul"},"The second problem is that if a component is deleted during a cluster update, the corresponding object will become an orphan object drifting in the Kubernetes cluster.")),(0,o.kt)("p",null,"In addition, this pattern has other potential problems caused by functional coupling that can lead to code conflicts. So refactoring starts here."),(0,o.kt)("h2",{id:"the-kubeblocks-model"},"The KubeBlocks Model"),(0,o.kt)("h3",{id:"why-do-we-use-dag"},"Why do we use DAG?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"DAG\uff08Directed acyclic graph)")," is a data structure that has been extensively studied, and we can leverage a lot of existing knowledge and experience to make our construction process easier."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," contains multiple K8s objects such as CD, CV, StatefulSet, Deployment, ConfigMap, Secret, Service, PVC, and KubeBlocks abstract CRDs, and these objects have dependencies (such as the credentials Secret needs to be created before other objects). Therefore, we can use DAG to express a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster"),"."),(0,o.kt)("p",null,"With such an abstract structure, we can transform many requirements into an operation on the DAG. For example, in the face of the requirement that ",(0,o.kt)("em",{parentName:"p"},"the configuration file ConfigMap cannot be updated"),", we can define an operation that will traverse the DAG using the BFS (breadth-first search) algorithm and then delete or set the ConfigMap in it to immutable. In response to the requirement that ",(0,o.kt)("em",{parentName:"p"},"the credentials Secret must be created before other objects"),", we can define another operation that adds all other objects to the dependency relationship of the Secret to ensure that the requirement is met."),(0,o.kt)("p",null,'We can abstract the "operation" mentioned above, which leads us to the second data structure: Transformer. The role of the Transformer is to "transform" a DAG into another DAG.'),(0,o.kt)("p",null,"When we add new business logic later, we can write a new Transformer. In this way, we have established a continuous and iterative model, and the code coupling degree has also been reduced."),(0,o.kt)("h3",{id:"the-plan"},"The ",(0,o.kt)("em",{parentName:"h3"},"Plan")),(0,o.kt)("font",{color:"#c5161b"}," After applying a series of Transformers, we obtain a final Directed Acyclic Graph (DAG). What should we do next? "),(0,o.kt)("p",null,"If each Node in this DAG has a K8s object and its corresponding operation (Create/Update/Delete), it would be very friendly, wouldn't it? If each edge represents the order in which they are executed, would it be better? If I just write a bunch of Transformers and apply them, and the final execution does not require my efforts, would it be close to perfection?"),(0,o.kt)("p",null,'We abstract the last step of "execution", giving us the last data structure: ',(0,o.kt)("em",{parentName:"p"},"Plan"),". The Plan is an execution plan that traverses the final DAG processed earlier and performs some actions. After the execution is completed, the cluster object reaches the declared state (i.e. the completion of this reconcile)."),(0,o.kt)("p",null,"The above is the KubeBlocks' model, and you can check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/pull/1571"},"code frame")," for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/pull/1571/files#diff-156cb301a9e77d9539ae0021bdc6beadcbdcfdf3e75b72240fa3b75d7cd7c7faR40"},"detailed information"),"."),(0,o.kt)("p",null,"Can the KubeBlocks model solve the problems in the ",(0,o.kt)("inlineCode",{parentName:"p"},"prepare-checkedCreate")," pattern? The answer is yes."),(0,o.kt)("p",null,"For the first problem, an example analysis has been given earlier."),(0,o.kt)("p",null,"For the second problem, if the corresponding component is deleted during cluster update, the corresponding object will be deleted, so it can also be solved."),(0,o.kt)("h3",{id:"how-to-obtain-the-old-version-of-the-cluster-object"},"How to obtain the old version of the ",(0,o.kt)("inlineCode",{parentName:"h3"},"cluster")," object?"),(0,o.kt)("p",null,"You may have a question. Where is the old version of the cluster object when generating the final plan?"),(0,o.kt)("p",null,"We can see the old version of the cluster object and other related objects as a cluster snapshot. There are two ways to obtain the cluster snapshot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By-ControllerRevision: You can refer to the implementation of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/release-1.25/pkg/controller/statefulset"},"StatefulSet")," (see the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/stateful-set-v1/"},(0,o.kt)("inlineCode",{parentName:"a"},"revisionHistoryLimit"))," documentation), record historical version clusters in the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/controller-revision-v1/"},"ControllerRevision"),", and generate an old version cluster snapshot through ControllerRevision during subsequent Reconcile."),(0,o.kt)("li",{parentName:"ul"},"By-Ownership: Objects belonging to the same cluster can be obtained through the OwnerReference relationship, and these objects can form an old version cluster snapshot.")),(0,o.kt)("h4",{id:"comparison"},"Comparison"),(0,o.kt)("p",null,"The By-ControllerRevision method needs to introduce similar ",(0,o.kt)("inlineCode",{parentName:"p"},"revisionHistoryLimit")," logic and rely on ControllerRevision objects. According to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/controller-revision-v1/"},"official documentation"),", this has a certain risk:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.")),(0,o.kt)("p",null,'The By-Ownership method needs to obtain all related objects. There are two ways to obtain them. One is to read the local cache, which may cause some problems due to the lag; the other is to directly obtain the "latest" objects through the API Server, but actually, due to the network, there is still a possibility of obtaining stale objects.'),(0,o.kt)("p",null,"This refactoring of the lifecycle chooses the By-Ownership method because Ownership has been established in the current implementation and thus the workload is smaller."),(0,o.kt)("p",null,"Then there is one remaining question: is there a problem reading stale objects in the old version snapshot? Next, we will analyze this problem."),(0,o.kt)("h2",{id:"stale-cache-problem-analysis"},"Stale Cache Problem Analysis"),(0,o.kt)("p",null,"First of all, let's draw a conclusion: there is no problem constructing the old version cluster snapshot based on the cache."),(0,o.kt)("h3",{id:"problem-abstraction"},"Problem Abstraction"),(0,o.kt)("p",null,"There are two types of objects in the local cache: timely (latest) and stale (stale). The execution plan has three types of possible actions: ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Update"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),"."),(0,o.kt)("p",null,"Further, stale objects mean that the local cache is lagging behind the API Server versions, which means that a c/u/d (i.e. create/update/delete) arrangement can be used to express the increment of updates that have not been copied yet."),(0,o.kt)("p",null,'Formally, let\'s define the "+" operation as a binary operation on the set {c, u, d}, which aims to transform two consecutive operations into one operation. It can be seen that ',(0,o.kt)("em",{parentName:"p"},"c+u=c"),", ",(0,o.kt)("em",{parentName:"p"},"u+c=u"),", ",(0,o.kt)("em",{parentName:"p"},"c+d=d"),", ",(0,o.kt)("em",{parentName:"p"},"d+c=c"),", ",(0,o.kt)("em",{parentName:"p"},"u+d=d"),", and ",(0,o.kt)("em",{parentName:"p"},"d+u=u"),". Therefore, a string composed of the arrangement of elements in the set {c, u, d} can be expressed by one element. Thus, the difference between stale objects and the API Server is just a c/u/d operation, which we represent as ",(0,o.kt)("inlineCode",{parentName:"p"},"c-lag"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"u-lag"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"d-lag"),"."),(0,o.kt)("p",null,"So far, we classify Plan Action into three types and cache into four cases."),(0,o.kt)("h3",{id:"problem-analysis"},"Problem Analysis"),(0,o.kt)("p",null,"First, assuming that the latest snapshot does not change, that is, the cluster does not update."),(0,o.kt)("h4",{id:"scenario-1-latest-cluster-snapshot-is-not-updated"},"Scenario 1. Latest Cluster Snapshot Is Not Updated"),(0,o.kt)("p",null,"Next, we analyze whether there are problems after Plan Action combination execution with the four cache cases, as shown in the table below:\nCache\\Plan Action"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"}," Cache\\Plan Action "),(0,o.kt)("td",null," Create "),(0,o.kt)("td",null," Update "),(0,o.kt)("td",null," Delete ")),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"}," Latest "),(0,o.kt)("td",null," \u2705 "),(0,o.kt)("td",null," \u2705 "),(0,o.kt)("td",null," \u2705 ")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"4"}," Stale ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," c-lag "),(0,o.kt)("td",null," -- "),(0,o.kt)("td",null," \u274c "),(0,o.kt)("td",null," \u274c ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," u-lag "),(0,o.kt)("td",null," -- "),(0,o.kt)("td",null," \u2705 "),(0,o.kt)("td",null," \u2705 ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," d-lag "),(0,o.kt)("td",null," \u274c "),(0,o.kt)("td",null," -- "),(0,o.kt)("td",null," -- "))),(0,o.kt)("p",null,"When the local cache is the latest, the snapshot obtained from the cache is the old version snapshot, so the Plan Action based on this snapshot can achieve the expected purpose."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"c-lag")," occurs, it means that the object exists on the API Server but not in the cache. At this time, the Plan should only be ",(0,o.kt)("em",{parentName:"p"},"Update")," or ",(0,o.kt)("em",{parentName:"p"},"Delete"),". However, because there is no cache, ",(0,o.kt)("em",{parentName:"p"},"Update")," actually becomes ",(0,o.kt)("em",{parentName:"p"},"Create")," to execute. When ",(0,o.kt)("em",{parentName:"p"},"Create")," is executed, an object that already exists error (",(0,o.kt)("inlineCode",{parentName:"p"},"metav1.StatusReasonAlreadyExists"),") will be reported, and the result is inconsistent with expectations. ",(0,o.kt)("em",{parentName:"p"},"Delete")," will not be generated, which means that the operation is lost, not as expected.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"u-lag")," occurs, it means that the object exists both in the API Server and in the cache, but the versions are different. At this time, the Plan should only consist of ",(0,o.kt)("inlineCode",{parentName:"p"},"Update")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete")," Actions, and the result should be consistent with expectations."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"d-lag")," occurs, it means that the object exists only in the cache and not in the API Server. At this time, the Plan should only consist of ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," Actions, but because the object exists in the cache, ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"Update")," when executed. When ",(0,o.kt)("inlineCode",{parentName:"p"},"Update")," is executed, an object not found error (",(0,o.kt)("inlineCode",{parentName:"p"},"metav1.StatusReasonNotFound"),") will be reported, and the result is inconsistent with expectations. When the object is not in the new snapshot, the Plan will incorrectly generate ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete")," Actions, which will also result in an object not found error."),(0,o.kt)("p",null,"At this point, constructing an old version snapshot based on the cache does indeed have problems. However, we still have a chance to remedy the situation. Let's focus on one stale object in the entire old snapshot version for now.\n",(0,o.kt)("img",{alt:"Snapshot comparison",src:n(71720).Z,width:"4188",height:"1232"})),(0,o.kt)("p",null,"The image above assumes that a cluster within KubeBlocks has been updated to version 3 (gen=3), and its generated secondary resources and their dependencies are shown on the left side of the image. It can be observed that there is a stale object on the left-hand side, which is the StatefulSet (gen=2)."),(0,o.kt)("p",null,"The Reconcile process of ",(0,o.kt)("inlineCode",{parentName:"p"},"controller-runtime")," is an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event-driven_architecture"},"EDA")," model. When the update of this stale object reaches the cache, controller-runtime sends an event to the owner controller (that is, our cluster controller), and we have the opportunity to generate an execution Plan again. At this point, the object is in the latest (gen=3) state. According to the table above, the generated Plan execution is as expected. For other objects that are already in the latest state, updating them again will not have any other effects, as expected. Therefore, the problem is solved."),(0,o.kt)("p",null,"This process can be extended to multiple stale objects in the snapshot. Therefore, ultimately, by obtaining an old version snapshot from the local cache, we can ensure that the result meets expectations after several Reconciles."),(0,o.kt)("h4",{id:"scenario-2-latest-cluster-snapshot-is-update"},"Scenario 2. Latest Cluster Snapshot Is Update"),(0,o.kt)("p",null,"If the latest cluster snapshot is updated, then it can be considered that all objects in the cache are stale, and the expected target becomes the updated snapshot. According to the previous analysis, even after several Reconciles, we can still ensure that the result meets expectations."),(0,o.kt)("p",null,"In summary, there is no problem with constructing an old version cluster snapshot through the cache, but we need to receive events for all objects in the snapshot (that is, when the controller is set up, it owns that GVK and sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"SetControllerReference")," parameters)."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This article discusses the problems with the current implementation of Kubernetes' Cluster Controller and introduces KubeBlocks, a new model that uses a Directed Acyclic Graph (DAG) to express a cluster. KubeBlocks uses Transformers to modify the DAG and a Plan to execute the final DAG. The article also addresses the issue of stale objects in the local cache and how KubeBlocks can handle this problem. The By-Ownership method is used to obtain the old version of the cluster object, and events are received for all objects in the snapshot to ensure that the result meets expectations after several Reconciles."))}u.isMDXComponent=!0},71720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snapshot-comparison-5234d0e32a644a5e04d8fb003aa8ee48.png"}}]);