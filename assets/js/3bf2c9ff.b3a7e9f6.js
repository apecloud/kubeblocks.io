"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[1961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={title:"Lifecycle",description:"The API of KubeBlocks lifecycle management",sidebar_position:1,sidebar_label:"Lifecycle"},r="Lifecycle",o={unversionedId:"user_docs/api/lifecycle-management/lifecycle-management-api",id:"user_docs/api/lifecycle-management/lifecycle-management-api",title:"Lifecycle",description:"The API of KubeBlocks lifecycle management",source:"@site/docs/user_docs/api/lifecycle-management/lifecycle-management-api.md",sourceDirName:"user_docs/api/lifecycle-management",slug:"/user_docs/api/lifecycle-management/lifecycle-management-api",permalink:"/docs/preview/user_docs/api/lifecycle-management/lifecycle-management-api",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/api/lifecycle-management/lifecycle-management-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Lifecycle",description:"The API of KubeBlocks lifecycle management",sidebar_position:1,sidebar_label:"Lifecycle"},sidebar:"docs",previous:{title:"kbcli version",permalink:"/docs/preview/user_docs/cli/kbcli_version"},next:{title:"OpsRequest",permalink:"/docs/preview/user_docs/api/lifecycle-management/ops-request-api"}},s={},p=[{value:"ClusterDefinition (for providers)",id:"clusterdefinition-for-providers",level:2},{value:"ClusterDefinition spec",id:"clusterdefinition-spec",level:3},{value:"spec.workloadType",id:"specworkloadtype",level:4},{value:"spec.consensusSpec",id:"specconsensusspec",level:4},{value:"spec.defaultTerminationPolicy",id:"specdefaultterminationpolicy",level:4},{value:"spec.connectionCredential",id:"specconnectioncredential",level:4},{value:"Example",id:"example",level:3},{value:"ClusterVersion (for providers)",id:"clusterversion-for-providers",level:2},{value:"ClusterVersion spec",id:"clusterversion-spec",level:3},{value:"spec.clusterDefinitionRef",id:"specclusterdefinitionref",level:4},{value:"spec.component",id:"speccomponent",level:4},{value:"ClusterVersion status",id:"clusterversion-status",level:3},{value:"Example",id:"example-1",level:3},{value:"Cluster (for end users)",id:"cluster-for-end-users",level:2},{value:"Cluster spec",id:"cluster-spec",level:3},{value:"spec.clusterDefinitionRef",id:"specclusterdefinitionref-1",level:4},{value:"spec.clusterVersionRef",id:"specclusterversionref",level:4},{value:"spec.components",id:"speccomponents",level:4},{value:"spec.volumeClaimTemplates",id:"specvolumeclaimtemplates",level:4},{value:"Cluster status",id:"cluster-status",level:3},{value:"cluster.phase",id:"clusterphase",level:4},{value:"Example",id:"example-2",level:3}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("p",null,"This guide describes the details of KubeBlocks lifecycle API. KubeBlocks API is declarative and enables providers to describe the database cluster typology and lifecycle by YAML files, thus dynamically generating a management and control task flow to provide users with a consistent database operation experience. KubeBlocks has three APIs, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterVersion"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppVersion")," are designed for providers and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster")," is for end users."),(0,i.kt)("h2",{id:"clusterdefinition-for-providers"},"ClusterDefinition (for providers)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition")," is a Kubernetes custom resource definition and enables providers to describe the cluster typology and the dependencies among roles in operation tasks. "),(0,i.kt)("h3",{id:"clusterdefinition-spec"},"ClusterDefinition spec"),(0,i.kt)("h4",{id:"specworkloadtype"},"spec.workloadType"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.workloadType")," stands for the component workload type. KubeBlocks supports ",(0,i.kt)("inlineCode",{parentName:"p"},"stateless"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stateful"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"stateless")," is set as default."),(0,i.kt)("h4",{id:"specconsensusspec"},"spec.consensusSpec"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.workloadType")," is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.consensusSpec")," is required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"leader")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"leader")," stands for the leader node and provides write capability. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," stands for the role name and comes from the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"roleObserveQuery"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"accessMode")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"accessMode")," stands for the service capability. There are three types available, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"readWrite"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"readWrite")," provides read and write services. ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," provides write service. ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," does not provide any service.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"followers")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"followers")," participates in the election. Its name and access mode are defined by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"learner")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"learner")," does not participate in the election. Its name and access mode are defined by default. Its ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," stands for the pod amount and it is non-overridable in the cluster.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," stands for the updating strategy. ",(0,i.kt)("inlineCode",{parentName:"p"},"serial"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bestEffortParallel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parallel")," are selectable. ",(0,i.kt)("inlineCode",{parentName:"p"},"serial")," is set as the default."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serial")," stands for the serial executor. For example, when MySQL three-node cluster is upgrading, this process will be executed following this order, ",(0,i.kt)("inlineCode",{parentName:"li"},"learner1 -> learner2 -> logger -> follower -> leader"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bestEffortParallel")," means the controller tries to execute in parallel. Under the same scene in ",(0,i.kt)("inlineCode",{parentName:"li"},"serial"),", the process will be executed following this order, ",(0,i.kt)("inlineCode",{parentName:"li"},"learner1, learner2, logger in parallel way -> follower -> leader"),". The majority with election rights will be kept online during the operation process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parallel")," will force a parallel executor.")))),(0,i.kt)("h4",{id:"specdefaultterminationpolicy"},"spec.defaultTerminationPolicy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.defaultTerminatingPolicy")," can be set as ",(0,i.kt)("inlineCode",{parentName:"p"},"DoNotTerminate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Halt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"WipeOut"),"."),(0,i.kt)("h4",{id:"specconnectioncredential"},"spec.connectionCredential"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.connectionCredential")," is used to create a connection credential secret. "),(0,i.kt)("p",null,"Requirements for ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.connectionCredential"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8 random characters ",(0,i.kt)("inlineCode",{parentName:"li"},"$(RANDOM_PASSWD)")," placeholder."),(0,i.kt)("li",{parentName:"ul"},"self reference map object ",(0,i.kt)("inlineCode",{parentName:"li"},"$(CONN_CREDENTIAL)[.<map key>])")),(0,i.kt)("li",{parentName:"ul"},"Connection credential secret name place holder should be ",(0,i.kt)("inlineCode",{parentName:"li"},"$(CONN_CREDENTIAL_SECRET_NAME)"),"."),(0,i.kt)("li",{parentName:"ul"},"Usage example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'spec:\n  connectionCredential:\n    username: "admin-password" \n    password: "$(RANDOM_PASSWD)"\n    "$(CONN_CREDENTIAL).username": "$(CONN_CREDENTIAL).password"\n# output:\nspec:\n  connectionCredential:\n    username: "admin-password" \n    password: "<some random 8 characters password>"\n    "admin-password": "<value of above password>"\n')))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: apps.kubeblocks.io/v1alpha1\nkind: ClusterDefinition\nmetadata:\n  name: wesql\nspec:\n  componentDefs:\n  - name: mysql-a\n    workloadType: consensus\n    consensusSpec:\n      leader:\n        name: "leader"\n        accessMode: readWrite\n      followers:\n      - name: "follower"\n        accessMode: readonly\n    service:\n      ports:\n      - protocol: TCP\n        port: 3306\n        targetPort: 3306\n      type: LoadBalancer\n    readonlyService:\n      ports:\n      - protocol: TCP\n        port: 3306\n        targetPort: 3306\n      type: LoadBalancer\n    podSpec:\n      containers:\n      - name: mysql\n        imagePullPolicy: IfNotPresent\n        volumeMounts:\n        - mountPath: /data\n          name: data\n      ports:\n      - containerPort: 3306\n        protocol: TCP\n        name: mysql\n      - containerPort: 13306\n        protocol: TCP\n        name: paxos\n      env:\n      - name: MYSQL_ROOT_HOST\n        value: "%"\n      - name: MYSQL_ROOT_USER\n        value: "root"\n      - name: MYSQL_ROOT_PASSWORD\n        value:\n      - name: MYSQL_ALLOW_EMPTY_PASSWORD\n        value: "yes"\n      - name: MYSQL_DATABASE\n        value: "mydb"\n      - name: MYSQL_USER\n        value: "u1"\n      - name: MYSQL_PASSWORD\n        value: "u1"\n      - name: CLUSTER_ID\n        value: 1\n      - name: CLUSTER_START_INDEX\n        value: 1\n      - name: REPLICATIONUSER\n        value: "replicator"\n      - name: REPLICATION_PASSWORD\n        value:\n      - name: MYSQL_TEMPLATE_CONFIG\n        values:\n      - name: MYSQL_CUSTOM_CONFIG\n        values:\n      - name: MYSQL_DYNAMIC_CONFIG\n        values:\n      command: [ "/bin/bash", "-c" ]\n      args:\n      - >\n        cluster_info=""; \n        for (( i=0; i< $KB_REPLICASETS_N; i++ )); do \n        if [ $i -ne 0 ]; then \n        cluster_info="$cluster_info;"; \n        fi; \n        host=$(eval echo \\$KB_REPLICASETS_"$i"_HOSTNAME) \n        cluster_info="$cluster_info$host:13306"; \n        done; \n        idx=0; \n        while IFS=\'-\' read -ra ADDR; do\n        for i in "${ADDR[@]}"; do\n        idx=$i;\n        done;\n        done <<< "$KB_MY_POD_NAME"; \n        echo $idx; \n        cluster_info="$cluster_info@$(($idx+1))"; \n        echo $cluster_info; echo {{ .Values.cluster.replicaSetCount }}; \n        docker-entrypoint.sh mysqld --cluster-start-index=$CLUSTER_START_INDEX --cluster-info="$cluster_info" --cluster-id=$CLUSTER_ID\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"envs")," automatically injected by KubeBlocks can be used in the above ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," fields."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"KB_POD_NAME - Pod Name"),(0,i.kt)("li",{parentName:"ul"},"KB_NAMESPACE - Namespace"),(0,i.kt)("li",{parentName:"ul"},"KB_SA_NAME - Service Account Name"),(0,i.kt)("li",{parentName:"ul"},"KB_NODENAME - Node Name"),(0,i.kt)("li",{parentName:"ul"},"KB_HOST_IP - Host IP address"),(0,i.kt)("li",{parentName:"ul"},"KB_POD_IP - Pod IP address"),(0,i.kt)("li",{parentName:"ul"},"KB_POD_IPS - Pod IP addresses"),(0,i.kt)("li",{parentName:"ul"},"KB_CLUSTER_NAME - KubeBlock Cluster API object name"),(0,i.kt)("li",{parentName:"ul"},"KB_COMP_NAME - Running pod's KubeBlock Cluster API object's .spec.components.name"),(0,i.kt)("li",{parentName:"ul"},"KB_CLUSTER_COMP_NAME - Running pod's KubeBlock Cluster API object's <.metadata.name>-<.spec.components..name>, same name is used for Deployment or StatefulSet workload name, and Service object name"))),(0,i.kt)("h2",{id:"clusterversion-for-providers"},"ClusterVersion (for providers)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterVersion")," enables providers to describe the image versions and condition variables of the corresponding database versions."),(0,i.kt)("h3",{id:"clusterversion-spec"},"ClusterVersion spec"),(0,i.kt)("h4",{id:"specclusterdefinitionref"},"spec.clusterDefinitionRef"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.clusterDefinitionRef")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition")," and its value should be the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition"),"."),(0,i.kt)("h4",{id:"speccomponent"},"spec.component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," should be the same component name as ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition"),"."),(0,i.kt)("h3",{id:"clusterversion-status"},"ClusterVersion status"),(0,i.kt)("p",null,"You can check ",(0,i.kt)("inlineCode",{parentName:"p"},"phase")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," to view the executing status and result."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: apps.kubeblocks.io/v1alpha1\nkind: ClusterVersion\nmetadata:\n  name: ac-mysql-8.0.30\nspec:\n  clusterDefinitionRef: apecloud-mysql\n  components:\n    - type: wesql\n      versionsContext:\n        containers:\n          - name: mysql\n            image: apecloud/apecloud-mysql-server:8.0.30-4.alpha1.20221031.g1aa54a3\n            imagePullPolicy: IfNotPresent\n")),(0,i.kt)("h2",{id:"cluster-for-end-users"},"Cluster (for end users)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cluster")," enables end users to describe the database cluster they want to create."),(0,i.kt)("h3",{id:"cluster-spec"},"Cluster spec"),(0,i.kt)("h4",{id:"specclusterdefinitionref-1"},"spec.clusterDefinitionRef"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.clusterDefinitionRef")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition")," and its value should be the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterDefinition"),"."),(0,i.kt)("h4",{id:"specclusterversionref"},"spec.clusterVersionRef"),(0,i.kt)("p",null,"It refers to ClusterVersion and its value should be the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterVersion"),"."),(0,i.kt)("h4",{id:"speccomponents"},"spec.components"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," points to the component name in ClusterDefinition."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),": If you edit ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),", horizontal scaling will be triggered. If the amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," does not meet the limits of ",(0,i.kt)("inlineCode",{parentName:"p"},"definition"),", an error occurs."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"resources"),": If you edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limits")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"resources"),", vertical scaling will be triggered."),(0,i.kt)("h4",{id:"specvolumeclaimtemplates"},"spec.volumeClaimTemplates"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," is a list of claims that pods are allowed to refer to. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) ",(0,i.kt)("inlineCode",{parentName:"p"},"volumeMount")," in one container in the template. A claim in this list takes precedence over any volumes in the template with the same name.\n",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," is a user's request for and claim to a persistent volume."),(0,i.kt)("h3",{id:"cluster-status"},"Cluster status"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"status")," describes the current state and progress of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster"),". "),(0,i.kt)("h4",{id:"clusterphase"},"cluster.phase"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cluster.phase")," includes ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Failed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Creating"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Upgrading"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Scaling"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Deleting"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Abnormal"),". You can observe the executing status by ",(0,i.kt)("inlineCode",{parentName:"p"},"phase")," changes."),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("p",null,"The following are examples of ApeCloud MySQL three-node clusters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Standard version:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: mysql-a-series-standard\nspec:\n    clusterDefinitionRef: wesql\n    clusterVersionRef: ac-mysql-8.0.30\n    components:\n      - name: "mysql-a-1"\n        type: mysql-a\n    terminationPolicy: Halt\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enterprise version:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'apiVersion: apps.kubeblocks.io/v1alpha1\nkind: Cluster\nmetadata:\n    name: mysql-a-series-enterprise\nspec:\n    clusterDefinitionRef: wesql\n    clusterVersionRef: ac-mysql-8.0.30\n    components:\n      - name: "mysql-a-2"\n        type: mysql-a\n        replicas: 3\n        resources:\n            requests:\n                cpu: 32\n                memory: 128Gi\n            limits:\n                cpu: 32 \n                memory: 128Gi\n    terminationPolicy: Halt\n')))))}m.isMDXComponent=!0}}]);