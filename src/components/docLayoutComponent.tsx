// @ts-nocheck
import React, { useState, useEffect } from 'react';
import DocPage from "@theme/DocPage"
import KubeChat from '../components/kubechat';
import classNames from 'classnames';
import styles from '../pages/index.module.less';

export default (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [chatReady, setChatReady] = useState<boolean>(false);

  return (
    <>
      <DocPage {...props} />
      <div
          className={classNames({
            [styles.kubechat]: true,
            [styles.kubechatOpen]: open,
            [styles.kubechatReady]: chatReady
          })}
        >
          <KubeChat
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onReady={() => {
              setChatReady(true);
            }}
          />
        </div>
    </>
  )
}