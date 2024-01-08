import React from "react"
import DocItem from "@theme/DocItem";
import BackToTopButton from "@theme/BackToTopButton";
import DocSidebar from "@theme/DocSidebar";

export default (props) => {

  return (
    <>
      <DocItem route={props.route} content={props.content} />
      <BackToTopButton />
    </>
  )
}