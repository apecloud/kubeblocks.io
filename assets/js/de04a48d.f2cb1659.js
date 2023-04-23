"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[3521,92],{98746:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7452),s=n(52263),r=n(67294);if(n(10412).Z.canUseDOM){const e=document.getElementsByTagName("meta")?.version?.getAttribute("content");e?(a={swUrl:`/sw.js?t=${e}`,onSuccess:()=>{},onUpdate:()=>{}},"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register(a.swUrl,{scope:"/"}).then((e=>{e.onupdatefound=()=>{const t=e.installing;null!==t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e))),"redundant"===t.state&&console.error("The installing service worker became redundant.")})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}))):"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}var a;const c=e=>{let{children:t}=e;const{siteConfig:n}=(0,s.Z)();return r.createElement(l.Z,{title:`${n.title}`,description:"Build your database like playing blocks."},t)}},70410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var l=n(67294),s=n(98746),r=n(3776);const a=()=>l.createElement(s.Z,null,l.createElement("div",null,l.createElement(r.default,null)))},3776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),s=n(5459),r=n.n(s),a=n(94184),c=n.n(a);const i=()=>{const[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)(0),[a,i]=(0,l.useState)(0),[m,o]=(0,l.useState)({visible_1:!1,visible_2:!1,visible_3:!1,visible_4:!1,visible_5:!1,visible_6:!1,visible_7:!1,visible_8:!1,visible_9:!1,visible_10:!1,visible_11:!1,visible_12:!1,visible_13:!1,visible_14:!1,visible_15:!1,visible_16:!1}),u=l.createElement(l.Fragment,null,l.createElement("span",{className:"green-text"},"kubeblocks"),l.createElement("span",{className:"blue-text"}," ~ %")),E=l.createElement(l.Fragment,null,l.createElement("span",{className:"green-text"},"mysql>")),d=l.createElement("span",{className:"pink-text"},"Please type the name again(separate with white space when more than one):"),p=["kbcli cluster create mysql-cluster --cluster-definition=apecloud-mysql --set replicas=3","kbcli cluster list","kbcli cluster describe mysql-cluster","kbcli cluster connect mysql-cluster","","kbcli cluster vscale mysql-cluster --components mysql --cpu 2000m --memory 2Gi","kbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default","kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=","kbcli cluster configure mysql-cluster --set max_connections=2000","kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=","kbcli cluster backup mysql-cluster","kbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default","kbcli cluster restore new-cluster --backup backup-default-mysql-cluster-20230423155856","kbcli cluster list","kbcli cluster connect new-cluster"],y=l.createElement(r(),{options:{cursor:"",delay:50},onInit:e=>{e.typeString(p[a-1]).pauseFor(200).callFunction((()=>{setTimeout((()=>{o({...m,[`visible_${a}`]:!0}),t(!1);let e=document.getElementById("writer");e.scrollHeight>e.offsetHeight&&(e.scrollTop=e.scrollHeight)}),500),s(n+1)})).start()}});return l.createElement("div",{id:"typeWriter",className:"box"},l.createElement("h2",{className:"centered-title"},"Try KubeBlocks in the browser"),l.createElement("h4",{className:"centered-des"},"Try MySQL on KubeBlocks"),l.createElement("div",{className:"writer",id:"writer"},l.createElement("pre",{className:"new_pre mobile"},"\n=============================================\n __    __ _______   ______  __       ______ \n|  \\  /  \\       \\ /      \\|  \\     |      \\\n| \u2593\u2593 /  \u2593\u2593 \u2593\u2593\u2593\u2593\u2593\u2593\u2593\\  \u2593\u2593\u2593\u2593\u2593\u2593\\ \u2593\u2593      \\\u2593\u2593\u2593\u2593\u2593\u2593\n| \u2593\u2593/  \u2593\u2593| \u2593\u2593__/ \u2593\u2593 \u2593\u2593   \\\u2593\u2593 \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593  \u2593\u2593 | \u2593\u2593    \u2593\u2593 \u2593\u2593     | \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593\u2593\u2593\u2593\\ | \u2593\u2593\u2593\u2593\u2593\u2593\u2593\\ \u2593\u2593   __| \u2593\u2593       | \u2593\u2593  \n| \u2593\u2593 \\\u2593\u2593\\| \u2593\u2593__/ \u2593\u2593 \u2593\u2593__/  \\ \u2593\u2593_____ _| \u2593\u2593_ \n| \u2593\u2593  \\\u2593\u2593\\ \u2593\u2593    \u2593\u2593\\\u2593\u2593    \u2593\u2593 \u2593\u2593     \\   \u2593\u2593 \\\n \\\u2593\u2593   \\\u2593\u2593\\\u2593\u2593\u2593\u2593\u2593\u2593\u2593  \\\u2593\u2593\u2593\u2593\u2593\u2593 \\\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\\\u2593\u2593\u2593\u2593\u2593\u2593\n\n=============================================\nA Command Line Interface for KubeBlocks"),u,l.createElement("span",{className:"cli"},a>0&&y),m.visible_1&&l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("span",{className:"yellow-text"},"Warning:")," cluster version is not specified, use the recently created ClusterVersion ac-mysql-8.0.30",l.createElement("br",null)),l.createElement("div",null,"Cluster mysql-cluster created"),u),l.createElement("span",{className:"cli"},a>1&&y),m.visible_2&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME              NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS    CREATED-TIME\nmysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Creating   Apr 23,2023 15:50 UTC+0800\n              "),u),l.createElement("span",{className:"cli"},a>2&&y),m.visible_3&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},'Name: mysql-cluster\t Created Time: Apr 23,2023 15:50 UTC+0800\nNAMESPACE   CLUSTER-DEFINITION   VERSION           STATUS    TERMINATION-POLICY   \ndefault     apecloud-mysql       ac-mysql-8.0.30   Running   Delete               \n\nEndpoints:\nCOMPONENT   MODE        INTERNAL                                             EXTERNAL   \nmysql       ReadWrite   mysql-cluster-mysql.default.svc.cluster.local:3306   <none>     \n\nTopology:\nCOMPONENT   INSTANCE                ROLE       STATUS    AZ                NODE                                                             CREATED-TIME                 \nmysql       mysql-cluster-mysql-0   leader     Running   cn-northwest-1c   ip-172-31-39-93.cn-northwest-1.compute.internal/172.31.39.93     Apr 23,2023 15:50 UTC+0800   \nmysql       mysql-cluster-mysql-1   follower   Running   cn-northwest-1b   ip-172-31-28-145.cn-northwest-1.compute.internal/172.31.28.145   Apr 23,2023 15:50 UTC+0800   \nmysql       mysql-cluster-mysql-2   follower   Running   cn-northwest-1a   ip-172-31-7-150.cn-northwest-1.compute.internal/172.31.7.150     Apr 23,2023 15:50 UTC+0800   \n\nResources Allocation:\nCOMPONENT   DEDICATED   CPU(REQUEST/LIMIT)   MEMORY(REQUEST/LIMIT)   STORAGE-SIZE   STORAGE-CLASS   \nmysql       false       1 / 1                1Gi / 1Gi               data:20Gi      ebs-sc          \n\nImages:\nCOMPONENT   TYPE    IMAGE                                                                                                  \nmysql       mysql   registry.cn-hangzhou.aliyuncs.com/apecloud/apecloud-mysql-server:8.0.30-5.alpha5.20230319.g28f261a.5   \n\nData Protection:\nAUTO-BACKUP   BACKUP-SCHEDULE   TYPE       BACKUP-TTL   LAST-SCHEDULE   RECOVERABLE-TIME   \nDisabled      0 18 * * 0        snapshot   7d           <none>          <none>             \n\nEvents(last 5 warnings, see more:kbcli cluster list-events -n default mysql-cluster):\nTIME                         TYPE      REASON        OBJECT                           MESSAGE                                                                                                               \nApr 23,2023 15:50 UTC+0800   Warning   FailedMount   Instance/mysql-cluster-mysql-2   MountVolume.SetUp failed for volume "scripts" : failed to sync configmap cache: timed out waiting for the condition'),u),l.createElement("span",{className:"cli"},a>3&&y),m.visible_4&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Connect to instance mysql-cluster-mysql-0: out of mysql-cluster-mysql-0(leader), mysql-cluster-mysql-1(follower), mysql-cluster-mysql-2(follower)\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or g.\nYour MySQL connection id is 18057\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or 'h' for help. Type 'c' to clear the current input statement.\n"),E),l.createElement("span",{className:"cli"},a>4&&l.createElement(l.Fragment,null," USE mydb")),m.visible_5&&l.createElement(l.Fragment,null,l.createElement("div",null,"Database changed"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," CREATE TABLE students ("),l.createElement("pre",{className:"new_pre"},"    ->     student_id INT PRIMARY KEY,\n    ->     name VARCHAR(50) NOT NULL,\n    ->     gender VARCHAR(10) NOT NULL,\n    ->     birthday DATE NOT NULL,\n    ->     major VARCHAR(50) NOT NULL,\n    ->     grade INT NOT NULL\n    -> );\nQuery OK, 0 rows affected (0.06 sec)\n            "),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," INSERT INTO students (student_id, name, gender, birthday, major, grade)"),l.createElement("pre",{className:"new_pre"},"    -> VALUES (1, 'John Smith', 'Male', '2001-01-01', 'Computer Science and Technology', 2020),\n    -> (2, 'Emily Brown', 'Female', '2002-02-15', 'Software Engineering', 2021),\n    -> (3, 'Michael Johnson', 'Male', '2003-03-26', 'Information Security', 2022);\nQuery OK, 3 rows affected (0.08 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n            "),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," SELECT * FROM students;"),l.createElement("pre",{className:"new_pre"},"+------------+-----------------+--------+------------+---------------------------------+-------+\n| student_id | name            | gender | birthday   | major                           | grade |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |\n|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |\n|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n3 rows in set (0.00 sec)"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," exit"),l.createElement("div",null,"Bye"),u),l.createElement("span",{className:"cli"},a>5&&y),m.visible_6&&l.createElement(l.Fragment,null,l.createElement("div",null,d," mysql-cluster"),l.createElement("pre",{className:"new_pre"},"OpsRequest mysql-cluster-verticalscaling-w9m7h created successfully, you can view the progress:\n\tkbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default"),u),l.createElement("span",{className:"cli"},a>6&&y),m.visible_7&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Spec:\n  Name: mysql-cluster-verticalscaling-w9m7h\tNameSpace: default\tCluster: mysql-cluster\tType: VerticalScaling\t\n\nCommand:\n  kbcli cluster vscale mysql-cluster --components=mysql --cpu=2 --memory=2Gi --namespace=default\n\nLast Configuration:\nCOMPONENT   REQUEST-CPU   REQUEST-MEMORY   LIMIT-CPU   LIMIT-MEMORY   \nmysql       100m          512Mi            100m        512Mi          \n\nStatus:\n  Start Time:         Apr 23,2023 15:55 UTC+0800\n  Duration:           115s\n  Status:             Running\n  Progress:           0/3\n                      OBJECT-KEY                  STATUS       DURATION   MESSAGE                                                                  \n                      Pod/mysql-cluster-mysql-1   Processing   115s       Start to vertical scale: Pod/mysql-cluster-mysql-1 in Component: mysql   \n                      Pod/mysql-cluster-mysql-0   Pending      115s                                                                                \n                      Pod/mysql-cluster-mysql-2   Pending      115s                                                                                \n\nConditions:\nLAST-TRANSITION-TIME         TYPE              REASON                         STATUS   MESSAGE                                                                                          \nApr 23,2023 15:55 UTC+0800   Progressing       OpsRequestProgressingStarted   True     Start to process the OpsRequest: mysql-cluster-verticalscaling-w9m7h in Cluster: mysql-cluster   \nApr 23,2023 15:55 UTC+0800   Validated         ValidateOpsRequestPassed       True     OpsRequest: mysql-cluster-verticalscaling-w9m7h is validated                                     \nApr 23,2023 15:55 UTC+0800   VerticalScaling   VerticalScalingStarted         True     Start to vertical scale resources in Cluster: mysql-cluster                                      \n\nWarning Events: <none>"),u),l.createElement("span",{className:"cli"},a>7&&y),m.visible_8&&l.createElement(l.Fragment,null,l.createElement("div",null,"max_connections=83"),u),l.createElement("span",{className:"cli"},a>8&&y),m.visible_9&&l.createElement(l.Fragment,null,l.createElement("div",null,"Will updated configure file meta:"),l.createElement("div",null,"ConfigSpec: ",l.createElement("span",{className:"yellow-text"},"mysql-consensusset-config\xa0\xa0"),"ConfigFile: ",l.createElement("span",{className:"yellow-text"},"my.cnf\xa0\xa0"),"ComponentName:  ClusterName: mysql-cluster"),l.createElement("pre",{className:"new_pre"},"OpsRequest mysql-cluster-reconfiguring-6xrkm created successfully, you can view the progress:\n\tkbcli cluster describe-ops mysql-cluster-reconfiguring-6xrkm -n default"),u),l.createElement("span",{className:"cli"},a>9&&y),m.visible_10&&l.createElement(l.Fragment,null,l.createElement("div",null,"max_connections=2000"),u),l.createElement("span",{className:"cli"},a>10&&y),m.visible_11&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Backup backup-default-mysql-cluster-20230423155856 created successfully, you can view the progress:\n\tkbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default"),u),l.createElement("span",{className:"cli"},a>11&&y),m.visible_12&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME                                          CLUSTER         TYPE       STATUS      TOTAL-SIZE   DURATION   CREATE-TIME                  COMPLETION-TIME              \nbackup-default-mysql-cluster-20230423155856   mysql-cluster   snapshot   Completed   1Gi          24s        Apr 23,2023 15:58 UTC+0800   Apr 23,2023 15:58 UTC+0800"),u),l.createElement("span",{className:"cli"},a>12&&y),m.visible_13&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Cluster new-cluster created"),u),l.createElement("span",{className:"cli"},a>13&&y),m.visible_14&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"NAME                         NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS     CREATED-TIME                 \nmysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Running    Apr 23,2023 15:50 UTC+0800   \nnew-cluster       default     apecloud-mysql       ac-mysql-8.0.30     Delete               Creating   Apr 23,2023 16:05 UTC+0800    \n"),u),l.createElement("span",{className:"cli"},a>14&&y),m.visible_15&&l.createElement(l.Fragment,null,l.createElement("pre",{className:"new_pre"},"Connect to instance new-cluster-mysql-1: out of new-cluster-mysql-1(leader), new-cluster-mysql-0(follower), new-cluster-mysql-2(follower)\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or g.\nYour MySQL connection id is 9961\nServer version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or 'h' for help. Type 'c' to clear the current input statement."),E),l.createElement("span",{className:"cli"},a>15&&l.createElement(l.Fragment,null,"USE mydb")),m.visible_16&&l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," SELECT * FROM students;"),l.createElement("pre",{className:"new_pre"},"+------------+-----------------+--------+------------+---------------------------------+-------+\n| student_id | name            | gender | birthday   | major                           | grade |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |\n|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |\n|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |\n+------------+-----------------+--------+------------+---------------------------------+-------+\n3 rows in set (0.00 sec)"),l.createElement("div",null,l.createElement("span",{className:"green-text"},"mysql>")," exit"),l.createElement("div",null,"Bye"),u)),l.createElement("button",{className:c()({btn:!0,"next-btn":!0,is_hidden:1==m.visible_16}),disabled:e,onClick:()=>{e||(t(!0),i(a+1),a+1!=5&&a+1!=16||(o({...m,[`visible_${a+1}`]:!0}),setTimeout((()=>{t(!1);let e=document.getElementById("writer");e.scrollHeight>e.offsetHeight&&(e.scrollTop=e.scrollHeight)}),500),s(n+1)))}},["Create cluster","View cluster list","View cluster details","Connect Cluster","Execute SQL","Cluster variation ","Describe ops","View cluster configure","Edit cluster configure","View the current cluster configure","Cluster backup","List backups","Recovery by backup","View the cluster list and observe the status","Wait status is running & connect new-cluster","Execute SQL"][n]))}}}]);