"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[7904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),c=l,d=k["".concat(s,".").concat(c)]||k[c]||m[c]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={},r="KubeBlocks $kubeblocks_version ($today)",i={unversionedId:"release_notes/v0.1.0/template",id:"release_notes/v0.1.0/template",title:"KubeBlocks $kubeblocks_version ($today)",description:"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88",source:"@site/docs/release_notes/v0.1.0/template.md",sourceDirName:"release_notes/v0.1.0",slug:"/release_notes/v0.1.0/template",permalink:"/docs/next/release_notes/v0.1.0/template",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/release_notes/v0.1.0/template.md",tags:[],version:"current",frontMatter:{},sidebar:"release_notes",previous:{title:"v0.1.0",permalink:"/docs/next/release_notes/v0.1.0/"}},s={},p=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"Upgrading to KubeBlocks $kubeblocks_version",id:"upgrading-to-kubeblocks-kubeblocks_version",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}],u={toc:p},k="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubeblocks-kubeblocks_version-today"},"KubeBlocks $kubeblocks_version ($today)"),(0,l.kt)("p",null,"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88"),(0,l.kt)("p",null,"We would like to extend our appreciation to all contributors who helped make this release happen."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Breaking changes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Reconstructed existing "dbaas.kubeblocks.io" API group to new "apps.kubeblocks.io" API group, affected following APIs:'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ClusterDefinition"),(0,l.kt)("li",{parentName:"ul"},"ClusterVersion"),(0,l.kt)("li",{parentName:"ul"},"Cluster"),(0,l.kt)("li",{parentName:"ul"},"ConfigConstraint"),(0,l.kt)("li",{parentName:"ul"},"OpsRequest"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Refactored ConfigTemplate related API, affected following APIs:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ClusterDefinition"),(0,l.kt)("li",{parentName:"ul"},"ClusterVersion"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Existing APIs will no longer be functional, please make sure you have removed the deprecated APIs and transformed CRDs before upgrade. Please refer to the upgrade notes under this release notes."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Highlights")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Automatic pod container environment variables updates:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"[NEW]"," KB_POD_FQDN - KubeBlock Cluster component workload associated headless service name, N/A if workloadType=Stateless."),(0,l.kt)("li",{parentName:"ul"},"[NEW]"," KB_POD_IP -  Pod IP address"),(0,l.kt)("li",{parentName:"ul"},"[NEW]"," KB_POD_IPS - Pod IP addresses"),(0,l.kt)("li",{parentName:"ul"},"[NEW]"," KB_HOST_IP - Host IP address"),(0,l.kt)("li",{parentName:"ul"},"[DEPRECATED]"," KB_PODIPS - Pod IP addresses"),(0,l.kt)("li",{parentName:"ul"},"[DEPRECATED]"," KB_PODIP -  Pod IP address"),(0,l.kt)("li",{parentName:"ul"},"[DEPRECATED]"," KB_HOSTIP - Host IP address"),(0,l.kt)("li",{parentName:"ul"},"KB_POD_NAME - Pod Name"),(0,l.kt)("li",{parentName:"ul"},"KB_NAMESPACE - Namespace"),(0,l.kt)("li",{parentName:"ul"},"KB_SA_NAME - Service Account Name"),(0,l.kt)("li",{parentName:"ul"},"KB_NODENAME - Node Name"),(0,l.kt)("li",{parentName:"ul"},"KB_CLUSTER_NAME - KubeBlock Cluster API object name"),(0,l.kt)("li",{parentName:"ul"},"KB_COMP_NAME - Running pod's KubeBlock Cluster API object's ",(0,l.kt)("inlineCode",{parentName:"li"},".spec.components.name")),(0,l.kt)("li",{parentName:"ul"},"KB_CLUSTER_COMP_NAME - Running pod's KubeBlock Cluster API object's ",(0,l.kt)("inlineCode",{parentName:"li"},"<.metadata.name>-<.spec.components.name>"),", same name is used for Deployment or StatefulSet workload name, and Service object name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New KubeBlocks addon extensions management (an addon components are part of KubeBlocks control plane extensions). Highlights include: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"New addons.extensions.kubeblocks.io API that provide running cluster installable check and auto-installation settings."),(0,l.kt)("li",{parentName:"ul"},"Following addons are provided:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prometheus and Alertmanager"),(0,l.kt)("li",{parentName:"ul"},"AlertManager Webhook Adaptor"),(0,l.kt)("li",{parentName:"ul"},"Grafana"),(0,l.kt)("li",{parentName:"ul"},"S3 CSI driver"),(0,l.kt)("li",{parentName:"ul"},"Snapshot Controller"),(0,l.kt)("li",{parentName:"ul"},"KubeBlocks private network Load Balancer"),(0,l.kt)("li",{parentName:"ul"},"ApeCloud MySQL ClusterDefinition API"),(0,l.kt)("li",{parentName:"ul"},"Community PostgreSQL ClusterDefinition API"),(0,l.kt)("li",{parentName:"ul"},"Cluster availability demo application named NyanCat"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ClusterDefinition API ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.connectionCredential")," add following built-in variables:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A random UUID v4 generator ",(0,l.kt)("inlineCode",{parentName:"li"},"$(UUID)")),(0,l.kt)("li",{parentName:"ul"},"A random UUID v4 generator with BASE64 encoded ",(0,l.kt)("inlineCode",{parentName:"li"},"$(UUID_B64)")),(0,l.kt)("li",{parentName:"ul"},"A random UUID v4 generator in UUID string then BASE64 encoded ",(0,l.kt)("inlineCode",{parentName:"li"},"$(UUID_STR_B64)")),(0,l.kt)("li",{parentName:"ul"},"A random UUID v4 generator in HEX representation ",(0,l.kt)("inlineCode",{parentName:"li"},"$(UUID_HEX)")),(0,l.kt)("li",{parentName:"ul"},"Service FQDN ",(0,l.kt)("inlineCode",{parentName:"li"},"$(SVC_FQDN)")," placeholder, value pattern - $(CLUSTER_NAME)-$(1ST_COMP_NAME).$(NAMESPACE).svc, where 1ST_COMP_NAME is the 1st component that provide ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterDefinition.spec.componentDefs[].service")," attribute"),(0,l.kt)("li",{parentName:"ul"},"Service ports ",(0,l.kt)("inlineCode",{parentName:"li"},"$(SVC_PORT_<NAME>)")," placeholder"),(0,l.kt)("li",{parentName:"ul"},"example usage:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# ClusterDefinition API\nkind: ClusterDefinition\n  metadata:\n  name: my-clusterdefinition\nspec:\n  connectionCredential:\n    username: "admin" \n    "admin-password": "$(RANDOM_PASSWD)"\n    endpoint: "http://$(SVC_FQDN):$(SVC_PORT_http)"\n\n  componentsDefs:\n    - name: my-comp-type\n      service:\n        ports:\n          - name: http\n            port: 8123\n\n# Cluster API\nkind: Cluster\nmetadata:\n  name: my-cluster\n  namespace: my-ns\nspec:\n  clusterDefinitionRef: my-clusterdefinition\n  componentSpecs:\n    - name: my-comp\n      type: my-comp-type\n\n# output:\nkind: Secret\nmetadata:\n  name: my-cluster-conn-credential\n  namespace: my-ns\n  labels:\n    "app.kubernetes.io/instance": my-cluster\nstringData:\n  username: "admin"\n  admin-password: "<some random 8 characters password>"\n  endpoint: "http://my-cluster-my-comp.my-ns.svc:8123"\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Known issues and limitations")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Limitations of cluster's horizontal scale operation:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Only support VolumeSnapshot API to make a clone of Cluster's PV for syncing data when horizontal scaling."),(0,l.kt)("li",{parentName:"ul"},"Only 1st pod container and 1st volume mount associated PV will be processed for VolumeSnapshot, do assure that data volume is placed in 1st pod container's 1st volume mount."),(0,l.kt)("li",{parentName:"ul"},"Unused PVCs will be deleted in 30 minutes after scale in.")))),(0,l.kt)("p",null,"If you're new to KubeBlocks, visit the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/blob/v$kubeblocks_version/docs/user_docs/quick_start_guide.md"},"getting started")," page and get a quick start with KubeBlocks."),(0,l.kt)("p",null,"$warnings"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#upgrading-to-kubeblocks-$kubeblocks_version"},"this")," section to upgrade KubeBlocks to version $kubeblocks_version."),(0,l.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,l.kt)("p",null,"Thanks to everyone who made this release possible!"),(0,l.kt)("p",null,"$kubeblocks_contributors"),(0,l.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,l.kt)("p",null,"$kubeblocks_changes"),(0,l.kt)("h2",{id:"upgrading-to-kubeblocks-kubeblocks_version"},"Upgrading to KubeBlocks $kubeblocks_version"),(0,l.kt)("p",null,"To upgrade to this release of KubeBlocks, follow the steps here to ensure a smooth upgrade."),(0,l.kt)("p",null,"Release Notes for ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.3.0"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rename CRD name ",(0,l.kt)("inlineCode",{parentName:"p"},"backupjobs.dataprotection.kubeblocks.io")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"backups.dataprotection.kubeblocks.io")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"upgrade KubeBlocks with the following command:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install kubeblocks kubeblocks/kubeblocks --version 0.3.0\n"))),(0,l.kt)("li",{parentName:"ul"},"after you upgrade KubeBlocks, check CRD ",(0,l.kt)("inlineCode",{parentName:"li"},"backupjobs.dataprotection.kubeblocks.io")," and delete it",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl delete crd backupjobs.dataprotection.kubeblocks.io\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rename CRD name ",(0,l.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterversions.dbaas.kubeblocks.io")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"before you upgrade KubeBlocks, please backup your Cluster CR yaml first."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl get cluster -oyaml > clusters.yaml\n")),(0,l.kt)("p",{parentName:"li"},"then replace all spec.appVersionRef to spec.clusterVersionRef in the clusters.yaml."),(0,l.kt)("p",{parentName:"li"},"Then, handle OpsRequest CR the same way.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"after you upgrade KubeBlocks, you can delete the CRD ",(0,l.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl delete crd appversions.dbaas.kubeblocks.io\n")),(0,l.kt)("p",{parentName:"li"},"the last step, use the above backup of Clusters and OpsRequests to apply them."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f clusters.yaml\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rename group name ",(0,l.kt)("inlineCode",{parentName:"p"},"dbaas.kubeblocks.io")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"apps.kubeblocks.io")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"upgrade kubeblocks to create new CRDs, after that, you can delete the CRDs with group name",(0,l.kt)("inlineCode",{parentName:"li"},"dbaas.kubeblocks.io"))))),(0,l.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,l.kt)("p",null,"$kubeblocks_breaking_changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Refactored the use of labels. Existing clusters or config need to manually update their labels to ensure proper functionality. The following are specific changes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pods of ",(0,l.kt)("inlineCode",{parentName:"li"},"statefulset")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"deployment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Replace label name from ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/component-name")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"apps.kubeblocks.io/component-name")),(0,l.kt)("li",{parentName:"ul"},"Replace label name from ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubeblocks.io/workload-type")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"apps.kubeblocks.io/workload-type")),(0,l.kt)("li",{parentName:"ul"},"Add label ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/version")," with value ",(0,l.kt)("inlineCode",{parentName:"li"},"Cluster.Spec.ClusterVersionRef")),(0,l.kt)("li",{parentName:"ul"},"Add label ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/component")," with value ",(0,l.kt)("inlineCode",{parentName:"li"},"Cluster.Spec.ComponentSpecs.ComponentDefRef")))),(0,l.kt)("li",{parentName:"ul"},"CR ",(0,l.kt)("inlineCode",{parentName:"li"},"backuppolicytemplate"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Replace label name from ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/created-by")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/managed-by")))),(0,l.kt)("li",{parentName:"ul"},"Configmap hosted by KubeBlocks and named with ",(0,l.kt)("inlineCode",{parentName:"li"},"*-env")," suffix",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Replace label name from ",(0,l.kt)("inlineCode",{parentName:"li"},"app.kubernetes.io/config-type")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"apps.kubeblocks.io/config-type")))))),(0,l.kt)("li",{parentName:"ul"},"With KubeBlocks Helm chart replaced its optional components install using sub-charts dependencies with Addons extensions API, previous version upgrade to this version will uninstall the optional components completely.")))}m.isMDXComponent=!0}}]);