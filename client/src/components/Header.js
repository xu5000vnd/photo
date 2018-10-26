import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { SearchForm } from './common';

const Header = () => {
  return (
    // <div>
    //   <h1>Header</h1>
    //   <h2><Link to="/">Logo</Link></h2>
    //   <h2><Link to="/blog">My Blog!</Link></h2>
    //   <SearchForm {...this.props} />
    // </div>

    <div id="bottom_bar">
      <div id="logo">
        <a href="/">
          <img src="https://format-com-cld-res.cloudinary.com/image/private/s--2j_JEvco--/c_limit,g_center,h_65535,w_960/a_auto,fl_keep_iptc.progressive.apng/72252-4417458-logo.png" nopin="true" alt="Hideaki Hamada Photography" />
        </a>
      </div>
      <nav>
        <ul id="menu" className="menu_list">
          <li className="category top_level">
            <a href="#" className="category_name selected">Muses</a>
            <ul className="dropdown" styles="bottom: 36px;">
              <li className="item  selected ">
                <a href="/people">Minshi 1</a>
              </li>
              <li className="item ">
                <a href="/artists">Minshi 2</a>
              </li>
              <li className="item ">
                <a href="/family">Vi 1</a>
              </li>
              <li className="item ">
                <a href="/family">Bidao</a>
              </li>
              <li className="item ">
                <a href="/family">Vi 1</a>
              </li>
            </ul>
          </li>
          <li className="category top_level">
            <a href="#" className="category_name ">Loves</a>
            <ul className="dropdown" styles="bottom: 36px;">
              <li className="item  selected ">
                <a href="/people">Hai & Yen</a>
              </li>
              <li className="item  selected ">
                <a href="/people">Quy & My</a>
              </li>
            </ul>
          </li>
          <li className="category top_level">
            <a href="#" className="category_name ">Life & street</a>
          </li>
          <li className="category top_level">
            <a href="#" className="category_name ">Foody, still life</a>
          </li>
          <li className="category top_level">            
            <Link to="/blog">Blog</Link>
          </li>
          <li className="category top_level">
            <a href="#" className="category_name ">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;