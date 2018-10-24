import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as Utils from '../../../utils/Utils';

class PageDetail extends Component {
  componentWillMount() {
    const { history, match, blogGetPage } = this.props;
    blogGetPage(history, match.params['pageid']);
  }

  
  render() {
    const { pageDetail } = this.props;
    if (!_.isEmpty(pageDetail)) {
      const date = new Date(pageDetail.date);
      return (
        <div>
          <h1>{pageDetail.title.rendered}</h1>
          <p>Date: {Utils.dateFormat(date)}</p>
          <div dangerouslySetInnerHTML={{ __html: (pageDetail.content.rendered) }} />
        </div>
      );
    }

    return (<div></div>);
  }
}

const mapStateToProps = ({ blogs }) => {
  return { pageDetail: blogs.pageDetail };
}

export default connect(mapStateToProps, actions)(PageDetail);