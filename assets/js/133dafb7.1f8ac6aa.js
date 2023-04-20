"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||k[b]||l;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={},a="KubeBlocks $kubeblocks_version ($today)",s={unversionedId:"release_notes/template",id:"release_notes/template",title:"KubeBlocks $kubeblocks_version ($today)",description:"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88",source:"@site/docs/release_notes/template.md",sourceDirName:"release_notes",slug:"/release_notes/template",permalink:"/docs/preview/release_notes/template",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/release_notes/template.md",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"Upgrading to KubeBlocks $kubeblocks_version",id:"upgrading-to-kubeblocks-kubeblocks_version",level:2}],c={toc:u},p="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubeblocks-kubeblocks_version-today"},"KubeBlocks $kubeblocks_version ($today)"),(0,r.kt)("p",null,"We're happy to announce the release of KubeBlocks $kubeblocks_version! \ud83d\ude80 \ud83c\udf89 \ud83c\udf88"),(0,r.kt)("p",null,"We would like to extend our appreciation to all contributors who helped make this release happen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breaking changes")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Highlights")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Known issues and limitations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limitations of cluster's horizontal scale operation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Only support VolumeSnapshot API to make a clone of Cluster's PV for syncing data when horizontal scaling."),(0,r.kt)("li",{parentName:"ul"},"Only 1st pod container and 1st volume mount associated PV will be processed for VolumeSnapshot, do assure that data volume is placed in 1st pod container's 1st volume mount."),(0,r.kt)("li",{parentName:"ul"},"Unused PVCs will be deleted in 30 minutes after scale in.")))),(0,r.kt)("p",null,"If you're new to KubeBlocks, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apecloud/kubeblocks/blob/v$kubeblocks_version/docs/user_docs/quick_start_guide.md"},"getting started")," page and get a quick start with KubeBlocks."),(0,r.kt)("p",null,"$warnings"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#upgrading-to-kubeblocks-$kubeblocks_version"},"this")," section to upgrade KubeBlocks to version $kubeblocks_version."),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"Thanks to everyone who made this release possible!"),(0,r.kt)("p",null,"$kubeblocks_contributors"),(0,r.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,r.kt)("p",null,"$kubeblocks_changes"),(0,r.kt)("h2",{id:"upgrading-to-kubeblocks-kubeblocks_version"},"Upgrading to KubeBlocks $kubeblocks_version"))}k.isMDXComponent=!0}}]);