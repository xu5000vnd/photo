import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as Utils from '../../utils/Utils';

class Blog extends Component {
  componentWillMount() {
    const { blogPostFetchRecentPosts } = this.props;
    blogPostFetchRecentPosts();
  }

  renderListPost = () => {
    return _.map(this.props.posts, post => {
      return (
        <div key={post.id}>
          <p>Titlte: {post.title.rendered}</p>
          <p>Date: {Utils.dateFormat(new Date(post.date))}</p>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        Wellcome to My Blog!!!
        {this.renderListPost()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { posts: blogs.posts };
}

export default connect(mapStateToProps, actions)(Blog);