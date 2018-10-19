const proxy = require('http-proxy-middleware');
const URL_SERVER_SIDE = 'http://localhost:3002';
const URL_SERVER_BLOG = 'http://localhost:80/wp-photo';

module.exports = app => {
  app.use('/api/flickr/*', proxy({
    target: URL_SERVER_SIDE
  }));

  app.use('/getcsrftoken', proxy({
    target: URL_SERVER_SIDE
  }));

  app.use('/contact/sendmail', proxy({
    target: URL_SERVER_SIDE
  }));

  app.use('/wp-json/wp/v2/*', proxy({
    target: URL_SERVER_BLOG
  }));
};