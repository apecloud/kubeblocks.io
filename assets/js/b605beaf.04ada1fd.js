"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[4317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Enable add-ons",description:"Enable KubeBlocks add-ons",sidebar_position:2,sidebar_label:"Enable add-ons"},l="Enable add-ons",i={unversionedId:"user_docs/installation/enable-add-ons",id:"user_docs/installation/enable-add-ons",title:"Enable add-ons",description:"Enable KubeBlocks add-ons",source:"@site/docs/user_docs/installation/enable-add-ons.md",sourceDirName:"user_docs/installation",slug:"/user_docs/installation/enable-add-ons",permalink:"/docs/next/user_docs/installation/enable-add-ons",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/installation/enable-add-ons.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Enable add-ons",description:"Enable KubeBlocks add-ons",sidebar_position:2,sidebar_label:"Enable add-ons"},sidebar:"docs",previous:{title:"kbcli and KubeBlocks",permalink:"/docs/next/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"},next:{title:"ApeCloud MySQL introduction",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/apecloud-mysql-intro/"}},s={},d=[],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-add-ons"},"Enable add-ons"),(0,r.kt)("p",null,"An add-on provides extension capabilities, i.e., manifests or application software, to KubeBlocks control plane.\nBy default, all add-ons supported are automatically installed.\nTo list supported add-ons, run ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli addon list")," command."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kbcli addon list\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some add-ons have an environment requirement. If a certain requirement is not met, the automatic installation is invalid.")),(0,r.kt)("p",null,"You can perform the following steps to check and enable the add-on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Steps:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli addon describe"),", and check the ",(0,r.kt)("em",{parentName:"p"},"Installable")," part in the output information."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kbcli addon describe snapshot-controller\n")),(0,r.kt)("p",{parentName:"li"},"For certain add-ons, the installable part might say when the kubeGitVersion content includes ",(0,r.kt)("em",{parentName:"p"},"eks")," and ",(0,r.kt)("em",{parentName:"p"},"ack"),", the auto-install is enabled.\nIn this case, you can check the version of the Kubernetes cluster, and run the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl version -ojson | jq '.serverVersion.gitVersion'\n>\n\"v1.24.4+eks\"\n>\n")),(0,r.kt)("p",{parentName:"li"},"As the printed output suggested, ",(0,r.kt)("em",{parentName:"p"},"eks")," is included. And you can go on with the next step. In case that ",(0,r.kt)("em",{parentName:"p"},"eks")," is not included, it is invalid to enable the add-on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To enable the add-on, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli addon enable"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kbcli addon enable snapshot-controller\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the add-ons to check whether it is enabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kbcli addon list\n")))))}u.isMDXComponent=!0}}]);