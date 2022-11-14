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
    img: 'img/pic_FinOps.svg',
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
  title: 'Resource overcomitted',
  icon: 'img/icon_Resource.png'
}, {
  title: 'Multi-AZ deployment',
  icon: 'img/icon_Multi-AZ.png'
}, {
  title: 'Kubernetes native',
  icon: 'img/icon_Kubernetes.png'
}, {
  title: 'Easy to use CLI tool',
  icon: 'img/icon.png'
}, {
  title: 'Automated backup',
  icon: 'img/icon_Automated.png'
}, {
  title: 'Built-in monitoring',
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
},{
  title: 'More',
  icon: 'img/icon_More.png'
}]

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.bg}>
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
                      Get a Demo
                    </Link>
                    <Link
                      className={`${styles.actionItem}`}
                      to="/docs/overview">
                      <img src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E" />
                      GitHub
                    </Link>
                  </div>
                </QueueAnim>
                <QueueAnim duration={1000}>
                  <img key='img1' className={styles.img} src="img/pic_KubeBlocks.png" />
                </QueueAnim>
              </div>
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
      </div>
    </Layout>
  );
}