"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const o={},r="Developing KubeBlocks",i={unversionedId:"DEVELOPING",id:"DEVELOPING",title:"Developing KubeBlocks",description:"This document covers basic needs to work with KubeBlocks codebase.",source:"@site/docs/DEVELOPING.md",sourceDirName:".",slug:"/DEVELOPING",permalink:"/docs/preview/DEVELOPING",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/DEVELOPING.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Setup development environment",id:"setup-development-environment",level:2},{value:"Bring your own toolbox",id:"bring-your-own-toolbox",level:3},{value:"Install Go",id:"install-go",level:4},{value:"Install Make",id:"install-make",level:4},{value:"Build KubeBlocks",id:"build-kubeblocks",level:4},{value:"Use VSCode and development container",id:"use-vscode-and-development-container",level:3},{value:"Setup the development container",id:"setup-the-development-container",level:4},{value:"Customize your dev container",id:"customize-your-dev-container",level:4},{value:"Use a custom dev container image",id:"use-a-custom-dev-container-image",level:5},{value:"Connect existing Kubernetes cluster",id:"connect-existing-kubernetes-cluster",level:5},{value:"Setup a Kubernetes development environment",id:"setup-a-kubernetes-development-environment",level:3},{value:"Docker environment",id:"docker-environment",level:4},{value:"Kubernetes environment",id:"kubernetes-environment",level:4},{value:"Basics",id:"basics",level:2},{value:"Kubebuilder",id:"kubebuilder",level:3},{value:"Makefile",id:"makefile",level:3},{value:"TODO kbcli",id:"todo-kbcli",level:3},{value:"Code style",id:"code-style",level:3},{value:"Test",id:"test",level:2},{value:"Envtest",id:"envtest",level:3},{value:"Use existing Kubernetes cluster",id:"use-existing-kubernetes-cluster",level:3},{value:"Check test code coverage",id:"check-test-code-coverage",level:3},{value:"Debug",id:"debug",level:2},{value:"Install Delve",id:"install-delve",level:3},{value:"Start a delve debug server",id:"start-a-delve-debug-server",level:3},{value:"Debug specific package",id:"debug-specific-package",level:4},{value:"Pass arguments",id:"pass-arguments",level:4},{value:"Debug envtest",id:"debug-envtest",level:4},{value:"Change debug server port",id:"change-debug-server-port",level:4},{value:"Connect the debug server with a frontend client",id:"connect-the-debug-server-with-a-frontend-client",level:3},{value:"Delve CLI",id:"delve-cli",level:4},{value:"JetBrains GoLand / IntelliJ IDEA with go plugin",id:"jetbrains-goland--intellij-idea-with-go-plugin",level:4},{value:"VSCode",id:"vscode",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,l.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"developing-kubeblocks"},"Developing KubeBlocks"),(0,l.kt)("p",null,"This document covers basic needs to work with KubeBlocks codebase."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#developing-kubeblocks"},"Developing KubeBlocks"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setup-development-environment"},"Setup development environment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bring-your-own-toolbox"},"Bring your own toolbox"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-go"},"Install Go")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-make"},"Install Make")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#build-kubeblocks"},"Build KubeBlocks")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-vscode-and-development-container"},"Use VSCode and development container"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setup-the-development-container"},"Setup the development container")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#customize-your-dev-container"},"Customize your dev container"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-a-custom-dev-container-image"},"Use a custom dev container image")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#connect-existing-kubernetes-cluster"},"Connect existing Kubernetes cluster")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setup-a-kubernetes-development-environment"},"Setup a Kubernetes development environment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker-environment"},"Docker environment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kubernetes-environment"},"Kubernetes environment")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#basics"},"Basics"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kubebuilder"},"Kubebuilder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#makefile"},"Makefile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#todo-kbcli"},"[","TODO","]"," kbcli")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#code-style"},"Code style")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test"},"Test"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#envtest"},"Envtest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#use-existing-kubernetes-cluster"},"Use existing Kubernetes cluster")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#check-test-code-coverage"},"Check test code coverage")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#debug"},"Debug"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-delve"},"Install Delve")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#start-a-delve-debug-server"},"Start a delve debug server"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#debug-specific-package"},"Debug specific package")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pass-arguments"},"Pass arguments")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#debug-envtest"},"Debug envtest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#change-debug-server-port"},"Change debug server port")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#connect-the-debug-server-with-a-frontend-client"},"Connect the debug server with a frontend client"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#delve-cli"},"Delve CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#jetbrains-goland--intellij-idea-with-go-plugin"},"JetBrains GoLand / IntelliJ IDEA with go plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vscode"},"VSCode"))))))))),(0,l.kt)("h2",{id:"setup-development-environment"},"Setup development environment"),(0,l.kt)("p",null,"There are two options for getting an environment up and running for ",(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," development."),(0,l.kt)("h3",{id:"bring-your-own-toolbox"},"Bring your own toolbox"),(0,l.kt)("p",null,"To build ",(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," on your own host, needs to install the following tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go (Golang)"),(0,l.kt)("li",{parentName:"ul"},"Make")),(0,l.kt)("h4",{id:"install-go"},"Install Go"),(0,l.kt)("p",null,"Download and install ",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Go 1.19 or later"),"."),(0,l.kt)("h4",{id:"install-make"},"Install Make"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," uses ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," for a variety of build and test actions, and needs to be installed as appropriate for your platform:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Install the ",(0,l.kt)("inlineCode",{parentName:"li"},"build-essential")," package:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install build-essential\n"))))),(0,l.kt)("li",{parentName:"ul"},"macOS",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Ensure that build tools are installed:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n"))),(0,l.kt)("li",{parentName:"ol"},"When completed, you should see ",(0,l.kt)("inlineCode",{parentName:"li"},"make")," and other command line developer tools in ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/bin"),".")))),(0,l.kt)("h4",{id:"build-kubeblocks"},"Build KubeBlocks"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"go")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," are installed, you can clone the ",(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," repository, and build ",(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks"),"  binaries with the ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," tool."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To build for your current local environment:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make all\n"))),(0,l.kt)("li",{parentName:"ul"},"To cross-compile for a different platform, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"GOOS")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"GOARCH")," environmental variables:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make all GOOS=windows GOARCH=amd64\n")))),(0,l.kt)("h3",{id:"use-vscode-and-development-container"},"Use VSCode and development container"),(0,l.kt)("p",null,"If you are using Visual Studio Code, you can connect to a ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/devcontainers/containers"},"development container")," configured for KubeBlocks development. With development container, you don't need to manually install all of the tools and frameworks needed."),(0,l.kt)("h4",{id:"setup-the-development-container"},"Setup the development container"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install VSCode ",(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Dev Containers extension")),(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("inlineCode",{parentName:"li"},"KubeBlocks")," project folder in VSCode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"VSCode will detect the presence of a dev container definition in the repo and will prompt you to reopen the project in a container:\n",(0,l.kt)("img",{alt:"reopen dev container by pop notification",src:n(86754).Z,width:"1046",height:"418"})),(0,l.kt)("li",{parentName:"ul"},"Alternatively, you can open the command palette and use the Remote-Containers: Reopen in Container command:\n",(0,l.kt)("img",{alt:"reopen dev container by command",src:n(79288).Z,width:"1238",height:"318"})),(0,l.kt)("li",{parentName:"ul"},"VSCode will pull image and start dev container automatically, once the container is loaded, open an integrated terminal in VS Code and you're ready to develop ",(0,l.kt)("inlineCode",{parentName:"li"},"KubeBlocks")," in a containerized environment."))),(0,l.kt)("li",{parentName:"ol"},"And you can run ",(0,l.kt)("inlineCode",{parentName:"li"},"make all")," to build ",(0,l.kt)("inlineCode",{parentName:"li"},"KubeBlocks")," in the dev container.")),(0,l.kt)("h4",{id:"customize-your-dev-container"},"Customize your dev container"),(0,l.kt)("h5",{id:"use-a-custom-dev-container-image"},"Use a custom dev container image"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"../.devcontainer/devcontainer.json"},"devcontainer.json")," uses the latest image from ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apecloud/kubeblocks-dev"},"ApeCloud Docker hub"),", you can customize image to suit your need. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Edit the ",(0,l.kt)("a",{parentName:"p",href:"../docker/Dockerfile-dev"},"docker/Dockerfile-dev")," dev container image definition, you can change the ",(0,l.kt)("inlineCode",{parentName:"p"},"[Option]")," configuration or install additional tools."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Copy library scripts to execute\nCOPY library-scripts/*.sh library-scripts/*.env /tmp/library-scripts/\n\n# [Option] Install zsh\nARG INSTALL_ZSH="true"\n\n# [Optional] Uncomment the next line to use go get to install anything else you need\n# RUN go get -x <your-dependency-or-tool>\n\n# [Optional] Uncomment this section to install additional OS packages.\n# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \\\n#     && apt-get -y install --no-install-recommends <your-package-list-here>\n\n# [Optional] Uncomment this line to install global node packages.\n# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build a new image using updated ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", and replace the ",(0,l.kt)("inlineCode",{parentName:"p"},'"image"')," property in ",(0,l.kt)("a",{parentName:"p",href:"../.devcontainer/devcontainer.json"},"devcontainer.json"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Update to your dev container image\n    "image": "docker.io/apecloud/kubeblocks-dev:latest",\n}\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Rebuild and reopen the workspace in the dev container via the command palette and the ",(0,l.kt)("inlineCode",{parentName:"p"},"Remote-Containers: Rebuild and Reopen")," in Container command.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When you are satisfied with your changes, you can optionally publish your container image to your own registry to speed up rebuilding the container when you only want to make changes to the ",(0,l.kt)("inlineCode",{parentName:"p"},"devcontainer.json")," configuration in the future. For a docker image named ",(0,l.kt)("inlineCode",{parentName:"p"},"docker.io/xxxx/kubeblocks-dev"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make build-dev-image DEV_CONTAINER_IMAGE_NAME=docker.io/xxxx/kubeblocks-dev\n")))),(0,l.kt)("h5",{id:"connect-existing-kubernetes-cluster"},"Connect existing Kubernetes cluster"),(0,l.kt)("p",null,"If you want to reuse an existing Kubernetes config, such as your ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},(0,l.kt)("inlineCode",{parentName:"a"},"EKS"))," cluster or local ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},(0,l.kt)("inlineCode",{parentName:"a"},"Minikube"))," cluster, you can configure the ",(0,l.kt)("inlineCode",{parentName:"p"},"devcontainer.json")," copy those settings into the dev container. This requires:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enabling the ",(0,l.kt)("inlineCode",{parentName:"p"},"SYNC_LOCALHOST_KUBECONFIG")," environment variable")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bind mounting the locations of your Kubernetes and Minikube config paths to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/kubeblocks/.kube-localhost")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/kubeblocks/.minikube-localhost")," respectively."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'- You don\'t need to bind the Minikube path if you\'re not using it.\n```json\n"containerEnv": {\n    // Uncomment to overwrite devcontainer .kube/config and .minikube certs with the localhost versions\n    // each time the devcontainer starts, if the respective .kube-localhost/config and .minikube-localhost\n    // folders respectively are bind mounted to the devcontainer.\n    "SYNC_LOCALHOST_KUBECONFIG": "true",\n},\n\n...\n\n"mounts": [\n// Uncomment to clone local .kube/config into devcontainer\n"type=bind,source=${env:HOME}${env:USERPROFILE}/.kube,target=/home/kubeblocks/.kube-localhost",\n\n// Uncomment to additionally clone minikube certs into devcontainer for use with .kube/config\n"type=bind,source=${env:HOME}${env:USERPROFILE}/.minikube,target=/home/kubeblocks/.minikube-localhost"\n\n]\n```\n')),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u26a0 The ",(0,l.kt)("inlineCode",{parentName:"p"},"SYNC_LOCALHOST_KUBECONFIG")," option only supports providing the dev container with the snapshot configuration from the host and does not support updating the host Kubernetes configuration from the dev container directly.")))),(0,l.kt)("h3",{id:"setup-a-kubernetes-development-environment"},"Setup a Kubernetes development environment"),(0,l.kt)("p",null,"To run ",(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks"),", you needs ",(0,l.kt)("inlineCode",{parentName:"p"},"Docker")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"Kubernetes")," 1.24.1+ cluster for development."),(0,l.kt)("h4",{id:"docker-environment"},"Docker environment"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"Docker"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"For Linux, you'll have to configure docker to run without ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," for the KubeBlocks build scripts to work. Follow the instructions to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"manage Docker as a non-root user"),"."))),(0,l.kt)("li",{parentName:"ol"},"Create your ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/signup"},"Docker Hub account")," if you don't already have one.")),(0,l.kt)("h4",{id:"kubernetes-environment"},"Kubernetes environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes cluster\nYou can use cloud Kubernetes service, such as ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks/"},(0,l.kt)("inlineCode",{parentName:"a"},"EKS"))," ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},(0,l.kt)("inlineCode",{parentName:"a"},"GKE"))," ",(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/kubernetes-service/"},(0,l.kt)("inlineCode",{parentName:"a"},"AKS")),", or use local Kubernetes cluster, such as ",(0,l.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},(0,l.kt)("inlineCode",{parentName:"a"},"Minikube"))," ",(0,l.kt)("a",{parentName:"li",href:"https://k3d.io/stable/"},(0,l.kt)("inlineCode",{parentName:"a"},"k3d")),"."),(0,l.kt)("li",{parentName:"ul"},"For development purposes, you will also want to follow the optional steps to install ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm 3.x"),".")),(0,l.kt)("h2",{id:"basics"},"Basics"),(0,l.kt)("h3",{id:"kubebuilder"},"Kubebuilder"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," is using kubebuilder as the operator framework, before your start to code, suggest to read ",(0,l.kt)("a",{parentName:"p",href:"https://book.kubebuilder.io/"},"kubebuilder books"),"."),(0,l.kt)("h3",{id:"makefile"},"Makefile"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," includes a ",(0,l.kt)("a",{parentName:"p",href:"../Makefile"},"Makefile")," in the root of the repo. This serves as a high-level interface for common commands. Running ",(0,l.kt)("inlineCode",{parentName:"p"},"make help")," will produce a list of make targets with descriptions. These targets will be referenced throughout this document."),(0,l.kt)("h3",{id:"todo-kbcli"},"[TODO]"," kbcli"),(0,l.kt)("h3",{id:"code-style"},"Code style"),(0,l.kt)("p",null,"First, read the Go (Golang) coding guidelines again, looking for any style violations. It's easier to remember a style rule once you've violated it."),(0,l.kt)("p",null,"Run our suite of linters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make lint\n")),(0,l.kt)("p",null,"This is not a fast command. On my machine, at the time of writing, it takes about a full minute to run. You can instead run"),(0,l.kt)("h2",{id:"test"},"Test"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KubeBlocks")," uses make for a variety of test actions."),(0,l.kt)("h3",{id:"envtest"},"Envtest"),(0,l.kt)("p",null,"Setting up a local control plane and test all packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,l.kt)("p",null,"Test specific packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Directory `controllers` contains many packages, it will build and run each package individually.\nmake test TEST_PACKAGES=./controllers/...\n\n# Test single package\nmake test-delve TEST_PACKAGES=./controllers/apps/...\n")),(0,l.kt)("h3",{id:"use-existing-kubernetes-cluster"},"Use existing Kubernetes cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make test-current-ctx\n")),(0,l.kt)("p",null,"Instead of setting up a local control plane, this command will point to the control plane of an existing cluster by ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,l.kt)("h3",{id:"check-test-code-coverage"},"Check test code coverage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make test cover-report\n")),(0,l.kt)("p",null,"This command will test all packages and generate a coverage report file ",(0,l.kt)("inlineCode",{parentName:"p"},"cover.html"),", and open by your default browser automatically."),(0,l.kt)("h2",{id:"debug"},"Debug"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-delve/delve"},"Delve")," for Go debugging."),(0,l.kt)("h3",{id:"install-delve"},"Install Delve"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Follow the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-delve/delve/tree/master/Documentation/installation"},"General install instructions"),".",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," containers ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," which will allow you to run Go binary executables without specifying the absolute path."))),(0,l.kt)("li",{parentName:"ul"},"If you are using MacOS, you can install vid HomeBrew with the following command :",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install delve\n"))),(0,l.kt)("li",{parentName:"ul"},"Check your installation",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"dlv version\n")))),(0,l.kt)("h3",{id:"start-a-delve-debug-server"},"Start a delve debug server"),(0,l.kt)("p",null,"You can start a delve debug server for running and debugging specific package or ",(0,l.kt)("a",{parentName:"p",href:"https://book.kubebuilder.io/reference/envtest.html"},"envtest"),"."),(0,l.kt)("h4",{id:"debug-specific-package"},"Debug specific package"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make run-delve GO_PACKAGE=./cmd/manager/main.go\n")),(0,l.kt)("h4",{id:"pass-arguments"},"Pass arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," make run-delve GO_PACKAGE=./cmd/cli/main.go ARGUMENTS='cluster create test-cluster --termination-policy=Halt'\n")),(0,l.kt)("h4",{id:"debug-envtest"},"Debug envtest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make test-delve TEST_PACKAGES=./controllers/apps/...\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unlike ",(0,l.kt)("inlineCode",{parentName:"p"},"go test")," supports multiple packages, ",(0,l.kt)("inlineCode",{parentName:"p"},"Delve")," needs a single executable to work, it only support single package.")),(0,l.kt)("h4",{id:"change-debug-server-port"},"Change debug server port"),(0,l.kt)("p",null,"You can change debug server port for ",(0,l.kt)("inlineCode",{parentName:"p"},"make run-delve")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"make test-delve"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make run-delve DEBUG_PORT=2347\n")),(0,l.kt)("p",null,"After bug server started, it will show the listen address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"API server listening at: [::]:2347\n")),(0,l.kt)("h3",{id:"connect-the-debug-server-with-a-frontend-client"},"Connect the debug server with a frontend client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Delve")," support lots of code editors (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-delve/delve/blob/master/Documentation/EditorIntegration.md"},"editor plugins for Delve"),"), you can choose your favorite editor to connect with the listen address for debugging. "),(0,l.kt)("p",null,"This section introduces how to start debugging with the Delve CLI, Goland and VSCode. Please refer to the Delve or editors documentation for more details."),(0,l.kt)("h4",{id:"delve-cli"},"Delve CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ dlv connect 127.0.0.1:2345\nType 'help' for list of commands.\n(dlv) break cluster_controller.go:303\n(dlv) continue\n(dlv) next\n(dlv) ......\n")),(0,l.kt)("h4",{id:"jetbrains-goland--intellij-idea-with-go-plugin"},"JetBrains GoLand / IntelliJ IDEA with go plugin"),(0,l.kt)("p",null,'Click Run \u2014 Edit configurations, add new debug configuration, select "Go Remote":\n',(0,l.kt)("img",{alt:"goland add go remote",src:n(54469).Z,width:"482",height:"854"})),(0,l.kt)("p",null,"Add debug server listen address to ",(0,l.kt)("inlineCode",{parentName:"p"},"Host")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Port"),"\n",(0,l.kt)("img",{alt:"goland configure go remote",src:n(54250).Z,width:"2080",height:"1352"})),(0,l.kt)("p",null,"And then set breakpoints, and run debug.\n",(0,l.kt)("img",{alt:"goland debug result",src:n(1019).Z,width:"3864",height:"1310"})),(0,l.kt)("h4",{id:"vscode"},"VSCode"),(0,l.kt)("p",null,"Create/modify .vscode/launch.json file for connecting debug server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "debug envtest",\n            "type": "go",\n            "request": "attach",\n            "mode": "remote",\n            "remotePath": "",\n            "port": 2346,\n            "host": "127.0.0.1",\n            "showLog": true,\n            "trace": "log",\n            "logOutput": "rpc"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"Set breakpoints and run ",(0,l.kt)("inlineCode",{parentName:"p"},"Start Debugging"),".\n",(0,l.kt)("img",{alt:"vscode debug result",src:n(94401).Z,width:"3320",height:"2830"})))}c.isMDXComponent=!0},54469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/goland_add_go_remote-fb565364e903bdb6ebec34c95e5057a7.png"},54250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/goland_configure_go_remote-b0aeaefb36c52766420c3ff4d567a6bf.png"},1019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/goland_debug_result-b8c8d11ca479b89af70a676a1f12587d.png"},79288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reopen_dev_container_command-ea277fb8ebfa9e0e763c08b867f401a2.png"},86754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reopen_dev_container_notification-01eb858a4f25b777701265aa3c3ee27e.png"},94401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode_debug_result-828d25bbda87c105d775863205b7fae3.png"}}]);