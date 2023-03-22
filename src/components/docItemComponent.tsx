import React from "react"
import DocItem from "@theme/DocItem";
import BackToTopButton from "@theme/BackToTopButton";

export default (props) => {
  return (
    <>
      <DocItem route={props.route} content={props.content}/>
      <BackToTopButton />
    </>
  )
}