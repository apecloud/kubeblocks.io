import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './typeWriter.less';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

export default () => {
  
  const [shadow, setShadow] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [strIndex, setStrIndex] = useState(0);
  const [cliVisible, setCliVisible] = useState({
    'visible_1': false,
    'visible_2': false,
    'visible_3': false,
    'visible_4': false,
  });

  //默认展示
  const MSG = `
  |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|\n
  |                      https://kubeblocks.io                         |\n
  |    An open-source and cloud-neutral DBaaS built with Kubernetes    |\n
  |   Improved productivity, cost-efficiency and business continuity   |\n
  |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|\n
  `;

  //命令前缀
  const text = <>
    <span className="green-text">zxy</span>
    <span className="blue-text">@zhouxinyidembp ~ %</span>
  </>;

  //运行命令数组
  const textArray = [
    'kubectl get appversion',
    'kubectl cluster-info',
    'kubectl get pods --namespace default',
    'kubectl get secret -n openconsole',
  ];

  const onButtonClick = () => {
    if (!btnDisable) {
      setStrIndex(strIndex + 1);
      setBtnDisable(true);
    }
  };

  //打字机配置
  const TypewriterDiv = <Typewriter
    options={{
      cursor: "", //取消光标闪烁
      delay: 100,
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(textArray[strIndex - 1])
        .pauseFor(300)
        .callFunction(() => {
          setTimeout(() => {
            setCliVisible({ ...cliVisible, [`visible_${strIndex}`]: true });
            setBtnDisable(false);
            let div = document.getElementById('writer');
            if(div.scrollHeight > div.offsetHeight){
              div.scrollTop = div.scrollHeight;
            }
          }, 500);
        })
        .start();
    }}
  />;

  return (
    <Layout>
      <div className='box' >
        <h2 className="centered-title">Try KubeBlocks in the browser</h2>
        <h4 className="centered-des">Deploy Server for Mysql on Kubernetes </h4>
        <button
          disabled={btnDisable}
          className={classNames({
            "btn": true,
            "is_hidden": cliVisible[`visible_1`]
          })}
          onClick={() => onButtonClick()}>Start
        </button>
        <div className='writer' id='writer' >
          <pre className='new_pre'>{MSG}</pre>
          {text}

          <span className='cli' >
            {strIndex > 0 && TypewriterDiv}
          </span>
          {cliVisible[`visible_1`] && <>
            <pre className='new_pre'>
              NAME           PHASE       AGE<br />
              wesql-8.0.30   Available   9d<br />
            </pre>
            {text}
          </>}

          <span className='cli' >
            {strIndex > 1 && TypewriterDiv}
          </span>
          {cliVisible[`visible_2`] && <>
            <pre className='new_pre'>
              Kubernetes control plane is running at https://0.0.0.0:51443<br />
              CoreDNS is running at https://0.0.0.0:51443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy<br />
              Metrics-server is running at https://0.0.0.0:51443/api/v1/namespaces/kube-system/services/https:metrics-server:https/proxy<br />
            </pre>
            {text}
          </>}

          <span className='cli' >
            {strIndex > 2 && TypewriterDiv}
          </span>
          {cliVisible[`visible_3`] && <>
            <pre className='new_pre'>
              NAME                          READY   STATUS    RESTARTS       AGE<br />
              kubeblocks-648577bc96-g8shw   1/1     Running   1 (107m ago)   8d<br />
            </pre>
            {text}
          </>}

          <span className='cli' >
            {strIndex > 3 && TypewriterDiv}
          </span>
          {cliVisible[`visible_4`] && <>
            <pre className='new_pre'>
              NAME                            TYPE                                  DATA   AGE<br />
              default-token-ss22r             kubernetes.io/service-account-token   3      9d<br />
              openconsole-admin-token-gwq8r   kubernetes.io/service-account-token   3      9d<br />
            </pre>
            {text}
          </>}

        </div>

        <button
          className={classNames({
            "btn": true,
            "next-btn": true,
            "is_hidden": cliVisible[`visible_4`] || cliVisible[`visible_1`] == false,
          })}
          disabled={btnDisable}
          onClick={() => onButtonClick()}>Next command
        </button>

      </div>
    </Layout>
  );
}