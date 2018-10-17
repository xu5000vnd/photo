import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import AlbumList from './album/AlbumList';
import AlbumDetail from './album/AlbumDetail';
import Contact from './contact/Contact';
import Thankyou from './pages/Thankyou';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/albums" component={AlbumList} />
            <Route exact path="/albums/:albumid" component={AlbumDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/thankyou" component={Thankyou} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
