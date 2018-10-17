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
  //set Time for cookie
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());

// error handler
// app.use((err, req, res, next) => {
//   if (err.code !== 'EBADCSRFTOKEN') return next(err);

//   // handle CSRF token errors here
//   res.status(403);
//   res.send('form tampered with');
// });

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


require('./routers/flickrRouter')(app);
require('./routers/csrfRouter')(app, csrf);

const PORT = process.env.PORT || 3002;
app.listen(PORT);
