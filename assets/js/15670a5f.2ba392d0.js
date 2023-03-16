"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[6910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Configure cluster parameters",description:"Configure cluster parameters",sidebar_position:1},i="Configure cluster parameters",s={unversionedId:"user_docs/kubeblocks-for-mysql/configuration/configuration",id:"version-release-0.4/user_docs/kubeblocks-for-mysql/configuration/configuration",title:"Configure cluster parameters",description:"Configure cluster parameters",source:"@site/versioned_docs/version-release-0.4/user_docs/kubeblocks-for-mysql/configuration/configuration.md",sourceDirName:"user_docs/kubeblocks-for-mysql/configuration",slug:"/user_docs/kubeblocks-for-mysql/configuration/",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/configuration/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/kubeblocks-for-mysql/configuration/configuration.md",tags:[],version:"release-0.4",sidebarPosition:1,frontMatter:{title:"Configure cluster parameters",description:"Configure cluster parameters",sidebar_position:1},sidebar:"docs",previous:{title:"Handle an exception",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/cluster-management/handle-an-exception"},next:{title:"How backup works",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/backup-and-restore/how-backup-works"}},l={},c=[{value:"How KubeBlocks configuration works",id:"how-kubeblocks-configuration-works",level:2},{value:"How configuration rendering works",id:"how-configuration-rendering-works",level:3},{value:"How parameter reconfiguration works",id:"how-parameter-reconfiguration-works",level:3},{value:"Reconfigure the parameters",id:"reconfigure-the-parameters",level:2},{value:"Before you start",id:"before-you-start",level:3},{value:"View the parameter information",id:"view-the-parameter-information",level:3},{value:"Reconfigure dynamic parameters",id:"reconfigure-dynamic-parameters",level:3},{value:"Reconfigure static parameters",id:"reconfigure-static-parameters",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-cluster-parameters"},"Configure cluster parameters"),(0,r.kt)("p",null,"The KubeBlocks configuration function provides a set of consistent default configuration generation strategies for all the databases running on KubeBlocks and also provides a unified parameter change interface to facilitate managing parameter reconfiguration, searching the parameter user guide, and validating parameter effectiveness."),(0,r.kt)("h2",{id:"how-kubeblocks-configuration-works"},"How KubeBlocks configuration works"),(0,r.kt)("h3",{id:"how-configuration-rendering-works"},"How configuration rendering works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A cluster is created by ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli"),"."),(0,r.kt)("li",{parentName:"ol"},"After the CR (custom resource) of the cluster is created, the cluster operator of KubeBlocks detects a newly created cluster object. During the reconciliation process, one process is to call the configuration module engine to generate the appropriate resource parameters. For example, for MySQL, the TPLEngine generates the appropriate buffer and max_connection parameters. If no resource information is specified when you create a cluster, a default configuration parameter still will be generated."),(0,r.kt)("li",{parentName:"ol"},"After the config file of MySQL is created, when creating MySQL pod, the system correspondingly generates a sidecar container, named ConfigManager, to manage the MySQL local configuration.")),(0,r.kt)("h3",{id:"how-parameter-reconfiguration-works"},"How parameter reconfiguration works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An OpsRequest is created by ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli")," or a YAML file, whose type is ",(0,r.kt)("inlineCode",{parentName:"li"},"reconfiguring"),". You need to modify the names and values of parameters in the OpsRequest. If you use ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli")," to create an OpsRequest, ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli")," verifies the parameter changes before the OpsRequest is submitted. If the verification fails, the system prompts that the parameter setting is abnormal."),(0,r.kt)("li",{parentName:"ol"},"After the OpsRequest Operator detects the OpsRequest resources, it first verifies the effectiveness of the parameters. If the verification fails, the OpsRequest will be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Failed"),". If the verification passes, the changes will be merged into the ConfigMap of the configuration object and a new version will be generated."),(0,r.kt)("li",{parentName:"ol"},"When the Reconfigure Operator detects the ConfigMap changes, it first checks the effective parameter list and then adopts different execution strategies based on how the parameters take effect:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If the effectiveness type of changed parameters is ",(0,r.kt)("strong",{parentName:"li"},"dynamic"),", the Reconfigure Operator adopts the dynamic change strategy in which the ConfigManager performs OnlineUpdate to the parameters."),(0,r.kt)("li",{parentName:"ol"},"If the effectiveness type of changed parameters is ",(0,r.kt)("strong",{parentName:"li"},"static"),", the Reconfigure Operator adopts the pod restarting strategy.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration",src:n(55811).Z,width:"1636",height:"1028"})),(0,r.kt)("h2",{id:"reconfigure-the-parameters"},"Reconfigure the parameters"),(0,r.kt)("h3",{id:"before-you-start"},"Before you start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install KubeBlocks. For details, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"},"Install KubeBlocks"),". "),(0,r.kt)("li",{parentName:"ol"},"Create a MySQL standalone and wait until the cluster status is Running.")),(0,r.kt)("h3",{id:"view-the-parameter-information"},"View the parameter information"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to search for parameter information."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster explain-config mysql-cluster |head -n 20\n>\ntemplate meta:\nConfigSpec: mysql-consensusset-config        ComponentName: mysql        ClusterName: mysql-cluster\n\nParameter Explain:\n+----------------------------------------------------------+--------------------------------------------+--------+---------+---------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| PARAMETER NAME                                           | ALLOWED VALUES                             | SCOPE  | DYNAMIC | TYPE    | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                      |\n+----------------------------------------------------------  +--------------------------------------------+--------+---------+---------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| activate_all_roles_on_login                              | "0","1","OFF", "ON"                         | Global | false   | string  | Automatically set all granted roles as active after the user has authenticated successfully.                                                                                                                                                                                                                                                                                    |\n| allow-suspicious-udfs                                    | "0","1","OFF","ON"                         | Global | false   | string  | Controls whether user-defined functions that have only an xxx symbol for the main function can be loaded                                                                                                                                                                                                                                                                         |\n| auto_generate_certs                                      | "0","1","OFF","ON"                         | Global | false   | string  | Controls whether the server autogenerates SSL key and certificate files in the data directory, if they do not already exist.                                                                                                                                                                                                                                                     |\n| auto_increment_increment                                 | [1-65535]                                  | Global | false   | integer | Intended for use with master-to-master replication, and can be used to control the operation of AUTO_INCREMENT columns                                                                                                                                                                                                                                                           |\n| auto_increment_offset                                    | [1-65535]                                  | Global | false   | integer | Determines the starting point for the AUTO_INCREMENT column value                                                                                                                                                                                                                                                                                                                |\n| autocommit                                               | "0","1","OFF","ON"                         | Global | false   | string  | Sets the autocommit mode                                                                                                                                                                                                                                                                                                                                                         |\n| automatic_sp_privileges                                  | "0","1","OFF","ON"                         | Global | false   | string  | When this variable has a value of 1 (the default), the server automatically grants the EXECUTE and ALTER ROUTINE privileges to the creator of a stored routine, if the user cannot already execute and alter or drop the routine.                                                                                                                                                |\n| avoid_temporal_upgrade                                   | "0","1","OFF","ON"                         | Global | false   | string  | This variable controls whether ALTER TABLE implicitly upgrades temporal columns found to be in pre-5.6.4 format.                                                                                                                                                                                                                                                                 |\n| back_log                                                 | [1-65535]                                  | Global | false   | integer | The number of outstanding connection requests MySQL can have                                                                                                                                                                                                                                                                                                                     |\n| basedir                                                  |                                            | Global | false   | string  | The MySQL installation base directory.                                                                                                                                                                                                                                                                                                                                           |\n| big_tables                                               | "0","1","OFF","ON"                         | Global | false   | string  |                                                                                                                                                                                                                                                                                                                                                                                  |\n| bind_address                                             |                                            | Global | false   | string  |                                                                                                                                                                                                                                                                                                                                                                                  |\n| binlog_cache_size                                        | [4096-18446744073709548000]                | Global | false   | integer | The size of the cache to hold the SQL statements for the binary log during a transaction.\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the user guide of a parameter."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster explain-config mysql-cluster --param=innodb_buffer_pool_size\ntemplate meta:\n   ConfigSpec: mysql-consensusset-config        ComponentName: mysql        ClusterName: mysql-cluster\n\nConfigure Constraint:\n  Parameter Name:     innodb_buffer_pool_size\n  Allowed Values:     [5242880-18446744073709552000]\n  Scope:              Global\n  Dynamic:            false\n  Type:               integer\n  Description:        The size in bytes of the memory buffer innodb uses to cache data and indexes of its tables  \n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allowed Values: It defines the valid value of this parameter."),(0,r.kt)("li",{parentName:"ul"},"Dynamic: The value of ",(0,r.kt)("inlineCode",{parentName:"li"},"Dynamic")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure Constraint")," defines how the parameter reconfiguration takes effect. As mentioned in ",(0,r.kt)("a",{parentName:"li",href:"#how-kubeblocks-configuration-works"},"How KubeBlocks configuration works"),", there are two different reconfiguration strategies based on the effectiveness type of changed parameters, i.e. ",(0,r.kt)("strong",{parentName:"li"},"dynamic")," and ",(0,r.kt)("strong",{parentName:"li"},"static"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"Dynamic")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it means the effectiveness type of parameters is ",(0,r.kt)("strong",{parentName:"li"},"dynamic")," and you can follow the instructions in ",(0,r.kt)("a",{parentName:"li",href:"#reconfigure-dynamic-parameters"},"Reconfigure dynamic parameters"),"."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"Dynamic")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", it means the effectiveness type of parameters is ",(0,r.kt)("strong",{parentName:"li"},"static")," and you can follow the instructions in ",(0,r.kt)("a",{parentName:"li",href:"#reconfigure-static-parameters"},"Reconfigure static parameters"),"."))),(0,r.kt)("li",{parentName:"ul"},"Description: It describes the parameter definition.")))),(0,r.kt)("h3",{id:"reconfigure-dynamic-parameters"},"Reconfigure dynamic parameters"),(0,r.kt)("p",null,"Here we take reconfiguring ",(0,r.kt)("inlineCode",{parentName:"p"},"max_connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"beb_buffer_pool_size")," as an example."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command to view the current values of ",(0,r.kt)("inlineCode",{parentName:"p"},"max_connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"beb_buffer_pool_size"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-cluster\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%max_connections%';\n>\n+-----------------+-------+\n| Variable_name   | Value |\n+-----------------+-------+\n| max_connections | 167   |\n+-----------------+-------+\n1 row in set (0.04 sec)\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%innodb_buffer_pool_size%';\n>\n+-------------------------+-----------+\n| Variable_name           | Value     |\n+-------------------------+-----------+\n| innodb_buffer_pool_size | 134217728 |\n+-------------------------+-----------+\n1 row in set (0.00 sec)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adjust the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"max_connections")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"innodb_buffer_pool_size"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster configure rose15  --set=max_connections=600,innodb_buffer_pool_size=512M\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the value you set is within the Allowed Values of this parameters. If you set a value that does not meet the value range, the system prompts an error. For example,"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster configure mysql-cluster  --set=max_connections=200,innodb_buffer_pool_size=2097152\nerror: failed to validate updated config: [failed to cue template render configure: [mysqld.innodb_buffer_pool_size: invalid value 2097152 (out of bound >=5242880):\n 343:34\n]\n]\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search the status of the parameter reconfiguration.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Status.Progress")," shows the overall status of the parameter change and ",(0,r.kt)("inlineCode",{parentName:"p"},"Conditions")," show the details."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster describe-ops mysql-cluster-reconfiguring-z2wvn\n>\nSpec:\n  Name: mysql-cluster-reconfiguring-z2wvn        NameSpace: default        Cluster: mysql-cluster        Type: Reconfiguring\n\n Command:\n   kbcli cluster configure mysql-cluster --component-names=mysql --template-name=mysql-consensusset-config --config-file=my.cnf --set innodb_buffer_pool_size=512M --set max_connections=600\n\n Status:\n   Start Time:         Mar 13,2023 02:55 UTC+0800\n   Completion Time:    Mar 13,2023 02:55 UTC+0800\n   Duration:           1s\n   Status:             Succeed\n   Progress:           -/-\n\n Conditions:\n LAST-TRANSITION-TIME         TYPE                 REASON                            STATUS   MESSAGE\n Mar 13,2023 02:55 UTC+0800   Progressing          OpsRequestProgressingStarted      True     Start to process the OpsRequest: mysql-cluster-reconfiguring-z2wvn in Cluster: mysql-cluster\n Mar 13,2023 02:55 UTC+0800   Validated            ValidateOpsRequestPassed          True     OpsRequest: mysql-cluster-reconfiguring-z2wvn is validated\n Mar 13,2023 02:55 UTC+0800   Reconfigure          ReconfigureStarted                True     Start to reconfigure in Cluster: mysql-cluster, Component: mysql\n Mar 13,2023 02:55 UTC+0800   ReconfigureMerged    ReconfigureMerged                 True     Reconfiguring in Cluster: mysql-cluster, Component: mysql, ConfigTpl: mysql-consensusset-config, info: updated: map[my.cnf:{"mysqld":{"innodb_buffer_pool_size":"512M","max_connections":"600"}}], added: map[], deleted:map[]\n Mar 13,2023 02:55 UTC+0800   ReconfigureSucceed   ReconfigureSucceed                True     Reconfiguring in Cluster: mysql-cluster, Component: mysql, ConfigTpl: mysql-consensusset-config, info: updated policy: <autoReload>, updated: map[my.cnf:{"mysqld":{"innodb_buffer_pool_size":"512M","max_connections":"600"}}], added: map[], deleted:map[]\n Mar 13,2023 02:55 UTC+0800   Succeed              OpsRequestProcessedSuccessfully   True     Successfully processed the OpsRequest: mysql-cluster-reconfiguring-z2wvn in Cluster: mysql-cluster\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify whether the parameters are modified.\nThe whole searching process has a 30-second delay since it takes some time for kubelete to synchronize changes to the volume of the pod."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-cluster\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%max_connections%';\n>\n+-----------------+-------+\n| Variable_name   | Value |\n+-----------------+-------+\n| max_connections | 600   |\n+-----------------+-------+\n1 row in set (0.04 sec)\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%innodb_buffer_pool_size%';\n>\n+-------------------------+-----------+\n| Variable_name           | Value     |\n+-------------------------+-----------+\n| innodb_buffer_pool_size | 536870912 |\n+-------------------------+-----------+\n1 row in set (0.00 sec)\n")))),(0,r.kt)("h3",{id:"reconfigure-static-parameters"},"Reconfigure static parameters"),(0,r.kt)("p",null,"Static parameter reconfiguring requires restarting the pod. Here we take reconfiguring ",(0,r.kt)("inlineCode",{parentName:"p"},"ngram_token_size")," as an example."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search the current value of ",(0,r.kt)("inlineCode",{parentName:"p"},"ngram_token_size")," and the default value is 2."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster explain-config mysql-cluster --param=ngram_token_size\n>\ntemplate meta:\n  ConfigSpec: mysql-consensusset-config        ComponentName: mysql        ClusterName: mysql-cluster\n\nConfigure Constraint:\n  Parameter Name:     ngram_token_size\n  Allowed Values:     [1-10]\n  Scope:              Global\n  Dynamic:            false\n  Type:               integer\n  Description:        Defines the n-gram token size for the n-gram full-text parser.\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-cluster\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%ngram_token_size%';\n>\n+------------------+-------+\n| Variable_name    | Value |\n+------------------+-------+\n| ngram_token_size | 2     |\n+------------------+-------+\n1 row in set (0.01 sec)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Adjust the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"ngram_token_size"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster configure mysql-cluster  --set=ngram_token_size=6\n>\nWill updated configure file meta:\n  TemplateName: mysql-consensusset-config          ConfigureFile: my.cnf        ComponentName: mysql        ClusterName: mysql-cluster\nOpsRequest mysql-cluster-reconfiguring-nrnpf created\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the value you set is within the Allowed Values of this parameters. Otherwise, the configuration may fail."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Watch the progress of searching parameter reconfiguration and pay attention to the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"Status.Progress")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Status.Status"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In progress\nkbcli cluster describe-ops mysql-cluster-reconfiguring-nrnpf\n>\nSpec:\n  Name: mysql-cluster-reconfiguring-nrnpf        NameSpace: default        Cluster: mysql-cluster        Type: Reconfiguring\n\nCommand:\n  kbcli cluster configure mysql-cluster --component-names=mysql --template-name=mysql-consensusset-config --config-file=my.cnf --set ngram_token_size=6\n\nStatus:\n  Start Time:         Mar 13,2023 03:37 UTC+0800\n  Duration:           22s\n  Status:             Running\n  Progress:           0/1\n                      OBJECT-KEY   STATUS   DURATION   MESSAGE\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Parameter change is completed\nkbcli cluster describe-ops mysql-cluster-reconfiguring-nrnpf\n>\nSpec:\n  Name: mysql-cluster-reconfiguring-nrnpf        NameSpace: default        Cluster: mysql-cluster        Type: Reconfiguring\n\nCommand:\n  kbcli cluster configure mysql-cluster --component-names=mysql --template-name=mysql-consensusset-config --config-file=my.cnf --set ngram_token_size=6\n\nStatus:\n  Start Time:         Mar 13,2023 03:37 UTC+0800\n  Completion Time:    Mar 13,2023 03:37 UTC+0800\n  Duration:           26s\n  Status:             Succeed\n  Progress:           1/1\n                      OBJECT-KEY   STATUS   DURATION   MESSAGE\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the reconfiguration is completed, connect to the database and verify the changes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-cluster\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like '%ngram_token_size%';\n>\n+------------------+-------+\n| Variable_name    | Value |\n+------------------+-------+\n| ngram_token_size | 6     |\n+------------------+-------+\n1 row in set (0.09 sec)\n")))))}p.isMDXComponent=!0},55811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configuration-1c2ac0884ba4fa0ac3ae0e97050e2446.png"}}]);