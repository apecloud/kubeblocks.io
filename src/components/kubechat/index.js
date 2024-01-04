import React, { useRef, useEffect } from 'react';
import kubechatcomponent from 'kubechatcomponent';

const Kubechat = (options={}) => {
    const {onOpen, onClose, onReady} = options;
    const ref = useRef();
    kubechatcomponent.mount();

    const customstyle = `
    :host{
      --text-color: #272727;
      --text-color-tips: #aaa;
      --text-color-input: #272727;
      --text-color-score: #777;
      --bg-color-note: #aaa;
      --bg-color-logo: #4b88ff;
      --bg-color-ai:  #4b88ff;
      --border-color-action: #ccc;
      --bg-color-header: #ACC0E0;
      --bg-color-ref: rgba(0,0,0,0.1);
      --bg-color-answer: #9ABCFF;
      --bg-color-question: #BCD6FC;
    }

    .flying .thinking i {
        background:  #4b88ff;
    }

    .bot {
        box-shadow: -9px 0 28px 8px rgba(0, 0, 0, 0.2), -6px 0 16px 0 rgba(0, 0, 0, 0.2), -3px 0 6px -4px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.2)
    }

    .bot .hd {
        background: #4b88ff;
    }

    .ask input {
        border: 1px #BCD6FC solid;
    }

    .ask input:focus {
        border: 1px #9ABCFF solid;
        box-shadow: 0 0 4px 2px rgba(172, 194, 239, 1);
    }

    .ask::after {
        background: url(https://cdn.kubeblocks.com/img/send.svg) center center/80% no-repeat;
    }
    `


    useEffect(() => {
        if(!ref.current) return;
        const x = ref.current;

        x.addEventListener('open',(e)=>{
            onOpen(e);
        });
        x.addEventListener('close',(e)=>{
            onClose(e);
        });
        x.addEventListener('ready',(e)=>{
            onReady(e);
        });
    }, [ref.current])
    
    return (
        <kube-chat customstyle={customstyle} ref={ref} botid='bot49ffa0425f54383c' title='KB Little Assistant' />
    );

};

export default Kubechat;
