import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { PostItem } from '../common';

class Blog extends Component {
  componentWillMount() {
    const { blogFetchRecentPosts } = this.props;
    blogFetchRecentPosts();
  }

  renderListPost = () => {
    return _.map(this.props.posts, post => {
      return (
        <PostItem post={post} key={post.id}/>
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