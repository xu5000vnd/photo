import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from './common';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <h2><Link to="/">Logo</Link></h2>
        <h2><Link to="/blog">My Blog!</Link></h2>
        <SearchForm {...this.props}/>
      </div>
    );
  }
}

export default Header;