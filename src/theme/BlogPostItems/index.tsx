import React, { useState, useEffect } from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItems';
import Input from './input';
import _ from 'lodash';
import './index.less';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BlogPostItems({ items }: Props): JSX.Element {

  const [displayCount, setDisplayCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMore = () => {
    setDisplayCount(displayCount + (6));
  };

  const handleChange = _.throttle((value) => {
    setSearchTerm(value)
  }, 1000);

  const filteredItems = items.filter(item =>
    item.content.metadata.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='search'>
        <Input placeholder='Search the blog' onChange={value => handleChange(value)} />
      </div>
      <div className="row cards">
        {filteredItems.slice(0, displayCount).map(({ content: BlogPostContent }) => {
          return <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}>
            <div key={BlogPostContent.metadata.permalink} className='col margin-bottom--lg'>
              <a href={BlogPostContent.metadata.permalink}><div className="card cardItem">
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
              </div></a>
            </div>
          </BlogPostProvider>
        })}
      </div>
      {displayCount < items.length && (
        <div className="text--center margin-top--lg">
          <button className="button" onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}

