"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6611],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const o={title:"Try out KubeBlocks in 5 minutes on Local Host",description:"A quick tour of KubeBlocks in 5 minutes on Local host on Playground",sidebar_position:1,sidebar_label:"Try out KubeBlocks on local host"},r="Try out KubeBlocks in 5 minutes on Local Host",i={unversionedId:"user_docs/quick-start/try-kubeblocks-in-5m-on-local-host",id:"user_docs/quick-start/try-kubeblocks-in-5m-on-local-host",title:"Try out KubeBlocks in 5 minutes on Local Host",description:"A quick tour of KubeBlocks in 5 minutes on Local host on Playground",source:"@site/docs/user_docs/quick-start/try-kubeblocks-in-5m-on-local-host.md",sourceDirName:"user_docs/quick-start",slug:"/user_docs/quick-start/try-kubeblocks-in-5m-on-local-host",permalink:"/docs/preview/user_docs/quick-start/try-kubeblocks-in-5m-on-local-host",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/quick-start/try-kubeblocks-in-5m-on-local-host.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Try out KubeBlocks in 5 minutes on Local Host",description:"A quick tour of KubeBlocks in 5 minutes on Local host on Playground",sidebar_position:1,sidebar_label:"Try out KubeBlocks on local host"},sidebar:"docs",previous:{title:"Try out KubeBlocks on cloud",permalink:"/docs/preview/user_docs/quick-start/try-kubeblocks-functions-on-cloud"},next:{title:"kbcli and KubeBlocks",permalink:"/docs/preview/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"}},s={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Initialize Playground",id:"initialize-playground",level:2},{value:"Try KubeBlocks with Playground",id:"try-kubeblocks-with-playground",level:2},{value:"View an ApeCloud MySQL cluster",id:"view-an-apecloud-mysql-cluster",level:3},{value:"Access an ApeCloud MySQL cluster",id:"access-an-apecloud-mysql-cluster",level:3},{value:"Observability",id:"observability",level:3},{value:"High availability of ApeCloud MySQL",id:"high-availability-of-apecloud-mysql",level:3},{value:"Delete ApeCloud MySQL Standalone",id:"delete-apecloud-mysql-standalone",level:4},{value:"Create an ApeCloud MySQL Paxos group",id:"create-an-apecloud-mysql-paxos-group",level:4},{value:"Simulate leader pod failure recovery",id:"simulate-leader-pod-failure-recovery",level:4},{value:"Demonstrate availability failure by NON-STOP NYAN CAT (for fun)",id:"demonstrate-availability-failure-by-non-stop-nyan-cat-for-fun",level:4},{value:"Destroy Playground",id:"destroy-playground",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"try-out-kubeblocks-in-5-minutes-on-local-host"},"Try out KubeBlocks in 5 minutes on Local Host"),(0,l.kt)("p",null,"This guide walks you through the quickest way to get started with KubeBlocks, demonstrating how to easily create a KubeBlocks demo environment (Playground) with simply one ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," command.\nWith Playground, you can try out KubeBlocks both on your local host (macOS)."),(0,l.kt)("h2",{id:"before-you-start"},"Before you start"),(0,l.kt)("p",null,"Meet the following requirements for smooth operation of Playground and other functions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Minimum system requirements:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CPU: 4 cores")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RAM: 4 GB"),(0,l.kt)("p",{parentName:"li"},"To check CPU, use ",(0,l.kt)("inlineCode",{parentName:"p"},"sysctl hw.physicalcpu")," command;"),(0,l.kt)("p",{parentName:"li"},"To check memory, use ",(0,l.kt)("inlineCode",{parentName:"p"},"top -d")," command.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make sure the following tools are installed on your local host."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Docker: v20.10.5 (runc \u2265 v1.0.0-rc93) or above. For installation details, refer to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Get Docker"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl"),": It is used to interact with Kubernetes clusters. For installation details, refer to ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Install kubectl"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),": It is the command line tool of KubeBlocks and is used for the interaction between Playground and KubeBlocks. Follow the steps below to install ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),".",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli"),".",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://www.kubeblocks.io/installer/install_cli.sh | bash\n"))),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli version")," to check the ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli")," version and make sure ",(0,l.kt)("inlineCode",{parentName:"li"},"kbcli")," is installed successfully.")))))),(0,l.kt)("h2",{id:"initialize-playground"},"Initialize Playground"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Playground."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli playground init\n")),(0,l.kt)("p",{parentName:"li"},"This command:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Creates a Kubernetes cluster in the container with ",(0,l.kt)("a",{parentName:"li",href:"https://k3d.io/v5.4.6/"},"K3d"),"."),(0,l.kt)("li",{parentName:"ol"},"Deploys KubeBlocks in this Kubernetes cluster."),(0,l.kt)("li",{parentName:"ol"},"Creates an ApeCloud MySQL Standalone by KubeBlocks."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the created cluster and when the status is ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),", this cluster is created successfully. "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Result:")),(0,l.kt)("p",{parentName:"li"},"You just created a cluster named ",(0,l.kt)("inlineCode",{parentName:"p"},"mycluster")," in the default namespace."),(0,l.kt)("p",{parentName:"li"},"You can find the Playground user guide under the installation success tip. View this guide again by running ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli playground init -h"),"."))),(0,l.kt)("h2",{id:"try-kubeblocks-with-playground"},"Try KubeBlocks with Playground"),(0,l.kt)("p",null,"You can explore KubeBlocks, by ",(0,l.kt)("a",{parentName:"p",href:"#view-an-apecloud-mysql-cluster"},"Viewing an ApeCloud MySQL cluster"),", ",(0,l.kt)("a",{parentName:"p",href:"#access-an-apecloud-mysql-cluster"},"Accessing an ApeCloud MySQL cluster"),", ",(0,l.kt)("a",{parentName:"p",href:"#observability"},"Observability"),", and ",(0,l.kt)("a",{parentName:"p",href:"#high-availability-of-apecloud-mysql"},"High availability"),". Refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/preview/user_docs/introduction/"},"Overview")," to explore detailed KubeBlocks features and you can try all the features of KubeBlocks in a standard Kubernetes cluster."),(0,l.kt)("p",null,"KubeBlocks supports the complete life cycle management of a database cluster. Go through the following instructions to try basic features of KubeBlocks. "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The local host does not support volume expansion, backup, and restore functions.")),(0,l.kt)("h3",{id:"view-an-apecloud-mysql-cluster"},"View an ApeCloud MySQL cluster"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the database cluster list."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the details of a specified database cluster and get information like ",(0,l.kt)("inlineCode",{parentName:"p"},"STATUS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Endpoints"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Topology"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Images"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Events"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe mycluster\n")))),(0,l.kt)("h3",{id:"access-an-apecloud-mysql-cluster"},"Access an ApeCloud MySQL cluster"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 1.")," Connect database inside Kubernetes cluster."),(0,l.kt)("p",null,"If a database cluster has been created and its status is ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),", run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect")," to access a specified database cluster. For example, "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mycluster\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Option 2.")," Connect database outside Kubernetes cluster."),(0,l.kt)("p",null,"Get the MySQL client connection example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect --show-example --client=cli mycluster\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/mycluster-mysql 3306:3306\n>\nForwarding from 127.0.0.1:3306 -> 3306\nForwarding from [::1]:3306 -> 3306\n\n\nmysql -h 127.0.0.1 -P 3306 -u root -paiImelyt\n>\n...\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n>\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mydb               |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n5 rows in set (0.02 sec)\n")),(0,l.kt)("h3",{id:"observability"},"Observability"),(0,l.kt)("p",null,"KubeBlocks supports complete observability capabilities. This section demonstrates the monitoring function of KubeBlocks. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View the monitoring page to observe the service running status."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard open kubeblocks-grafana\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("p",{parentName:"li"},"A monitoring page on Grafana website is loaded automatically after the command is executed. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the Dashboard icon on the left bar and monitoring panels show on the page.\n",(0,l.kt)("img",{alt:"Dashboards",src:a(52319).Z,width:"3022",height:"1602"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"General")," -> ",(0,l.kt)("strong",{parentName:"p"},"MySQL")," to monitor the status of the ApeCloud MySQL cluster deployed by Playground.\n",(0,l.kt)("img",{alt:"MySQL_panel",src:a(91340).Z,width:"1280",height:"643"})))),(0,l.kt)("h3",{id:"high-availability-of-apecloud-mysql"},"High availability of ApeCloud MySQL"),(0,l.kt)("p",null,"ApeCloud MySQL Paxos group delivers high availability with RPO=0 and RTO in less than 30 seconds.\nThis guide shows a simple failure simulation to show you the failure recovery capability of ApeCloud MySQL."),(0,l.kt)("h4",{id:"delete-apecloud-mysql-standalone"},"Delete ApeCloud MySQL Standalone"),(0,l.kt)("p",null,"Delete the ApeCloud MySQL Standalone before trying out high availability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mycluster\n")),(0,l.kt)("h4",{id:"create-an-apecloud-mysql-paxos-group"},"Create an ApeCloud MySQL Paxos group"),(0,l.kt)("p",null,"Playground creates an ApeCloud MySQL standalone by default. You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli")," to create a new Paxos group. The following is an example of creating an ApeCloud MySQL Paxos group with default configurations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create --cluster-definition='apecloud-mysql' --set replicas=3\n")),(0,l.kt)("h4",{id:"simulate-leader-pod-failure-recovery"},"Simulate leader pod failure recovery"),(0,l.kt)("p",null,"In this example, delete the leader pod to simulate a failure."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster describe")," to view the ApeCloud MySQL Paxos group information. View the leader pod name in ",(0,l.kt)("inlineCode",{parentName:"p"},"Topology"),". In this example, the leader pod's name is maple05-mysql-1."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe maple05\n>\nName: maple05         Created Time: Jan 27,2023 17:33 UTC+0800\nNAMESPACE        CLUSTER-DEFINITION        VERSION                STATUS         TERMINATION-POLICY\ndefault          apecloud-mysql            ac-mysql-8.0.30        Running        WipeOut\n\nEndpoints:\nCOMPONENT        MODE             INTERNAL                EXTERNAL\nmysql            ReadWrite        10.43.29.51:3306        <none>\n\nTopology:\nCOMPONENT        INSTANCE               ROLE            STATUS         AZ            NODE                                                 CREATED-TIME\nmysql            maple05-mysql-1        leader          Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\nmysql            maple05-mysql-2        follower        Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\nmysql            maple05-mysql-0        follower        Running        <none>        k3d-kubeblocks-playground-server-0/172.20.0.3        Jan 30,2023 17:33 UTC+0800\n\nResources Allocation:\nCOMPONENT        DEDICATED        CPU(REQUEST/LIMIT)        MEMORY(REQUEST/LIMIT)        STORAGE-SIZE        STORAGE-CLASS\nmysql            false            <none>                    <none>                       <none>              <none>\n\nImages:\nCOMPONENT        TYPE         IMAGE\nmysql            mysql        docker.io/apecloud/wesql-server:8.0.30-5.alpha2.20230105.gd6b8719\n\nEvents(last 5 warnings, see more:kbcli cluster list-events -n default mycluster):\nTIME        TYPE        REASON        OBJECT        MESSAGE\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the leader pod."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl delete pod maple05-mysql-1\n>\npod "maple05-mysql-1" deleted\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect maple05")," to connect to the ApeCloud MySQL Paxos group to test its availability. You can find this group can still be accessed within seconds due to our HA strategy."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect maple05\n>\nConnect to instance maple05-mysql-2: out of maple05-mysql-2(leader), maple05-mysql-1(follower), maple05-mysql-0(follower)\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 33\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision d6b8719\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")))),(0,l.kt)("h4",{id:"demonstrate-availability-failure-by-non-stop-nyan-cat-for-fun"},"Demonstrate availability failure by NON-STOP NYAN CAT (for fun)"),(0,l.kt)("p",null,"The above example uses ",(0,l.kt)("inlineCode",{parentName:"p"},"kbcli cluster connect")," to test availability, in which the changes are not obvious to see.\nNON-STOP NYAN CAT is a demo application to observe how the database cluster exceptions affect actual businesses. Animations and real-time key information display provided by NON-STOP NYAN CAT can directly show the availability influences of database services."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Steps:"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the command below to install the NYAN CAT demo application."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon enable nyancat\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Result:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"addon.extensions.kubeblocks.io/nyancat patched\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the NYAN CAT add-on status and when its status is ",(0,l.kt)("inlineCode",{parentName:"p"},"Enabled"),", this application is ready."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon list | grep nyancat \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the web page."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli dashboard open kubeblocks-nyancat\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the leader pod and view the influences on the ApeCloud MySQL cluster through the NYAN CAT page."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"NYAN CAT",src:a(17947).Z,width:"2408",height:"1490"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uninstall the NYAN CAT demo application after your trial."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon disable nyancat\n")))),(0,l.kt)("h2",{id:"destroy-playground"},"Destroy Playground"),(0,l.kt)("p",null,"Destroying Playground cleans up relevant component services and data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Delete all KubeBlocks database clusters."),(0,l.kt)("li",{parentName:"ul"},"Uninstall KubeBlocks."),(0,l.kt)("li",{parentName:"ul"},"Delete the local Kubernetes clusters created by K3d.")),(0,l.kt)("p",null,"Destroy Playground."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli playground destroy\n")))}d.isMDXComponent=!0},52319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_dashboards-e01f7f57dc86e8e427a6fb8cdf6cbe75.png"},91340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_panel-4e118d80ce040a1e8858d4f4416ffdcb.png"},17947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_nyan_cat-f79c354bfb95d8a05ecf7ee009065248.png"}}]);