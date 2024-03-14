import React, { useEffect, useState } from 'react';
import './chatInput.less';
import KubeChat from '../components/kubechat';
import classNames from 'classnames';
import styles from './index.module.less';

const TypeWriterInput = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [chatReady, setChatReady] = useState<boolean>(false);
  const [currentTips, setTips] = useState<string>('');

  useEffect(() => {
    document.getElementById('btn').style.display = 'none'
    const chatTips = () => {
      const tips1 = "how to install kubeblocks".split(/\s/);
      const tips2 = "how to create a mysql cluster".split(/\s/);
      const tips3 = "how to start a LLM in my laptop".split(/\s/);
      const dom = document.getElementsByClassName('chat-btn')[0];
      const typing = (tips) => {
        let i = 0;
        let clock = setInterval(() => {
          if (i >= tips.length) {
            clearInterval(clock);
            setTimeout(() => {
              clearInput(tips);
            }, 3000);
          }
          dom.textContent = tips.slice(0, i).join(' ');
          setTips(tips.join(' '))
          i++;
        }, 200);
      };
      const clearInput = (tips) => {
        let i = tips.length;
        let clock = setInterval(() => {
          if (i <= 0) {
            clearInterval(clock);
            setTimeout(() => {
              if (tips === tips1) {
                tips = tips2;
              } else if (tips === tips2) {
                tips = tips3;
              } else {
                tips = tips1;
              }
              typing(tips);
            }, 500);
          }
          dom.textContent = tips.slice(0, i).join(' ');
          i--;
        }, 100);
      };
      typing(tips1);
    };
    chatTips();
  }, []);

  useEffect(() => {
    document.getElementById('btn').style.display = 'inline-flex'
  }, [chatReady]);


  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById('chat').style.display = 'block'
    document.getElementsByTagName('kube-chat')[0].setBotExpand(true);
    document.getElementsByTagName('kube-chat')[0].askQuestion(currentTips)
  };

  return <span className='chat-box'>
    <a id='btn' href="#" onClick={handleClick} className="chat-btn">How to create a MySQL cluster </a>
    <span className='chat-span' id='chat'>
      <span
        className={classNames({
          [styles.kubechat]: true,
          [styles.kubechatOpen]: open,
          [styles.kubechatReady]: chatReady,
        })}
      >
        <KubeChat
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
            document.getElementById('chat').style.display = 'none'
          }}
          onReady={() => {
            setChatReady(true);
          }}
        />
      </span>
    </span>

  </span>
};

export default TypeWriterInput;

