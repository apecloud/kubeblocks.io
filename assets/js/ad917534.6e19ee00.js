"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=k({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var h=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return l.createElement(N,(0,n.Z)({key:String(t)},e))}},78253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),o=a(85162);const i={title:"Try out basic functions of KubeBlocks on Cloud",description:"How to run KubeBlocks on Playground",sidebar_position:1,sidebar_label:"Try out KubeBlocks on cloud"},s="Try out basic functions of KubeBlocks on Cloud",u={unversionedId:"user_docs/quick-start/try-kubeblocks-functions-on-cloud",id:"user_docs/quick-start/try-kubeblocks-functions-on-cloud",title:"Try out basic functions of KubeBlocks on Cloud",description:"How to run KubeBlocks on Playground",source:"@site/docs/user_docs/quick-start/try-kubeblocks-functions-on-cloud.md",sourceDirName:"user_docs/quick-start",slug:"/user_docs/quick-start/try-kubeblocks-functions-on-cloud",permalink:"/docs/preview/user_docs/quick-start/try-kubeblocks-functions-on-cloud",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/quick-start/try-kubeblocks-functions-on-cloud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Try out basic functions of KubeBlocks on Cloud",description:"How to run KubeBlocks on Playground",sidebar_position:1,sidebar_label:"Try out KubeBlocks on cloud"},sidebar:"docs",previous:{title:"KubeBlocks overview",permalink:"/docs/preview/user_docs/introduction/"},next:{title:"Try out KubeBlocks on local host",permalink:"/docs/preview/user_docs/quick-start/try-kubeblocks-in-5m-on-local-host"}},c={},p=[{value:"Before you start to try KubeBlocks on Cloud (AWS)",id:"before-you-start-to-try-kubeblocks-on-cloud-aws",level:2},{value:"Configure access key",id:"configure-access-key",level:2},{value:"Initialize Playground",id:"initialize-playground",level:2},{value:"Try KubeBlocks with Playground",id:"try-kubeblocks-with-playground",level:2},{value:"View an ApeCloud MySQL cluster",id:"view-an-apecloud-mysql-cluster",level:3},{value:"Access an ApeCloud MySQL cluster",id:"access-an-apecloud-mysql-cluster",level:3},{value:"Observability",id:"observability",level:3},{value:"High availability of ApeCloud MySQL",id:"high-availability-of-apecloud-mysql",level:3},{value:"Delete ApeCloud MySQL Standalone",id:"delete-apecloud-mysql-standalone",level:4},{value:"Create an ApeCloud MySQL Paxos Group",id:"create-an-apecloud-mysql-paxos-group",level:4},{value:"Simulate leader pod failure recovery",id:"simulate-leader-pod-failure-recovery",level:4},{value:"Demonstrate availability failure by NON-STOP NYAN CAT (for fun)",id:"demonstrate-availability-failure-by-non-stop-nyan-cat-for-fun",level:4},{value:"Destroy Playground",id:"destroy-playground",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"try-out-basic-functions-of-kubeblocks-on-cloud"},"Try out basic functions of KubeBlocks on Cloud"),(0,l.kt)("p",null,"This guide walks you through the quickest way to get started with KubeBlocks, demonstrating how to easily create a KubeBlocks demo environment (Playground) with simply one ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," command.\nWith Playground, you can try out KubeBlocks both on your local host (macOS) and on a cloud environment (AWS)."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"AWS",label:"AWS",default:!0,mdxType:"TabItem"},(0,l.kt)("h2",{id:"before-you-start-to-try-kubeblocks-on-cloud-aws"},"Before you start to try KubeBlocks on Cloud (AWS)"),(0,l.kt)("p",null,"When deploying on the cloud, cloud resources are initialized with the help of the terraform script maintained by ApeCloud. Find the script at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apecloud/cloud-provider"},"Github repository"),"."),(0,l.kt)("p",null,"When deploying a Kubernetes cluster on the cloud, ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," clones the above repository to the local host, calls the terraform commands to initialize the cluster, then deploys KubeBlocks on this cluster."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install AWS CLI. Refer to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"Installing or updating the latest version of the AWS CLI")," for details."),(0,l.kt)("li",{parentName:"ul"},"Make sure the following tools are installed on your local host.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Docker: v20.10.5 (runc \u2265 v1.0.0-rc93) or above. For installation details, refer to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Get Docker"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl"),": It is used to interact with Kubernetes clusters. For installation details, refer to ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Install kubectl"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),": It is the command line tool of KubeBlocks and is used for the interaction between Playground and KubeBlocks. Follow the steps below to install ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),".",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),".",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://www.kubeblocks.io/installer/install_cli.sh | bash\n"))),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli version")," to check the ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli")," version and make sure ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli")," is installed successfully.")))))),(0,l.kt)("h2",{id:"configure-access-key"},"Configure access key"),(0,l.kt)("p",null,"Configure the Access Key of cloud resources.\nFor AWS, there are two options."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 1.")," Use ",(0,l.kt)("inlineCode",{parentName:"p"},"aws configure"),"."),(0,l.kt)("p",null,"Fill in AWS Access Key ID and AWS Secret Access Key and run the command below to configure access permission."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\nAWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\nAWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")),(0,l.kt)("p",null,"You can refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config"},"Quick configuration with aws configure")," for detailed information."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 2.")," Use environment variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="anaccesskey"\nexport AWS_SECRET_ACCESS_KEY="asecretkey"\n')),(0,l.kt)("h2",{id:"initialize-playground"},"Initialize Playground"),(0,l.kt)("p",null,"Initialize Playground."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli playground init --cloud-provider aws --region cn-northwest-1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cloud-provider")," specifies the cloud provider. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"region")," specifies the region to deploy a Kubernetes cluster.\nFrequently used regions are as follows. You can find the full region list on ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?nc1=h_ls"},"the official website"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Americas"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Region ID"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Region name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"us-east-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Northern Virginia")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"us-east-2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ohio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"us-west-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Northern California")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"us-west-2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Oregon"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Asia Pacific"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Region ID"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Region name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ap-east-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hong Kong")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ap-southeast-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Singapore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cn-north-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Beijing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cn-northwest-1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ningxia")))))))),(0,l.kt)("p",null,"During the initialization, ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," clones ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apecloud/cloud-provider"},"the GitHub repository")," to the path ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.kbcli/playground")," and calls the terraform script to create cloud resources. And then ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," deploys KubeBlocks automatically and installs a MySQL cluster."),(0,l.kt)("p",null,"After the ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli playground init")," command is executed, ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," automatically switches the context of the local kubeconfig to the current cluster. Run the command below to view the deployed cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# View kbcli version\nkbcli version\n\n# View the cluster list\nkbcli cluster list\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The initialization lasts about 20 minutes. If the installation fails after a long time, please check your network environment.")),(0,l.kt)("h2",{id:"try-kubeblocks-with-playground"},"Try KubeBlocks with Playground"),(0,l.kt)("p",null,"You can explore KubeBlocks by ",(0,l.kt)("a",{parentName:"p",href:"#view-an-apecloud-mysql-cluster"},"Viewing an ApeCloud MySQL cluster"),", ",(0,l.kt)("a",{parentName:"p",href:"#access-an-apecloud-mysql-cluster"},"Accessing an ApeCloud MySQL Cluster"),", ",(0,l.kt)("a",{parentName:"p",href:"#observability"},"Observability"),", and ",(0,l.kt)("a",{parentName:"p",href:"#high-availability-of-apecloud-mysql"},"High availability"),". Refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/preview/user_docs/introduction/"},"Overview")," to explore more KubeBlocks features and you can try the full features of KubeBlocks in a standard Kubernetes cluster."),(0,l.kt)("p",null,"KubeBlocks supports the complete life cycle management of a database cluster. Go through the following instruction to try basic features of KubeBlocks.\nFor the full feature set, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/preview/user_docs/introduction/"},"KubeBlocks Documentation")," for details."),(0,l.kt)("h3",{id:"view-an-apecloud-mysql-cluster"},"View an ApeCloud MySQL cluster"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to view the database cluster list."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster describe")," to view the details of a specified database cluster, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Endpoints"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Topology"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Images"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Events"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe mycluster\n")))),(0,l.kt)("h3",{id:"access-an-apecloud-mysql-cluster"},"Access an ApeCloud MySQL cluster"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 1.")," Connect database inside Kubernetes cluster."),(0,l.kt)("p",null,"If a database cluster has been created and its status is ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),", run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect")," to access a specified database cluster. For example, "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mycluster\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 2.")," Connect database outside Kubernetes cluster."),(0,l.kt)("p",null,"Get the MySQL client connection example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect --show-example --client=cli mycluster\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/mycluster-mysql 3306:3306\n>\nForwarding from 127.0.0.1:3306 -> 3306\nForwarding from [::1]:3306 -> 3306\n\n\nmysql -h 127.0.0.1 -P 3306 -u root -paiImelyt\n>\n...\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n>\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mydb               |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n5 rows in set (0.02 sec)\n")),(0,l.kt)("h3",{id:"observability"},"Observability"),(0,l.kt)("p",null,"KubeBlocks has complete observability capabilities. This section demonstrates the monitoring function of KubeBlocks. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to view the monitoring page to observe the service running status."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard open kubeblocks-grafana\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Result"))),(0,l.kt)("p",{parentName:"li"},"A monitoring page on Grafana website is loaded automatically after the command is executed. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the Dashboard icon on the left bar and two monitoring panels show on the page.\n",(0,l.kt)("img",{alt:"Dashboards",src:a(52319).Z,width:"3022",height:"1602"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"General")," -> ",(0,l.kt)("strong",{parentName:"p"},"MySQL")," to monitor the status of the ApeCloud MySQL cluster deployed by Playground.\n",(0,l.kt)("img",{alt:"MySQL_panel",src:a(91340).Z,width:"1280",height:"643"})))),(0,l.kt)("h3",{id:"high-availability-of-apecloud-mysql"},"High availability of ApeCloud MySQL"),(0,l.kt)("p",null,"ApeCloud MySQL Paxos Group delivers high availability with RPO=0 and RTO in less than 30 seconds.\nThis section uses a simple failure simulation to show you the failure recovery capability of ApeCloud MySQL."),(0,l.kt)("h4",{id:"delete-apecloud-mysql-standalone"},"Delete ApeCloud MySQL Standalone"),(0,l.kt)("p",null,"Delete the ApeCloud MySQL Standalone before trying out high availability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mycluster\n")),(0,l.kt)("h4",{id:"create-an-apecloud-mysql-paxos-group"},"Create an ApeCloud MySQL Paxos Group"),(0,l.kt)("p",null,"Playground creates an ApeCloud MySQL Standalone by default. You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," to create a new Paxos Group. The following is an example of creating an ApeCloud MySQL Paxos Group with default configurations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --cluster-definition='apecloud-mysql' --set replicas=3\n")),(0,l.kt)("h4",{id:"simulate-leader-pod-failure-recovery"},"Simulate leader pod failure recovery"),(0,l.kt)("p",null,"In this example, we delete the leader pod to simulate a failure."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster describe ")," to view the ApeCloud MySQL Paxos group information. View the leader pod name in ",(0,l.kt)("inlineCode",{parentName:"p"},"Topology"),". In this example, the leader pod's name is maple05-mysql-1."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe maple05\n>\nName: maple05         Created Time: Jan 27,2023 17:33 UTC+0800\nNAMESPACE        CLUSTER-DEFINITION        VERSION                STATUS         TERMINATION-POLICY\ndefault          apecloud-mysql            ac-mysql-8.0.30        Running        WipeOut\n\nEndpoints:\nCOMPONENT        MODE             INTERNAL                EXTERNAL\nmysql            ReadWrite        10.43.29.51:3306        <none>\n\nTopology:\nCOMPONENT        INSTANCE               ROLE            STATUS         AZ            NODE                                                 CREATED-TIME\nmysql            maple05-mysql-1        leader          Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\nmysql            maple05-mysql-2        follower        Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\nmysql            maple05-mysql-0        follower        Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\n\nResources Allocation:\nCOMPONENT        DEDICATED        CPU(REQUEST/LIMIT)        MEMORY(REQUEST/LIMIT)        STORAGE-SIZE        STORAGE-CLASS\nmysql            false            <none>                    <none>                       <none>              <none>\n\nImages:\nCOMPONENT        TYPE         IMAGE\nmysql            mysql        docker.io/apecloud/wesql-server:8.0.30-5.alpha2.20230105.gd6b8719\n\nEvents(last 5 warnings, see more:kbcli cluster list-events -n default mycluster):\nTIME        TYPE        REASON        OBJECT        MESSAGE\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the leader pod."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl delete pod maple05-mysql-1\n>\npod "maple05-mysql-1" deleted\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect maple05")," to connect to the ApeCloud MySQL Paxos Group to test its availability. You can find this group can still be accessed within seconds due to our HA strategy."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect maple05\n>\nConnect to instance maple05-mysql-2: out of maple05-mysql-2(leader), maple05-mysql-1(follower), maple05-mysql-0(follower)\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 33\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision d6b8719\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")))),(0,l.kt)("h4",{id:"demonstrate-availability-failure-by-non-stop-nyan-cat-for-fun"},"Demonstrate availability failure by NON-STOP NYAN CAT (for fun)"),(0,l.kt)("p",null,"The above example uses ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect")," to test availability, in which the changes are not obvious to see.\nNON-STOP NYAN CAT is a demo application to observe how the database cluster exceptions affect actual businesses. Animations and real-time key information display provided by NON-STOP NYAN CAT can directly show the availability influences of database services."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to install the NYAN CAT demo application."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon enable nyancat\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Result:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"addon.extensions.kubeblocks.io/nyancat patched\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the NYAN CAT add-on status and when its status is ",(0,l.kt)("inlineCode",{parentName:"p"},"Enabled"),", this application is ready."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon list | grep nyancat \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the web page."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard open kubeblocks-nyancat\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the leader pod and view the influences on the ApeCloud MySQL clusters through the NYAN CAT page."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"NYAN CAT",src:a(17947).Z,width:"2408",height:"1490"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uninstall the NYAN CAT demo application after your trial."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon disable nyancat\n")))),(0,l.kt)("h2",{id:"destroy-playground"},"Destroy Playground"),(0,l.kt)("p",null,"Before destroying Playground, it is recommended to delete the clusters created by KubeBlocks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# View all clusters\nkbcli cluster list -A\n\n# Delete a cluster\n# A double-check is required and you can add --auto-approve to check it automatically\nkbcli cluster delete <my-cluster>\n\n# Uninstall KubeBlocks\n# A double-check is required and you can add --auto-approve to check it automatically\nkbcli kubeblocks uninstall --remove-pvcs --remove-pvs\n")),(0,l.kt)("p",null,"Run the command below to destroy Playground."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli playground destroy --cloud-provider aws --region cn-northwest-1\n")),(0,l.kt)("p",null,"Like the parameters in ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli playground init"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},"--cloud-provider")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--region")," to specify the cloud provider and the region."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"kbcli playground destroy")," directly deletes the Kubernetes cluster on the cloud but there might be residual resources in cloud, such as volumes. Please confirm whether there are residual resources after uninstalling and delete them in time to avoid unnecessary fees."))),(0,l.kt)(o.Z,{value:"GCP",label:"GCP",mdxType:"TabItem"},(0,l.kt)("p",null,"Coming soon!"))))}k.isMDXComponent=!0},52319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_dashboards-e01f7f57dc86e8e427a6fb8cdf6cbe75.png"},91340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_panel-4e118d80ce040a1e8858d4f4416ffdcb.png"},17947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_nyan_cat-f79c354bfb95d8a05ecf7ee009065248.png"}}]);