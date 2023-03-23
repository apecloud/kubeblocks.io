"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[9299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Migrate data to ApeCloud MySQL by AWS DMS",description:"How to migrate data to ApeCloud MySQL by AWS DMS",sidebar_position:1},i="Migrate data to ApeCloud MySQL by AWS DMS",s={unversionedId:"user_docs/kubeblocks-for-mysql/migration/migration",id:"user_docs/kubeblocks-for-mysql/migration/migration",title:"Migrate data to ApeCloud MySQL by AWS DMS",description:"How to migrate data to ApeCloud MySQL by AWS DMS",source:"@site/docs/user_docs/kubeblocks-for-mysql/migration/migration.md",sourceDirName:"user_docs/kubeblocks-for-mysql/migration",slug:"/user_docs/kubeblocks-for-mysql/migration/",permalink:"/docs/preview/user_docs/kubeblocks-for-mysql/migration/",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-mysql/migration/migration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Migrate data to ApeCloud MySQL by AWS DMS",description:"How to migrate data to ApeCloud MySQL by AWS DMS",sidebar_position:1},sidebar:"docs",previous:{title:"Failure simulation and automatic recovery",permalink:"/docs/preview/user_docs/kubeblocks-for-mysql/high-availability/"},next:{title:"Create and connect",permalink:"/docs/preview/user_docs/kubeblocks-for-postgresql/cluster-management/create-and-connect-a-postgresql-cluster"}},l={},p=[{value:"Step 1. Network configuration",id:"step-1-network-configuration",level:2},{value:"Expose the target ApeCloud MySQL network",id:"expose-the-target-apecloud-mysql-network",level:3},{value:"KubeBlocks native solution",id:"kubeblocks-native-solution",level:4},{value:"Use Network Load Balancer (NLB) to expose the service",id:"use-network-load-balancer-nlb-to-expose-the-service",level:4},{value:"Expose the source network",id:"expose-the-source-network",level:3},{value:"Step 2. Configure AWS DMS tasks",id:"step-2-configure-aws-dms-tasks",level:2},{value:"Step 3. Switch applications",id:"step-3-switch-applications",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-data-to-apecloud-mysql-by-aws-dms"},"Migrate data to ApeCloud MySQL by AWS DMS"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Using the public network and network load balancer causes extra fees."),(0,r.kt)("li",{parentName:"ul"},"The following tutorial is based on the prerequisite that ApeCloud MySQL is deployed on AWS EKS. Using other Kubernetes clusters to deploy ApeCloud MySQL is not included."))),(0,r.kt)("h2",{id:"step-1-network-configuration"},"Step 1. Network configuration"),(0,r.kt)("h3",{id:"expose-the-target-apecloud-mysql-network"},"Expose the target ApeCloud MySQL network"),(0,r.kt)("p",null,"The Kubernetes ClusterIP of ApeCloud MySQL is exposed by default in the EKS environment. But the migration task of DMS  (Database Migration Service) runs in an independent Replication Instance, in which the Replication Instance can be set with the same VPC used by the Kubernetes clusters, but visiting ClusterIP still fails. This solution aims to connect this part of the network."),(0,r.kt)("h4",{id:"kubeblocks-native-solution"},"KubeBlocks native solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check whether the loadbalancer add-on is enabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli addon list\n")),(0,r.kt)("p",{parentName:"li"},"If the loadbalancer is disabled, it may relate to your environment since the loadbalancer add-on relies on the EKS environment.\nBuild your EKS environment, and refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/preview/user_docs/installation/enable-add-ons"},"Enable add-ons")," to enable the loadbalancer add-on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ApeCloud MySQL. Refer to ",(0,r.kt)("a",{parentName:"p",href:"./../../quick-start/create-a-mysql-cluster-on-aws.md"},"Create an ApeCloud MySQL cluster on AWS")," for details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the cluster name and run the command below to expose the external IP of the cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'KBCLI_EXPERIMENTAL_EXPOSE="1" kbcli cluster expose ${mysql clustrName} --enable=true --type=vpc\n')),(0,r.kt)("p",{parentName:"li"},"Run the command below to view the external IP:Port address which can be accessed by the same VPC machine but outside the EKS cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster describe ${clustrName} | grep -A 3 Endpoints\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Example"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'KBCLI_EXPERIMENTAL_EXPOSE="1" kb cluster expose mysql-cluster --on=true\n\nkbcli cluster describe mysql-cluster | grep -A 3 Endpoints\n>\nEndpoints:\nCOMPONENT       MODE            INTERNAL                EXTERNAL\nmysql           ReadWrite       10.100.51.xxx:3306      172.31.35.xxx:3306 \n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the external IP:Port as the target endpoint on AWS DMS.\nThis operation generates an ENI (Elastic Network Interface) on EC2. If the quota of the low-spec machine is small, pay more attention to the available level of ENI.\nFor the corresponding ENI specifications, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html"},"Elastic network interfaces - Amazon Elastic Compute Cloud"),"."))),(0,r.kt)("h4",{id:"use-network-load-balancer-nlb-to-expose-the-service"},"Use Network Load Balancer (NLB) to expose the service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Load Balancer Controller on EKS.\nFor installation details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"Installing the AWS Load Balancer Controller add-on"),".\nFor how to create NLB in a cluster, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html"},"Network load balancing on Amazon EKS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and use the NLB service to expose the ApeCloud MySQL service.\nConfigure ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.annotations"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector")," according to your actual environment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\nkind: Service\napiVersion: v1\nmetadata:\n    name: mysql-service\n    annotations:\n        service.beta.kubernetes.io/aws-load-balancer-type: nlb-ip\n        alb.ingress.kubernetes.io/scheme: internet-facing\n        service.beta.kubernetes.io/aws-load-balancer-subnets: ${subnet name1},${subnet name2}\n    labels:\n      app.kubernetes.io/component-name: mysql\n      app.kubernetes.io/instance: ${mysql clustername}\n      app.kubernetes.io/managed-by: kubeblocks\n      app.kubernetes.io/name: state.mysql-apecloud-mysql     \nspec:\n    externalTrafficPolicy: Cluster \n    type: LoadBalancer\n    selector:\n      app.kubernetes.io/component-name: mysql\n      app.kubernetes.io/instance: ${mysql clustername}\n      app.kubernetes.io/managed-by: kubeblocks\n      cs.dbaas.kubeblocks.io/role: leader\n    ports:\n        - name: http\n          protocol: TCP\n          port: 3306\n          targetPort: mysql \nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command below to make sure the service and NLB run normally."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc \n>\nNAME                  TYPE           CLUSTER-IP       EXTERNAL-IP                                        PORT(S)  \nmysql-service         LoadBalancer   10.100.xx.xx     k8s-xx-xx-xx.elb.cn-northwest-1.amazonaws.com.cn   3306:xx/TCP\n")),(0,r.kt)("p",{parentName:"li"},"Make sure the server runs normally and can generate EXTERNAL-IP. Meanwhile, verify whether the NLB state is ",(0,r.kt)("inlineCode",{parentName:"p"},"Active")," by the AWS console, then you can access the cluster by EXTERNAL-IP:Port.\n",(0,r.kt)("img",{alt:"NLB-active",src:a(5658).Z,width:"1280",height:"574"})))),(0,r.kt)("h3",{id:"expose-the-source-network"},"Expose the source network"),(0,r.kt)("p",null,"There exist four different conditions for the source network. Choose one method to expose the source network according to your actual environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alibaba Cloud ApsaraDB RDS"),(0,r.kt)("p",{parentName:"li"}," Use the public network. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/apsaradb-for-rds/latest/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance"},"Apply for or release a public endpoint for an ApsaraDB RDS for MySQL instance")," to release a public endpoint then create an endpoint in AWS DMS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RDS within the same VPC in AWS"),(0,r.kt)("p",{parentName:"li"}," You only need to specify an RDS when creating an endpoint in DMS and no extra operation is required.\nFor creating an endpoint, refer to step 2 in ",(0,r.kt)("a",{parentName:"p",href:"#step-2-configure-aws-dms-tasks"},"Configure AWS DMS tasks"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RDS within different VPCs in AWS"),(0,r.kt)("p",{parentName:"li"}," Use the public network to create an endpoint. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/aurora-mysql-connect-outside-vpc/?nc1=h_ls"},"this document")," to make public network access available, then create an endpoint in AWS DMS. For creating an endpoint, refer to step 2 in ",(0,r.kt)("a",{parentName:"p",href:"#step-2-configure-aws-dms-tasks"},"Configure AWS DMS tasks"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL in AWS EKS"),(0,r.kt)("p",{parentName:"li"}," Use NLB to expose the service."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Load Balancer Controller\nFor installation details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"Installing the AWS Load Balancer Controller add-on"),".\nFor how to create NLB in a cluster, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html"},"Network load balancing on Amazon EKS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the service using NLB\nMake sure the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"some.label.key")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," is consistent with the value of ApeCloud MySQL you created.\nConfigure ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"targetPort")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.ports")," according to your current environment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\nkind: Service\napiVersion: v1\nmetadata:\n    name: mysql-local-service\n    annotations:\n        service.beta.kubernetes.io/aws-load-balancer-type: nlb-ip\n        alb.ingress.kubernetes.io/scheme: internet-facing\n        service.beta.kubernetes.io/aws-load-balancer-subnets: ${subnet name1},${subnet name2}\n    labels:\n    some.label.key: some-label-value    \nspec:\n    externalTrafficPolicy: Cluster \n    type: LoadBalancer\n    selector:\n    some.label.key: some-label-value  \n    ports:\n        - name: http\n          protocol: TCP\n          port: 3306\n          targetPort: 3306 \nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure Service and NLB run normally.\nRefer to step 3 in ",(0,r.kt)("a",{parentName:"p",href:"#use-network-load-balancer-nlb-to-expose-the-service"},"Use Network Load Balancer (NLB) to expose the service")," for details."))))),(0,r.kt)("h2",{id:"step-2-configure-aws-dms-tasks"},"Step 2. Configure AWS DMS tasks"),(0,r.kt)("p",null,"Pay attention to the following potential issues during the migration task."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double write"),(0,r.kt)("p",{parentName:"li"}," During the migration, make sure no business is writing to the target data instance. Otherwise, double write occurs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Disk space of the target instance"),(0,r.kt)("p",{parentName:"li"}," Since the transfer tool uses a concurrent write model when writing to the target database, out-of-order writes may occur, which may trigger page splitting and cause the data space of the target database to be slightly enlarged compared with that of the original instance. It is recommended to plan appropriately when allocating the storage size of the target database, for example, at least 1.5 times the current storage size of the source database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DDL and onlineDDL"),(0,r.kt)("p",{parentName:"li"}," Locked structure changes often affect the speed of data migration.\nThe lock-free structure change is based on the rename of the temporary table in principle, which causes data problems if the migration object is not the whole database migration. For example, if the migration object chooses to migrate db1.table1 to the target, and an onlineDDL is performed on db1.table1 on the source database during the process, the data of db1.table1 on the target database will be inconsistent with the source database.\nIt should be noted that the way some database management tools initiate DDL is performed using lock-free mutation by default.\nMigration is short-term behavior. To avoid unnecessary troubles, it is recommended not to perform DDL operations during the migration process.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"binlog retention hours"),(0,r.kt)("p",{parentName:"li"}," The process of migrating data transmission changes depends on the binlog of the source database.\nIt is recommended to extend the binlog retention hours to avoid a long-term interruption and the situation that the binlog of the source database is cleared during recovery, resulting in the migration not being resumed.\nFor example, in AWS RDS, connect to the database and run the command below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# View configuration\n# Input: \ncall mysql.rds_show_configuration;\n# Output: Pay attention to the binlog retention hours.\n+------------------------+-------+-----------------------------------------------------------------------------------------------------------+\n| name                   | value | description                                                                                               |\n+------------------------+-------+-----------------------------------------------------------------------------------------------------------+\n| binlog retention hours | 8     | binlog retention hours specifies the duration in hours before binary logs are automatically deleted.      |\n| source delay           | 0     | source delay specifies replication delay in seconds between current instance and its master.              |\n| target delay           | 0     | target delay specifies replication delay in seconds between current instance and its future read-replica. |\n+------------------------+-------+-----------------------------------------------------------------------------------------------------------+\n\n# Adjust the retention hours to 72 hours\n# Input:\ncall mysql.rds_set_configuration('binlog retention hours', 72);\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Steps:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Replication Instance for migration."),(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"DMS")," -> ",(0,r.kt)("strong",{parentName:"p"},"Replication Instance")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create replication instance"),". "),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Select the VPC that you have configured in EKS.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create replication instance",src:a(96836).Z,width:"1280",height:"487"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create endpoints."),(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"DMS")," -> ",(0,r.kt)("strong",{parentName:"p"},"Endpoints")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create endpoint"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create endpoint",src:a(12530).Z,width:"1280",height:"363"})),(0,r.kt)("p",{parentName:"li"},"Create the source endpoint and target endpoint respectively. If the target endpoint is the RDS instance, check ",(0,r.kt)("strong",{parentName:"p"},"Select RDS DB instance")," to configure it."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select RDS DB instance",src:a(524).Z,width:"1280",height:"831"})),(0,r.kt)("p",{parentName:"li"},"After configuration, specify a replication instance to test the connection."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Test connection",src:a(26570).Z,width:"1280",height:"387"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create migration tasks."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Create task",src:a(84583).Z,width:"1280",height:"389"})),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create task")," and configure the task according to the instructions. "),(0,r.kt)("p",{parentName:"li"},"Pay attention to the following parameters."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Migration Type"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Migration type",src:a(64168).Z,width:"1248",height:"322"})),(0,r.kt)("p",{parentName:"li"}," AWS DMS provides three migration types: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Migrate existing data: AWS DMS migrates only your existing data. Changes to your source data aren\u2019t captured and applied to your target. "),(0,r.kt)("li",{parentName:"ul"},"Migrate existing data and replicate ongoing changes: AWS DMS migrates both existing data and ongoing data changes, i.e. the existing data before the migration task and the data changes during the migration task will be synchronized to the target instance."),(0,r.kt)("li",{parentName:"ul"},"Replicate data changes only: AWS DMS only migrates the ongoing data changes. If you select this type, you can use ",(0,r.kt)("strong",{parentName:"li"},"CDC start mode for source transactions")," to specify a location and migrate the data changes.\nFor this tutorial, select ",(0,r.kt)("strong",{parentName:"li"},"Migrate existing data and replicate ongoing changes"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Target table preparation mode"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Target table preparation mode",src:a(55605).Z,width:"1280",height:"507"})),(0,r.kt)("p",{parentName:"li"},"The target table preparation mode specifies the initial mode of the data structure. You can click Info beside the options to view the definition of each mode. For example, if ApeCloud MySQL is a newly created empty instance, you can select ",(0,r.kt)("strong",{parentName:"p"},"Do nothing")," mode.\nIn addition, create a database on ApeCloud MySQL before migration because AWS DMS does not create a database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Turn on validation"),(0,r.kt)("p",{parentName:"li"},"It is recommended to enable this function."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Turn on validation",src:a(70460).Z,width:"1280",height:"229"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Batch-optimized apply"),(0,r.kt)("p",{parentName:"li"},"It is recommended to enable this function as this function enables you to write target instances in batch and can improve the write speed."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Batch-optimized apply",src:a(132).Z,width:"1240",height:"270"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Full load tuning settings: Maximum number of tables to load in parallel"),(0,r.kt)("p",{parentName:"li"},"This number decides how many concurrencies DMS uses to get source table data. Theoretically speaking, this will cause pressure on the source table during the full-load migration. Lower this number when the business in the source table is delicate."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Full load tuning settings",src:a(79076).Z,width:"1280",height:"232"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Table Mapping"),(0,r.kt)("p",{parentName:"li"},"Table mapping decides which tables in the database are used for migration and can also apply easy conversions. It is recommended to enable ",(0,r.kt)("strong",{parentName:"p"},"Wizard")," mode to configure this parameter.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the button to start the migration task."))),(0,r.kt)("h2",{id:"step-3-switch-applications"},"Step 3. Switch applications"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Before you start"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DMS migration tasks run normally. If you perform a validation task, make sure the results are as expected."),(0,r.kt)("li",{parentName:"ul"},"To differentiate conversation and improve data security, it is recommended to create and authorize a database account solely for migration. "),(0,r.kt)("li",{parentName:"ul"},"It is recommended to switch applications during business off-peak hours because for the sake of safety during the switching process, it is necessary to stop business write.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Steps:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the transmission task runs normally."),(0,r.kt)("p",{parentName:"li"},"Pay attention to ",(0,r.kt)("strong",{parentName:"p"},"Status"),", ",(0,r.kt)("strong",{parentName:"p"},"Last updated in Table statistics"),", and ",(0,r.kt)("strong",{parentName:"p"},"CDC latency target")," in ",(0,r.kt)("strong",{parentName:"p"},"CloudWatch metrics"),"."),(0,r.kt)("p",{parentName:"li"},"You can also refer to ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/dms-stuck-task-progress/?nc1=h_ls"},"this document")," to verify the migration task."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Status",src:a(77615).Z,width:"1280",height:"649"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"CDC",src:a(35271).Z,width:"1280",height:"713"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pause business and prohibit new business write in the source database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the transmission task status again to make sure the task runs normally and the running status lasts at least 1 minute.\nRefer to step 1 above to observe whether the link is normal and whether latency exists.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the target database to resume business.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the migration with business."))))}d.isMDXComponent=!0},5658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_active-7eba2bef9016d81bb675117cefd3dcc3.png"},35271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_application_cdc-3aaf1d76bbd55ac070188f40b63f3d46.png"},77615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_application_status-57938f126fc4fc9c21e416f6d451792f.png"},132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_batch_optimized_apply-f4a699285cb501415bc6b6fcddc3eba3.png"},12530:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_create_endpoints-3704c7b36d3483601bccccd59733e08f.png"},84583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_create_task-936797b08367d797530b064706a60f9e.png"},79076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_full_load_tuning_settings-b035c66065288ef577f063442687cd82.png"},64168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_migration_type-f8dc74f97f95e8d79bb176f481b7beed.png"},96836:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_replication_instance-a58a7d42600a614be77865788975369b.png"},524:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_select_rds_db_instance-ef6a5f51b5d7abdc2d49986dd51dded7.png"},55605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_target_table_preparation_mode-e80c2b2c34c5d33fe435ffadb7c8d94a.png"},26570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_test_connection-b3990998a5830deaedc4e7131151e37b.png"},70460:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mysql_migration_turn_on_validation-e26223cf2a54e623a4a483027c91f9ee.png"}}]);