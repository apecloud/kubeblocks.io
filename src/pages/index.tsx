import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';
import Translate, { translate } from '@docusaurus/Translate';


type IntroductionItem = {
  title: string;
  img: string;
  description: string[];
};

const IntroductionList: IntroductionItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'Cloud-prem database solutions'
    }),
    img: 'img/pic_Cloud-prem.png',
    description: [
      translate({
        id: 'homepage.features.feature0.description1',
        message: 'Fully integrate and control the application into your own account without the tedious and endless efforts of having to build and manage on-prem software, and thus carry out your data in compliance and get a better quality of service.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Built-in FinOps practice for database'
    }),
    img: 'img/pic_FinOps.png',
    description: [
      translate({
        id: 'homepage.features.feature1.description1',
        message: 'Conventional infrastructure cost management is simply not effective when working within the cloud, KubeBlocks adopts the ideology and framework of FinOps to increase the CPU usage twice as much as its original rate by resource scheduling optimization and enables organizations to penetrate multi-cloud consumption data so as to get maximum business value with data-driven spending decisions.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Infrastructure as Code',
    }),
    img: 'img/pic_Infrastructure as Code.png',
    description: [
      translate({
        id: 'homepage.features.feature2.description1',
        message: 'KubeBlocks has made a high degree of abstraction for cluster topology and data synchronization, allowing users to customize cluster topology with YAML configuration, and describe the basic topology unit by replication dependency. ',
      }),
      translate({
        id: 'homepage.features.feature2.description2',
        message: 'Any open-source data product can seamlessly access KubeBlocks in the operatorless, declarative, and configurable manner. ',
      }),
    ]
  },
];

const FeatureList = [{
  title: 'MySQL supported',
  icon: 'img/icon_MySQL.png'
}, {
  title: 'Instance lifecycle management',
  icon: 'img/icon_Instance.png'
}, {
  title: 'Resource over-allocation',
  icon: 'img/icon_Resource.png'
}, {
  title: 'Multi-AZ deployment',
  icon: 'img/icon_Multi-AZ.png'
}, {
  title: 'Kubernetes native',
  icon: 'img/icon_Kubernetes.png'
}, {
  title: 'Easy to use CLI tool',
  icon: 'img/icon_CLI.png'
}, {
  title: 'Automated task backup',
  icon: 'img/icon_Automated.png'
}, {
  title: 'Built-in monitoring alerts',
  icon: 'img/icon_Built-in.png'
}, {
  title: 'Transmission encryption',
  icon: 'img/icon_TLS／SSL.png'
}, {
  title: 'Encryption at rest',
  icon: 'img/icon_Encryption at rest.png'
}, {
  title: 'Cost calculator',
  icon: 'img/icon_Cost calculator.png'
}, {
  title: 'Stateless block',
  icon: 'img/icon_Stateless block.png'
}, {
  title: 'Stateful block',
  icon: 'img/icon_Stateful block.png'
}, {
  title: 'Consensus block',
  icon: 'img/icon_Consensus block.png'
}, {
  title: 'Replication block',
  icon: 'img/icon_Replication block.png'
}, {
  title: 'Redis',
  icon: 'img/icon_Redis.png'
}, {
  title: 'MongoDB',
  icon: 'img/icon_MongoDB.png'
}, {
  title: 'PostgreSQL',
  icon: 'img/icon_PostgreSQL.png'
}, {
  title: 'ElasticSearch',
  icon: 'img/icon_ElasticSearch.png'
}, {
  title: 'Kafka',
  icon: 'img/icon_Kafka.png'
}]

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.banner}>
          <div className="container">
            <div className={styles.inner}>
              <QueueAnim duration={500} type={['left', 'right']}>
                <h1 key='p1'>KubeBlocks</h1>
                <p key='p2'>An open-source and cloud-neutral</p>
                <p key='p3'>DBaaS with Kubernetes.</p>
                <p key='p4'>Improved <span>productivity</span>, cost-efficiency</p>
                <p key='p5'>and business continuity</p>
                <div key='p6' className={styles.description}>
                  Wanna build your database like playing building blocks?
                </div>
                <div key='p7' className={styles.actions}>
                  <Link
                    className={`${styles.actionItem}`}
                    to="/docs/overview">
                    Get a demo
                  </Link>
                  <Link
                    className={`${styles.actionItem}`}
                    to="/docs/overview">
                    <img  src="img/icon_github.png"/>
                    GitHub
                  </Link>
                </div>
              </QueueAnim>
            </div>
            <QueueAnim duration={1000}>
              <img key='img1' className={styles.img} src="img/pic_KubeBlocks.png" />
            </QueueAnim>
          </div>
        </header>
        <main>
          <div className="container">
            <div className={styles.introductions}>
              {IntroductionList.map(({ title, img, description }, index) => (
                <div className={styles.item} key={`list_${index}`}>
                  <div className={styles.img} ><img src={img} /></div>
                  <div className={styles.content}>
                    <h1>{title}</h1>
                    {description.map((item, index) => <p key={`des_${index}`}>{item}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.features}>
            <div className="container">
              <h1>Features</h1>
              <p>Cloud-prem data service for developer and DBA</p>
              <ul className={styles.items}>
                {FeatureList.map((item, index) => {
                  return (
                    <li key={`li_${index}`} className={styles.item}>
                      <img src={item.icon} />
                      <div className={styles.title}>{item.title}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}