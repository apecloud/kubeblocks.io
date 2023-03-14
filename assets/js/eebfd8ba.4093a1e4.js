"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[5944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||s;return a?n.createElement(d,o(o({ref:t},i),{},{components:a})):n.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},18949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Backup and restore for MySQL standalone",description:"Guide for backup and restore for an ApeCloud MySQL standalone",sidebar_position:2},o="Backup and restore for MySQL standalone",l={unversionedId:"user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone",id:"user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone",title:"Backup and restore for MySQL standalone",description:"Guide for backup and restore for an ApeCloud MySQL standalone",source:"@site/docs/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone.md",sourceDirName:"user_docs/kubeblocks-for-mysql/backup-and-restore",slug:"/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/main/docs/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Backup and restore for MySQL standalone",description:"Guide for backup and restore for an ApeCloud MySQL standalone",sidebar_position:2},sidebar:"docs",previous:{title:"Backup and restore for MySQL Paxos group",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group"},next:{title:"Create and connect to a MySQL Cluster",permalink:"/docs/next/user_docs/kubeblocks-for-mysql/cluster-management/create-and-connect-a-mysql-cluster"}},c={},p=[],i={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-and-restore-for-mysql-standalone"},"Backup and restore for MySQL standalone"),(0,r.kt)("p",null,"This section shows how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli")," to back up and restore a MySQL standalone instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Before you start"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepare a clean EKS cluster, and install ebs csi driver plug-in, with at least one node and the memory of each node is not less than 4GB."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," to ensure that you can connect to the EKS cluster "),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli"),". Refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"},"Install kbcli and KubeBlocks")," for details.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kubeblocks.io/installer/install_cli.sh | bash\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Steps:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install KubeBlocks and enable the snapshot backup controller add-on."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install --set snapshot-controller.enabled=true\n")),(0,r.kt)("p",{parentName:"li"},"If you have installed KubeBlocks without enabling the snapshot controller, you can run the command below to enable snapshot backup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks upgrade --set snapshot-controller.enabled=true\n")),(0,r.kt)("p",{parentName:"li"},"Since your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is already connected to the EKS cluster, this command installs the latest version of KubeBlocks in your EKS environment."),(0,r.kt)("p",{parentName:"li"},"Verify the installation with the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,r.kt)("p",{parentName:"li"},"The pod with kubeblocks-snapshot-controller is shown. See the information below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                              READY   STATUS             RESTARTS      AGE\nkubeblocks-5c8b9d76d6-m984n                       1/1     Running            0             9m\nkubeblocks-snapshot-controller-6b4f656c99-zgq7g   1/1     Running            0             9m\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure EKS to support the snapshot function.\nThe backup is realized by the volume snapshot function, you need to configure EKS to support the snapshot function."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the storage class of snapshot (the assigned ebs volume is gp3)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create -f - <<EOF\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: ebs-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: ebs.csi.aws.com\nparameters:\n  csi.storage.k8s.io/fstype: xfs\n  type: gp3\nallowVolumeExpansion: true\nvolumeBindingMode: WaitForFirstConsumer\nEOF\n\nkubectl patch sc/gp2 -p \'{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "false"}}}\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure default snapshot volumesnapshot class"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<"EOF" > snapshot_class.yaml\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\n  name: csi-aws-vsc\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: "true"\ndriver: ebs.csi.aws.com\ndeletionPolicy: Delete\nEOF\n\nkubectl create -f snapshot_class.yaml\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a MySQL cluster. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create mysql-cluster --cluster-definition='apecloud-mysql'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert test data to test backup.\nConnect to the MySQL cluster created in the previous steps and insert a piece of data. See the example below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster connect mysql-cluster\n\ncreate database if not exists demo;\ncreate table if not exists demo.msg(id int NOT NULL AUTO_INCREMENT, msg text, time datetime, PRIMARY KEY (id));\ninsert into demo.msg (msg, time) value ("hello", now());\nselect * from demo.msg;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a snapshot backup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster backup mysql-cluster\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the backup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list-backups\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restore to a new cluster.\nCopy the backup name to the clipboard, and restore to the new cluster. "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," "),(0,r.kt)("p",{parentName:"blockquote"},"You do not need to specify other parameters for creating an cluster. The restoration automatically reads the parameters of the source cluster, including specification, disk size, etc., and create a new MySQL cluster with the same specifications. ")),(0,r.kt)("p",{parentName:"li"},"Execute the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster restore mysql-new-from-snapshot --backup backup-default-mysql-cluster-20221124113440\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the data restored.\nExecute the following command to verify the data restored."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-new-from-snapshot\nselect * from demo.msg;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the ApeCloud MySQL cluster and clean up the backup."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"Expense incurred when you have snapshots on the cloud. So it is recommended to delete the test cluster.")),(0,r.kt)("p",{parentName:"li"},"Delete MySQL cluster with the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mysql-cluster\nkbcli cluster delete mysql-new-from-snapshot\n")),(0,r.kt)("p",{parentName:"li"},"Delete the backup specified."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete-backup mysql-cluster --name backup-default-mysql-cluster-20221124113440 \n")),(0,r.kt)("p",{parentName:"li"},"Delete all backups with ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-cluster"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mysql-cluster\n")))))}m.isMDXComponent=!0}}]);