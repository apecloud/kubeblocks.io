"use strict";(self.webpackChunkconsole_docs=self.webpackChunkconsole_docs||[]).push([[774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u4f7f\u7528\u624b\u518c",i={unversionedId:"OpenCli/manual",id:"OpenCli/manual",title:"\u4f7f\u7528\u624b\u518c",description:"\u4f9d\u8d56",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/OpenCli/manual.md",sourceDirName:"OpenCli",slug:"/OpenCli/manual",permalink:"/website/zh/docs/OpenCli/manual",draft:!1,editUrl:"https://github.com/apecloud/website/tree/developer/i18n/zh/docusaurus-plugin-content-docs/current/OpenCli/manual.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8981",permalink:"/website/zh/docs/overview"},next:{title:"ApeCloud writing style guide",permalink:"/website/zh/docs/Style Guide"}},c={},p=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528\u624b\u518c"},"\u4f7f\u7528\u624b\u518c"),(0,a.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5728\u90e8\u7f72\u4e4b\u524d\uff0c\u5fc5\u987b\u5b8c\u6210\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\u4ee5\u6ee1\u8db3\u90e8\u7f72\u6761\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7dDocker.dmg\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5728\u672c\u5730\u5b89\u88c5\u5e76\u542f\u52a8 Docker\u3002\u5b89\u88c5\u64cd\u4f5c\u5177\u4f53\u6307\u5f15\u53c2\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/mac-install/"},"Install Docker Desktop on Mac"),"\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='\u672c\u5730\u5b89\u88c5\u5e76\u542f\u52a8 Docker'",title:"'\u672c\u5730\u5b89\u88c5\u5e76\u542f\u52a8","Docker'":!0},"sudo hdiutil attach Docker.dmg\nsudo /Volumes/Docker/Docker.app/Contents/MacOS/install\nsudo hdiutil detach /Volumes/Docker\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u5730\u5b89\u88c5 MySQL Shell\uff0c\u7528\u4e8e\u672c\u5730\u8bbf\u95eeMySQL \u5b9e\u4f8b\u3002\u4e0b\u8f7d\u5730\u5740\u53ca\u5b89\u88c5\u64cd\u4f5c\u5177\u4f53\u6307\u5f15\u53c2\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-macos-quick.html"},"Install MySQL Shell on macOS"),"\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Download the package from ",(0,a.kt)("a",{parentName:"li",href:"http://dev.mysql.com/downloads/shell/"},"http://dev.mysql.com/downloads/shell/"),"."),(0,a.kt)("li",{parentName:"ol"},"Double-click the downloaded DMG to mount it. Finder opens."),(0,a.kt)("li",{parentName:"ol"},"Double-click the .pkg file shown in the Finder window."),(0,a.kt)("li",{parentName:"ol"},"Follow the steps in the installation wizard."),(0,a.kt)("li",{parentName:"ol"},"When the installer finishes, eject the DMG. (It can be deleted.)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u5982\u4e0b\u5185\u5bb9\uff0c\u5728\u672c\u5730\u5b89\u88c5 kubectl\u3002\u5b89\u88c5\u64cd\u4f5c\u5177\u4f53\u6307\u5f15\u53c2\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/"},"Install and Set Up kubectl on macOS"),"\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u51c6\u5907\u597dAWS AK\uff0c\u4e14\u8be5\u8d26\u6237\u9700\u5177\u5907VPC/Internet Gateway/Subnet/Route Table/Security Group/EC2\u8d44\u6e90\u7684\u67e5\u8be2\u548c\u53d8\u66f4\u6743\u9650\u3002"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u53ca\u4f7f\u7528\u529f\u80fd\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u52ff\u5207\u6362\u7f51\u7edc\u3002\u5207\u6362\u7f51\u7edc\u5c06\u5bfc\u81f4\u51fa\u53e3IP\u53d8\u5316\uff0c\u53ef\u80fd\u5bfc\u81f4\u8fde\u63a5\u5931\u8d25\u3002")))}u.isMDXComponent=!0}}]);