import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { register, unregister } from '../serviceWork';

const SERVICE_WORK_ENABLE = process.env.NODE_ENV === "production";

if (ExecutionEnvironment.canUseDOM) {
  const TIMESTAMP = document.getElementsByTagName("meta")?.version?.getAttribute("content");
  if (SERVICE_WORK_ENABLE && TIMESTAMP) {
    register({
      swUrl: `/sw.js?t=${TIMESTAMP}`,
      onSuccess: () => {

      },
      onUpdate: () => {

      }
    })
  } else {
    unregister();
  }
}

export default ({ children }) => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build your database like playing blocks.">
    { children }
    </Layout>
  )
}