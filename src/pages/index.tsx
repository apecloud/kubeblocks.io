import React, { useState, useEffect } from 'react';
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
      message: 'Enhanced stateful workloads'
    }),
    img: 'img/one.webp',
    alt: 'Enhanced stateful workloads',
    connect: 'img/connect1.webp',
    description: [
      translate({
        id: 'homepage.features.feature0.description0',
        message: 'KubeBlocks extends K8s StatefulSet capability with ReplicationSet and ConsensusSet workloads. They are aware of different roles in a database cluster, and choose the best update strategy with minimal impact on business continuity, monitoring data replication status and automatically fixing errors and lags.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Rich day 2 operations'
    }),
    img: 'img/three.webp',
    alt: 'Rich day 2 operations',
    connect: 'img/connect2.webp',
    description: [
      translate({
        id: 'homepage.features.feature1.description0',
        message: 'KubeBlocks handles the complexity and provides state-of-the-art management experience for MySQL, PostgreSQL, Redis, and MongoDB. It provides on-demand provisioning, scaling, monitoring, backup, and recovery, reducing the risk of database management and the time required to go from development to production.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Powerful and intuitive CLI',
    }),
    img: 'img/four.webp',
    alt: 'Powerful and intuitive CLI',
    connect: undefined,
    description: [
      translate({
        id: 'homepage.features.feature2.description0',
        message: 'ClickOps is known for being time-consuming and error-prone. KubeBlocks offers kbcli for productivity. You can install KubeBlocks and launch a playground environment on a desktop or cloud with a single command. kbcli simplifies the learning curve of using data infra in Kubernetes.',
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
  const [isShow, setShow] = useState(true);
  const [isMedium, setMedium] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShow(document.body.clientWidth > 992);
      setMedium(document.body.clientWidth > 880);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className={styles.bg}>
        {/* <a href='https://github.com/apecloud/kubeblocks' target='_blank' className={styles.git}>
          <span className={styles.text}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Star us on GitHub</span>
        </a> */}
        <div className={styles.home}>
          <div className={styles.banner}>
            <QueueAnim duration={500} type={['left', 'right']}>
              <div className={styles.text}>
                <h1 key='p1'>The cloud native </h1>
                <h1 key='p2'>database control plane</h1>
                <p key='p3'>Any Database. Anywhere.</p>
                <div key='p7' className={styles.actions}>
                  <Link
                    className={styles.actionItem}
                    to="/docs/preview/user_docs/overview/introduction">
                    <span className={styles.btnText}>View documentation</span>
                  </Link>
                  <a
                    className={styles.actionItem}
                    href="https://console.kubeblocks.io/" target="" rel="noreferrer noopener" >
                    <span className={styles.btnText}>KubeBlocks Cloud</span>
                  </a>
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
            {isMedium ? <div className={styles.context}>
              <p>Building data infrastructure on K8s becomes increasingly popular. However, the most prominent obstacles are</p>
              <p>the difficulties of integrating with cloud providers, the lack of reliable operators, and the steep learning</p>
              <p>curve of K8s. KubeBlocks offers an open-source option that helps application developers and platform</p>
              <p>engineers set up feature-rich services for RDBMS, NoSQL, streaming and analytical systems.</p>
              <p>No need to be a K8s professional, anyone can set up a full-stack, </p>
              <p>production-ready data infrastructure in minutes.</p>
            </div> : <div className={styles.context}>
              <p>Building data infrastructure on K8s becomes increasingly popular. However, the most prominent obstacles are the difficulties of integrating with cloud providers, the lack of reliable operators, and the steep learning curve of K8s.
                KubeBlocks offers an open-source option that helps application developers and platform engineers set up feature-rich services for RDBMS, NoSQL, streaming and analytical systems. </p>
              <p>No need to be a K8s professional, anyone can set up a full-stack, production-ready data infrastructure in minutes.</p>
            </div>}
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
              {connect && isShow ? <img className={styles.connect} src={connect} alt='pipeline img' /> : null}
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
          <a
            className={styles.actionItem}
            href="mailto:marcom@apecloud.com" target="_blank" rel="noreferrer noopener" >
            <span className={styles.btnText}>Book a demo</span>
          </a>

        </div>
      </div>
    </Layout>
  )
}
