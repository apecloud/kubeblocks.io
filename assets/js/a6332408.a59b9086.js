"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(b,c(c({ref:t},d),{},{components:n})):a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Connect database in testing environment",description:"How to connect to a database in testing environment",sidebar_position:2},c="Connect database in testing environment",s={unversionedId:"user_docs/connect_database/connect-database-in-testing-environment",id:"user_docs/connect_database/connect-database-in-testing-environment",title:"Connect database in testing environment",description:"How to connect to a database in testing environment",source:"@site/docs/user_docs/connect_database/connect-database-in-testing-environment.md",sourceDirName:"user_docs/connect_database",slug:"/user_docs/connect_database/connect-database-in-testing-environment",permalink:"/docs/next/user_docs/connect_database/connect-database-in-testing-environment",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/connect_database/connect-database-in-testing-environment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Connect database in testing environment",description:"How to connect to a database in testing environment",sidebar_position:2},sidebar:"docs",previous:{title:"Connect database from anywhere",permalink:"/docs/next/user_docs/connect_database/overview-of-database-connection"},next:{title:"Connect database in production environment",permalink:"/docs/next/user_docs/connect_database/connect-database-in-production-environment"}},i={},l=[{value:"Procedure 1: You can use <code>kbcli cluster connect</code> command and specify the cluster name to be connected.",id:"procedure-1-you-can-use-kbcli-cluster-connect-command-and-specify-the-cluster-name-to-be-connected",level:2},{value:"Procedure 2: To connect database with CLI or SDK client.",id:"procedure-2-to-connect-database-with-cli-or-sdk-client",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-database-in-testing-environment"},"Connect database in testing environment"),(0,o.kt)("h2",{id:"procedure-1-you-can-use-kbcli-cluster-connect-command-and-specify-the-cluster-name-to-be-connected"},"Procedure 1: You can use ",(0,o.kt)("inlineCode",{parentName:"h2"},"kbcli cluster connect")," command and specify the cluster name to be connected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect ${cluster-name}\n")),(0,o.kt)("p",null,"The lower-level command is actually ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec"),". The command is functional as long as the K8s API server is accessible."),(0,o.kt)("h2",{id:"procedure-2-to-connect-database-with-cli-or-sdk-client"},"Procedure 2: To connect database with CLI or SDK client."),(0,o.kt)("p",null,"Execute the following command to get the network information of the targeted database and connect it with the printed IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect --show-example ${cluster-name}\n")),(0,o.kt)("p",null,"Information printed includes database addresses, port No., username, password. The figure below is an example of MySQL database network information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Address: -h specifies the server address. In the example below it is 127.0.0.1"),(0,o.kt)("li",{parentName:"ul"},"Port: -P specifies port No. , In the example below it is 3306."),(0,o.kt)("li",{parentName:"ul"},"User: -u is the user name."),(0,o.kt)("li",{parentName:"ul"},"Password: -p shows the password. In the example below, it is hQBCKZLI. ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))),(0,o.kt)("p",{parentName:"blockquote"},"The password does not include -p.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example",src:n(25107).Z,width:"1280",height:"459"})))}p.isMDXComponent=!0},25107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect_database_with_CLI_or_SDK_client-dcf145fbe3239718364e5cdd5409461b.png"}}]);