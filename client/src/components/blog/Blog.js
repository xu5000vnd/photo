import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class Blog extends Component {
  componentWillMount() {
    this.props.blogCateFetchCategories();
    this.props.blogPostFetchRecentPosts();
  }

  render() {
    return (
      <div>
        Wellcome to My Blog!!!
        <Link to="/albums">Click to Albums!!</Link>
      </div>
    );
  }
}

const mapStateToProps = ({blogs}) => {
  return {};
}

export default connect(mapStateToProps, actions)(Blog);