"use strict";(self.webpackChunkkubeblocks_io=self.webpackChunkkubeblocks_io||[]).push([[2073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"Backup and restore for MySQL Paxos Group",description:"Guide for backup and restore for an ApeCloud MySQL Paxos Group",sidebar_position:3,sidebar_label:"MySQL Paxos Group"},s="Backup and restore for MySQL Paxos Group",l={unversionedId:"user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group",id:"version-release-0.4/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group",title:"Backup and restore for MySQL Paxos Group",description:"Guide for backup and restore for an ApeCloud MySQL Paxos Group",source:"@site/versioned_docs/version-release-0.4/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group.md",sourceDirName:"user_docs/kubeblocks-for-mysql/backup-and-restore",slug:"/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group",draft:!1,editUrl:"https://github.com/apecloud/kubeblocks/tree/release-0.4/docs/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-paxos-group.md",tags:[],version:"release-0.4",sidebarPosition:3,frontMatter:{title:"Backup and restore for MySQL Paxos Group",description:"Guide for backup and restore for an ApeCloud MySQL Paxos Group",sidebar_position:3,sidebar_label:"MySQL Paxos Group"},sidebar:"docs",previous:{title:"MySQL Standalone",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/backup-and-restore/backup-and-restore-for-mysql-standalone"},next:{title:"Monitor database",permalink:"/docs/release-0.4/user_docs/kubeblocks-for-mysql/observability/monitor-database"}},p={},i=[],c={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-and-restore-for-mysql-paxos-group"},"Backup and restore for MySQL Paxos Group"),(0,r.kt)("p",null,"This section shows how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"kbcli")," to back up and restore a MySQL Paxos Group instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Before you start"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepare a clean EKS cluster, and install ebs csi driver plug-in, with at least one node and the memory of each node is not less than 4GB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/"},"Install ",(0,r.kt)("inlineCode",{parentName:"a"},"kubectl"))," to ensure that you can connect to the EKS cluster "),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"kbcli"),". Refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/release-0.4/user_docs/installation/install-and-uninstall-kbcli-and-kubeblocks"},"Install kbcli and KubeBlocks")," for details.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://kubeblocks.io/installer/install_cli.sh | bash\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Steps:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install KubeBlocks and check whether the snapshot-controller add-on is enabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli kubeblocks install\n")),(0,r.kt)("p",{parentName:"li"},"Since your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is already connected to the EKS cluster, this command installs the latest version of KubeBlocks in the default namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"kb-system")," in your EKS environment."),(0,r.kt)("p",{parentName:"li"},"Verify the installation with the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kb-system\n")),(0,r.kt)("p",{parentName:"li"},"The pod with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeblocks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kb-addon-snapshot-controller")," is shown. See the information below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                              READY   STATUS             RESTARTS      AGE\nkubeblocks-5c8b9d76d6-m984n                       1/1     Running            0             9m\nkb-addon-snapshot-controller-6b4f656c99-zgq7g     1/1     Running            0             9m\n")),(0,r.kt)("p",{parentName:"li"},"If the output result does not show ",(0,r.kt)("inlineCode",{parentName:"p"},"kb-addon-snapshot-controller"),", it means the snapshot-controller add-on is not enabled. It may be caused by failing to meet the installable condition of this add-on. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/release-0.4/user_docs/installation/enable-add-ons"},"Enable add-ons")," to find the environment requirements and then enable the snapshot-controller add-on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure EKS to support the snapshot function."),(0,r.kt)("p",{parentName:"li"},"The backup is realized by the volume snapshot function, you need to configure EKS to support the snapshot function."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the storage class of the snapshot (the assigned EBS volume is gp3)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create -f - <<EOF\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: ebs-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: ebs.csi.aws.com\nparameters:\n  csi.storage.k8s.io/fstype: xfs\n  type: gp3\nallowVolumeExpansion: true\nvolumeBindingMode: WaitForFirstConsumer\nEOF\n\nkubectl patch sc/gp2 -p \'{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "false"}}}\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure default snapshot volumesnapshot class"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create -f - <<EOF\napiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshotClass\nmetadata:\n  name: csi-aws-vsc\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: "true"\ndriver: ebs.csi.aws.com\ndeletionPolicy: Delete\nEOF\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a MySQL Paxos Group. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster create mysql-cluster --cluster-definition='apecloud-mysql' --set replicas=3\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert test data to test backup."),(0,r.kt)("p",{parentName:"li"},"Connect to the MySQL cluster created in the previous steps and insert a piece of data. See the example below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kbcli cluster connect mysql-cluster\n\ncreate database if not exists demo;\ncreate table if not exists demo.msg(id int NOT NULL AUTO_INCREMENT, msg text, time datetime, PRIMARY KEY (id));\ninsert into demo.msg (msg, time) value ("hello", now());\nselect * from demo.msg;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a snapshot backup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster backup mysql-cluster\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the backup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster list-backups\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restore to a new cluster."),(0,r.kt)("p",{parentName:"li"},"Copy the backup name to the clipboard, and restore to the new cluster. "),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You do not need to specify other parameters for creating a cluster. The restoration automatically reads the parameters of the source cluster, including specification, disk size, etc., and creates a new MySQL cluster with the same specifications. ")),(0,r.kt)("p",{parentName:"li"},"Execute the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster restore mysql-new-from-snapshot --backup backup-default-mysql-cluster-20221124113440\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the data restored."),(0,r.kt)("p",{parentName:"li"},"Execute the following command to verify the data restored."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster connect mysql-new-from-snapshot\n\nselect * from demo.msg;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the ApeCloud MySQL cluster and clean up the backup."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Expenses incurred when you have snapshots on the cloud. So it is recommended to delete the test cluster.")),(0,r.kt)("p",{parentName:"li"},"Delete a MySQL cluster with the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete mysql-cluster\nkbcli cluster delete mysql-new-from-snapshot\n")),(0,r.kt)("p",{parentName:"li"},"Delete the backup specified."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete-backup mysql-cluster --name backup-default-mysql-cluster-20221124113440 \n")),(0,r.kt)("p",{parentName:"li"},"Delete all backups with ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-cluster"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kbcli cluster delete-backup pg-cluster --force\n")))))}m.isMDXComponent=!0}}]);