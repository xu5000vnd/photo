import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumItem extends Component {
  render() {
    return (
      <div>
        <p><Link to={`/albums/${this.props.albumid}/${this.props.title}`}>{this.props.title}</Link></p>        
      </div>
    );
  }
}

export default AlbumItem;