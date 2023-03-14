"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[8421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s="KubeBlocks Documentation",i={unversionedId:"README",id:"README",title:"KubeBlocks Documentation",description:"Here stores design documents, release notes and user documents of KubeBlocks.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/README.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"What is KubeBlocks",id:"what-is-kubeblocks",level:2},{value:"Find documents",id:"find-documents",level:2},{value:"Examples:",id:"examples",level:4}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeblocks-documentation"},"KubeBlocks Documentation"),(0,o.kt)("p",null," Here stores design documents, release notes and user documents of KubeBlocks."),(0,o.kt)("h2",{id:"what-is-kubeblocks"},"What is KubeBlocks"),(0,o.kt)("p",null,"KubeBlocks, running on K8S, offers a universal view through multi-clouds and on-premises, provides a consistent experience for fully managing multiple databases, and relieves the burden of maintaining miscellaneous operators.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/110531738/202367695-babd2ebc-8b7f-4a3d-b1d7-2d7b1b69f2bc.png#width=%2260%25%22",alt:"image"})),(0,o.kt)("h2",{id:"find-documents"},"Find documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refer to ",(0,o.kt)("a",{parentName:"li",href:"./design_docs"},"design_docs")," for our design motivation and methodology."),(0,o.kt)("li",{parentName:"ul"},"Refer to ",(0,o.kt)("a",{parentName:"li",href:"./user_docs"},"user_docs")," for instruction to use KubeBlocks."),(0,o.kt)("li",{parentName:"ul"},"Refer to ",(0,o.kt)("a",{parentName:"li",href:"./release_notes"},"release_notes")," for the latest updates.")),(0,o.kt)("p",null,"To write a design document, refer to design document templates. (in addition to your godoc generated documentation)."),(0,o.kt)("h4",{id:"examples"},"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gohugoio/hugo/tree/master/docs"},"https://github.com/gohugoio/hugo/tree/master/docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openshift/origin/tree/master/docs"},"https://github.com/openshift/origin/tree/master/docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dapr/dapr/tree/master/docs"},"https://github.com/dapr/dapr/tree/master/docs"))))}d.isMDXComponent=!0}}]);