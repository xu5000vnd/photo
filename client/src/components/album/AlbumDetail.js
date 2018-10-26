import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as FlickrUtils from '../../utils/FlickrUtils';

class AlbumDetail extends Component {
  componentDidMount() {
    const { albumGetDetail, history, match } = this.props;
    albumGetDetail(history, match.params.albumid);
  }

  renderPhotos = () => {
    return _.map(this.props.albumPhotos, photo => {
      return (
        <img src={FlickrUtils.getImage({ ...photo, size: 'm' })} key={photo.id} alt="" />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params[0]}</h1>
        {this.renderPhotos()}
      </div>
    );
  }
}

const mapStateToProps = ({ albumList }) => {
  return { albumPhotos: albumList.albumPhotos };
}

export default connect(mapStateToProps, actions)(AlbumDetail);