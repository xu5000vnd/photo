import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumItem extends Component {
  componentDidMount() {
    document.title = window.siteName + " | Album " + this.props.title;
  }

  render() {
    return (
      <div>
        <p><Link to={`/albums/${this.props.albumid}/${this.props.title}`}>{this.props.title}</Link></p>        
      </div>
    );
  }
}

export default AlbumItem;