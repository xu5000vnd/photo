import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        Wellcome to Landing!!!
        <Link to="/albums">Click to Albums!!</Link>
      </div>
    );
  }
}

export default Landing;