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
      <p>Titlte: {post.title.rendered}</p>
      <p>Date: {Utils.dateFormat(new Date(post.date))}</p>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      <Link to={`/blog/posts/${post.id}/${post.slug}`}>Read more</Link>
    </div>
  );
}

export { PostItem };