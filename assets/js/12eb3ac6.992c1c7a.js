"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5025],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>h});var a=l(67294);function u(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){u(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,u=function(e,t){if(null==e)return{};var l,a,u={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(u[l]=e[l]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(u[l]=e[l])}return u}var n=a.createContext({}),r=function(e){var t=a.useContext(n),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},s=function(e){var t=r(e.components);return a.createElement(n.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,u=e.mdxType,i=e.originalType,n=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=r(l),m=u,h=c["".concat(n,".").concat(m)]||c[m]||k[m]||i;return l?a.createElement(h,p(p({ref:t},s),{},{components:l})):a.createElement(h,p({ref:t},s))}));function h(e,t){var l=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=l.length,p=new Array(i);p[0]=m;var o={};for(var n in t)hasOwnProperty.call(t,n)&&(o[n]=t[n]);o.originalType=e,o[c]="string"==typeof e?e:u,p[1]=o;for(var r=2;r<i;r++)p[r]=l[r];return a.createElement.apply(null,p)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8526:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>n,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var a=l(87462),u=(l(67294),l(3905));const i={sidebar_label:"v0.1.0"},p="KubeBlocks 0.1.0 (2022-11-07)",o={unversionedId:"release_notes/v0.1.0/v0.1.0",id:"release_notes/v0.1.0/v0.1.0",title:"KubeBlocks 0.1.0 (2022-11-07)",description:"We're happy to announce the release of KubeBlocks 0.1.0, this is the initial release of KubeBlocks! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88",source:"@site/docs/release_notes/v0.1.0/v0.1.0.md",sourceDirName:"release_notes/v0.1.0",slug:"/release_notes/v0.1.0/",permalink:"/docs/preview/release_notes/v0.1.0/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/release_notes/v0.1.0/v0.1.0.md",tags:[],version:"current",frontMatter:{sidebar_label:"v0.1.0"},sidebar:"release_notes",previous:{title:"v0.2.0",permalink:"/docs/preview/release_notes/v0.2.0/"},next:{title:"KubeBlocks $kubeblocks_version ($today)",permalink:"/docs/preview/release_notes/v0.1.0/template"}},n={},r=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Features",id:"new-features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3}],s={toc:r},c="wrapper";function k(e){let{components:t,...l}=e;return(0,u.kt)(c,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"kubeblocks-010-2022-11-07"},"KubeBlocks 0.1.0 (2022-11-07)"),(0,u.kt)("p",null,"We're happy to announce the release of KubeBlocks 0.1.0, this is the initial release of KubeBlocks! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88"),(0,u.kt)("p",null,"We would like to extend our thanks to all the new and existing contributors who helped make this release happen."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Highlights")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Support life cycle management of WeSQL(A highly available MySQL distribution), including create, delete, upgrade, vertical scaling, horizontal scaling, volume expansion, restart"),(0,u.kt)("li",{parentName:"ul"},"Support backup and restore"),(0,u.kt)("li",{parentName:"ul"},"Support configuration management"),(0,u.kt)("li",{parentName:"ul"},"Support floating ip based on elastic network interface and private ip"),(0,u.kt)("li",{parentName:"ul"},"Support Command Line Interface(CLI) dbctl, which can operate and maintain KubeBlocks and database cluster")),(0,u.kt)("p",null,"If you're new to KubeBlocks, visit the ",(0,u.kt)("a",{parentName:"p",href:"https://kubeblocks.io"},"getting started")," page and familiarize yourself with KubeBlocks."),(0,u.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,u.kt)("p",null,"Thanks to everyone who made this release possible!"),(0,u.kt)("p",null,"@dengshaojiang, @free6om, @heng4fun, @iziang, @JashBook, @ldming, @lynnleelhl, @nashtsai, @sophon-zt, @wangyelei, @weicao, @yangmeilly, @yimeisun, @ZhaoDiankui"),(0,u.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,u.kt)("h3",{id:"new-features"},"New Features"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"apecloud#4 install&destroy wesql(mysql x-cluster) on localhost. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/72"},"#72"),", @ZhaoDiankui)"),(0,u.kt)("li",{parentName:"ul"},"support backup/restore from snapshot (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/93"},"#93"),", @dengshaojiang)"),(0,u.kt)("li",{parentName:"ul"},"#4 Demo5, Add dbclt playground guide and fix clusterdefiniti\u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/96"},"#96"),", @ZhaoDiankui)"),(0,u.kt)("li",{parentName:"ul"},"remove useless code and tidy up code layout for dbctl (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/105"},"#105"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"implement unified logic for the list command (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/136"},"#136"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"update dbctl version to 0.5.0 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/139"},"#139"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"dbctl support unified describe logic (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/162"},"#162"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"move dbctl code to internal package (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/169"},"#169"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"add minikube-","[start|delete]"," Makefile jobs (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/177"},"#177"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"add more test cases for dbctl (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/180"},"#180"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"Support cluster affinity (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/187"},"#187"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"dataprotection support wesql cluster. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/188"},"#188"),", @dengshaojiang)"),(0,u.kt)("li",{parentName:"ul"},"refactor dbctl log and help (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/246"},"#246"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"dbctl describe more cluster information (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/261"},"#261"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"support exec and cluster connect command (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/280"},"#280"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"dbctl support expose cluster (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/317"},"#317"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"dbctl support describe network endpoints (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/324"},"#324"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"add CI git-hooks-install make job (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/362"},"#362"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"add pcregrep Chinese (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/363"},"#363"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"check branch name (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/389"},"#389"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"rename copyright and domain (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/390"},"#390"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"remove chore (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/401"},"#401"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"ignore branch pattern main|master (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/409"},"#409"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"support debug controller and envtest (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/419"},"#419"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"generate dbctl command reference doc (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/421"},"#421"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"Hosting Helm Charts via GitHub Pages and Releases issue391 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/422"},"#422"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"issue link pr (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/444"},"#444"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"support go 1.19 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/449"},"#449"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"remove wesqlcluster helm and use new helm URL (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/478"},"#478"),", @ldming)")),(0,u.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"#79 fix failed test cases (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/80"},"#80"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"fixed lint Make job error (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/86"},"#86"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"update mysql operator to 2.0.6 and use our own helm repo. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/91"},"#91"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"remove jq from install_dbctl.sh (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/121"},"#121"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"[deploy/helm]"," fixed admission webhook templates (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/146"},"#146"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"[deploy/helm]"," fixed admission webhook TLS CA secret (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/166"},"#166"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"fixed Makefile error (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/167"},"#167"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"playground destroy error (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/195"},"#195"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"[deploy/helm]"," fixed admission webhook genSignedCert with aux CN \u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/198"},"#198"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"fixed pod admission webhook path settings (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/200"},"#200"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"fix makefile for building container (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/207"},"#207"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"playground guide does not match the number of replicas (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/229"},"#229"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"set io streams for cluster delete command (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/288"},"#288"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"fixed #325 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/328"},"#328"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"fixed 'manifest' make job not working (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/340"},"#340"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"configmap setup failed (#307) (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/349"},"#349"),", @sophon-zt)"),(0,u.kt)("li",{parentName:"ul"},"optimize lint staticcheck (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/351"},"#351"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"roleGroup in samples and helm charts removed (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/367"},"#367"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"show accessMode and name in cluster status (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/371"},"#371"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"fix ops bug when cluster using consensussets (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/374"},"#374"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"add keyword ",(0,u.kt)("inlineCode",{parentName:"li"},"omitempty")," for optional field ",(0,u.kt)("inlineCode",{parentName:"li"},"topologyKeys")," (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/375"},"#375"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"[deploy/helm]"," fixed wrong template value (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/377"},"#377"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"pod delete forbidden (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/382"},"#382"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"check args and components when create cluster (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/384"},"#384"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"probe container create event is forbidden (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/386"},"#386"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"add missing service in wesql helm chart (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/387"},"#387"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"fixed wrong probe image address; chore (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/398"},"#398"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"ClusterDefitinition check depend on configuration templates (#378) (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/406"},"#406"),", @sophon-zt)"),(0,u.kt)("li",{parentName:"ul"},"when Cluster.terminationPolicy is WipeOut and deleted cluster, the PVC not deleted together (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/407"},"#407"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"vscode dev container (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/417"},"#417"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"make install missing backuppolicytemplate (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/432"},"#432"),", @dengshaojiang)"),(0,u.kt)("li",{parentName:"ul"},"endpoint controller test unstable failed (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/443"},"#443"),", @iziang)")),(0,u.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Develop branch to main (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/34"},"#34"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"Merge develop to main (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/35"},"#35"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"add CI/CD pipelines (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/38"},"#38"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"Feature/data protection (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/40"},"#40"),", @dengshaojiang)"),(0,u.kt)("li",{parentName:"ul"},"Update DesignDocTemplate.md (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/51"},"#51"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"Add DatabaseClusterAffinityDesign.md (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/52"},"#52"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"Fix typo (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/53"},"#53"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"doc #56 add custom opsDefinition and opsRequest design doc (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/57"},"#57"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"fix install_dbctl (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/59"},"#59"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"update dbctl version 0.4.0 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/77"},"#77"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"migrate KubeBlocks core driver operator (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/78"},"#78"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"support appVersion, clusterDefinition and cluster CR validating webhook (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/83"},"#83"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"fix ci-test and add badges (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/88"},"#88"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"Feature/unified dbcluser lifecycle (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/89"},"#89"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"fix release publish (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/95"},"#95"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"Support/csi driver volume testing (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/99"},"#99"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Feature/unified dbcluser lifecycle (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/100"},"#100"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"add Cluster Status handling. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/101"},"#101"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"Refactor/container to podspec (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/102"},"#102"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"CICD add staticcheck (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/106"},"#106"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"rm cicd github_token (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/109"},"#109"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"fix up golangci-lint linter errors (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/110"},"#110"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Merge remote-tracking branch 'origin/main' into bugfix/makefile-lint-\u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/112"},"#112"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Bugfix/fixded cuetool job (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/113"},"#113"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Bugfix/fixded cuetool job (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/114"},"#114"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"fixed Cluster API controller List owned resources missing Nam\u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/116"},"#116"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Feature/vscode devcontainer (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/117"},"#117"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"feat configure management (#36) (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/118"},"#118"),", @sophon-zt)"),(0,u.kt)("li",{parentName:"ul"},"update brew-install-prerequisite Makefile job, by fixed go com\u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/119"},"#119"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Feature/dbctl dbaas (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/122"},"#122"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"add release version (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/133"},"#133"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"fix helm podspec error (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/143"},"#143"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"fix #144 wesql helm chart can support single instance. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/145"},"#145"),", @ZhaoDiankui)"),(0,u.kt)("li",{parentName:"ul"},"feature #153 dbctl support wesql instance customer-defined replicas. (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/154"},"#154"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"implement floating ip based on elastic network interface and private ip (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/159"},"#159"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"Feature/dbctl guide (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/165"},"#165"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"tidyup Makefile (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/183"},"#183"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Feature/consensus workload (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/194"},"#194"),", @free6om)"),(0,u.kt)("li",{parentName:"ul"},"fix dockerfile and refactor dbctl developer guide (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/199"},"#199"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"Support  OpsRequest controller, including the following 5 operations (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/202"},"#202"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"Support/helm notes (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/203"},"#203"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"update minikube-start Makefile job to check minikube cluster s\u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/209"},"#209"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"make install missing volumesnapshot crd (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/212"},"#212"),", @dengshaojiang)"),(0,u.kt)("li",{parentName:"ul"},"Support/add license header checker (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/215"},"#215"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"dbctl support cue template conversion when create a k8s resource (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/216"},"#216"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"Remove unused field declaration from cue template (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/219"},"#219"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"Inject prometheus exporter as sidecar (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/224"},"#224"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"check dependency binary existence when exec make command (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/227"},"#227"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"integrate simplified monitor stack to kubeblock helm chart (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/228"},"#228"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"Improve reviewable checks (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/236"},"#236"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"change PR label (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/240"},"#240"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"integrate OpsRequest dbctl Cli and fix the ops bug (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/247"},"#247"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"Patch clusterdefinition and appversion after uninstall dbaas  (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/252"},"#252"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"update internal/dbctl/util/util_test.go, with conditional tests due to extern HTTP service dependency (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/256"},"#256"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"update apis/dbaas/v1alpha1/appversion_types.go, tidy up API doc and make optional struct field being pointer type (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/260"},"#260"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"After the dbaas is reinstalled, the cluster fails to be created (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/271"},"#271"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"update docker/Dockerfile, have maximize docker build cache processin (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/273"},"#273"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"copy(dst, src) to supersede original array by using a new array in function checkAndUpdatePodVolumes (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/276"},"#276"),", @yangmeilly)"),(0,u.kt)("li",{parentName:"ul"},"cicd add cp controller-gen (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/277"},"#277"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"[deploy/helm]"," fixed missing labels (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/282"},"#282"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Feature/fix release cicd (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/285"},"#285"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"Feature/daprd merge (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/286"},"#286"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"OpsRequest always in running phase bug (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/290"},"#290"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"fix chart dependency (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/292"},"#292"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"support dbctl version command. output dbctl version, KubeBlocks version and K8s version (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/294"},"#294"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"Add help doc for API (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/295"},"#295"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"rename appname to kubeblocks (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/296"},"#296"),", @ldming)"),(0,u.kt)("li",{parentName:"ul"},"make dbctl set flag separated with commas (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/297"},"#297"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"monitor enable param in dbctl does not take effect when Cluster Component does not have monitor field (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/299"},"#299"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"Bugfix/check volumesnapshotclass (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/301"},"#301"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"optimize release cicd (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/302"},"#302"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"clusterdefinition webhook nil pointer bug (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/312"},"#312"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"dbctl dbaas install support monitor param to enable monitor stack (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/327"},"#327"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"tidy up API enum declarations (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/331"},"#331"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"avoid make all outputs annoying messages when minikube is not \u2026 (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/334"},"#334"),", @weicao)"),(0,u.kt)("li",{parentName:"ul"},"tidy tests setup; ensure test objects cleanup before tests  (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/336"},"#336"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"rename chart/image version (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/338"},"#338"),", @JashBook)"),(0,u.kt)("li",{parentName:"ul"},"optimiza minikube-start make job (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/350"},"#350"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"dbctl output helm notes after install (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/352"},"#352"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"Add  help docs for ConfigTemplateRefs API (#275) (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/353"},"#353"),", @sophon-zt)"),(0,u.kt)("li",{parentName:"ul"},"remove chinese docs temporarily (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/355"},"#355"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"support anonymous login for grafana (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/357"},"#357"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"add events notification when CR created, deleted (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/358"},"#358"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"fix nil pointer crash (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/359"},"#359"),", @lynnleelhl)"),(0,u.kt)("li",{parentName:"ul"},"add cadvisor dashboard (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/361"},"#361"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"Feature/optimize lb (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/380"},"#380"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"format imports and add missing licenses (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/396"},"#396"),", @iziang)"),(0,u.kt)("li",{parentName:"ul"},"upgrade grafana helm chart version (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/410"},"#410"),", @yimeisun)"),(0,u.kt)("li",{parentName:"ul"},"add development guide (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/431"},"#431"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"tidy up github localflows's actions (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/438"},"#438"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"add contributing guide (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/456"},"#456"),", @heng4fun)"),(0,u.kt)("li",{parentName:"ul"},"have appversion and clusterdefinition controller with concurrent reconciling (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/458"},"#458"),", @nashtsai)"),(0,u.kt)("li",{parentName:"ul"},"Intermitten unit test error - OpsRequest webhook (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/461"},"#461"),", @wangyelei)"),(0,u.kt)("li",{parentName:"ul"},"remove deprecated 'app.kubernetes.io/created-by' object labels (",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apecloud/kubeblocks/pull/467"},"#467"),", @nashtsai)")))}k.isMDXComponent=!0}}]);