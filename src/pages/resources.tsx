import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player'
import Layout from '@theme/Layout';
import 'react-tabs/style/react-tabs.css';
import './resources.less';

export default () => {


  return (
    <Layout title="Resources">
      <div className="container margin-vert--lg">
        {/* <Tabs>
          <TabList>
            <Tab>Demo</Tab>
          </TabList>
          <TabPanel> */}
            <div className='players'>
              <ReactPlayer
                width='100%'
                height='100%'
                url='https://youtu.be/CEeSwlKZ-xI'
                controls={true}
                style={{margin: '0 auto', }}
                config={{ youtube : { playerVars: { origin: ' https://www.youtube.com ' } } }}
              />
            </div>
          {/* </TabPanel>
        </Tabs> */}
      </div>
    </Layout>
  );
}