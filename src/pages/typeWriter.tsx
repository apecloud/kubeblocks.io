import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './typeWriter.less';
import Typewriter from 'typewriter-effect';
import classNames from 'classnames';

export default () => {

  const [btnDisable, setBtnDisable] = useState(false);
  const [strIndex, setStrIndex] = useState(0);
  const [cliVisible, setCliVisible] = useState({
    'visible_1': false,
    'visible_2': false,
  });

  const onButtonClick = () => {
    setStrIndex(strIndex + 1);
    setBtnDisable(true);
  };

  const textArray = [
    '$ kubectl cluster-info',
    '$ kubectl get pods --namespace default',
  ];

  const MSG = `
    |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|\n
    |                      https://kubeblocks.io                         |\n
    |    An open-source and cloud-neutral DBaaS built with Kubernetes    |\n
    |   Improved productivity, cost-efficiency and business continuity   |\n
    |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|\n
    `;

  const TypewriterDiv = <Typewriter
    options={{
      cursor: "", //取消光标闪烁
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(textArray[strIndex - 1])
        .pauseFor(300)
        .callFunction(() => {
          setTimeout(() => {
            setCliVisible({ ...cliVisible, [`visible_${strIndex}`]: true });
            setBtnDisable(false);
          }, 1000);
        })
        .start();
    }}
  />;

  const text = <>
    <span className="green-text">zxy</span>
    <span className="blue-text">@zhouxinyidembp ~ %</span>
  </>;


  return (
    <Layout>
      <div className='box' >
        <button
          disabled={btnDisable}
          className={classNames({
            "btn": true,
            "is_disable": btnDisable
          })}
          onClick={() => onButtonClick()}>Next string
        </button>

        <div className='writer' >
          <pre className='new_pre'>{MSG}</pre>
          {text}
          <span className='cli' >
            {strIndex > 0 && TypewriterDiv}
          </span>
          {cliVisible[`visible_1`] && <>
            <pre className='new_pre'>
              Kubernetes control plane is running at https://0.0.0.0:51443<br />
              CoreDNS is running at https://0.0.0.0:51443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy<br />
              Metrics-server is running at https://0.0.0.0:51443/api/v1/namespaces/kube-system/services/https:metrics-server:https/proxy<br />
            </pre>
            {text}
          </>}
          <span className='cli' >
            {strIndex > 1 && TypewriterDiv}
          </span>
          {cliVisible[`visible_2`] && <>
            <pre className='new_pre'>
            NAME                          READY   STATUS    RESTARTS       AGE<br />
            kubeblocks-648577bc96-g8shw   1/1     Running   1 (107m ago)   8d<br />
            </pre>
            {text}
          </>}
        </div>
      </div>
    </Layout>
  );
}