import React from 'react';
import Link from '@docusaurus/Link';
import ScrollAnim from 'rc-scroll-anim';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';
import Translate, { translate } from '@docusaurus/Translate';

const ScrollParallax = ScrollAnim.Parallax;
type FeatureItem = {
  title: string;
  img: string;
  description: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'Cloud-prem database solutions'
    }),
    img: 'img/230.png',
    description: [
      translate({
        id: 'homepage.features.feature0.description1',
        message: 'Cloud-prem means the optimized utilization of your own infrastructure and cloud assets, and the enhanced security and compliance.',
      }),
      translate({
        id: 'homepage.features.feature0.description2',
        message: 'With our cloud-prem solutions, you can potentially fully integrate and control the application into your own account. As the data resides within your account, you can audit and manage it without the tedious and endless efforts of having to build and manage on-prem software yourselves, and thus carry out your data in compliance and get a better quality of service.',
      })
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Built-in FinOps practice for database'
    }),
    img: 'img/231.png',
    description: [
      translate({
        id: 'homepage.features.feature1.description1',
        message: 'Conventional infrastructure cost management is simply not effective when working within the cloud, KubeBlocks adopts the ideology and framework of FinOps to increase the CPU usage twice as much as its original rate by resource scheduling optimization and enables organizations to penetrate multi-cloud consumption data so as to get maximum business value with data-driven spending decisions.',
      }),
      translate({
        id: 'homepage.features.feature1.description2',
        message: 'Also, you can leverage our know-how and features to avoid the human resource and competency costs that organizations otherwise have to obtain. Business opportunities can be addressed in a more robust and timely fashion.',
      })
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Infrastructure as Code',
    }),
    img: 'img/232.png',
    description: [
      translate({
        id: 'homepage.features.feature2.description1',
        message: 'IaC means managing and provisioning of infrastructure while also improving consistency and reducing errors by reusable and reviewable bits of code instead of with manual processes. ',
      }),
      translate({
        id: 'homepage.features.feature2.description2',
        message: 'With the ideology and process of IaC, KubeBlocks has made a high degree of abstraction for cluster topology and data synchronization, allowing users to customize cluster topology with YAML configuration, and describe the basic topology unit by replication dependency. Thus, any data product can seamlessly access KubeBlocks in the operatorless, declarative, and configurable manner. ',
      })
    ]
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <header className={styles.banner}>
        <div className="container">
          <div className={styles.inner}>
            <QueueAnim className={styles.left} duration={500} type={['left', 'right']}>
              <h1 key={1}>
                <Translate
                  id="homepage.banner.title">
                  KubeBlocks
                </Translate>
              </h1>
              <h2 key={2}>
                <Translate
                  id="homepage.banner.subtitle">
                  Improved productivity, cost-efficiency and business continuity with our open source and cloud-neutral database management system built with Kubernetes
                </Translate>
              </h2>
              <p key={3}>
                <Translate
                  id="homepage.banner.description">
                  Adopting the ideas of IaC (infrastructure as code) and FinOps, Kubeblocks mitigates the complexity and costs of data infrastructure management by leveraging our know-how to manage databases and increasing your cloud utilization rate. 
                </Translate>
              </p>
              <div key={4} className={styles.actions}>
                <Link
                  className={styles.actionItem}
                  to="/docs/overview">
                  Get a demo
                </Link>
                <a target="_blank" className={styles.actionItem} href="https://github.com/apecloud/">Find us in GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
              </div>
            </QueueAnim>

            <QueueAnim duration={1000}>
              <div key={1} className={styles.right}>
                <img src="img/banner.png" />
              </div>
            </QueueAnim>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className={styles.features}>
            {FeatureList.map(({ title, img, description }, idx) => (
              <ScrollParallax className={styles.item} key={idx} animation={{ left: -40 }}>
                <div className={styles.img} ><img src={img} /></div>
                <div className={styles.content}>
                  <h1>{title}</h1>
                  {description.map(item => <p>{item}</p>)}
                </div>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
