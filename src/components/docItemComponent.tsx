import React, { useState, useEffect } from 'react';
import DocItem from "@theme/DocItem";
import BackToTopButton from "@theme/BackToTopButton";
import DocSidebar from "@theme/DocSidebar";

import KubeChat from '../components/kubechat';
import classNames from 'classnames';
import styles from '../pages/index.module.less';

export default (props) => {

  const [open, setOpen] = useState<boolean>(false);
  const [chatReady, setChatReady] = useState<boolean>(false);

  return (
    <>
      <DocItem route={props.route} content={props.content} />
      <div>
        <BackToTopButton />
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
      </div>





    </>
  )
}