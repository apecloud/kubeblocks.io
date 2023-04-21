import React, { useState } from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import TypeWriter from './typeWriter';
export default () => {
  

  return (
    <Layout>
        <div>
          <TypeWriter />
        </div>
    </Layout>
  );
}