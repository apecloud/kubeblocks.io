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
      const dom = document.getElementsByClassName('chat-btn')[0];
      const Tips = [
        "how to install kubeblocks",
        "how to create a mysql cluster",
        "how to create a postgresql cluster",
        "how to create a redis cluster",
        "how to create a mongodb cluster"
      ];
      const getTips = (idx) => {
        return Tips[idx]?.split(/\s/);
      }
      const typing = (idx) => {
        const tips = getTips(idx);
        let i = 0;
        let clock = setInterval(() => {
          if (i >= tips.length) {
            clearInterval(clock);
            setTimeout(() => {
              clearInput(idx);
            }, 3000);
          }
          dom.textContent = tips.slice(0, i).join(' ');
          setTips(tips.join(' '))
          i++;
        }, 200);
      }
      const clearInput = (idx) => {
        const tips = getTips(idx);
        let i = tips.length;
        let clock = setInterval(() => {
          if (i <= 0) {
            clearInterval(clock);
            setTimeout(() => {
              if (idx < Tips.length - 1) {
                idx += 1;
              } else {
                idx = 0;
              }
              typing(idx);
            }, 500);
          }
          dom.textContent = tips.slice(0, i).join(' ');
          i--;
        }, 100);
      }
      typing(0);
    }
    chatTips();
  }, []);

  useEffect(() => {
    document.getElementById('btn').style.display = chatReady ? 'inline-flex' : 'none'
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

