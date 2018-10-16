import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { albumGetFetch } from '../../actions';
import AlbumItem from './AlbumItem';

class AlbumList extends Component {
  componentDidMount() {
    this.props.albumGetFetch();
  }

  renderAlbumItem = () => {
    return _.map(this.props.albumList.albums, album => {
      return <AlbumItem
        key={album.id}
        albumid={album.id}
        title={album.title._content}
        description={album.description._content}
      />;
    });
  }

  render() {
    return (
      <div>
        {this.renderAlbumItem()}
      </div>
    );
  }
}

const mapStateToProps = ({ albumList }) => {
  return { albumList };
};

export default connect(mapStateToProps, { albumGetFetch })(AlbumList);
