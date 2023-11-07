"use strict";

var authRoutes = require('./routers/authRouters');

var cors = require('cors');

var express = require('express');

var morgan = require('morgan');

var app = express();
var port = 2552; // Number port server

app.use(morgan(':method :url :status :response-time ms')); // Morgan

app.use('/', authRoutes);
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Welcom to my API!');
});
app.listen(port, function () {
  console.log('Server running on port: ', port);
});