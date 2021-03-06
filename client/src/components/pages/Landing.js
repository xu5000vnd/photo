import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    document.title = window.siteName + " | Home";
  }

  render() {
    return (
      <div>
        Wellcome to Landing!!!
        <Link to="/albums">Click to Albums!!</Link>
        <p><Link to="/contact">Contact!!</Link></p>
        <p><Link to="/blog">My Blog!!</Link></p>
      </div>
    );
  }
}

export default Landing;