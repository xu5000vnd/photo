import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Blog extends Component {
  componentWillMount() {
    this.props.blogCateFetchCategories();
    this.props.blogPostFetchRecentPosts();
  }

  renderListPost = () => {
    return _.map(this.props.posts, post => {
      console.log(post);
      return (
        <div key={post.id}>
          <p>Titlte: {post.title.rendered}</p>
          <p>Short description: <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /></p>
          <p>Long description: <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </p>
        </div>);
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