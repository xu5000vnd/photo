const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routers/flickrRouter')(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT);
