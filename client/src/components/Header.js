import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    console.log(this);
    return(
      <div>
        <h1>Header</h1>
        <h2><Link to="/">Logo</Link></h2>
      </div>
    );
  }
}

export default Header;