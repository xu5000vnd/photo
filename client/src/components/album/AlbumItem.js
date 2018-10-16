import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumItem extends Component {
  render() {
    return (
      <div>
        <p>Ablum ID: <Link to={`/albums/${this.props.albumid}`}>{this.props.albumid}</Link></p>
        <p>Ablum name: {this.props.title}</p>
        <p>Ablum description: {this.props.description}</p>
      </div>
    );
  }
}

export default AlbumItem;