import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

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