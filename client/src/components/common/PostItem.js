import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Utils from '../../utils/Utils';

const PostItem = ({ post }) => {
  return (
    <div>
      {
        !_.isEmpty(post._embedded['wp:featuredmedia'])
          ? ''
          // <img
          //   alt={post._embedded['wp:featuredmedia'][0].alt_text}
          //   src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} />
          : ''
      }
      
      <p><Link to={`/blog/posts/${post.id}/${post.slug}`} postDetailProps={post}>{post.title.rendered}</Link></p>
      <p>Date: {Utils.dateFormat(new Date(post.date))}</p>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
}

export { PostItem };