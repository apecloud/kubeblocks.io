"use strict";(self.webpackChunkconsole_docs=self.webpackChunkconsole_docs||[]).push([[240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>T,frontMatter:()=>b,metadata:()=>y,toc:()=>w});var a=n(7462),r=n(7294),l=n(3905),o=n(6010),i=n(2389),s=n(7392),p=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:i,values:m,groupId:k,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,p.U)(),[N,T]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=k){const e=f[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(O(t),T(a),null!=k&&w(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:I,onClick:S},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function v(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(h,a),hidden:n},t)}const b={sidebar_position:1},g="\u6982\u8981",y={unversionedId:"overview",id:"overview",title:"\u6982\u8981",description:"Let's discover in less than 5 minutes.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview.md",sourceDirName:".",slug:"/overview",permalink:"/zh/docs/overview",draft:!1,editUrl:"https://github.com/apecloud/website/tree/developer/i18n/zh/docusaurus-plugin-content-docs/current/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u4f7f\u7528\u624b\u518c",permalink:"/zh/docs/OpenCli/manual"}},f={},w=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"1\u3001\u5b89\u88c5\u4f9d\u8d56",id:"1\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"2\u3001Running the development server",id:"2running-the-development-server",level:3},{value:"3\u3001Start your localized site",id:"3start-your-localized-site",level:3},{value:"4\u3001 Docs Edit",id:"4-docs-edit",level:3},{value:"5\u3001build",id:"5build",level:3},{value:"checked result",id:"checked-result",level:3},{value:"Special Grammar",id:"special-grammar",level:2},{value:"1\u3001Admonitions",id:"1admonitions",level:3},{value:"2\u3001Content Wrap",id:"2content-wrap",level:3},{value:"3\u3001Tabs",id:"3tabs",level:3},{value:"4\u3001Images",id:"4images",level:3},{value:"5\u3001Links",id:"5links",level:3},{value:"6\u3001Custom Style",id:"6custom-style",level:3}],N={toc:w};function T(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"Let's discover in less than 5 minutes."),(0,l.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,l.kt)("h3",{id:"1\u5b89\u88c5\u4f9d\u8d56"},"1\u3001\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"}," Required ")),": Install ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above (which can be checked by running node -v). ")),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(v,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://nodejs.org/dist/v16.17.0/node-v16.17.0-x86.msi\n"))),(0,l.kt)(v,{value:"mocos",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg\n"))),(0,l.kt)(v,{value:"sourcecode",label:"Source Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://nodejs.org/dist/v16.17.0/node-v16.17.0.tar.gz\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"}," Optional ")),": Install vscode plugin 'Markdown Snippets for MDX and Docusaurus'.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://marketplace.visualstudio.com/items?itemName=MisterMunchkin.simple-markdown-snippets\n")),(0,l.kt)("h3",{id:"2running-the-development-server"},"2\u3001Running the development server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/docs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,l.kt)("p",null,"By default, a browser window will open at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". Browse around the site to see what's available."),(0,l.kt)("admonition",{title:"My tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The default locale is en-us;")),(0,l.kt)("h3",{id:"3start-your-localized-site"},"3\u3001Start your localized site"),(0,l.kt)("p",null,"Start your site on the simplified chinese locale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale zh\n")),(0,l.kt)("p",null,"Your localized site is accessible at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000/zh/"},"http://localhost:3000/zh/")),(0,l.kt)("admonition",{title:"Take care",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,l.kt)("h3",{id:"4-docs-edit"},"4\u3001 Docs Edit"),(0,l.kt)("p",null,"create folder or .md file."),(0,l.kt)("h3",{id:"5build"},"5\u3001build"),(0,l.kt)("p",null,"build your site to include all the locales at once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,l.kt)("p",null,"and the contents will be generated within the /build directory."),(0,l.kt)("h3",{id:"checked-result"},"checked result"),(0,l.kt)("h2",{id:"special-grammar"},"Special Grammar"),(0,l.kt)("h3",{id:"1admonitions"},"1\u3001Admonitions"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". ")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". ")),(0,l.kt)("admonition",{title:"Some Info Title",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". ")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". ")),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":::note\nSome **content** with _Markdown_ `syntax`. \n:::\n\n:::tip\nSome **content** with _Markdown_ `syntax`. \n:::\n\n:::info\nSome **content** with _Markdown_ `syntax`. \n:::\n\n:::caution\nSome **content** with _Markdown_ `syntax`. \n:::\n\n:::danger\nSome **content** with _Markdown_ `syntax`. \n:::\n")),(0,l.kt)("h3",{id:"2content-wrap"},"2\u3001Content Wrap"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Some details containing headings"),(0,l.kt)("h2",{id:"#heading-id"},"I'm a heading that will not show up in the TOC"),"Some content..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\nSome content...\n</details>\n')),(0,l.kt)("h3",{id:"3tabs"},"3\u3001Tabs"),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(v,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm example content.\n"))),(0,l.kt)(v,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn example content.\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="npm" label="yarn" default>\n    npm install\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    yarn install\n  </TabItem>\n</Tabs>\n')),(0,l.kt)("h3",{id:"4images"},"4\u3001Images"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Logo",src:n(6561).Z,width:"200",height:"200"})),(0,l.kt)("p",null,"The img path is relatived to your markdown filepath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"![Logo](./assets/logo.png)\n")),(0,l.kt)("h3",{id:"5links"},"5\u3001Links"),(0,l.kt)("p",null,"URL path to another doc..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"[Link](./installation)\n")),(0,l.kt)("h3",{id:"6custom-style"},"6\u3001Custom Style"),(0,l.kt)("span",{style:{backgroundColor:"red",padding:5,color:"#FFF"}},"Foo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<span style={{backgroundColor: 'red', padding: 10}}>Foo</span>\n")))}T.isMDXComponent=!0},6561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/logo-de87ea2ca22656b0efc173ce110a4e98.png"}}]);