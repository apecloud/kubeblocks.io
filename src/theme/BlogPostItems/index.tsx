import React, { useState, useEffect } from 'react';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import type { Props } from '@theme/BlogPostItems';
import Input from './input';
import _ from 'lodash';
import './index.less';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BlogPostItems({ items }: Props): JSX.Element {
  const [displayCount, setDisplayCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  // const [activeTab, setActiveTab] = useState('Technical Articles');

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6);
  };

  const handleChange = _.throttle((value) => {
    setSearchTerm(value);
  }, 1000);

  //将月报类型排序在最后
  const isMonthlyReport = (title) => title.toLowerCase().includes('community monthly report');

  const sortedItems = items.slice().sort((a: any, b: any) => {
    const aIsMonthlyReport = isMonthlyReport(a.content.metadata.title);
    const bIsMonthlyReport = isMonthlyReport(b.content.metadata.title);

    if (aIsMonthlyReport && !bIsMonthlyReport) return 1;
    if (!aIsMonthlyReport && bIsMonthlyReport) return -1;

    return new Date(b.content.metadata.date).getTime() - new Date(a.content.metadata.date).getTime();
  });

  const filteredItems = sortedItems.filter(item =>
    item.content.metadata.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //后续可能会根据标签分类
  // const isMonthlyReport = (title) => title.toLowerCase().includes('community monthly report');
  // const categorizedItems = {
  //   'Technical Articles': items.filter(item => !isMonthlyReport(item.content.metadata.title)),
  //   'Monthly Reports': items.filter(item => isMonthlyReport(item.content.metadata.title)),
  // };


  return (
    <>
      <div className='search'>
        <Input placeholder='Search the blog' onChange={value => handleChange(value)} />
      </div>

      {/* <div className="tabs">
        {['Technical Articles', 'Monthly Reports'].map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div> */}

      <div className="row cards">
        {filteredItems.slice(0, displayCount).map(({ content: BlogPostContent }) => {
          return (
            <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
              <div key={BlogPostContent.metadata.permalink} className='col margin-bottom--lg'>
                <a href={BlogPostContent.metadata.permalink}>
                  <div className="card cardItem">
                    <div className="card_image">
                      <LazyLoadImage src={BlogPostContent.frontMatter.image ? BlogPostContent.frontMatter.image : '/img/blog-banner.png'} alt={BlogPostContent.metadata.title} />
                    </div>
                    <div className="card_time">{BlogPostContent.metadata.formattedDate}</div>
                    <div className="card_body">
                      <div className='card_text'>
                        <h3>{BlogPostContent.metadata.title}</h3>
                        <p>{BlogPostContent.metadata.description}</p>
                      </div>
                      <div className="authors">
                        <div className="author-images">
                          {BlogPostContent.metadata.authors.map((item, index) => (
                            <img key={index} src={item.imageURL} />
                          ))}
                        </div>
                        <div className="author-names">
                          {BlogPostContent.metadata.authors.map((item, index) => (
                            <span key={index}>{item.name}{index + 1 < BlogPostContent.metadata.authors.length ? '&' : ''}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </BlogPostProvider>
          );
        })}
      </div>
      {displayCount < filteredItems.length && (
        <div className="text--center margin-top--lg">
          <button className="button" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}
