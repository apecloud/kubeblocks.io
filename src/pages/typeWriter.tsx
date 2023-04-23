import React, { useState } from 'react';
import './typeWriter.less';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

export default () => {
  const [btnDisable, setBtnDisable] = useState(false);
  const [btnIndex, setbtnIndex] = useState(0);
  const [strIndex, setStrIndex] = useState(0);
  const [cliVisible, setCliVisible] = useState({
    'visible_1': false,
    'visible_2': false,
    'visible_3': false,
    'visible_4': false,
    'visible_5': false,
    'visible_6': false,
    'visible_7': false,
    'visible_8': false,
    'visible_9': false,
    'visible_10': false,
    'visible_11': false,
    'visible_12': false,
    'visible_13': false,
    'visible_14': false,
    'visible_15': false,
    'visible_16': false,
  });

  //默认展示
  const MSG = `
=============================================
 __    __ _______   ______  __       ______ 
|  \\  /  \\       \\ /      \\|  \\     |      \\
| ▓▓ /  ▓▓ ▓▓▓▓▓▓▓\\  ▓▓▓▓▓▓\\ ▓▓      \\▓▓▓▓▓▓
| ▓▓/  ▓▓| ▓▓__/ ▓▓ ▓▓   \\▓▓ ▓▓       | ▓▓  
| ▓▓  ▓▓ | ▓▓    ▓▓ ▓▓     | ▓▓       | ▓▓  
| ▓▓▓▓▓\\ | ▓▓▓▓▓▓▓\\ ▓▓   __| ▓▓       | ▓▓  
| ▓▓ \\▓▓\\| ▓▓__/ ▓▓ ▓▓__/  \\ ▓▓_____ _| ▓▓_ 
| ▓▓  \\▓▓\\ ▓▓    ▓▓\\▓▓    ▓▓ ▓▓     \\   ▓▓ \\
 \\▓▓   \\▓▓\\▓▓▓▓▓▓▓  \\▓▓▓▓▓▓ \\▓▓▓▓▓▓▓▓\\▓▓▓▓▓▓

=============================================
A Command Line Interface for KubeBlocks`;

  //命令前缀
  const text = <>
    <span className="green-text">kubeblocks</span>
    <span className="blue-text"> ~ %</span>
  </>;
  const mysql = <>
    <span className="green-text">{'mysql>'}</span>
  </>;
  const other = <span className="pink-text">Please type the name again(separate with white space when more than one):</span>;

  //运行命令数组
  const textArray = [
    'kbcli cluster create mysql-cluster --cluster-definition=apecloud-mysql --set replicas=3',
    'kbcli cluster list',
    'kbcli cluster describe mysql-cluster',
    'kbcli cluster connect mysql-cluster',
    '',
    'kbcli cluster vscale mysql-cluster --components mysql --cpu 2000m --memory 2Gi',
    'kbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default',
    'kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=',
    'kbcli cluster configure mysql-cluster --set max_connections=2000',
    'kbcli cluster describe-config mysql-cluster --show-detail | grep max_connections=',
    'kbcli cluster backup mysql-cluster',
    'kbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default',
    'kbcli cluster restore new-cluster --backup backup-default-mysql-cluster-20230423155856',
    'kbcli cluster list',
    'kbcli cluster connect new-cluster',
  ];

  //按钮文案数组
  const ButtonTextArray = [
    'Create cluster',
    'View cluster list',
    'View cluster details',
    'Connect Cluster',
    'Execute SQL',
    'Cluster variation ',
    'Describe ops',
    'View cluster configure',
    'Edit cluster configure',
    'View the current cluster configure',
    'Cluster backup',
    'List backups',
    'Recovery by backup',
    'View the cluster list and observe the status',
    'Wait status is running & connect new-cluster',
    'Execute SQL',
  ];

  const onButtonClick = () => {
    if (!btnDisable) {
      setBtnDisable(true);
      setStrIndex(strIndex + 1);
      if (strIndex + 1 == 5 || strIndex + 1 == 16) {
        setCliVisible({ ...cliVisible, [`visible_${strIndex + 1}`]: true });
        setTimeout(() => {
          setBtnDisable(false);
          let div = document.getElementById('writer');
          if (div.scrollHeight > div.offsetHeight) {
            div.scrollTop = div.scrollHeight;
          }
        }, 500);
        setbtnIndex(btnIndex + 1)
      }
    }
  };

  //打字机配置
  const TypewriterDiv = <Typewriter
    options={{
      cursor: "", //取消光标闪烁
      delay: 50,
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(textArray[strIndex - 1])
        .pauseFor(200)
        .callFunction(() => {
          setTimeout(() => {
            setCliVisible({ ...cliVisible, [`visible_${strIndex}`]: true });
            setBtnDisable(false);
            let div = document.getElementById('writer');
            if (div.scrollHeight > div.offsetHeight) {
              div.scrollTop = div.scrollHeight;
            }
          }, 500);
          setbtnIndex(btnIndex + 1)
        })
        .start();
    }}
  />;

  return (
    <div id='typeWriter' className='box' >
      <h2 className="centered-title">Try KubeBlocks in the browser</h2>
      <h4 className="centered-des">Try MySQL on KubeBlocks</h4>
      <div className='writer' id='writer' >
        <pre className='new_pre mobile'>{MSG}</pre>
        {text}

        <span className='cli' >
          {strIndex > 0 && TypewriterDiv}
        </span>
        {cliVisible[`visible_1`] && <>
          <div><span className="yellow-text">Warning:</span> cluster version is not specified, use the recently created ClusterVersion ac-mysql-8.0.30<br /></div>
          <div>Cluster mysql-cluster created</div>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 1 && TypewriterDiv}
        </span>
        {cliVisible[`visible_2`] && <>
          <pre className='new_pre'>
            {`NAME              NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS    CREATED-TIME
mysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Creating   Apr 23,2023 15:50 UTC+0800
              `}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 2 && TypewriterDiv}
        </span>
        {cliVisible[`visible_3`] && <>
          <pre className='new_pre'>
            {`Name: mysql-cluster	 Created Time: Apr 23,2023 15:50 UTC+0800
NAMESPACE   CLUSTER-DEFINITION   VERSION           STATUS    TERMINATION-POLICY   
default     apecloud-mysql       ac-mysql-8.0.30   Running   Delete               

Endpoints:
COMPONENT   MODE        INTERNAL                                             EXTERNAL   
mysql       ReadWrite   mysql-cluster-mysql.default.svc.cluster.local:3306   <none>     

Topology:
COMPONENT   INSTANCE                ROLE       STATUS    AZ                NODE                                                             CREATED-TIME                 
mysql       mysql-cluster-mysql-0   leader     Running   cn-northwest-1c   ip-172-31-39-93.cn-northwest-1.compute.internal/172.31.39.93     Apr 23,2023 15:50 UTC+0800   
mysql       mysql-cluster-mysql-1   follower   Running   cn-northwest-1b   ip-172-31-28-145.cn-northwest-1.compute.internal/172.31.28.145   Apr 23,2023 15:50 UTC+0800   
mysql       mysql-cluster-mysql-2   follower   Running   cn-northwest-1a   ip-172-31-7-150.cn-northwest-1.compute.internal/172.31.7.150     Apr 23,2023 15:50 UTC+0800   

Resources Allocation:
COMPONENT   DEDICATED   CPU(REQUEST/LIMIT)   MEMORY(REQUEST/LIMIT)   STORAGE-SIZE   STORAGE-CLASS   
mysql       false       1 / 1                1Gi / 1Gi               data:20Gi      ebs-sc          

Images:
COMPONENT   TYPE    IMAGE                                                                                                  
mysql       mysql   registry.cn-hangzhou.aliyuncs.com/apecloud/apecloud-mysql-server:8.0.30-5.alpha5.20230319.g28f261a.5   

Data Protection:
AUTO-BACKUP   BACKUP-SCHEDULE   TYPE       BACKUP-TTL   LAST-SCHEDULE   RECOVERABLE-TIME   
Disabled      0 18 * * 0        snapshot   7d           <none>          <none>             

Events(last 5 warnings, see more:kbcli cluster list-events -n default mysql-cluster):
TIME                         TYPE      REASON        OBJECT                           MESSAGE                                                                                                               
Apr 23,2023 15:50 UTC+0800   Warning   FailedMount   Instance/mysql-cluster-mysql-2   MountVolume.SetUp failed for volume "scripts" : failed to sync configmap cache: timed out waiting for the condition`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 3 && TypewriterDiv}
        </span>
        {cliVisible[`visible_4`] && <>
          <pre className='new_pre'>
            {`Connect to instance mysql-cluster-mysql-0: out of mysql-cluster-mysql-0(leader), mysql-cluster-mysql-1(follower), mysql-cluster-mysql-2(follower)
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 18057
Server version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 4 && <> USE mydb</>}
        </span>
        {cliVisible[`visible_5`] && <>
          <div>Database changed</div>
          <div><span className="green-text">{'mysql>'}</span> CREATE TABLE students (</div>
          <pre className='new_pre'>
            {`    ->     student_id INT PRIMARY KEY,
    ->     name VARCHAR(50) NOT NULL,
    ->     gender VARCHAR(10) NOT NULL,
    ->     birthday DATE NOT NULL,
    ->     major VARCHAR(50) NOT NULL,
    ->     grade INT NOT NULL
    -> );
Query OK, 0 rows affected (0.06 sec)
            `}
          </pre>
          <div><span className="green-text">{'mysql>'}</span> INSERT INTO students (student_id, name, gender, birthday, major, grade)</div>
          <pre className='new_pre'>
            {`    -> VALUES (1, 'John Smith', 'Male', '2001-01-01', 'Computer Science and Technology', 2020),
    -> (2, 'Emily Brown', 'Female', '2002-02-15', 'Software Engineering', 2021),
    -> (3, 'Michael Johnson', 'Male', '2003-03-26', 'Information Security', 2022);
Query OK, 3 rows affected (0.08 sec)
Records: 3  Duplicates: 0  Warnings: 0
            `}
          </pre>
          <div><span className="green-text">{'mysql>'}</span> SELECT * FROM students;</div>
          <pre className='new_pre'>
            {`+------------+-----------------+--------+------------+---------------------------------+-------+
| student_id | name            | gender | birthday   | major                           | grade |
+------------+-----------------+--------+------------+---------------------------------+-------+
|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |
|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |
|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |
+------------+-----------------+--------+------------+---------------------------------+-------+
3 rows in set (0.00 sec)`}
          </pre>
          <div><span className="green-text">{'mysql>'}</span> exit</div>
          <div>Bye</div>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 5 && TypewriterDiv}
        </span>
        {cliVisible[`visible_6`] && <>
          <div>{other} mysql-cluster</div>
          <pre className='new_pre'>{`OpsRequest mysql-cluster-verticalscaling-w9m7h created successfully, you can view the progress:
	kbcli cluster describe-ops mysql-cluster-verticalscaling-w9m7h -n default`}</pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 6 && TypewriterDiv}
        </span>
        {cliVisible[`visible_7`] && <>
          <pre className='new_pre'>
            {`Spec:
  Name: mysql-cluster-verticalscaling-w9m7h	NameSpace: default	Cluster: mysql-cluster	Type: VerticalScaling	

Command:
  kbcli cluster vscale mysql-cluster --components=mysql --cpu=2 --memory=2Gi --namespace=default

Last Configuration:
COMPONENT   REQUEST-CPU   REQUEST-MEMORY   LIMIT-CPU   LIMIT-MEMORY   
mysql       100m          512Mi            100m        512Mi          

Status:
  Start Time:         Apr 23,2023 15:55 UTC+0800
  Duration:           115s
  Status:             Running
  Progress:           0/3
                      OBJECT-KEY                  STATUS       DURATION   MESSAGE                                                                  
                      Pod/mysql-cluster-mysql-1   Processing   115s       Start to vertical scale: Pod/mysql-cluster-mysql-1 in Component: mysql   
                      Pod/mysql-cluster-mysql-0   Pending      115s                                                                                
                      Pod/mysql-cluster-mysql-2   Pending      115s                                                                                

Conditions:
LAST-TRANSITION-TIME         TYPE              REASON                         STATUS   MESSAGE                                                                                          
Apr 23,2023 15:55 UTC+0800   Progressing       OpsRequestProgressingStarted   True     Start to process the OpsRequest: mysql-cluster-verticalscaling-w9m7h in Cluster: mysql-cluster   
Apr 23,2023 15:55 UTC+0800   Validated         ValidateOpsRequestPassed       True     OpsRequest: mysql-cluster-verticalscaling-w9m7h is validated                                     
Apr 23,2023 15:55 UTC+0800   VerticalScaling   VerticalScalingStarted         True     Start to vertical scale resources in Cluster: mysql-cluster                                      

Warning Events: <none>`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 7 && TypewriterDiv}
        </span>
        {cliVisible[`visible_8`] && <>
          <div>max_connections=83</div>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 8 && TypewriterDiv}
        </span>
        {cliVisible[`visible_9`] && <>
          <div>Will updated configure file meta:</div>
          <div>ConfigSpec: <span className="yellow-text">mysql-consensusset-config&nbsp;&nbsp;</span>ConfigFile: <span className="yellow-text">my.cnf&nbsp;&nbsp;</span>ComponentName: 	ClusterName: mysql-cluster</div>
          <pre className='new_pre'>
            {`OpsRequest mysql-cluster-reconfiguring-6xrkm created successfully, you can view the progress:
	kbcli cluster describe-ops mysql-cluster-reconfiguring-6xrkm -n default`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 9 && TypewriterDiv}
        </span>
        {cliVisible[`visible_10`] && <>
          <div>max_connections=2000</div>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 10 && TypewriterDiv}
        </span>
        {cliVisible[`visible_11`] && <>
          <pre className='new_pre'>
            {`Backup backup-default-mysql-cluster-20230423155856 created successfully, you can view the progress:
	kbcli cluster list-backups --name=backup-default-mysql-cluster-20230423155856 -n default`}
          </pre>
          {text}
        </>}


        <span className='cli' >
          {strIndex > 11 && TypewriterDiv}
        </span>
        {cliVisible[`visible_12`] && <>
          <pre className='new_pre'>
            {`NAME                                          CLUSTER         TYPE       STATUS      TOTAL-SIZE   DURATION   CREATE-TIME                  COMPLETION-TIME              
backup-default-mysql-cluster-20230423155856   mysql-cluster   snapshot   Completed   1Gi          24s        Apr 23,2023 15:58 UTC+0800   Apr 23,2023 15:58 UTC+0800`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 12 && TypewriterDiv}
        </span>
        {cliVisible[`visible_13`] && <>
          <pre className='new_pre'>
            {`Cluster new-cluster created`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 13 && TypewriterDiv}
        </span>
        {cliVisible[`visible_14`] && <>
          <pre className='new_pre'>
            {`NAME                         NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS     CREATED-TIME                 
mysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     Delete               Running    Apr 23,2023 15:50 UTC+0800   
new-cluster       default     apecloud-mysql       ac-mysql-8.0.30     Delete               Creating   Apr 23,2023 16:05 UTC+0800    
`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 14 && TypewriterDiv}
        </span>
        {cliVisible[`visible_15`] && <>
          <pre className='new_pre'>
            {`Connect to instance new-cluster-mysql-1: out of new-cluster-mysql-1(leader), new-cluster-mysql-0(follower), new-cluster-mysql-2(follower)
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9961
Server version: 8.0.30 WeSQL Server - GPL, Release 5, Revision 28f261a

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 15 && <>USE mydb</>}
        </span>
        {cliVisible[`visible_16`] && <>
          <div><span className="green-text">{'mysql>'}</span> SELECT * FROM students;</div>
          <pre className='new_pre'>
            {`+------------+-----------------+--------+------------+---------------------------------+-------+
| student_id | name            | gender | birthday   | major                           | grade |
+------------+-----------------+--------+------------+---------------------------------+-------+
|          1 | John Smith      | Male   | 2001-01-01 | Computer Science and Technology |  2020 |
|          2 | Emily Brown     | Female | 2002-02-15 | Software Engineering            |  2021 |
|          3 | Michael Johnson | Male   | 2003-03-26 | Information Security            |  2022 |
+------------+-----------------+--------+------------+---------------------------------+-------+
3 rows in set (0.00 sec)`}
          </pre>
          <div><span className="green-text">{'mysql>'}</span> exit</div>
          <div>Bye</div>
          {text}
        </>}

      </div>

      <button
        className={classNames({
          "btn": true,
          "next-btn": true,
          "is_hidden": cliVisible[`visible_16`] == true,
        })}
        disabled={btnDisable}
        onClick={() => onButtonClick()}>{ButtonTextArray[btnIndex]}
      </button>

    </div>
  );
}