import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';
import Translate, { translate } from '@docusaurus/Translate';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import TypeWriter from './typeWriter';

type IntroductionItem = {
  title: string;
  img: string;
  alt: string,
  connect: string | undefined;
  description: string[];
};

const IntroductionList: IntroductionItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'Enhanced support for running stateful applications'
    }),
    img: 'img/one.webp',
    alt: 'Enhanced support for running stateful applications',
    connect: 'img/connect1.webp',
    description: [
      translate({
        id: 'homepage.features.feature0.description0',
        message: 'KubeBlocks extends K8s StatefulSet capability with ReplicationSet and ConsensusSet workloads. They are aware of different roles in a database cluster, and choose the best update strategy with minimal impact on business continuity. Kubeblocks also supports cross-AZ topology and horizontal scaling, monitors data replication status and automatically fixes errors and lags.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Full lifecycle Day 2 Automation'
    }),
    img: 'img/three.webp',
    alt: 'Full lifecycle Day 2 Automation',
    connect: 'img/connect2.png',
    description: [
      translate({
        id: 'homepage.features.feature1.description0',
        message: 'KubeBlocks handles the complexity and provides state-of-the-art management experience for the most popular open-source database engines and streaming processing platforms. It provides on-demand provisioning, scaling, monitoring, backup, recovery, and migration, reducing the hassle and risk of database management and the time required to go from development to production.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Concise and intuitive CLI',
    }),
    img: 'img/four.webp',
    alt: 'Concise and Intuitive CLI',
    connect: undefined,
    description: [
      translate({
        id: 'homepage.features.feature2.description0',
        message: 'ClickOps is known for being time-consuming and error-prone. KubeBlocks offers kbcli for productivity. You can install KubeBlocks and launch a playground environment on a desktop or cloud with a single command. It also integrates popular database clients and benchmark tools to access the database from the terminal and switch to the web browser for the monitoring dashboard. kbcli simplifies the learning curve of using databases in Kubernetes.',
      }),
    ]
  },
];

const FeatureList = [{
  icon: 'img/icon-03.png'
}, {
  icon: 'img/icon-04.png'
}, {
  icon: 'img/icon-05.png'
}, {
  icon: 'img/icon-06.png'
}, {
  icon: 'img/icon-07.png'
}, {
  icon: 'img/icon-08.png'
}, {
  icon: 'img/icon-09.png'
}, {
  icon: 'img/icon-10.png'
}, {
  icon: 'img/icon-11.png'
}, {
  icon: 'img/icon-12.png'
}, {
  icon: 'img/icon-13.png'
}, {
  icon: 'img/icon-14.png'
}, {
  icon: 'img/icon-15.png'
}, {
  icon: 'img/icon-16.png'
}, {
  icon: 'img/icon-17.png'
}]

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.bg}>
        <div className={styles.home}>
          <div className={styles.banner}>
            <QueueAnim duration={500} type={['left', 'right']}>
              <div className={styles.text}>
                <h1 key='p1'>The cloud native</h1>
                <h1 key='p2'>data infrastructure</h1>
                <p key='p3'>Install, create, connect, and you have it all.</p>
                <div key='p7' className={styles.actions}>
                  <Link
                    className={`${styles.actionItem}`}
                    to="/docs/preview/user_docs/introduction">
                    Get started on Github
                  </Link>
                  <Link
                    className={`${styles.actionItem}`}
                    to="/docs/preview/user_docs/introduction">
                    Get a Demo
                  </Link>
                </div>
              </div>
            </QueueAnim>
            <QueueAnim duration={1000}>
              <LazyLoadImage key='img1' className={styles.img} src="img/bg.webp" alt='Background image of kubeblocks' />
            </QueueAnim>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.content}>
            <h1>Why you need KubeBlocks</h1>
            <div className={styles.context}>
              <div>Kubernetes is the future. Building a secure, reliable, and cost-effective data infrastructure on K8s becomes increasingly popular. However, the difficulties of integrating with cloud providers, the lack of high-quality K8s operators, and the steep learning curve of K8s are the most prominent obstacles.</div>
              <div>KubeBlocks solves these problems and offers an open-source option that helps application developers and platform engineers set up feature-rich services for relational databases, NoSQL databases, KV stores, caches, and stream-processing platforms.</div>
              <div>No need to be a K8s professional, anyone can set up a full-stack, production-ready data infrastructure in minutes.</div>
            </div>
            <div className={styles.text}>Created by <span>ApeCloud</span></div>
          </div>
        </div>
        <div className={styles.introductions}>
          {IntroductionList.map(({ title, img, description, connect, alt }, index) => (
            <div className={styles.item} key={`list_${index}`}>
              <div className={styles.introduce} >
                <img src={img} alt={alt} />
                <div className={styles.content}>
                  <h1>{title}</h1>
                  {description.map((item, index) => <p key={`des_${index}`}>{item}</p>)}
                </div>
              </div>
              {connect ? <img className={styles.connect} src={connect} alt='pipeline img' /> : null}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TypeWriter />
      </div>
      <div className={styles.features}>
        <div className="container">
          <h1>Features</h1>
          <ul className={styles.items}>
            {FeatureList.map((item, index) => {
              return (
                <li key={`li_${index}`} className={styles.item}>
                  <LazyLoadImage src={item.icon} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
