const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const keys = require('./config/keys');

const app = express();
const csrf = csurf({ cookie: true });

//---Config for Application---
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  keys: [keys.COOKIE_SECRET_KEY],
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Including routers
require('./routers/flickrRouter')(app);
require('./routers/csrfRouter')(app, csrf);
require('./routers/contactRouter')(app, csrf);


// error handler CSRF
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  res.status(403);
  res.send('Something wrong in here.. Please, check CSRF!!!');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT);
