import React from 'react';
import * as Utils from '../../utils/Utils';

const PostItem = ({ post }) => {
  return (
    <div>
      <p>Titlte: {post.title.rendered}</p>
      <p>Date: {Utils.dateFormat(new Date(post.date))}</p>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
}

export { PostItem };