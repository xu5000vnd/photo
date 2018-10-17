import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as FlickrUtils from '../../utils/FlickrUtils';

class AlbumDetail extends Component {
  componentDidMount() {
    this.props.albumGetDetail(this.props.match.params.albumid);
  }

  renderPhotos = () => {
    return _.map(this.props.albumPhotos, photo => {
      return (
        <img src={FlickrUtils.getImage({ ...photo, size: 'm' })} key={photo.id} alt=""/>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Album detail {this.props.match.params.albumid}</h1>
        {this.renderPhotos()}
      </div>
    );
  }
}

const mapStateToProps = ({ albumList }) => {
  return { albumPhotos: albumList.albumPhotos };
}

export default connect(mapStateToProps, actions)(AlbumDetail);