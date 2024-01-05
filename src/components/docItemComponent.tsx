import React, { useState, useEffect } from 'react';
import DocItem from "@theme/DocItem";
import BackToTopButton from "@theme/BackToTopButton";
import DocSidebar from "@theme/DocSidebar";

export default (props) => {

  const [open, setOpen] = useState<boolean>(false);
  const [chatReady, setChatReady] = useState<boolean>(false);

  return (
    <>
      <DocItem route={props.route} content={props.content} />
    </>
  )
}