import React from 'react';
import Link from '@docusaurus/Link';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '../components/Layout';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.less';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <header className={styles.banner}>
        <div className="container">
          <div className={styles.inner}>
            <QueueAnim duration={1000}>
              <div key={1} className={styles.right}></div>
            </QueueAnim>
            <div className={styles.left}>
              <QueueAnim duration={500} type={['left', 'right']}>
                <h1 key={1}>The Database of next generation</h1>
                <h2 key={2}>Build your database as blocks</h2>
                <div key={3} className={styles.actions}>
                  <Link
                    className={styles.actionItem}
                    to="/docs/overview">
                    Get Started
                  </Link>
                  <a target="_blank" className={styles.actionItem} href="https://github.com/apecloud/">GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                </div>
              </QueueAnim>
            </div>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
