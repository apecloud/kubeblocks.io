import React, { useState } from 'react';
import './typeWriter.less';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

export default () => {
  const [btnDisable, setBtnDisable] = useState(false);
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
    'visible_17': false,
    'visible_18': false,
    'visible_19': false,
    'visible_20': false,
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
    <span className="green-text">mysql</span>
    <span className="blue-text"> {'>'}</span>
  </>;
  const other = <span className="pink-text">Please type the name again(separate with white space when more than one):</span>;

  //运行命令数组
  const textArray = [
    'kbcli cluster list',
    'kbcli cluster describe mysql-cluster',
    'kbcli cluster connect mysql-cluster',
    'SHOW DATABASES;',
    'CREATE DATABASE airlines_demo;',
    'USE airlines_demo;',
    '',
    '',
    'SELECT * FROM flights;',
    'exit',
    'kbcli cluster vscale mysql-cluster --components mysql --cpu 2000m --memory 4Gi',
    'kbcli cluster describe-ops mysql-cluster-verticalscaling-xz5xb -n default',
    'kbcli cluster backup mysql-cluster',
    'kbcli cluster list-backups --name=backup-default-mysql-cluster-20230421195300 -n default',
    'kbcli cluster restore new-cluster --backup backup-default-mysql-cluster-20230421195300',
    'kbcli cluster list',
    'kbcli cluster connect new-cluster',
    'USE airlines_demo',
    'SELECT * FROM flights;',
    'exit',
  ];

  //按钮文案数组
  const ButtonTextArray = [
    'View cluster list',
    'View cluster details',
    'Connect Cluster',
    'Show dataBases',
    'Create dataBases',
    'Use dataBases',
    'Create table',
    'Insert data',
    'Select query',
    'Disconnect',
    'Cluster variation ',
    'Describe ops',
    'Cluster backup',
    'List backups',
    'Recovery by backup',
    'View the cluster list and the status',
    'Connect to new cluster',
    'Show dataBases',
    'Use dataBases',
    'Select query',
    'Disconnect',
  ];

  const onButtonClick = () => {
    if (!btnDisable) {
      setStrIndex(strIndex + 1);
      setBtnDisable(true);
      if (strIndex + 1 == 7 || strIndex + 1 == 8) {
        setCliVisible({ ...cliVisible, [`visible_${strIndex + 1}`]: true });
        setTimeout(() => {
          setBtnDisable(false);
          let div = document.getElementById('writer');
          if (div.scrollHeight > div.offsetHeight) {
            div.scrollTop = div.scrollHeight;
          }
        }, 500);
      }
    }
  };

  //打字机配置
  const TypewriterDiv = <Typewriter
    options={{
      cursor: "", //取消光标闪烁
      delay: 30,
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
          }, 300);
        })
        .start();
    }}
  />;

  return (
    <div id='typeWriter' className='box' >
      <h2 className="centered-title">Try KubeBlocks in the browser</h2>
      <h4 className="centered-des">Deploy Server for Mysql on Kubernetes </h4>
      <div className='writer' id='writer' >
        <pre className='new_pre mobile'>{MSG}</pre>
        {text}

        <span className='cli' >
          {strIndex > 0 && TypewriterDiv}
        </span>
        {cliVisible[`visible_1`] && <>
          <pre className='new_pre'>
            {`NAME              NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS    CREATED-TIME
mysql-cluster     default     apecloud-mysql       ac-mysql-8.0.30     WipeOut              Running   Apr 18,2023 11:31 UTC+0800
              `}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 1 && TypewriterDiv}
        </span>
        {cliVisible[`visible_2`] && <>
          <pre className='new_pre'>
            {`Name: mysql-cluster	 Created Time: Apr 18,2023 11:31 UTC+0800
NAMESPACE   CLUSTER-DEFINITION   VERSION           STATUS    TERMINATION-POLICY   
default     apecloud-mysql       ac-mysql-8.0.30   Running   WipeOut              

Endpoints:
COMPONENT   MODE        INTERNAL                                             EXTERNAL   
mysql       ReadWrite   mysql-cluster-mysql.default.svc.cluster.local:3306   <none>     

Topology:
COMPONENT   INSTANCE                ROLE       STATUS    AZ                NODE                                                           CREATED-TIME                 
mysql       mysql-cluster-mysql-0   leader     Running   cn-northwest-1b   ip-172-31-28-3.cn-northwest-1.compute.internal/172.31.28.3     Apr 18,2023 11:38 UTC+0800   
mysql       mysql-cluster-mysql-1   follower   Running   cn-northwest-1a   ip-172-31-13-48.cn-northwest-1.compute.internal/172.31.13.48   Apr 18,2023 11:38 UTC+0800   
mysql       mysql-cluster-mysql-2   follower   Running   cn-northwest-1c   ip-172-31-44-8.cn-northwest-1.compute.internal/172.31.44.8     Apr 18,2023 11:38 UTC+0800   

Resources Allocation:
COMPONENT   DEDICATED   CPU(REQUEST/LIMIT)   MEMORY(REQUEST/LIMIT)   STORAGE-SIZE   STORAGE-CLASS   
mysql       false       100m / 100m          512Mi / 512Mi           data:1Gi       ebs-sc          

Images:
COMPONENT   TYPE    IMAGE                                                                                                  
mysql       mysql   registry.cn-hangzhou.aliyuncs.com/apecloud/apecloud-mysql-server:8.0.30-5.alpha5.20230319.g28f261a.5   

Data Protection:
AUTO-BACKUP   BACKUP-SCHEDULE   TYPE       BACKUP-TTL   LAST-SCHEDULE   RECOVERABLE-TIME   
Disabled      0 18 * * 0        snapshot   7d           <none>          <none>             

Events(last 5 warnings, see more:kbcli cluster list-events -n default mysql-cluster):
TIME   TYPE   REASON   OBJECT   MESSAGE   

`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 2 && TypewriterDiv}
        </span>
        {cliVisible[`visible_3`] && <>
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
          {strIndex > 3 && TypewriterDiv}
        </span>
        {cliVisible[`visible_4`] && <>
          <pre className='new_pre'>
            {`+--------------------+
| Database           |
+--------------------+
| airlines_demo      |
| information_schema |
| mydb               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.01 sec)`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 4 && TypewriterDiv}
        </span>
        {cliVisible[`visible_5`] && <>
          <pre className='new_pre'>
            {`Query OK, 1 row affected (0.01 sec)`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 5 && TypewriterDiv}
        </span>
        {cliVisible[`visible_6`] && <>
          <pre className='new_pre'>
            {`Database changed`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 6 && <> CREATE TABLE flights (</>}
        </span>
        {cliVisible[`visible_7`] && <>
          <pre className='new_pre'>
            {`    ->   flight_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    ->   flight_number VARCHAR(10) NOT NULL,  
    ->   airline VARCHAR(50) NOT NULL,
    ->   depart_from VARCHAR(50) NOT NULL,
    ->   arrive_at VARCHAR(50) NOT NULL,
    ->   depart_time DATETIME NOT NULL,
    ->   arrive_time DATETIME NOT NULL,
    ->   price DECIMAL(10, 2) NOT NULL
    -> );
Query OK, 0 rows affected (0.10 sec)`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 7 && <> INSERT INTO flights (flight_number, airline, depart_from, arrive_at, depart_time, arrive_time, price)</>}
        </span>
        {cliVisible[`visible_8`] && <>
          <pre className='new_pre'>
            {`    -> VALUES
    -> ('CA123', 'Air China', 'Beijing', 'New York', DATE_ADD(NOW(), INTERVAL 1 DAY), DATE_ADD(NOW(), INTERVAL 32 HOUR), 1000.00),
    -> ('UA456', 'United Airlines', 'New York', 'Los Angeles', DATE_ADD(NOW(), INTERVAL 50 HOUR), DATE_ADD(NOW(), INTERVAL 52 HOUR), 500.00),
    -> ('DL789', 'Delta Air Lines', 'Los Angeles', 'Tokyo', DATE_ADD(NOW(), INTERVAL 74 HOUR), DATE_ADD(NOW(), INTERVAL 81 HOUR), 1200.00),
    -> ('AA246', 'American Airlines', 'Tokyo', 'London', DATE_ADD(NOW(), INTERVAL 101 HOUR), DATE_ADD(NOW(), INTERVAL 127 HOUR), 800.00),
    -> ('CX357', 'Cathay Pacific', 'London', 'Hong Kong', DATE_ADD(NOW(), INTERVAL 5 DAY), DATE_ADD(NOW(), INTERVAL 148 HOUR), 900.00);
Query OK, 5 rows affected (0.09 sec)
Records: 5  Duplicates: 0  Warnings: 0`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 8 && TypewriterDiv}
        </span>
        {cliVisible[`visible_9`] && <>
          <pre className='new_pre'>
            {`+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
| flight_id | flight_number | airline           | depart_from | arrive_at   | depart_time         | arrive_time         | price   |
+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
|         1 | CA123         | Air China         | Beijing     | New York    | 2023-04-22 07:01:07 | 2023-04-22 15:01:07 | 1000.00 |
|         2 | UA456         | United Airlines   | New York    | Los Angeles | 2023-04-23 09:01:07 | 2023-04-23 11:01:07 |  500.00 |
|         3 | DL789         | Delta Air Lines   | Los Angeles | Tokyo       | 2023-04-24 09:01:07 | 2023-04-24 16:01:07 | 1200.00 |
|         4 | AA246         | American Airlines | Tokyo       | London      | 2023-04-25 12:01:07 | 2023-04-26 14:01:07 |  800.00 |
|         5 | CX357         | Cathay Pacific    | London      | Hong Kong   | 2023-04-26 07:01:07 | 2023-04-27 11:01:07 |  900.00 |
+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
5 rows in set (0.00 sec)`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 9 && TypewriterDiv}
        </span>
        {cliVisible[`visible_10`] && <>
          <pre className='new_pre'>Bye</pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 10 && TypewriterDiv}
        </span>
        {cliVisible[`visible_11`] && <>
          <div>{other} mysql-cluster</div>
          <pre className='new_pre'>{`OpsRequest mysql-cluster-verticalscaling-xz5xb created successfully, you can view the progress:
	kbcli cluster describe-ops mysql-cluster-verticalscaling-xz5xb -n default`}</pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 11 && TypewriterDiv}
        </span>
        {cliVisible[`visible_12`] && <>
          <pre className='new_pre'>
            {`Spec:
  Name: mysql-cluster-verticalscaling-xz5xb	NameSpace: default	Cluster: mysql-cluster	Type: VerticalScaling	

Command:
  kbcli cluster vscale mysql-cluster --components=mysql --cpu=2 --memory=4Gi --namespace=default

Last Configuration:
COMPONENT   REQUEST-CPU   REQUEST-MEMORY   LIMIT-CPU   LIMIT-MEMORY   
mysql       100m          512Mi            100m        512Mi          

Status:
  Start Time:         Apr 21,2023 19:43 UTC+0800
  Completion Time:    Apr 21,2023 19:46 UTC+0800
  Duration:           2m5s
  Status:             Succeed
  Progress:           3/3
                      OBJECT-KEY                  STATUS    DURATION   MESSAGE                                                                      
                      Pod/mysql-cluster-mysql-0   Succeed   2m3s       Successfully vertical scale: Pod/mysql-cluster-mysql-0 in Component: mysql   
                      Pod/mysql-cluster-mysql-1   Succeed   43s        Successfully vertical scale: Pod/mysql-cluster-mysql-1 in Component: mysql   
                      Pod/mysql-cluster-mysql-2   Succeed   87s        Successfully vertical scale: Pod/mysql-cluster-mysql-2 in Component: mysql   

Conditions:
LAST-TRANSITION-TIME         TYPE              REASON                            STATUS   MESSAGE                                                                                                
Apr 21,2023 19:43 UTC+0800   Progressing       OpsRequestProgressingStarted      True     Start to process the OpsRequest: mysql-cluster-verticalscaling-xz5xb in Cluster: mysql-cluster         
Apr 21,2023 19:43 UTC+0800   Validated         ValidateOpsRequestPassed          True     OpsRequest: mysql-cluster-verticalscaling-xz5xb is validated                                           
Apr 21,2023 19:43 UTC+0800   VerticalScaling   VerticalScalingStarted            True     Start to vertical scale resources in Cluster: mysql-cluster                                            
Apr 21,2023 19:46 UTC+0800   Succeed           OpsRequestProcessedSuccessfully   True     Successfully processed the OpsRequest: mysql-cluster-verticalscaling-xz5xb in Cluster: mysql-cluster   

Warning Events: <none>`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 12 && TypewriterDiv}
        </span>
        {cliVisible[`visible_13`] && <>
          <pre className='new_pre'>
            {`Backup backup-default-mysql-cluster-20230421195300 created successfully, you can view the progress:
	kbcli cluster list-backups --name=backup-default-mysql-cluster-20230421195300 -n default`}
          </pre>
          {text}
        </>}


        <span className='cli' >
          {strIndex > 13 && TypewriterDiv}
        </span>
        {cliVisible[`visible_14`] && <>
          <pre className='new_pre'>
            {`NAME                                          CLUSTER         TYPE       STATUS      TOTAL-SIZE   DURATION   CREATE-TIME                  COMPLETION-TIME              
backup-default-mysql-cluster-20230421195300   mysql-cluster   snapshot   Completed   1Gi          24s        Apr 21,2023 19:53 UTC+0800   Apr 21,2023 19:53 UTC+0800`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 14 && TypewriterDiv}
        </span>
        {cliVisible[`visible_15`] && <>
          <pre className='new_pre'>
            {`Cluster new-cluster created`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 15 && TypewriterDiv}
        </span>
        {cliVisible[`visible_16`] && <>
          <pre className='new_pre'>
            {`NAME                         NAMESPACE   CLUSTER-DEFINITION   VERSION             TERMINATION-POLICY   STATUS     CREATED-TIME                 
mysql-cluster                default     apecloud-mysql       ac-mysql-8.0.30     WipeOut              Running    Apr 18,2023 11:31 UTC+0800   
new-cluster                  default     apecloud-mysql       ac-mysql-8.0.30     WipeOut              Creating   Apr 21,2023 20:01 UTC+0800   
`}
          </pre>
          {text}
        </>}

        <span className='cli' >
          {strIndex > 16 && TypewriterDiv}
        </span>
        {cliVisible[`visible_17`] && <>
          <div>{mysql} SHOW DATABASES;</div>
          <pre className='new_pre'>
            {` Connect to instance new-cluster-mysql-0: out of new-cluster-mysql-0(leader), new-cluster-mysql-1(follower), new-cluster-mysql-2(follower)
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 35
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
          {strIndex > 17 && TypewriterDiv}
        </span>
        {cliVisible[`visible_18`] && <>
          <pre className='new_pre'>
            {`Database changed`}
          </pre>
          {mysql}
        </>}

        <span className='cli' >
          {strIndex > 18 && TypewriterDiv}
        </span>
        {cliVisible[`visible_19`] && <>
          <pre className='new_pre'>
            {`+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
| flight_id | flight_number | airline           | depart_from | arrive_at   | depart_time         | arrive_time         | price   |
+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
|         1 | CA123         | Air China         | Beijing     | New York    | 2023-04-22 07:01:07 | 2023-04-22 15:01:07 | 1000.00 |
|         2 | UA456         | United Airlines   | New York    | Los Angeles | 2023-04-23 09:01:07 | 2023-04-23 11:01:07 |  500.00 |
|         3 | DL789         | Delta Air Lines   | Los Angeles | Tokyo       | 2023-04-24 09:01:07 | 2023-04-24 16:01:07 | 1200.00 |
|         4 | AA246         | American Airlines | Tokyo       | London      | 2023-04-25 12:01:07 | 2023-04-26 14:01:07 |  800.00 |
|         5 | CX357         | Cathay Pacific    | London      | Hong Kong   | 2023-04-26 07:01:07 | 2023-04-27 11:01:07 |  900.00 |
+-----------+---------------+-------------------+-------------+-------------+---------------------+---------------------+---------+
5 rows in set (0.00 sec)`}
          </pre>
          {mysql}
        </>}
       
        <span className='cli' >
          {strIndex > 19 && TypewriterDiv}
        </span>
        {cliVisible[`visible_20`] && <>
          <pre className='new_pre'>Bye
          </pre>
          {text}
        </>}

      </div>

      <button
        className={classNames({
          "btn": true,
          "next-btn": true,
          "is_hidden": cliVisible[`visible_20`] == true,
        })}
        disabled={btnDisable}
        onClick={() => onButtonClick()}>{ButtonTextArray[strIndex]}
      </button>

    </div>
  );
}