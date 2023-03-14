"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[2145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={title:"Access logs",description:"The API of accessing logs",sidebar_position:1},i="Access logs",s={unversionedId:"user_docs/api/observability/access-logs",id:"version-release-0.4/user_docs/api/observability/access-logs",title:"Access logs",description:"The API of accessing logs",source:"@site/versioned_docs/version-release-0.4/user_docs/api/observability/access-logs.md",sourceDirName:"user_docs/api/observability",slug:"/user_docs/api/observability/access-logs",permalink:"/docs/release-0.4/user_docs/api/observability/access-logs",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/api/observability/access-logs.md",tags:[],version:"release-0.4",sidebarPosition:1,frontMatter:{title:"Access logs",description:"The API of accessing logs",sidebar_position:1},sidebar:"docs",previous:{title:"OpsRequest",permalink:"/docs/release-0.4/user_docs/api/lifecycle-management/ops-request-api"},next:{title:"README",permalink:"/docs/release-0.4/user_docs/"}},l={},c=[{value:"API definition",id:"api-definition",level:2},{value:"Cluster (for users)",id:"cluster-for-users",level:3},{value:"ClusterDefinition (for providers)",id:"clusterdefinition-for-providers",level:3},{value:"How to configure <code>name</code> and <code>filePath</code> under different conditions",id:"how-to-configure-name-and-filepath-under-different-conditions",level:4},{value:"ConfigTemplate (for providers)",id:"configtemplate-for-providers",level:3},{value:"<code>Status</code>",id:"status",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-logs"},"Access logs"),(0,a.kt)("h2",{id:"api-definition"},"API definition"),(0,a.kt)("p",null,"Add the log-related specification to the API file to enable this function for a cluster."),(0,a.kt)("h3",{id:"cluster-for-users"},"Cluster (for users)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"enabledLogs")," string is added in ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.components")," to mark whether to enable the log-related function of a cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"enabledLogs")," key and fill its value with a log type defined by the provider to enable the log function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: mysql-cluster-01\n  namespace: default\nspec:\n  clusterDefinitionRef: mysql-cluster-definition\n  clusterVersionRef: clusterversion-mysql-latest\n  components:\n  - name: replicasets\n    type: replicasets\n    enabledLogs:\n      - slow \n    volumeClaimTemplates:\n    - name: data\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 1Gi\n    - name: log\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 1Gi\n")),(0,a.kt)("h3",{id:"clusterdefinition-for-providers"},"ClusterDefinition (for providers)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"logsConfigs")," string is used to search log files. Fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," with the custom log type and ",(0,a.kt)("inlineCode",{parentName:"p"},"filePathPattern")," with the path of the log file. ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," can be defined by providers and is the only identifier.\nFill the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"configTemplateRefs")," with the kernel parameters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Here is an example of configuring the error log and slow log."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: apps.kubeblocks.io/v1alpha1\nkind: ClusterDefinition\nmetadata:\n  name: mysql-cluster-definition\nspec:\n  componentDefs:\n  - name: replicasets\n    characterType: mysql\n    monitor:\n      builtIn: true\n    logConfigs: \n      - name: error\n        filePathPattern: /log/mysql/log/mysqld.err\n      - name: slow\n        filePathPattern: /log/mysql/mysqld-slow.log \n    configTemplateRefs: \n      - name: mysql-tree-node-template-8.0\n        volumeName: mysql-config\n    workloadType: Consensus\n    consensusSpec:\n      leader:\n        name: leader\n        accessMode: ReadWrite\n      followers:\n        - name: follower\n          accessMode: Readonly\n    podSpec:\n      containers:\n      - name: mysql\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 3306\n          protocol: TCP\n          name: mysql\n        - containerPort: 13306\n          protocol: TCP\n          name: paxos\n        volumeMounts:\n          - mountPath: /data\n            name: data\n          - mountPath: /log\n            name: log\n          - mountPath: /data/config/mysql\n            name: mysql-config\n        env:\n          - name: "MYSQL_ROOT_PASSWORD"\n            valueFrom:\n              secretKeyRef:\n                name: $(KB_SECRET_NAME)\n                key: password\n        command: ["/usr/bin/bash", "-c"]\n        args:\n          - >\n            cluster_info="";\n            for (( i=0; i<$KB_REPLICASETS_N; i++ )); do\n              if [ $i -ne 0 ]; then\n                cluster_info="$cluster_info;";\n              fi;\n              host=$(eval echo \\$KB_REPLICASETS_"$i"_HOSTNAME)\n              cluster_info="$cluster_info$host:13306";\n            done;\n            idx=0;\n            while IFS=\'-\' read -ra ADDR; do\n              for i in "${ADDR[@]}"; do\n                idx=$i;\n              done;\n            done <<< "$KB_POD_NAME";\n            echo $idx;\n            cluster_info="$cluster_info@$(($idx+1))";\n            echo $cluster_info;\n            mkdir -p /data/mysql/log;\n            mkdir -p /data/mysql/data;\n            mkdir -p /data/mysql/std_data;\n            mkdir -p /data/mysql/tmp;\n            mkdir -p /data/mysql/run;\n            chmod +777 -R /data/mysql;\n            docker-entrypoint.sh mysqld --defaults-file=/data/config/mysql/my.cnf --cluster-start-index=1 --cluster-info="$cluster_info" --cluster-id=1\n')),(0,a.kt)("h4",{id:"how-to-configure-name-and-filepath-under-different-conditions"},"How to configure ",(0,a.kt)("inlineCode",{parentName:"h4"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"filePath")," under different conditions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Multiple files under one path"),(0,a.kt)("p",{parentName:"li"},"Here is an example of how to write three files at the same time in the internal PostgreSQL audit file of Alibaba Cloud. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"logsConfig: \n  \n  # `name` is customized by the provider and is the only identifier.\n  - name: audit\n    # The path information of the log file.\n    filePath: /postgresql/log/postgresql_[0-2]_audit.log\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Multiple paths (including a path under which there are single or multiple files) "),(0,a.kt)("p",{parentName:"li"},"For the log which is sent to multiple paths and is separated into multiple types, the configurations are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"logsConfig: \n  # The following is the audit log of configuring multiple paths.\n  # `name` is customized by the provider and is the only identifier.\n  - name: audit1\n    # The path information of the log file.\n    filePath: /var/log1/postgresql_*_audit.log\n  - name: audit2\n    # The path information of the log file.\n    filePath: /var/log2/postgresql_*_audit.log\n")))),(0,a.kt)("h3",{id:"configtemplate-for-providers"},"ConfigTemplate (for providers)"),(0,a.kt)("p",null,"When opening a certain log of a certain engine, write the related kernel configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigTemplate")," to make sure the log file can be output correctly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Here is an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mysql-tree-node-template-8.0\ndata:\n  my.cnf: |-\n    [mysqld]\n    loose_query_cache_type          = OFF\n    loose_query_cache_size          = 0\n    loose_innodb_thread_concurrency = 0\n    loose_concurrent_insert         = 0\n    loose_gts_lease                 = 2000\n    loose_log_bin_use_v1_row_events = off\n    loose_binlog_checksum           = crc32\n    \n    {{- if mustHas "error" $.Component.EnabledLogs }}\n    # Mysql error log\n    log_error={{ $log_root }}/mysqld.err\n    {{- end }}\n\n    {{- if mustHas "slow" $.Component.EnabledLogs }}\n    # MySQL Slow log\n    slow_query_log=ON\n    long_query_time=5\n    log_output=FILE\n    slow_query_log_file={{ $log_root }}/mysqld-slow.log\n    {{- end }}\n...\n')),(0,a.kt)("h3",{id:"status"},(0,a.kt)("inlineCode",{parentName:"h3"},"Status")),(0,a.kt)("p",null,"The log-related function, similar to a warning, neither affects the main flow of control and management nor changes ",(0,a.kt)("inlineCode",{parentName:"p"},"Phase")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Generation"),". It adds a ",(0,a.kt)("inlineCode",{parentName:"p"},"conditions")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster API status")," to store the warning of a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n  ...\nspec: \n  ...\nstatus:\n  # metav1.Condition[] \n  conditions:\n  - key: spec.components[replicasets].logs\n    reason: 'xxx' is invalid \n\n  components:\n    # component name \n    replicasets:\n      phase: Failed\n      message: Volume snapshot not support\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"kbcli describe cluster <cluster-name>")," and its output information is as follows: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Status:\n  Cluster Def Generation:  3\n  Components:\n    Replicasets:\n      Phase:  Running\n  Conditions:\n    Last Transition Time:  2022-11-11T03:57:42Z\n    Message:               EnabledLogs of cluster component replicasets has invalid value [errora slowa] which isn't defined in cluster definition component replicasets\n    Reason:                EnabledLogsListValidateFail\n    Status:                False\n    Type:                  ValidateEnabledLogs\n  Observed Generation:     2\n  Operations:\n    Horizontal Scalable:\n      Name:  replicasets\n    Restartable:\n      replicasets\n    Vertical Scalable:\n      replicasets\n  Phase:  Running\nEvents:\n  Type     Reason                      Age   From                Message\n  ----     ------                      ----  ----                -------\n  Normal   Creating                    49s   cluster-controller  Start Creating in Cluster: release-name-error\n  Warning  EnabledLogsListValidateFail  49s   cluster-controller  EnabledLogs of cluster component replicasets has invalid value [errora slowa] which isn't defined in cluster definition component replicasets\n  Normal   Running                     36s   cluster-controller  Cluster: release-name-error is ready, current phase is Running\n")))}u.isMDXComponent=!0}}]);