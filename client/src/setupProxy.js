const proxy = require('http-proxy-middleware');
const URL_SERVER_SIDE = 'http://localhost:3002';
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
};