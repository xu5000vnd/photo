import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions';
import * as Utils from '../../../utils/Utils';

class PostDetail extends Component {
  componentWillMount() {
    const { history, match, blogGetPost, blogFetchTags } = this.props;
    blogGetPost(history, match.params['postid']);
  }

  renderTags = () => {
    return _.map(this.props.tags, tag => {
      if (this.props.postDetail.tags.indexOf(tag.id)) {
        return (
          <span key={tag.id}><Link to={`/blog/tags/${tag.id}/${tag.slug}`}>{tag.name}</Link>&nbsp;</span>
        );
      }
    });
  }

  render() {
    const { postDetail } = this.props;
    if (!_.isEmpty(postDetail)) {
      const date = new Date(postDetail.date);
      return (
        <div>
          <h1>{postDetail.title.rendered}</h1>
          <p>Date: {Utils.dateFormat(date)}</p>
          <div dangerouslySetInnerHTML={{ __html: (postDetail.content.rendered) }} />
          {this.renderTags()}
        </div>
      );
    }

    return (<div></div>);
  }
}

const mapStateToProps = ({ blogs }) => {
  return { postDetail: blogs.postDetail, tags: blogs.tags };
}

export default connect(mapStateToProps, actions)(PostDetail);