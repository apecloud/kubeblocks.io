"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[4146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,g=p["".concat(u,".").concat(b)]||p[b]||d[b]||a;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"user_docs/kubeblocks-for-gptplugin/Introduction",id:"user_docs/kubeblocks-for-gptplugin/Introduction",title:"Introduction",description:"Introduction to KubeBlocks for ChatGPT Retrieval Plugin",source:"@site/docs/user_docs/kubeblocks-for-gptplugin/Introduction.md",sourceDirName:"user_docs/kubeblocks-for-gptplugin",slug:"/user_docs/kubeblocks-for-gptplugin/Introduction",permalink:"/docs/preview/user_docs/kubeblocks-for-gptplugin/Introduction",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-gptplugin/Introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/preview/user_docs/kubeblocks-for-gptplugin/Installation"}},u={},s=[{value:"Introduction to KubeBlocks for ChatGPT Retrieval Plugin",id:"introduction-to-kubeblocks-for-chatgpt-retrieval-plugin",level:2},{value:"ChatGPT Retrieval Plugin",id:"chatgpt-retrieval-plugin",level:3},{value:"Plugin on KubeBlocks",id:"plugin-on-kubeblocks",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction-to-kubeblocks-for-chatgpt-retrieval-plugin"},"Introduction to KubeBlocks for ChatGPT Retrieval Plugin"),(0,n.kt)("h3",{id:"chatgpt-retrieval-plugin"},"ChatGPT Retrieval Plugin"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/openai/chatgpt-retrieval-plugin"},"ChatGPT Retrieval Plugin")," is the official plugin from OpenAI, it provides a flexible solution for semantic search and retrieval of personal or organizational documents using natural language queries.",(0,n.kt)("br",{parentName:"p"}),"\n","The purpose of Plugin is to extend the OpenAI abilities from a public large model to a hybrid model with private data. It manages a private documents store to promise the privacy and safety, meanwhile, it can be accessed through a set of query APIs from the remote OpenAI GPT Chatbox.",(0,n.kt)("br",{parentName:"p"}),"\n","The remote Chatbox is responsible for the dialogue with user, it processes the natural language query, retrieves data from both of OpenAI large model and private store, combines results to provide a better answer.",(0,n.kt)("br",{parentName:"p"}),"\n","With the boost of private and domain data, the results could be more reasonable, accurate and personal.\nIt is a good way to balance the data privacy and utilization."),(0,n.kt)("h3",{id:"plugin-on-kubeblocks"},"Plugin on KubeBlocks"),(0,n.kt)("p",null,"KubeBlocks makes two major improvements over ChatGPT Retrieval Plugin:",(0,n.kt)("br",{parentName:"p"}),"\n","KubeBlocks provides a solid vector database for Plugin, and relieves the burden of database management. Right now, KubeBlocks support a wide range of vector databases, such as Postgres, Redis, Milvus, Qdrant and Weaviate. The support of other vector databases is on the way.",(0,n.kt)("br",{parentName:"p"}),"\n","KubeBlocks also builds multi-arch images for Plugin, integrates the Plugin as a native Cluster inside, makes the APIs, Secrets, Env vars configurable through command line & Helm Charts.",(0,n.kt)("br",{parentName:"p"}),"\n","These improvements achieve a better experience for building your own Plugin."))}d.isMDXComponent=!0}}]);