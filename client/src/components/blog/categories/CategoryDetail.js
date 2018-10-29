import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { PostItem } from '../../common';
import * as Utils from '../../../utils/Utils';

class CategoryDetail extends Component {
  componentWillMount() {
    const { history, match } = this.props;
    this.props.blogCateGetPosts(history, match.params['categoryid']);
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params['categoryid'];
    const newId = this.props.match.params['categoryid'];
    if (oldId !== newId) {
      this.props.blogCateGetPosts(this.props.history, newId);
    }
    document.title = window.siteName + " | " + Utils.getTypeName(this.props.categories, this.props.match.params['categoryid']);
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return <PostItem key={post.id} post={post} />
    });
  }

  render() {
    return (
      <div>
        Wellcome to CategoryDetail!!!
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { posts: blogs.posts, categories: blogs.categories };
}

export default connect(mapStateToProps, actions)(CategoryDetail);