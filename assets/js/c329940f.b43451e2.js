"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1887],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>h});var a=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,o=function(e,t){if(null==e)return{};var l,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var r=a.createContext({}),i=function(e){var t=a.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},s=function(e){var t=i(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(l),m=o,h=c["".concat(r,".").concat(m)]||c[m]||k[m]||n;return l?a.createElement(h,u(u({ref:t},s),{},{components:l})):a.createElement(h,u({ref:t},s))}));function h(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,u=new Array(n);u[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[c]="string"==typeof e?e:o,u[1]=p;for(var i=2;i<n;i++)u[i]=l[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},4736:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>u,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var a=l(7462),o=(l(7294),l(3905));const n={},u="KubeBlocks 0.3.0 (2023-01-19)",p={unversionedId:"release_notes/v0.3.0",id:"release_notes/v0.3.0",title:"KubeBlocks 0.3.0 (2023-01-19)",description:"We're happy to announce the release of KubeBlocks 0.3.0! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88",source:"@site/docs/release_notes/v0.3.0.md",sourceDirName:"release_notes",slug:"/release_notes/v0.3.0",permalink:"/docs/release_notes/v0.3.0",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/release_notes/v0.3.0.md",tags:[],version:"current",frontMatter:{},sidebar:"release_notes",previous:{title:"KubeBlocks 0.2.0 (2022-12-30)",permalink:"/docs/release_notes/v0.2.0"},next:{title:"KubeBlocks 0.3.1 (2023-01-28)",permalink:"/docs/release_notes/v0.3.1"}},r={},i=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Features",id:"new-features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Upgrading to KubeBlocks 0.3.0",id:"upgrading-to-kubeblocks-030",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2}],s={toc:i},c="wrapper";function k(e){let{components:t,...l}=e;return(0,o.kt)(c,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeblocks-030-2023-01-19"},"KubeBlocks 0.3.0 (2023-01-19)"),(0,o.kt)("p",null,"We're happy to announce the release of KubeBlocks 0.3.0! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88"),(0,o.kt)("p",null,"We would like to extend our appreciation to all contributors who helped make this release happen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Highlights")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Horizontal scaling for ApeCloud MySQL, you can add/remove read-only instances."),(0,o.kt)("li",{parentName:"ul"},"Replication lag metrics for ApeCloud MySQL."),(0,o.kt)("li",{parentName:"ul"},"Alerting rules for ApeCloud MySQL."),(0,o.kt)("li",{parentName:"ul"},"Policy-based backups."),(0,o.kt)("li",{parentName:"ul"},"Preflight checks to pre-check the deployment environment."),(0,o.kt)("li",{parentName:"ul"},"Show connection example with kbcli connect enhancement"),(0,o.kt)("li",{parentName:"ul"},"List ClusterDefinition, ClusterVersion, and users with kbcli.")),(0,o.kt)("p",null,"If you're new to KubeBlocks, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://kubeblocks.io"},"getting started")," page and get a quick start with KubeBlocks."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note: This release contains a few ",(0,o.kt)("a",{parentName:"strong",href:"#breaking-changes"},"breaking changes"),"."))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#upgrading-to-kubeblocks-0.3.0"},"this")," section to upgrade KubeBlocks to version 0.3.0."),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Thanks to everyone who made this release possible!"),(0,o.kt)("p",null,"@dengshaojiang, @free6om, @heng4fun, @JashBook, @ldming, @lynnleelhl, @max8899, @michelle-0808, @nashtsai, @shanshanying, @sophon-zt, @wangyelei, @weicao, @xuriwuyun, @yangmeilly, @yimeisun, @ZhaoDiankui"),(0,o.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"horizontal scaling (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/330"},"#330"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"SystemAccount Creation on Demand (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/511"},"#511"),", @shanshanying)"),(0,o.kt)("li",{parentName:"ul"},"reconfigure configmap (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/567"},"#567"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"update cluster with kbcli (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/826"},"#826"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"timeout seconds for probe (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/864"},"#864"),", @xuriwuyun)"),(0,o.kt)("li",{parentName:"ul"},"OpsRequest reconfigure (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/866"},"#866"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"create namespace when installing KubeBlocks (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/880"},"#880"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"automatically move issue when released (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/895"},"#895"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"cli describe and list enhancement (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/896"},"#896"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"OpsRequest progress/progressDetails and last configuration of operations (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/921"},"#921"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"add troubleshoot.sh module and preflight checks for KubeBlocks (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/939"},"#939"),", @yangmeilly)"),(0,o.kt)("li",{parentName:"ul"},"auto-schedule for backup policy (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/950"},"#950"),", @dengshaojiang)"),(0,o.kt)("li",{parentName:"ul"},"show connection example with cli connect enhancement (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/951"},"#951"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"ApeCloud MySQL consensus metrics and dashboards (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/952"},"#952"),", @yimeisun)"),(0,o.kt)("li",{parentName:"ul"},"upload kbcli to public repo (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/960"},"#960"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"alerting rules for MySQL and cadvisor (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/962"},"#962"),", @yimeisun)"),(0,o.kt)("li",{parentName:"ul"},"prometheus and alertmanager with persistent volume, resource limitation and replicas (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/963"},"#963"),", @yimeisun)"),(0,o.kt)("li",{parentName:"ul"},"update ApeCloud MySQL default config template (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/965"},"#965"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"list ClusterDefinition, ClusterVersion and users with kbcli (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/967"},"#967"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"use dashboard command to simplify kbcli KubeBlocks output message (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/968"},"#968"),", @yimeisun)"),(0,o.kt)("li",{parentName:"ul"},"kbcli upgrade (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/977"},"#977"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"add make manifests to ci (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/990"},"#990"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"support describe ops (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/995"},"#995"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"enhance list ops and add double-check for operations (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1000"},"#1000"),", @wangyelei)")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"should stop installing helm chart when last release is not successfully deployed (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/856"},"#856"),", @max8899)"),(0,o.kt)("li",{parentName:"ul"},"when opsRequest is running and the spec clusterRef is updated by user, the OpsRequest jobs will inconsistent. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/879"},"#879"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"remove omitempty to prevent empty value when marshal (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/883"},"#883"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"update helm template (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/890"},"#890"),", @xuriwuyun)"),(0,o.kt)("li",{parentName:"ul"},"build pdb if minReplicas non-zero (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/905"},"#905"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"use password in setup scripts (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/912"},"#912"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"backup resources not clean after h-scale (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/914"},"#914"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"optimize DoNotTerminate (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/917"},"#917"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"fix bug of horizontal scaling and add UT for it  #922 (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/923"},"#923"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"updating pvc storage size throws error (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/926"},"#926"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"add exec command in ApeCloud MySQL setup.sh script (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/936"},"#936"),", @ZhaoDiankui)"),(0,o.kt)("li",{parentName:"ul"},"make error for duplicate constant (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/944"},"#944"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"modify kbcli and readme docs (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/947"},"#947"),", @michelle-0808)"),(0,o.kt)("li",{parentName:"ul"},"fixed 'goimports' Makefile job that tidy up vendor/ go files (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/953"},"#953"),", @nashtsai)"),(0,o.kt)("li",{parentName:"ul"},"probe event lost (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/964"},"#964"),", @xuriwuyun)"),(0,o.kt)("li",{parentName:"ul"},"delete OpsRequest failed when cluster is deleted and support sending events when probe timeout (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/973"},"#973"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"do nothing if error is already exists (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/976"},"#976"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"pod Annotations is none when changed the component monitor to true, and update any cluster.spec variables, the cluster maybe goes to Updating. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/979"},"#979"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"check if KubeBlocks is installed when install KubeBlocks (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/981"},"#981"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"make manifest leading to inconsistent crd yaml (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/987"},"#987"),", @shanshanying)"),(0,o.kt)("li",{parentName:"ul"},"update makefile for probe (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/992"},"#992"),", @xuriwuyun)"),(0,o.kt)("li",{parentName:"ul"},"component doc for consensusset (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/999"},"#999"),", @free6om)"),(0,o.kt)("li",{parentName:"ul"},"remove backuptools custom resources and definitions when uninstall kubeblocks (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1008"},"#1008"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"update ApeCloud MySQL config constraint (#1013) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1018"},"#1018"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"OS X Process.Name function requires elevated permissions (#1012) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1019"},"#1019"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"support k8sResource convert for cue validate ApeCloud MySQL config (#1020) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1036"},"#1036"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"delete unused parameters for config-manager-sidecar (#1031) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1037"},"#1037"),", @sophon-zt)"),(0,o.kt)("li",{parentName:"ul"},"remove configuration configMaps when uninstall KubeBlocks (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1039"},"#1039"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"update rbac to fix deletion hang (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1051"},"#1051"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"remove cli upgrade KubeBlocks default version (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1069"},"#1069"),", @ldming)"),(0,o.kt)("li",{parentName:"ul"},"horizontal scaling bugfix (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1070"},"#1070"),", @lynnleelhl)"),(0,o.kt)("li",{parentName:"ul"},"kbcli restore cluster nil pointer error. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1072"},"#1072"),", @dengshaojiang)")),(0,o.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user docs (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/665"},"#665"),", @michelle-0808)"),(0,o.kt)("li",{parentName:"ul"},"refactor OpsRequest API (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/843"},"#843"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"fix make manifests no effective (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/844"},"#844"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"fix and tidy clusterdef controller test (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/851"},"#851"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"refactor AppVersion API to ClusterVersion API (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/852"},"#852"),", @wangyelei)"),(0,o.kt)("li",{parentName:"ul"},"update to ginkgo/v2 package (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/867"},"#867"),", @nashtsai)"),(0,o.kt)("li",{parentName:"ul"},"add test cases for cue_value (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/887"},"#887"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"add clusterversion_types_test (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/891"},"#891"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"fix and tidy ut in cluster_controller_test (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/898"},"#898"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"add some comments to code and improve variable naming (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/906"},"#906"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"improve the consensus test, split it into an UT and a FT (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/930"},"#930"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"use golang generics to avoid duplicated code (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/959"},"#959"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"do some code tidy up in cluster controller while reading it (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/982"},"#982"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"rename components.type name to MySQL and upgrade ApeCloud MySQL version (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/985"},"#985"),", @ZhaoDiankui)"),(0,o.kt)("li",{parentName:"ul"},"improve ut of systemaccount (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/993"},"#993"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"fix the infinite loop in getAvailableContainerPorts (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/994"},"#994"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"improve opsrequest controller ut (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/997"},"#997"),", @weicao)"),(0,o.kt)("li",{parentName:"ul"},"update probe API crd (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1003"},"#1003"),", @xuriwuyun)"),(0,o.kt)("li",{parentName:"ul"},"change values image tag (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1007"},"#1007"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"change values image tag (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1010"},"#1010"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"add lib to ci (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1034"},"#1034"),", @JashBook)"),(0,o.kt)("li",{parentName:"ul"},"support install and uninstall nyan cat demo application (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/1041"},"#1041"),", @heng4fun)")),(0,o.kt)("h2",{id:"upgrading-to-kubeblocks-030"},"Upgrading to KubeBlocks 0.3.0"),(0,o.kt)("p",null,"To upgrade to this release of KubeBlocks, follow the steps here to ensure a smooth upgrade."),(0,o.kt)("p",null,"Release Notes for ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.3.0"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rename CRD name ",(0,o.kt)("inlineCode",{parentName:"p"},"backupjobs.dataprotection.kubeblocks.io")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"backups.dataprotection.kubeblocks.io")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"upgrade KubeBlocks with the following command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"helm upgrade --install kubeblocks kubeblocks/kubeblocks --version 0.3.0\n"))),(0,o.kt)("li",{parentName:"ul"},"after you upgrade KubeBlocks, check CRD ",(0,o.kt)("inlineCode",{parentName:"li"},"backupjobs.dataprotection.kubeblocks.io")," and delete it",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl delete crd backupjobs.dataprotection.kubeblocks.io\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rename CRD name ",(0,o.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"clusterversions.dbaas.kubeblocks.io")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"before you upgrade KubeBlocks, please backup your Cluster CR yaml first."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl get cluster -oyaml > clusters.yaml\n")),(0,o.kt)("p",{parentName:"li"},"then replace all spec.appVersionRef to spec.clusterVersionRef in the clusters.yaml."),(0,o.kt)("p",{parentName:"li"},"Then, handle OpsRequest CR the same way.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"after you upgrade KubeBlocks, you can delete the CRD ",(0,o.kt)("inlineCode",{parentName:"p"},"appversions.dbaas.kubeblocks.io")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl delete crd appversions.dbaas.kubeblocks.io\n")),(0,o.kt)("p",{parentName:"li"},"the last step, use the above backup of Clusters and OpsRequests to apply them."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f clusters.yaml\n")))))),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"auto-schedule for backup policy (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/950"},"#950"),", @dengshaojiang)")))}k.isMDXComponent=!0}}]);