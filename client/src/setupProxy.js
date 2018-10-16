const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use('/api/flickr/*', proxy({
    target: 'http://localhost:3002'
  }));
};