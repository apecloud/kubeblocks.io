import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Exploding period of databases',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Databases are in an era of product explosion. Besides of the increasing number, databases have tranformed and expanded in all aspects. In such an era, we are ready to meet your requirements for more complex application scenarios, aiming to solving the technical and costs challenge you are faced with.
      </>
    ),
  },
  {
    title: 'Open source and neutral',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Although current cloud vendors have public data management platforms, they only support a few mainstream databases, failing to cover for the long tail. Meanwhile, the problem of supporting third-party proprietary open source licenses, in essence, lies in that cloud vendors cannot achieve open source and be neutral.
      </>
    ),
  },
  {
    title: 'The chronic problem of data silo',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We provide a unified data management interface. Under a unified management interface, effective unification can be achieved off-line. This is a problem that the current data lake and data warehouse products can not effectively solve, and the data lake itself is another relatively large data silo.
      </>
    ),
  },
];

const FeatureList2: FeatureItem[] = [
 {
    title: 'The requirement of multi-cloud and hybrid cloud management',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You may use not single cloud platforms (aws, axure, Google cloud) and with self-built cloud platforms (hybrid cloud). And cloud vendors cannot be neutral about open source software. We provide an easy way for database management and long-term maintenance.
      </>
    ),
  },
  {
    title: 'Open source software provided',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Open source is now definitely the main stream. We provide the open source version of software.
      </>
    ),
  },
]

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col', styles.item)}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
