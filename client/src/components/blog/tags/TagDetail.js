import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { PostItem } from '../../common';

class TagDetail extends Component {
  componentWillMount() {
    this.props.blogTagGetPosts(this.props.match.params['tagid']);
  }

  renderPosts = () => {
    if (!_.isEmpty(this.props.posts)) {
      return _.map(this.props.posts, post => {
        return <PostItem key={post.id} post={post} />
      });
    }

    return <h2>We haven't been available article about tag #{this.props.match.params[0]}</h2>;
  }

  render() {
    return (
      <div>
        <h1>Wellcome to TagDetail!!!</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { posts: blogs.posts };
}

export default connect(mapStateToProps, actions)(TagDetail);