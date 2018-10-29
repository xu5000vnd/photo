import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';
import Routes from './Routes';

class App extends Component {
  componentWillMount() {
    document.title = window.siteName;
    window.meta.keywords.setAttribute('content', 'Horison, react-wordpress, reactjs, wordpress');
    window.meta.description.setAttribute('content', 'Copy this line to page you want to set meta tags');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Routes />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
