"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3237,92],{98746:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7452),a=n(52263),s=n(67294);if(n(10412).Z.canUseDOM){const e=document.getElementsByTagName("meta")?.version?.getAttribute("content");e?(r={swUrl:`/sw.js?t=${e}`,onSuccess:()=>{},onUpdate:()=>{}},"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register(r.swUrl,{scope:"/"}).then((e=>{e.onupdatefound=()=>{const t=e.installing;null!==t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),r&&r.onUpdate&&r.onUpdate(e)):(console.log("Content is cached for offline use."),r&&r.onSuccess&&r.onSuccess(e))),"redundant"===t.state&&console.error("The installing service worker became redundant.")})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}))):"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}var r;const c=e=>{let{children:t,title:n}=e;const{siteConfig:r}=(0,a.Z)();return console.log(r,t,44444),s.createElement(l.Z,{title:n||`${r.tagline}`,description:"Build your database like playing blocks."},t)}},94433:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(67294),a=n(39960),s=n(98746),r=n(27804);const c={bg:"c87ab",git:"ce672",slider:"bd531",text:"e549c",scratchy:"cade1",home:"d2ab3",banner:"a4057",actions:"c0816",actionItem:"c8646",btnSlider:"da609",btnText:"f9e3c",btnScratchy:"b8614",img:"da227",description:"e3921",content:"cfacf",context:"e95a3",introductions:"e2fea",item:"c365b",introduce:"bb055",connect:"c80b9",features:"ef7d7",items:"cd04d"};var i=n(95999),o=n(72679),m=n(3776);const u=[{title:(0,i.I)({id:"homepage.features.feature0.title",message:"Enhanced stateful workloads"}),img:"img/one.webp",alt:"Enhanced stateful workloads",connect:"img/connect1.webp",description:[(0,i.I)({id:"homepage.features.feature0.description0",message:"KubeBlocks extends K8s StatefulSet capability with ReplicationSet and ConsensusSet workloads. They are aware of different roles in a database cluster, and choose the best update strategy with minimal impact on business continuity, monitoring data replication status and automatically fixes errors and lags."})]},{title:(0,i.I)({id:"homepage.features.feature1.title",message:"Rich day 2 operations"}),img:"img/three.webp",alt:"Rich day 2 operations",connect:"img/connect2.webp",description:[(0,i.I)({id:"homepage.features.feature1.description0",message:"KubeBlocks handles the complexity and provides state-of-the-art management experience for MySQL, PostgreSQL, Redis, and MongoDB. It provides on-demand provisioning, scaling, monitoring, backup, and recovery, reducing the risk of database management and the time required to go from development to production."})]},{title:(0,i.I)({id:"homepage.features.feature2.title",message:"Powerful and intuitive CLI"}),img:"img/four.webp",alt:"Powerful and intuitive CLI",connect:void 0,description:[(0,i.I)({id:"homepage.features.feature2.description0",message:"ClickOps is known for being time-consuming and error-prone. KubeBlocks offers kbcli for productivity. You can install KubeBlocks and launch a playground environment on a desktop or cloud with a single command. kbcli simplifies the learning curve of using data infra in Kubernetes."})]}],d=[{icon:"img/icon-03.png"},{icon:"img/icon-04.png"},{icon:"img/icon-05.png"},{icon:"img/icon-06.png"},{icon:"img/icon-07.png"},{icon:"img/icon-08.png"},{icon:"img/icon-09.png"},{icon:"img/icon-10.png"},{icon:"img/icon-11.png"},{icon:"img/icon-12.png"},{icon:"img/icon-13.png"},{icon:"img/icon-14.png"},{icon:"img/icon-15.png"},{icon:"img/icon-16.png"},{icon:"img/icon-17.png"}];function p(){const[e,t]=(0,l.useState)(!0),[n,i]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{const e=()=>{t(document.body.clientWidth>992),i(document.body.clientWidth>880)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),l.createElement(s.Z,null,l.createElement("div",{className:c.bg},l.createElement("a",{href:"https://github.com/apecloud/kubeblocks",target:"_blank",className:c.git},l.createElement("span",{className:c.text},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})),"Star us on GitHub")),l.createElement("div",{className:c.home},l.createElement("div",{className:c.banner},l.createElement(r.Z,{duration:500,type:["left","right"]},l.createElement("div",{className:c.text},l.createElement("h1",{key:"p1"},"The cloud native"),l.createElement("h1",{key:"p2"},"data infrastructure"),l.createElement("p",{key:"p3"},"Install, create, connect, and you have it all."),l.createElement("div",{key:"p7",className:c.actions},l.createElement(a.Z,{className:c.actionItem,to:"/docs/preview/user_docs/quick-start/try-kubeblocks-functions-on-cloud"},l.createElement("span",{className:c.btnText},"View documentation"))))),l.createElement(r.Z,{duration:1e3},l.createElement(o.LazyLoadImage,{key:"img1",className:c.img,src:"img/bg.webp",alt:"Background image of kubeblocks"})))),l.createElement("div",{className:c.description},l.createElement("div",{className:c.content},l.createElement("h1",null,"Why you need KubeBlocks"),n?l.createElement("div",{className:c.context},l.createElement("p",null,"Building data infrastructure on K8s becomes increasingly popular. However, the most prominent obstacles are"),l.createElement("p",null,"the difficulties of integrating with cloud providers, the lack of reliable operators, and the steep learning"),l.createElement("p",null,"curve of K8s. KubeBlocks offers an open-source option that helps application developers and platform"),l.createElement("p",null,"engineers set up feature-rich services for RDBMS, NoSQL, streaming and analytical systems."),l.createElement("p",null,"No need to be a K8s professional, anyone can set up a full-stack, "),l.createElement("p",null,"production-ready data infrastructure in minutes.")):l.createElement("div",{className:c.context},l.createElement("p",null,"Building data infrastructure on K8s becomes increasingly popular. However, the most prominent obstacles are the difficulties of integrating with cloud providers, the lack of reliable operators, and the steep learning curve of K8s. KubeBlocks offers an open-source option that helps application developers and platform engineers set up feature-rich services for RDBMS, NoSQL, streaming and analytical systems. "),l.createElement("p",null,"No need to be a K8s professional, anyone can set up a full-stack, production-ready data infrastructure in minutes.")),l.createElement("div",{className:c.text},"Created by ",l.createElement("span",null,"ApeCloud")))),l.createElement("div",{className:c.introductions},u.map(((t,n)=>{let{title:a,img:s,description:r,connect:i,alt:o}=t;return l.createElement("div",{className:c.item,key:`list_${n}`},l.createElement("div",{className:c.introduce},l.createElement("img",{src:s,alt:o}),l.createElement("div",{className:c.content},l.createElement("h1",null,a),r.map(((e,t)=>l.createElement("p",{key:`des_${t}`},e))))),i&&e?l.createElement("img",{className:c.connect,src:i,alt:"pipeline img"}):null)})))),l.createElement("div",null,l.createElement(m.default,null)),l.createElement("div",{className:c.features},l.createElement("div",{className:"container"},l.createElement("h1",null,"Features"),l.createElement("ul",{className:c.items},d.map(((e,t)=>l.createElement("li",{key:`li_${t}`,className:c.item},l.createElement(o.LazyLoadImage,{src:e.icon}))))))))}},3776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(5459),s=n.n(a),r=n(94184),c=n.n(r);const i=()=>{const[e,t]=(0,l.useState)(!1),[n,a]=(0,l.useState)(0),[r,i]=(0,l.useState)(0),[o,m]=(0,l.useState)({visible_1:!1,visible_2:!1,visible_3:!1,visible_4:!1,visible_5:!1,visible_6:!1,visible_7:!1,visible_8:!1,visible_9:!1,visible_10:!1,visible_11:!1,visible_12:!1,visible_13:!1,visible_14:!1,visible_15:!1,visible_16:!1,visible_17:!1}),u=l.createElement(l.Fragment,null,l.createElement("span",{className:"green-text"},"kubeblocks"),l.createElement("span",{className:"blue-text"}," ~ %")),d=l.createElement(l.Fragment,null,l.createElement("span",{className:"green-text"},"mysql>")),p=l.createElement("span",{className:"pink-text"},"Please type the name again(separate with white space when more than one):"),E=["kbcli cluster create mysql-cluster --cluster-definition=apecloud-mysql --set replicas=3","kbcli cluster list","kbcli cluster describe mysql-cluster","kbcli cluster connect mysql-cluster","","kbcli cluster vscale mysql-cluster --components mysql --cpu 2000m --memory 2Gi","kbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default","kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=","kbcli cluster configure mysql-cluster --set max_connections=2000","kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=","kbcli cluster backup mysql-cluster","kbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default","kbcli cluster restore new-cluster --backup backup-default-mysql-cluster-20230423155856","kbcli cluster list","kbcli cluster connect new-cluster"],g=l.createElement(s(),{options:{cursor:"",delay:50},onInit:e=>{e.typeString(E[r-1]).pauseFor(200).callFunction((()=>{setTimeout((()=>{m({...o,[`visible_${r}`]:!0}),t(!1);let e=document.getElementById("writer");e.scrollHeight>e.offsetHeight&&(e.scrollTop=e.scrollHeight)}),500),a(n+1)})).start()}});return l.createElement("div",{id:"typeWriter",className:"box"},l.createElement("h2",{className:"centered-title"},"Try KubeBlocks in the browser"),l.createElement("div",{className:"writer"},l.createElement("div",{className:"writer-title"},l.createElement("img",{src:"img/icon.png",alt:"icon"})),l.createElement("div",{className:"writer-content",id:"writer"},l.createElement("pre",{className:"new_pre mobile"},"\n=============================================\n __    __ _______   ______  __       ______ \n|  \\  /  \\       \\ /      \\|  \\     |      \\\n| \u2593\u2593 /  \u2593\u2593 \u2593\u2593\u2593\u2593\u2593\u2593\u2593\\  \u2593\u2593\u2593\u2593\u2593\u2593\\ \u2593\u2593      \\\u2593\u2593\u2593\u2593\u2593\u2593\n| \u2593\u2593/  \u2593\u2593| \u2593\u2593__/ \u2593\u2593 \u2593\u2593   \\\u2593\u2593 \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593  \u2593\u2593 | \u2593\u2593    \u2593\u2593 \u2593\u2593     | \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593\u2593\u2593\u2593\\ | \u2593\u2593\u2593\u2593\u2593\u2593\u2593\\ \u2593\u2593   __| \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593 \\\u2593\u2593\\| \u2593\u2593__/ \u2593\u2593 \u2593\u2593__/  \\ \u2593\u2593_____ _| \u2593\u2593_ \n| \u2593\u2593  \\\u2593\u2593\\ \u2593\u2593    \u2593\u2593\\\u2593\u2593    \u2593\u2593 \u2593\u2593     \\   \u2593\u2593 \\\n \\\u2593\u2593   \\\u2593\u2593\\\u2593\u2593\u2593\u2593\u2593\u2593\u2593  \\\u2593\u2593\u2593\u2593\u2593\u2593 \\\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\\\u2593\u2593\u2593\u2593\u2593\u2593\n\n=============================================\nA Command Line Interface for KubeBlocks"),u,l.createElement("span",{className:"cli"},r>0&&g),o.visible_1&&l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("span",{className:"yellow-text"},"Warning:")," cluster version is not specified, use the recently created ClusterVersion ac-mysql-8.0.30",l.createElement("br",null)),l.createElement("div",null,"Cluster mysql-cluster created"),u),l.createElement("span",{className:"cli"},r>1&&g),o.visible_2&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME              NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS    CREATED-TIME\nmysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Creating   Apr 23,2023 15:50 UTC+0800\n              "),u),l.createElement("span",{className:"cli"},r>2&&g),o.visible_3&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},'Name: mysql-cluster\t Created Time: Apr 23,2023 15:50 UTC+0800\nNAMESPACE   CLUSTER-DEFINITION   VERSION           STATUS    TERMINATION-POLICY   \ndefault     apecloud-mysql       ac-mysql-8.0.30   Running   Delete               \n\nEndpoints:\nCOMPONENT   MODE        INTERNAL                                             EXTERNAL   \nmysql       ReadWrite   mysql-cluster-mysql.default.svc.cluster.local:3306   <none>     \n\nTopology:\nCOMPONENT   INSTANCE                ROLE       STATUS    AZ                NODE                                                             CREATED-TIME                 \nmysql       mysql-cluster-mysql-0   leader     Running   cn-northwest-1c   ip-172-31-39-93.cn-northwest-1.compute.internal/172.31.39.93     Apr 23,2023 15:50 UTC+0800   \nmysql       mysql-cluster-mysql-1   follower   Running   cn-northwest-1b   ip-172-31-28-145.cn-northwest-1.compute.internal/172.31.28.145   Apr 23,2023 15:50 UTC+0800   \nmysql       mysql-cluster-mysql-2   follower   Running   cn-northwest-1a   ip-172-31-7-150.cn-northwest-1.compute.internal/172.31.7.150     Apr 23,2023 15:50 UTC+0800   \n\nResources Allocation:\nCOMPONENT   DEDICATED   CPU(REQUEST/LIMIT)   MEMORY(REQUEST/LIMIT)   STORAGE-SIZE   STORAGE-CLASS   \nmysql       false       1 / 1                1Gi / 1Gi               data:20Gi      ebs-sc          \n\nImages:\nCOMPONENT   TYPE    IMAGE                                                                                                  \nmysql       mysql   registry.cn-hangzhou.aliyuncs.com/apecloud/apecloud-mysql-server:8.0.30-5.alpha5.20230319.g28f261a.5   \n\nData Protection:\nAUTO-BACKUP   BACKUP-SCHEDULE   TYPE       BACKUP-TTL   LAST-SCHEDULE   RECOVERABLE-TIME   \nDisabled      0 18 * * 0        snapshot   7d           <none>          <none>             \n\nEvents(last 5 warnings, see more:kbcli cluster list-events -n default mysql-cluster):\nTIME                         TYPE      REASON        OBJECT                           MESSAGE                                                                                                               \nApr 23,2023 15:50 UTC+0800   Warning   FailedMount   Instance/mysql-cluster-mysql-2   MountVolume.SetUp failed for volume "scripts" : failed to sync configmap cache: timed out waiting for the condition'),u),l.createElement("span",{className:"cli"},r>3&&g),o.visible_4&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Connect to instance mysql-cluster-mysql-0: out of mysql-cluster-mysql-0(leader), mysql-cluster-mysql-1(follower), mysql-cluster-mysql-2(follower)\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or g.\nYour MySQL connection id is 18057\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or 'h' for help. Type 'c' to clear the current input statement.\n"),d),l.createElement("span",{className:"cli"},r>4&&l.createElement(l.Fragment,null," USE mydb")),o.visible_5&&l.createElement(l.Fragment,null,l.createElement("div",null,"Database changed"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," CREATE TABLE students ("),l.createElement("pre",{className:"new_pre"},"    ->     student_id INT PRIMARY KEY,\n    ->     name VARCHAR(50) NOT NULL,\n    ->     gender VARCHAR(10) NOT NULL,\n    ->     birthday DATE NOT NULL,\n    ->     major VARCHAR(50) NOT NULL,\n    ->     grade INT NOT NULL\n    -> );\nQuery OK, 0 rows affected (0.06 sec)\n            "),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," INSERT INTO students (student_id, name, gender, birthday, major, grade)"),l.createElement("pre",{className:"new_pre"},"    -> VALUES (1, 'John Smith', 'Male', '2001-01-01', 'Computer Science and Technology', 2020),\n    -> (2, 'Emily Brown', 'Female', '2002-02-15', 'Software Engineering', 2021),\n    -> (3, 'Michael Johnson', 'Male', '2003-03-26', 'Information Security', 2022);\nQuery OK, 3 rows affected (0.08 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n            "),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," SELECT * FROM students;"),l.createElement("pre",{className:"new_pre"},"+------------+-----------------+--------+------------+---------------------------------+-------+\n| student_id | name            | gender | birthday   | major                           | grade |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |\n|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |\n|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n3 rows in set (0.00 sec)"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," exit"),l.createElement("div",null,"Bye"),u),l.createElement("span",{className:"cli"},r>5&&g),o.visible_6&&l.createElement(l.Fragment,null,l.createElement("div",null,p," mysql-cluster"),l.createElement("pre",{className:"new_pre"},"OpsRequest mysql-cluster-verticalscaling-w9m7h created successfully, you can view the progress:\n\tkbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default"),u),l.createElement("span",{className:"cli"},r>6&&g),o.visible_7&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Spec:\n  Name: mysql-cluster-verticalscaling-w9m7h\tNameSpace: default\tCluster: mysql-cluster\tType: VerticalScaling\t\n\nCommand:\n  kbcli cluster vscale mysql-cluster --components=mysql --cpu=2 --memory=2Gi --namespace=default\n\nLast Configuration:\nCOMPONENT   REQUEST-CPU   REQUEST-MEMORY   LIMIT-CPU   LIMIT-MEMORY   \nmysql       100m          512Mi            100m        512Mi          \n\nStatus:\n  Start Time:         Apr 23,2023 15:55 UTC+0800\n  Duration:           115s\n  Status:             Running\n  Progress:           0/3\n                      OBJECT-KEY                  STATUS       DURATION   MESSAGE                                                                  \n                      Pod/mysql-cluster-mysql-1   Processing   115s       Start to vertical scale: Pod/mysql-cluster-mysql-1 in Component: mysql   \n                      Pod/mysql-cluster-mysql-0   Pending      115s                                                                                \n                      Pod/mysql-cluster-mysql-2   Pending      115s                                                                                \n\nConditions:\nLAST-TRANSITION-TIME         TYPE              REASON                         STATUS   MESSAGE                                                                                          \nApr 23,2023 15:55 UTC+0800   Progressing       OpsRequestProgressingStarted   True     Start to process the OpsRequest: mysql-cluster-verticalscaling-w9m7h in Cluster: mysql-cluster   \nApr 23,2023 15:55 UTC+0800   Validated         ValidateOpsRequestPassed       True     OpsRequest: mysql-cluster-verticalscaling-w9m7h is validated                                     \nApr 23,2023 15:55 UTC+0800   VerticalScaling   VerticalScalingStarted         True     Start to vertical scale resources in Cluster: mysql-cluster                                      \n\nWarning Events: <none>"),u),l.createElement("span",{className:"cli"},r>7&&g),o.visible_8&&l.createElement(l.Fragment,null,l.createElement("div",null,"max_connections=83"),u),l.createElement("span",{className:"cli"},r>8&&g),o.visible_9&&l.createElement(l.Fragment,null,l.createElement("div",null,"Will updated configure file meta:"),l.createElement("div",null,"ConfigSpec: ",l.createElement("span",{className:"yellow-text"},"mysql-consensusset-config\xa0\xa0"),"ConfigFile: ",l.createElement("span",{className:"yellow-text"},"my.cnf\xa0\xa0"),"ComponentName:  ClusterName: mysql-cluster"),l.createElement("pre",{className:"new_pre"},"OpsRequest mysql-cluster-reconfiguring-6xrkm created successfully, you can view the progress:\n\tkbcli cluster describe-ops mysql-cluster-reconfiguring-6xrkm -n default"),u),l.createElement("span",{className:"cli"},r>9&&g),o.visible_10&&l.createElement(l.Fragment,null,l.createElement("div",null,"max_connections=2000"),u),l.createElement("span",{className:"cli"},r>10&&g),o.visible_11&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Backup backup-default-mysql-cluster-20230423155856 created successfully, you can view the progress:\n\tkbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default"),u),l.createElement("span",{className:"cli"},r>11&&g),o.visible_12&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME                                          CLUSTER         TYPE       STATUS      TOTAL-SIZE   DURATION   CREATE-TIME                  COMPLETION-TIME              \nbackup-default-mysql-cluster-20230423155856   mysql-cluster   snapshot   Completed   20Gi         24s        Apr 23,2023 15:58 UTC+0800   Apr 23,2023 15:58 UTC+0800"),u),l.createElement("span",{className:"cli"},r>12&&g),o.visible_13&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Cluster new-cluster created"),u),l.createElement("span",{className:"cli"},r>13&&g),o.visible_14&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME                         NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS     CREATED-TIME                 \nmysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Running    Apr 23,2023 15:50 UTC+0800   \nnew-cluster       default     apecloud-mysql       ac-mysql-8.0.30     Delete               Running    Apr 23,2023 16:05 UTC+0800    \n"),u),l.createElement("span",{className:"cli"},r>14&&g),o.visible_15&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Connect to instance new-cluster-mysql-1: out of new-cluster-mysql-1(leader), new-cluster-mysql-0(follower), new-cluster-mysql-2(follower)\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or g.\nYour MySQL connection id is 9961\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or 'h' for help. Type 'c' to clear the current input statement."),d),l.createElement("span",{className:"cli"},r>15&&l.createElement(l.Fragment,null,"USE mydb")),o.visible_16&&l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," SELECT * FROM students;"),l.createElement("pre",{className:"new_pre"},"+------------+-----------------+--------+------------+---------------------------------+-------+\n| student_id | name            | gender | birthday   | major                           | grade |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |\n|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |\n|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n3 rows in set (0.00 sec)"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," exit"),l.createElement("div",null,"Bye"),u))),l.createElement("button",{className:c()({btn:!0,"next-btn":!0}),disabled:e,onClick:()=>{e||(t(!0),i(r+1),r+1!=5&&r+1!=16||(m({...o,[`visible_${r+1}`]:!0}),setTimeout((()=>{t(!1);let e=document.getElementById("writer");e.scrollHeight>e.offsetHeight&&(e.scrollTop=e.scrollHeight)}),500),a(n+1)),r+1==17&&(t(!1),a(0),i(0),m({visible_1:!1,visible_2:!1,visible_3:!1,visible_4:!1,visible_5:!1,visible_6:!1,visible_7:!1,visible_8:!1,visible_9:!1,visible_10:!1,visible_11:!1,visible_12:!1,visible_13:!1,visible_14:!1,visible_15:!1,visible_16:!1,visible_17:!1})))}},["Create a cluster","View the cluster list","View cluster details","Connect the cluster","Insert and select data","Vertically scale the cluster","View the progress","View max connection","Configure this parameter","Validate the configuration","Create a backup","View the backup progress","Restore data from backup","View the cluster list","Connect the restored cluster","Verify restored data","Try again"][n]))}}}]);