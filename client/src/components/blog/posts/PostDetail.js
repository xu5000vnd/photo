import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as Utils from '../../../utils/Utils';

class PostDetail extends Component {
  componentWillMount() {
    const { history, match, blogGetPost } = this.props;
    blogGetPost(history, match.params['postid']);
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
        </div>
      );
    }

    return (<div></div>);
  }
}

const mapStateToProps = ({ blogs }) => {
  return { postDetail: blogs.postDetail };
}

export default connect(mapStateToProps, actions)(PostDetail);