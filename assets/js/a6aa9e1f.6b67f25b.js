"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3089],{80046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(67294),l=a(86010),c=a(52263),r=a(10833),m=a(35281),s=a(31627),o=a(99703),i=a(90197),d=a(93221);function g(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,c.Z)(),{blogDescription:l,blogTitle:m,permalink:s}=t,o="/"===s?a:m;return n.createElement(n.Fragment,null,n.createElement(r.d,{title:o,description:l}),n.createElement(i.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.Z,{sidebar:l},n.createElement(d.Z,{items:a}),n.createElement(o.Z,{metadata:t}))}function h(e){return n.createElement(r.FG,{className:(0,l.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},n.createElement(g,e),n.createElement(u,e))}},31627:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010),c=a(7452);function r(e){const{sidebar:t,toc:a,children:r,...m}=e,s=a;return n.createElement(c.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:(0,l.Z)("col",{"col--10":s,"col--12":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&n.createElement("div",{className:"col col--2"},a))))}},93221:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(9460);const c=e=>{const[t,a]=(0,n.useState)(""),[l,c]=(0,n.useState)(!1);return n.createElement("div",{className:`${l&&"active-input"} custom-input`},n.createElement("span",{onClick:()=>{e?.handleSearch&&e.handleSearch(t)},className:"icon"},n.createElement("img",{src:"/img/search.png"})),n.createElement("input",{placeholder:e.placeholder,value:t,onChange:t=>(t=>{a(t.target.value),e?.onChange&&e.onChange(t.target.value)})(t),onBlur:()=>c(!1),onFocus:()=>c(!0),onKeyDown:a=>{13===a.keyCode&&e?.handleSearch&&e.handleSearch(t)}}),n.createElement("span",{onClick:()=>{a(""),e?.onChange&&e.onChange(""),e?.handleSearch&&e.handleSearch("")},className:"icon"},!!t.length&&n.createElement("img",{src:"/img/clear.png"})))};var r=a(96486),m=a.n(r),s=a(72679);function o(e){let{items:t}=e;const[a,r]=(0,n.useState)(6),[o,i]=(0,n.useState)(""),d=m().throttle((e=>{i(e)}),1e3),g=t.filter((e=>e.content.metadata.title.toLowerCase().includes(o.toLowerCase())));return n.createElement(n.Fragment,null,n.createElement("div",{className:"search"},n.createElement(c,{placeholder:"Search the blog",onChange:e=>d(e)})),n.createElement("div",{className:"row cards"},g.slice(0,a).map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement("div",{key:t.metadata.permalink,className:"col margin-bottom--lg"},n.createElement("a",{href:t.metadata.permalink},n.createElement("div",{className:"card cardItem"},n.createElement("div",{className:"card_image"},n.createElement(s.LazyLoadImage,{src:t.frontMatter.image?t.frontMatter.image:"/img/default.jpg",alt:t.metadata.title})),n.createElement("div",{className:"card_time"},t.metadata.formattedDate),n.createElement("div",{className:"card_body"},n.createElement("div",{className:"card_text"},n.createElement("h3",null,t.metadata.title),n.createElement("p",null,t.metadata.description)),n.createElement("div",{className:"authors"},n.createElement("div",{className:"author-images"},t.metadata.authors.map(((e,t)=>n.createElement("img",{key:t,src:e.imageURL})))),n.createElement("div",{className:"author-names"},t.metadata.authors.map(((e,a)=>n.createElement("span",{key:a},e.name,a+1<t.metadata.authors.length?"&":""))))))))))}))),a<t.length&&n.createElement("div",{className:"text--center margin-top--lg"},n.createElement("button",{className:"button",onClick:()=>{r(a+6)}},"Load more")))}}}]);