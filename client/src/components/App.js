import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Header} />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
