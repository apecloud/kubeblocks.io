import React, { useRef, useEffect } from 'react';

const Kubechat = (options={}) => {
    const {onOpen, onClose, onReady} = options;
    const ref = useRef();

    const customStyle = `
        :host{--bg-color-header: rgba(0,0,0,0.8);}
        .hd,.bd,.ft{backdrop-filter: none;-webkit-backdrop-filter: none;}
        .bd,.ft{background:#1C1E27;}
    `;

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
        <>
            <kube-chat customstyle={customStyle} ref={ref} botid='bot49ffa0425f54383c' title='KB Little Assistant' />
        </>
    );
};

export default Kubechat;
