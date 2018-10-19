import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import AlbumList from './album/AlbumList';
import AlbumDetail from './album/AlbumDetail';
import Contact from './contact/Contact';
import Thankyou from './pages/Thankyou';
import Blog from './blog/Blog';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/albums" component={AlbumList} />
      <Route exact path="/albums/:albumid" component={AlbumDetail} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/thankyou" component={Thankyou} />
      <Route exact path="/blog" component={Blog} />
    </div>
  );
}