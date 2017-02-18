'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const archive = require('./routes/archive');

app.use(bodyParser.json());
// app.use('/archive', archive);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));
app.use('/angular-bootstrap-lightbox', express.static('node_modules/angular-bootstrap-lightbox/dist'));
app.use('/angular-modal-service', express.static('node_modules/angular-modal-service/dst'));

app.use(bodyParser.urlencoded({
  extended:false
}));

// app.use(express.static('./public'));
app.use(archive);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});

// app.get('/', (req, res, next) => {
//   console.log("Hello World");
// });

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
