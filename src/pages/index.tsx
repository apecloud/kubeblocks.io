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
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.feature0.title',
      message: 'Ready for more complex application scenarios'
    }),
    img: 'img/230.png',
    description: translate({
      id: 'homepage.features.feature0.description',
      message: 'Kubelego is ready to meet your requirements for more complex application scenarios, aiming to solve the technical and costs challenges you are faced with.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.feature1.title',
      message: 'Open source and neutral'
    }),
    img: 'img/231.png',
    description: translate({
      id: 'homepage.features.feature1.description',
      message: 'Although current cloud vendors have public data management platforms, they only support a few mainstream databases. Third-party proprietary open source licenses are never fully-supported, because in essence cloud vendors cannot achieve open source and be neutral.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.feature2.title',
      message: 'The requirement of multi-cloud and hybrid cloud management',
    }),
    img: 'img/232.png',
    description: translate({
      id: 'homepage.features.feature2.description',
      message: 'You may use not single cloud platforms (AWS, Axure, Google Cloud) and with self-built cloud platforms (hybrid cloud). And cloud vendors cannot be neutral about open source software. Kubelego provides an easy way for database management and long-term maintenance.',
    })
  },
  {
    title: translate({
      id: 'homepage.features.feature3.title',
      message: 'The chronic problem of data silo',
    }),
    img: 'img/233.png',
    description: translate({
      id: 'homepage.features.feature3.description',
      message:'Kubelego is a unified data management interface. Under a unified management interface, effective unification can be achieved off-line. This is a problem that the current data lake and data warehouse products can not effectively solve, and the data lake itself is another relatively large data silo.',
    }),
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
                  id="homepage.banner.title"
                  description="The homepage banner title">
                  The Database of next generation
                </Translate>
              </h1>
              <h2 key={2}>
                <Translate
                  id="homepage.banner.subtitle"
                  description="The homepage banner subtitle">
                  Build your database as blocks
                </Translate>
              </h2>
              <div key={3} className={styles.actions}>
                <Link
                  className={styles.actionItem}
                  to="/docs/overview">
                  Get Started
                </Link>
                <a target="_blank" className={styles.actionItem} href="https://github.com/apecloud/">GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
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
                  <p>{description}</p>
                </div>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
