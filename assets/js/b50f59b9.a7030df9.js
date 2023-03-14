"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),k=r,d=p["".concat(i,".").concat(k)]||p[k]||m[k]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Create a MySQL cluster on AWS",description:"How to create a MySQL cluster on AWS",sidebar_position:3},o="Create a MySQL cluster on AWS",s={unversionedId:"user_docs/quick-start/create-a-mysql-cluster-on-aws",id:"version-release-0.4/user_docs/quick-start/create-a-mysql-cluster-on-aws",title:"Create a MySQL cluster on AWS",description:"How to create a MySQL cluster on AWS",source:"@site/versioned_docs/version-release-0.4/user_docs/quick-start/create-a-mysql-cluster-on-aws.md",sourceDirName:"user_docs/quick-start",slug:"/user_docs/quick-start/create-a-mysql-cluster-on-aws",permalink:"/docs/release-0.4/user_docs/quick-start/create-a-mysql-cluster-on-aws",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/quick-start/create-a-mysql-cluster-on-aws.md",tags:[],version:"release-0.4",sidebarPosition:3,frontMatter:{title:"Create a MySQL cluster on AWS",description:"How to create a MySQL cluster on AWS",sidebar_position:3},sidebar:"docs",previous:{title:"Run KubeBlocks Playground on AWS EKS",permalink:"/docs/release-0.4/user_docs/quick-start/run-kubeblocks-playground-on-eks"},next:{title:"Create a PostgreSQL cluster on AWS",permalink:"/docs/release-0.4/user_docs/quick-start/create-a-postgresql-cluster-on-aws"}},i={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step 1. Install <code>kbcli</code>",id:"step-1-install-kbcli",level:2},{value:"Step 2. Install KubeBlocks",id:"step-2-install-kubeblocks",level:2},{value:"Step 3. Create a MySQL Paxos group",id:"step-3-create-a-mysql-paxos-group",level:2},{value:"Step 4. Connect to the MySQL cluster",id:"step-4-connect-to-the-mysql-cluster",level:2},{value:"Step 5. Clean up the environment",id:"step-5-clean-up-the-environment",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-mysql-cluster-on-aws"},"Create a MySQL cluster on AWS"),(0,r.kt)("p",null,"This guide introduces how to use KubeBlocks to create an ApeCloud MySQL cluster within 5 minutes in the EKS environment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Caution:"))," "),(0,r.kt)("p",{parentName:"blockquote"},"Running a database cluster on the cloud causes fees. Delete the resources created during the deploying process after operations.")),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"EKS environment is required and it includes at least three nodes. Amazon EKS CSI driver should also be installed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," is required and can connect to the EKS cluster. For installing ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),", refer to ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/"},"Install and Set Up kubectl on macOS")," for details.")),(0,r.kt)("h2",{id:"step-1-install-kbcli"},"Step 1. Install ",(0,r.kt)("inlineCode",{parentName:"h2"},"kbcli")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the command below to install ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli")," can run on macOS and Linux.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kubeblocks.io/installer/install_cli.sh | bash\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," "),(0,r.kt)("p",{parentName:"blockquote"},"Please try again if a time-out exception occurs during installation. It may relate to your network condition."))),(0,r.kt)("li",{parentName:"ol"},"Run the command below to check the version and verify whether ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli")," is installed successfully.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli version\n")))),(0,r.kt)("h2",{id:"step-2-install-kubeblocks"},"Step 2. Install KubeBlocks"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to install KubeBlock."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install\n")),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Result"))),(0,r.kt)("p",{parentName:"li"}," This command installs the latest version in your Kubernetes environment under the default namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"kb-system")," since your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," can connect to your Kubernetes clusters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the YAML files below to apply for EBS resources and enable backup."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apply for EBS resources:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n name: gp3\n annotations:\n storageclass.kubernetes.io/is-default-class: "true"\nallowVolumeExpansion: true\nprovisioner: ebs.csi.aws.com\nvolumeBindingMode: WaitForFirstConsumer\nparameters:\n type: gp3\nEOF\n'))),(0,r.kt)("li",{parentName:"ul"},"Enable backup:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\n name: csi-aws-vsc\n annotations:\n   snapshot.storage.kubernetes.io/is-default-class: "true"\ndriver: ebs.csi.aws.com\ndeletionPolicy: Delete\nEOF\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to verify whether KubeBlocks is installed successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kb-system\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Result"))),(0,r.kt)("p",{parentName:"li"},"When the following pods are ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),", it means KubeBlocks is installed successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                                     READY   STATUS      RESTARTS   AGE\nkb-addon-alertmanager-webhook-adaptor-5549f94599-fsnmc   2/2     Running     0          84s\nkb-addon-grafana-5ddcd7758f-x4t5g                        3/3     Running     0          84s\nkb-addon-prometheus-alertmanager-0                       2/2     Running     0          84s\nkb-addon-prometheus-server-0                             2/2     Running     0          84s\nkubeblocks-846b8878d9-q8g2w                              1/1     Running     0          98s\n")))),(0,r.kt)("h2",{id:"step-3-create-a-mysql-paxos-group"},"Step 3. Create a MySQL Paxos group"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Caution:"))),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If there are not three nodes that exceed the values of memory and CPU, creating a MySQL cluster may fail."),(0,r.kt)("li",{parentName:"ul"},"KubeBlocks applies for a new EBS volume of 10 Gi (the default storage size), which causes extra fees. Delete this EBS volume after your trial."),(0,r.kt)("li",{parentName:"ul"},"You can adjust the replica amount, pod memory, CPU kernel amount of your EKS cluster, and EBS volume size by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--set")," option when creating the cluster."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to create a MySQL cluster. The system assigns a name for this cluster by default. If you want to customize a cluster name, run ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli cluster create <name>"),".\nFor more details on options, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/cluster-management/create-and-connect-a-mysql-cluster#create-a-mysql-cluster"},(0,r.kt)("inlineCode",{parentName:"a"},"kbcli")," cluster create options description"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --cluster-definition=apecloud-mysql\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Result"))),(0,r.kt)("p",{parentName:"li"},"A MySQL standalone with 10 Gi of storage is created. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to view the created cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list\n")))),(0,r.kt)("h2",{id:"step-4-connect-to-the-mysql-cluster"},"Step 4. Connect to the MySQL cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It takes several minutes to create a cluster. Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli cluster list")," to check the cluster status and when the cluster status is ",(0,r.kt)("inlineCode",{parentName:"li"},"Running"),", the cluster has been created. "),(0,r.kt)("li",{parentName:"ol"},"Run the command below to connect to the leader pod of MySQL clsuter. (The leader pod is called leaseholder in other databases.)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect maple05\n")))),(0,r.kt)("p",null,"After connecting to the cluster, you can operate the created MySQL cluster as you do in the MySQL client."),(0,r.kt)("p",null,"If you want to connect to the MySQL cluster using MYSQL client or your stress test tool, follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the command below to get the IP and port of this cluster first. ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe maple05\n"))),(0,r.kt)("li",{parentName:"ol"},"Find the Endpoints information in the result.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Endpoints:\nCOMPONENT   MODE        INTERNAL                                       EXTERNAL\nmysql       ReadWrite   tulip89-mysql.default.svc.cluster.local:3306   <none>\n")))),(0,r.kt)("p",null,"The MySQL cluster provides high availability to ensure RPO=0. When a failure occurs to the MySQL leader pod, other MySQL pods can be elected as the succeeding leader based on the Paxos protocol. The connection address does not change even though the leader pod changes."),(0,r.kt)("h2",{id:"step-5-clean-up-the-environment"},"Step 5. Clean up the environment"),(0,r.kt)("p",null,"Run the commands below if you want to delete the created cluster and uninstall ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli")," and KubeBlocks after your trial."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the PostgreSQL cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete orange24\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uninstall KubeBlocks."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks uninstall\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uninstall ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm /usr/local/bin/kbcli\n")))))}m.isMDXComponent=!0}}]);