// dependencies
const express = require('express');
const passport = require('passport');
const connectMongoDB = require('./config/dbConnection');

const app = express();
const connection = connectMongoDB();

require('./config/passport')(app, passport);
require('./config/middleware')(app, passport, connection);
require('./config/router')(app, passport);

connection
  .on('error', console.error)
  .on('disconnected', connectMongoDB)
  .once('open', () => {
    app.listen(4000, () => {
      console.log('server is running...');
    });
  });
