"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1595],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,b=u["".concat(r,".").concat(m)]||u[m]||k[m]||i;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const i={title:"Install and uninstall kbcli and KubeBlocks",description:"Install KubeBlocks and kbcli developed by ApeCloud",sidebar_position:1,sidebar_label:"kbcli and KubeBlocks"},o="Install and uninstall kbcli and KubeBlocks",s={unversionedId:"user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks",id:"version-release-0.4/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks",title:"Install and uninstall kbcli and KubeBlocks",description:"Install KubeBlocks and kbcli developed by ApeCloud",source:"@site/versioned_docs/version-release-0.4/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks.md",sourceDirName:"user_docs/installation",slug:"/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks",permalink:"/docs/release-0.4/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks.md",tags:[],version:"release-0.4",sidebarPosition:1,frontMatter:{title:"Install and uninstall kbcli and KubeBlocks",description:"Install KubeBlocks and kbcli developed by ApeCloud",sidebar_position:1,sidebar_label:"kbcli and KubeBlocks"},sidebar:"docs",previous:{title:"PostgreSQL cluster on AWS",permalink:"/docs/release-0.4/user_docs/quick-start/create-a-postgresql-cluster-on-aws"},next:{title:"Enable add-ons",permalink:"/docs/release-0.4/user_docs/installation/enable-add-ons"}},r={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step 1. Install kbcli",id:"step-1-install-kbcli",level:2},{value:"Step 2. Enable kbcli automatic command line completion",id:"step-2-enable-kbcli-automatic-command-line-completion",level:2},{value:"Step 3. Install KubeBlocks",id:"step-3-install-kubeblocks",level:2},{value:"Step 4. Uninstall KubeBlocks and kbcli",id:"step-4-uninstall-kubeblocks-and-kbcli",level:2}],p={toc:c},u="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-and-uninstall-kbcli-and-kubeblocks"},"Install and uninstall kbcli and KubeBlocks"),(0,l.kt)("p",null,"This guide introduces how to install KubeBlocks by ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli"),", the command line tool of KubeBlocks."),(0,l.kt)("h2",{id:"before-you-start"},"Before you start"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A Kubernetes environment is required."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," is required and can connect to your Kubernetes clusters. Refer to ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/"},"Install and Set Up kubectl on macOS")," for installation details.")),(0,l.kt)("h2",{id:"step-1-install-kbcli"},"Step 1. Install kbcli"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to install ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," can run on macOS and Linux."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://www.kubeblocks.io/installer/install_cli.sh | bash\n")),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Please try again if a time-out exception occurs during installation. It may relate to your network condition."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run this command to check the version and verify whether ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," is installed successfully."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli version\n")))),(0,l.kt)("h2",{id:"step-2-enable-kbcli-automatic-command-line-completion"},"Step 2. Enable kbcli automatic command line completion"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," supports automatic command line completion. You can run the command below to enable this function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Configure SHELL-TYPE as one type from bash, fish, PowerShell, and zsh\nkbcli completion SHELL-TYPE -h\n")),(0,l.kt)("p",null,"Here we take zsh as an example."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the command below.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli completion zsh -h\n"))),(0,l.kt)("li",{parentName:"ol"},"Enable the completion function of your terminal first.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n'))),(0,l.kt)("li",{parentName:"ol"},"Run the command below to enable the ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli")," automatic completion function.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "source <(kbcli completion zsh); compdef _kbcli kbcli" >> ~/.zshrc\n')))),(0,l.kt)("h2",{id:"step-3-install-kubeblocks"},"Step 3. Install KubeBlocks"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to install KubeBlocks."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install\n")),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Result"))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KubeBlocks is installed with built-in toleration which tolerates the node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"kb-controller=false:NoSchedule")," taint.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"KubeBlocks is installed with built-in node affinity which first deploys the node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"kb-controller:true")," tag.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This command installs the latest version in your Kubernetes environment under the default namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"kb-system")," since your ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," can connect to your Kubernetes clusters. If you want to install KubeBlocks in a specified namespace, run the command below."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install -n <name> --create-namespace=true\n")),(0,l.kt)("p",{parentName:"li"},"   ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Example"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install -n kubeblocks --create-namespace=true\n")),(0,l.kt)("p",{parentName:"li"},"You can also run the command below to check the parameters that can be specified during installation."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install --help\n>\nInstall KubeBlocks\n\nExamples:\n  # Install KubeBlocks\n  kbcli kubeblocks install\n\n  # Install KubeBlocks with specified version\n  kbcli kubeblocks install --version=0.4.0\n\n  # Install KubeBlocks with other settings, for example, set replicaCount to 3\n  kbcli kubeblocks install --set replicaCount=3\n\nOptions:\n   --check=true:\n       Check kubernetes environment before install\n\n   --create-namespace=false:\n       Create the namespace if not present\n\n   --monitor=true:\n       Set monitor enabled and install Prometheus, AlertManager and Grafana (default true)\n\n   --set=[]:\n       Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n\n   --set-file=[]:\n       Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)\n\n   --set-json=[]:\n       Set JSON values on the command line (can specify multiple or separate values with commas:\n       key1=jsonval1,key2=jsonval2)\n\n   --set-string=[]:\n       Set STRING values on the command line (can specify multiple or separate values with commas:\n       key1=val1,key2=val2)\n\n   --timeout=30m0s:\n       Time to wait for installing KubeBlocks\n\n   -f, --values=[]:\n       Specify values in a YAML file or a URL (can specify multiple)\n\n   --version='0.4.0-beta.5':\n       KubeBlocks version\n\nUsage:\n   kbcli kubeblocks install [flags] [options]\n\nUse \"kbcli options\" for a list of global command-line options (applies to all commands).\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-namespace")," and its abbreviated version ",(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is used to name a namespace. ",(0,l.kt)("inlineCode",{parentName:"p"},"--create-namespace")," is used to specify whether to create a namespace if it does not exist. ",(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is a global command line option. For global command line options, run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli options")," to list all options (applies to all commands).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"monitor")," to specify whether to install the add-ons relevant to database monitoring and visualization.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," to specify the version you want to install. Find the supported version in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apecloud/helm-charts"},"KubeBlocks Helm Charts"),".")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to verify whether KubeBlocks is installed successfully."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n <namespace>\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Example"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kb-system\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Result"))),(0,l.kt)("p",{parentName:"li"},"When the following pods are ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),", it means KubeBlocks is installed successfully."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                     READY   STATUS      RESTARTS   AGE\nkb-addon-alertmanager-webhook-adaptor-5549f94599-fsnmc   2/2     Running     0          84s\nkb-addon-grafana-5ddcd7758f-x4t5g                        3/3     Running     0          84s\nkb-addon-prometheus-alertmanager-0                       2/2     Running     0          84s\nkb-addon-prometheus-server-0                             2/2     Running     0          84s\nkubeblocks-846b8878d9-q8g2w                              1/1     Running     0          98s\n")))),(0,l.kt)("h2",{id:"step-4-uninstall-kubeblocks-and-kbcli"},"Step 4. Uninstall KubeBlocks and kbcli"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Uninstall KubeBlocks first.")),(0,l.kt)("p",null,"Run the command below to uninstall KubeBlocks if you want to delete KubeBlocks after your trial."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks uninstall\n")),(0,l.kt)("p",null,"Run the command below to uninstall ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm /usr/local/bin/kbcli\n")))}k.isMDXComponent=!0}}]);