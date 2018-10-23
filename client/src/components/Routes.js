import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import AlbumList from './album/AlbumList';
import AlbumDetail from './album/AlbumDetail';
import Contact from './contact/Contact';
import Thankyou from './pages/Thankyou';
import NotFound from './pages/NotFound';
import Blog from './blog/Blog';
import PostDetail from './blog/posts/PostDetail';
import CategoryMenu from './blog/CategoryMenu';
import CategoryDetail from './blog/categories/CategoryDetail';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/albums" component={AlbumList} />
      <Route exact path="/albums/:albumid" component={AlbumDetail} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/thankyou" component={Thankyou} />
      <Route exact path="/blog*" component={CategoryMenu} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/categories/:categoryid/*" component={CategoryDetail} />
      <Route exact path="/blog/posts/:postid/*" component={PostDetail} />
      <Route exact path="/404" component={NotFound} />
    </div>
  );
}