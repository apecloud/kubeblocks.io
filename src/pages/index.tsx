import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';
import Translate, { translate } from '@docusaurus/Translate';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import TypeWriter from './typeWriter';
import TypeWriterInput from './chatInput';
import classNames from 'classnames';


type IntroductionItem = {
  title: string;
  img: string;
  alt: string,
  connect: string | undefined;
  description: string[];
};

type CardItem = {
  title: string;
  img: string;
  alt: string,
  description: string[];
};

const Cards: CardItem[] = [
  {
    title: translate({
      id: 'homepage.cards.card0.title',
      message: 'Beyond StatefulSet'
    }),
    img: 'img/rocket-launch.png',
    alt: 'Beyond StatefulSet',
    description: [
      translate({
        id: 'homepage.cards.card0.description0',
        message: 'KubeBlocks introduces InstanceSet, an improved StatefulSet that manages databases in a specific role order to enhance availability. Besides, InstanceSet supports heterogeneous replicas with varied resources and configurations, allows in-place Pod updates, and takes individual database instances offline for proactive maintenance.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.cards.card1.title',
      message: 'Unified API'
    }),
    img: 'img/box-check.png',
    alt: 'Unified API',
    description: [
      translate({
        id: 'homepage.cards.card1.description1',
        message: 'KubeBlocks provides a unified API for operating and managing different types of databases, significantly reducing the complexity and learning curve associated with database management. This standardized approach ensures that administrators can efficiently interact with various database systems in the same way, streamlining operations and improving productivity.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.cards.card2.title',
      message: 'Extensible Addon'
    }),
    img: 'img/puzzle.png',
    alt: 'Extensible Addon',
    description: [
      translate({
        id: 'homepage.cards.card2.description2',
        message: `KubeBlocks' standardized API design provides robust extensibility, enabling low-code integration for both in-house and open-source databases. This approach eliminates the need for extensive custom Golang coding, turns your database knowledge into productivity efficiently, and significantly speeds up development times.
KubeBlocks currently supports over 40 database engines. Welcome to join our community.`,
      }),
    ],
  },
]

const IntroductionList: IntroductionItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'High Availability'
    }),
    img: 'img/one.webp',
    alt: 'High Availability',
    connect: 'img/connect1.webp',
    description: [
      translate({
        id: 'homepage.features.feature0.description0',
        message: 'KubeBlocks provides a decentralized, Kubernetes-native high availability architecture, perfect for managing large-scale database clusters, particularly MySQL and Redis primary-replica clusters. Its design enhances fault tolerance. Additionally, its lightweight nature reduces resource strain, boosting overall efficiency. This makes KubeBlocks highly effective for handling extensive database clusters.',
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Flexible Cluster Topology'
    }),
    img: 'img/three.webp',
    alt: 'Flexible Cluster Topology',
    connect: 'img/connect2.webp',
    description: [
      translate({
        id: 'homepage.features.feature1.description0',
        message: `KubeBlocks' modular design allows you to customize cluster topologies according to your needs. This flexibility lets you create database clusters tailored to specific requirements, enhancing system adaptability and functionality. For instance, when creating a Redis cluster, you can choose from single-node, primary-replica, and Redis Cluster topologies, and configure them with your preferred proxy components.`,
      }),
    ],
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'Versatile Network Modes',
    }),
    img: 'img/four.webp',
    alt: 'Versatile Network Modes',
    connect: undefined,
    description: [
      translate({
        id: 'homepage.features.feature2.description0',
        message: 'KubeBlocks offers multiple network modes, allowing you to select network configurations when creating database clusters. For example, MongoDB can be launched using host or container network modes. This flexibility ensures efficient communication and performance optimization across various environments, adapting to complex network architectures and requirements.',
      }),
    ]
  },
];

const FeatureList = [{
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
      setMedium(document.body.clientWidth > 992);
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
                <h1 key='p1'>Run Any Database </h1>
                <h1 key='p2'>on Kubernetes</h1>
                <p key='p3'><TypeWriterInput /></p>

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
            <h2>Run Databases on Kubernetes? Run with KubeBlocks.</h2>
            {isMedium ? <div className={styles.context}>
              <p>KubeBlocks is crafted for managing databases on Kubernetes, designed by domain experts with decades of experience.</p>
              <p>It supports a wide range of stateful workloads, including relational databases, NoSQL, message queues.</p>
              <p>By streamlining operations, enhancing flexibility, and offering extensions, KubeBlocks makes database </p>
              <p>management easier in cloud-native environments.</p>
            </div> : <div className={styles.context}>
              <p>KubeBlocks is crafted for managing databases on Kubernetes, designed by domain experts with decades of experience. It supports a wide range of stateful workloads, including relational databases, NoSQL, message queues. By streamlining operations, enhancing flexibility, and offering extensions, KubeBlocks makes database management easier in cloud-native environments.</p>
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
        <div className={styles.cards}>
          {Cards.map(({ title, img, description, alt }, index) => (
            <div className={styles.item} key={`card_${index}`}>
              <div className={styles.card} >
                <img src={img} alt={alt} />
                <div className={styles.content}>
                  <h1>{title}</h1>
                  {description.map((item, index) => <p key={`des_${index}`}>{item}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <TypeWriter />
      </div> */}
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

