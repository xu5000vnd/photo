import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { PostItem } from '../common';

class Search extends Component {
  componentWillMount() {
    this.props.blogSearchPosts(this.props.match.params['query']);
  }

  componentDidMount() {
    document.title = window.siteName + " | Search | " + this.props.match.params['query'];
  }

  componentDidUpdate(preProps) {
    const oldQuery = preProps.match.params['query'];
    const newQuery = this.props.match.params['query'];
    if (oldQuery !== newQuery) {
      this.props.blogSearchPosts(this.props.match.params['query']);
    }
  }

  renderPosts = () => {
    if (!_.isEmpty(this.props.posts)) {
      return _.map(this.props.posts, post => {
        return <PostItem key={post.id} post={post} />
      });
    }

    return <h2>We haven't been available article about <b>{this.props.match.params['query']}</b></h2>;
  }

  render() {
    return (
      <div>
        <h1>Wellcome to Search!!!</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { posts: blogs.posts };
}

export default connect(mapStateToProps, actions)(Search);