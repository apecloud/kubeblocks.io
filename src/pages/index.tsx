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
    img: 'img/231.png',
    description: [
      translate({
        id: 'homepage.features.feature0.description1',
        message: 'With our cloud-prem solutions, you can potentially fully integrate and control the application into your own account. As the data resides within your account, you can audit and manage it without the tedious and endless efforts of having to build and manage on-prem software yourselves, and thus carry out your data in compliance and get a better quality of service.',
      }),
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
        message: 'With the ideology and process of IaC, KubeBlocks has made a high degree of abstraction for cluster topology and data synchronization, allowing users to customize cluster topology with YAML configuration, and describe the basic topology unit by replication dependency. Thus, any open-source data product can seamlessly access KubeBlocks in the operatorless, declarative, and configurable manner. ',
      }),
    ]
  },
];

const FeatureList = [{
  title: 'MySQL supported',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Scale-Any-Size-Home-1.png'
}, {
  title: 'Instance lifecycle management',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Feature-Disaster-Recovery.png'
}, {
  title: 'Resource over-allocation',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Free-Backups-Icon.png'
}, {
  title: 'Multi-AZ deployment',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Super-User-Access-Control-S.png'
}, {
  title: 'Kubernetes native',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Free-24-7-Support-Icon.png'
}, {
  title: 'Easy to use CLI tool',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Slow-Query-Analysis-S.png'
}, {
  title: 'Automated task backup',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Virtual-Private-Cloud-Support-S.png'
}, {
  title: 'Built-in monitoring alerts',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Feature-Log-Rotations.png'
}, {
  title: 'Transmission encryption',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Feature-One-Click-Restore.png'
}, {
  title: 'Encryption at rest',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-High-Performance-Clusters-Icon.png'
}, {
  title: 'Pricing calculator',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Feature-Enable-SSL.png'
}, {
  title: '?',
  icon: 'https://scalegrid.io/wp-content/uploads/2022/04/DBaaS-Reserved-Instances-Icon.png'
}]

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
                  id="homepage.banner.subtitle1">
                  Open source and cloud-neutral DBMS built with Kubernets
                </Translate>
              </h2>
              <h3 key={3}>
                <Translate
                  id="homepage.banner.subtitle2">
                  Improved productivity, cost-efficiency and business continuity
                </Translate>
              </h3>
              
              <div key={4} className={styles.actions}>
                <Link
                  className={styles.actionItem}
                  to="/docs/overview">
                  Get a demo
                </Link>
                <a target="_blank" className={styles.actionItem} href="https://github.com/apecloud/">Find us in GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
              </div>
              <p key={5} className={styles.description}>
                <Translate
                  id="homepage.banner.description">
                  Adopting the ideas of IaC (infrastructure as code) and FinOps, KubeBlocks mitigates the complexity and costs of data infrastructure management by leveraging our know-how and increasing your cloud resource utilization rate. 
                </Translate>
              </p>
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
          <div className={styles.introductions}>
            {IntroductionList.map(({ title, img, description }, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.img} ><img src={img} /></div>
                <div className={styles.content}>
                  <h1>{title}</h1>
                  {description.map(item => <p>{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.features}>
          <div className="container">
            <h1>Features</h1>
            {/* <p>支持MySQL，实例生命周期管理，资源超额分配，多可用区部署，K8S原生，易用的CLI工具，自动备份任务，内置监控告警，传输加密，静态加密，成本计算器</p> */}
            <ul className={styles.items}>
              {FeatureList.map((item) => {
                return (
                  <li className={styles.item}>
                    <img src={item.icon} />
                    <div className={styles.title}>{item.title}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </main>
    </Layout>
  );
}
