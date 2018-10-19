import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Routes />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
