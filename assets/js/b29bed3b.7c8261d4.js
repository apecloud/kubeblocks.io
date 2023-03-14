"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[7315],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||s;return a?r.createElement(d,o(o({ref:t},i),{},{components:a})):r.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={title:"Backup and restore for PostgreSQL standalone",description:"Guide for backup and restore for an PostgreSQL standalone",sidebar_position:2},o="Backup and restore for PostgreSQL standalone",l={unversionedId:"user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone",id:"version-release-0.4/user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone",title:"Backup and restore for PostgreSQL standalone",description:"Guide for backup and restore for an PostgreSQL standalone",source:"@site/versioned_docs/version-release-0.4/user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone.md",sourceDirName:"user_docs/kubeblocks-for-postgresql/backup-and-restore",slug:"/user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/kubeblocks-for-postgresql/backup-and-restore/backup-and-restore-for-postgresql-standalone.md",tags:[],version:"release-0.4",sidebarPosition:2,frontMatter:{title:"Backup and restore for PostgreSQL standalone",description:"Guide for backup and restore for an PostgreSQL standalone",sidebar_position:2},sidebar:"docs",previous:{title:"How backup works",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-postgresql/backup-and-restore/how-backup-works"},next:{title:"Create and connect to a PostgreSQL Cluster",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-postgresql/cluster-management/create-and-connect-a-postgresql-cluster"}},p={},c=[],i={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backup-and-restore-for-postgresql-standalone"},"Backup and restore for PostgreSQL standalone"),(0,n.kt)("p",null,"This section shows how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"kbcli")," to back up and restore a PostgreSQL standalone instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Before you start"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prepare a clean EKS cluster, and install ebs csi driver plug-in, with at least one node and the memory of each node is not less than 4GB."),(0,n.kt)("li",{parentName:"ul"},"Install kubectl to ensure that you can connect to the EKS cluster "),(0,n.kt)("li",{parentName:"ul"},"Install kbcli.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kubeblocks.io/installer/install_cli.sh | bash\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Steps:"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install KubeBlocks and enable snapshot backup.\nInstall KubeBlocks and enable the snapshot controller add-on."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install --set snapshot-controller.enabled=true\n")),(0,n.kt)("p",{parentName:"li"},"To enable the snapshot controller plugin after installation."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks upgrade --set snapshot-controller.enabled=true\n")),(0,n.kt)("p",{parentName:"li"},"Since your kubectl is already connected to the EKS cluster, this command installs the latest version of KubeBlocks in your EKS environment."),(0,n.kt)("p",{parentName:"li"},"Verify the installation with the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,n.kt)("p",{parentName:"li"},"The pod with kubeblocks-snapshot-controller is shown. See the information below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"NAME                                              READY   STATUS             RESTARTS      AGE\nkubeblocks-5c8b9d76d6-m984n                       1/1     Running            0             9m\nkubeblocks-snapshot-controller-6b4f656c99-zgq7g   1/1     Running            0             9m\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure EKS to support the snapshot function.\nThe backup is realized by the volume snapshot function, you need to configure EKS to support the snapshot function."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'- Configure the storage class of snapshot (the assigned ebs volume is gp3).\n   ```bash\n   kubectl create -f - <<EOF\n   kind: StorageClass\n   apiVersion: storage.k8s.io/v1\n   metadata:\n     name: ebs-sc\n     annotations:\n       storageclass.kubernetes.io/is-default-class: "true"\n   provisioner: ebs.csi.aws.com\n   parameters:\n     csi.storage.k8s.io/fstype: xfs\n     type: gp3\n   allowVolumeExpansion: true\n   volumeBindingMode: WaitForFirstConsumer\n   EOF\n\n   kubectl patch sc/gp2 -p \'{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "false"}}}\'\n   ```\n- Configure default snapshot volumesnapshot class\n   ```bash\n   cat <<"EOF" > snapshot_class.yaml\n   apiVersion: snapshot.storage.k8s.io/v1\n   kind: VolumeSnapshotClass\n   metadata:\n     name: csi-aws-vsc\n     annotations:\n       snapshot.storage.kubernetes.io/is-default-class: "true"\n   driver: ebs.csi.aws.com\n   deletionPolicy: Delete\n   EOF\n\n   kubectl create -f snapshot_class.yaml\n   ```\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a PostgreSQL cluster.\nIn this section, the example cluster created is pg-cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create pg-cluster --cluster-definition='postgresql'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert test data to test backup.\nConnect to the PostgreSQL cluster created in the previous steps and insert a piece of data. See the example below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster connect pg-cluster\n\ncreate database if not exists demo;\ncreate table if not exists demo.msg(id int NOT NULL AUTO_INCREMENT, msg text, time datetime, PRIMARY KEY (id));\ninsert into demo.msg (msg, time) value ("hello", now());\nselect * from demo.msg;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a snapshot backup."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster backup pg-cluster\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the backup."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list-backups\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restore to a new cluster.\nCopy the backup name to the clipboard, and restore to the new cluster. "),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," "),(0,n.kt)("p",{parentName:"blockquote"},"You do not need to specify other parameters for creating an cluster. The restoration automatically reads the parameters of the source cluster, including specification, disk size, etc., and create a new PostgreSQLL cluster with the same specifications. ")),(0,n.kt)("p",{parentName:"li"},"Execute the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster restore postgresql-new-from-snapshot --backup backup-default-postgresql-cluster-20221124113440\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the data restored.\nExecute the following command to verify the data restored."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect postgresql-new-from-snapshot\nselect * from demo.msg;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the PostgreSQL cluster and clean up the backup."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))),(0,n.kt)("p",{parentName:"blockquote"},"Expense incurred when you have snapshots on the cloud. So it is recommended to delete the test cluster.")),(0,n.kt)("p",{parentName:"li"},"Delete PostgreSQL cluster with the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete pg-cluster\nkbcli cluster delete postgresql-new-from-snapshot\n")),(0,n.kt)("p",{parentName:"li"},"Delete the backup specified."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete-backup postgresql-cluster --name backup-default-postgresql-cluster-20221124113440 \n")),(0,n.kt)("p",{parentName:"li"},"Delete all backups with ",(0,n.kt)("inlineCode",{parentName:"p"},"pg-cluster"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete pg-cluster\n")))))}k.isMDXComponent=!0}}]);