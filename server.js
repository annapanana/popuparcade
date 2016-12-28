'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const archive = require('./routes/archive');

const port = process.env.PORT || 3000;

// app.use('/archive', archive);

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(archive);

app.get('/', (req, res, next) => {
  console.log("Hello World");
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
