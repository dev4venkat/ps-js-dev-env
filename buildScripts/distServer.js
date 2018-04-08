import express from 'express';  //ES6 syntax
var path = require('path');
var open = require('open');
import compression from 'compression';


/* eslint-disable no-console */
const port = 3000;  //ES6 syntax
var app = express();

app.use(compression())
app.use(express.static('dist'));

app.use('/users', function(req,res) {
  // Hard coding for simplicity.  Pretend it hits the read database
  res.json([
    {"id": 1, "firstName":"Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName":"Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName":"Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
