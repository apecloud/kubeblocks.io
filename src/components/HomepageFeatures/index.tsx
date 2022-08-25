import React from 'react';
import styles from './index.module.less';
import ScrollAnim from 'rc-scroll-anim';

const ScrollParallax = ScrollAnim.Parallax;

type FeatureItem = {
  title: string;
  img: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ready for more complex application scenarios',
    img: '230.jpeg',
    description: 'Kubelego is ready to meet your requirements for more complex application scenarios, aiming to solving the technical and costs challenges you are faced with.',
  },
  {
    title: 'Open source and neutral',
    img: '231.jpeg',
    description: 'Although current cloud vendors have public data management platforms, they only support a few mainstream databases. Third-party proprietary open source licenses are never fully-supported, because in essence cloud vendors cannot achieve open source and be neutral.',
  },
  {
    title: 'The requirement of multi-cloud and hybrid cloud management',
    img: '232.jpeg',
    description: 'You may use not single cloud platforms (AWS, Axure, Google Cloud) and with self-built cloud platforms (hybrid cloud). And cloud vendors cannot be neutral about open source software. Kubelego provides an easy way for database management and long-term maintenance.',
  },
  {
    title: 'The chronic problem of data silo',
    img: '233.jpeg',
    description: 'Kubelego is a unified data management interface. Under a unified management interface, effective unification can be achieved off-line. This is a problem that the current data lake and data warehouse products can not effectively solve, and the data lake itself is another relatively large data silo.',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container">
      {FeatureList.map(({ title, img, description }, idx) => (
        <ScrollParallax className={styles.item} key={idx} animation={{ left: -30 }}>
          <img src={`img/${img}`} />
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </ScrollParallax>
      ))}
    </div>
  );
}
