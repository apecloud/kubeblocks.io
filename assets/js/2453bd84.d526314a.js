"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},l="KubeBlocks $kubeblocks_version ($today)",s={unversionedId:"release_notes/template",id:"version-release-0.4/release_notes/template",title:"KubeBlocks $kubeblocks_version ($today)",description:"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88",source:"@site/versioned_docs/version-release-0.4/release_notes/template.md",sourceDirName:"release_notes",slug:"/release_notes/template",permalink:"/docs/release-0.4/release_notes/template",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/release_notes/template.md",tags:[],version:"release-0.4",frontMatter:{},sidebar:"release_notes",next:{title:"KubeBlocks 0.1.0 (2022-11-07)",permalink:"/docs/release-0.4/release_notes/v0.1.0"}},i={},p=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"Upgrading to KubeBlocks $kubeblocks_version",id:"upgrading-to-kubeblocks-kubeblocks_version",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeblocks-kubeblocks_version-today"},"KubeBlocks $kubeblocks_version ($today)"),(0,o.kt)("p",null,"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88"),(0,o.kt)("p",null,"We would like to extend our appreciation to all contributors who helped make this release happen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Highlights")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* New addons.extensions.kubeblocks.io API, with Addon management controller, where KubeBlocks allow addon extensions instead of using Helm sub-charts dependencies.\n* ClusterDefinition API `spec.connectionCredential` add following built-in variables:\n* Service FQDN `$(SVC_FQDN)` placeholder, value pattern - $(CLUSTER_NAME)-$(1ST_COMP_NAME).$(NAMESPACE).svc, where 1ST_COMP_NAME is the 1st component that provide `ClusterDefinition.spec.componentDefs[].service` attribute\n* Service ports `$(SVC_PORT_<NAME>)` placeholder\n* example usage:\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ClusterDefinition API\nkind: ClusterDefinition\n  metadata:\n  name: my-clusterdefinition\nspec:\n  connectionCredential:\n    username: "admin" \n    "admin-password": "$(RANDOM_PASSWD)"\n    endpoint: "http://$(SVC_FQDN):$(SVC_PORT_http)"\n\n  componentsDefs:\n    - name: my-comp-type\n      service:\n        ports:\n          - name: http\n            port: 8123\n\n# Cluster API\nkind: Cluster\nmetadata:\n  name: my-cluster\n  namespace: my-ns\nspec:\n  clusterDefinitionRef: my-clusterdefinition\n  componentSpecs:\n    - name: my-comp\n      type: my-comp-type\n\n# output:\nkind: Secret\nmetadata:\n  name: my-cluster-conn-credential\n  namespace: my-ns\n  labels:\n    "app.kubernetes.io/instance": my-cluster\nstringData:\n  username: "admin"\n  admin-password: "<some random 8 characters password>"\n  endpoint: "http://my-cluster-my-comp.my-ns.svc:8123"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Known issues and limitations")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Limitations of cluster's horizontal scale operation:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only support VolumeSnapshot API to make a clone of Cluster's PV for syncing data when horizontal scaling."),(0,o.kt)("li",{parentName:"ul"},"Only 1st pod container and 1st volume mount associated PV will be processed for VolumeSnapshot, do assure that data volume is placed in 1st pod container's 1st volume mount."),(0,o.kt)("li",{parentName:"ul"},"Unused PVCs will be deleted in 30 minutes after scale in.")))),(0,o.kt)("p",null,"If you're new to KubeBlocks, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/blob/v$kubeblocks_version/docs/user_docs/quick_start_guide.md"},"getting started")," page and get a quick start with KubeBlocks."),(0,o.kt)("p",null,"$warnings"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#upgrading-to-kubeblocks-$kubeblocks_version"},"this")," section to upgrade KubeBlocks to version $kubeblocks_version."),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Thanks to everyone who made this release possible!"),(0,o.kt)("p",null,"$kubeblocks_contributors"),(0,o.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,o.kt)("p",null,"$kubeblocks_changes"),(0,o.kt)("h2",{id:"upgrading-to-kubeblocks-kubeblocks_version"},"Upgrading to KubeBlocks $kubeblocks_version"),(0,o.kt)("p",null,"To upgrade to this release of KubeBlocks, follow the steps here to ensure a smooth upgrade."),(0,o.kt)("p",null,"Release Notes for ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.3.0"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rename CRD name ",(0,o.kt)("inlineCode",{parentName:"p"},"backupjobs.dataprotection.kubeblocks.io")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"backups.dataprotection.kubeblocks.io")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"upgrade KubeBlocks with the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm upgrade --install kubeblocks kubeblocks/kubeblocks --version 0.3.0\n"))),(0,o.kt)("li",{parentName:"ul"},"after you upgrade KubeBlocks, check CRD ",(0,o.kt)("inlineCode",{parentName:"li"},"backupjobs.dataprotection.kubeblocks.io")," and delete it",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl delete crd backupjobs.dataprotection.kubeblocks.io\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rename CRD name ",(0,o.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"clusterversions.dbaas.kubeblocks.io")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"before you upgrade KubeBlocks, please backup your Cluster CR yaml first."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl get cluster -oyaml > clusters.yaml\n")),(0,o.kt)("p",{parentName:"li"},"then replace all spec.appVersionRef to spec.clusterVersionRef in the clusters.yaml."),(0,o.kt)("p",{parentName:"li"},"Then, handle OpsRequest CR the same way.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"after you upgrade KubeBlocks, you can delete the CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl delete crd appversions.dbaas.kubeblocks.io\n")),(0,o.kt)("p",{parentName:"li"},"the last step, use the above backup of Clusters and OpsRequests to apply them."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f clusters.yaml\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rename group name ",(0,o.kt)("inlineCode",{parentName:"p"},"dbaas.kubeblocks.io")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.kubeblocks.io")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"upgrade kubeblocks to create new CRDs, after that, you can delete the CRDs with group name",(0,o.kt)("inlineCode",{parentName:"li"},"dbaas.kubeblocks.io"))))),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"$kubeblocks_breaking_changes"))}k.isMDXComponent=!0}}]);