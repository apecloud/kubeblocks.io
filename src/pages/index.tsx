import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';
import Translate, { translate } from '@docusaurus/Translate';


type IntroductionItem = {
  title: string;
  img: string;
  connect: string | undefined;
  description: string[];
};

const IntroductionList: IntroductionItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'Cloud-prem with the best of both worlds'
    }),
    img: 'img/one.png',
    connect: 'img/connect1.png',
    description: [
      translate({
        id: 'homepage.features.feature0.description0',
        message: 'Leverage the benefits of both cloud and on-premises computing.',
      }),
      translate({
        id: 'homepage.features.feature0.description1',
        message: 'Take advantage of the scalability, agility, and cost-effectiveness of the cloud.',
      }),
      translate({
        id: 'homepage.features.feature0.description2',
        message: 'Maintain control over sensitive data and applications that need to remain on-premises for regulatory, security, or other reasons.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Day-2 automation for multi-database and analytical software'
    }),
    img: 'img/two.png',
    connect: 'img/connect2.png',
    description: [
      translate({
        id: 'homepage.features.feature1.description1',
        message: 'Combined with our state-of-the-art database management plan for all major database engines, such as MySQL, PostgreSQL, and Redis.',
      }),
      translate({
        id: 'homepage.features.feature1.description1',
        message: 'Streamlines deployment and management processes by providing on-demand provisioning, scaling, patching, and updating, reducing the time it takes to start seeing results.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Easy-to-use and consistent user interface',
    }),
    img: 'img/three.png',
    connect: undefined,
    description: [
      translate({
        id: 'homepage.features.feature2.description1',
        message: 'Makes it easy to start developing by allowing you to launch and manage a database instance through an interactive guided CLI, management console, or Kubernetes-style declarative API.',
      }),
      translate({
        id: 'homepage.features.feature2.description2',
        message: 'Eases the burden of learning different operation styles and increasing development efficiency.',
      }),
    ]
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.bg}>
        <div className={styles.home}>
          <div className={styles.banner}>
            <QueueAnim duration={500} type={['left', 'right']}>
              <div className={styles.title}>
                <h1 key='p1'>Build your data platform </h1>
                <h1 key='p2'>on Kubernetes</h1>
              </div>
              <p key='p3'>Install, create, connect, and you have it all. </p>
            
              <div key='p7' className={styles.actions}>
                <Link
                  className={`${styles.actionItem}`}
                  to="/docs//next/user_docs">
                  Get started
                </Link>
                <Link
                  className={`${styles.actionItem}`}
                  to="/docs/next/user_docs">
                  Demo
                </Link>
              </div>
            </QueueAnim>
            <QueueAnim duration={1000}>
              <img key='img1' className={styles.img} src="img/bg.png" />
            </QueueAnim>
          </div>
          <div className={styles.introductions}>
            {IntroductionList.map(({ title, img, description, connect }, index) => (
              <div className={styles.item} key={`list_${index}`}>
                <div className={styles.introduce} >
                  <div className={styles.img} ><img src={img} /></div>
                  <div className={styles.content}>
                    <h1>{title}</h1>
                    {description.map((item, index) => <p key={`des_${index}`}>{item}</p>)}
                  </div>
                </div>
                {connect ? <img className={styles.connect} src={connect} /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <img src="img/features.png" />
      </div>
    </Layout>
  )
}