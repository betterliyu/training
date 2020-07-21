// dependencies
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session');
const renderer = require('express-art-template');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

module.exports = function useMiddlewares(app, passport, connection) {
  // static resources
  app.use('/public', express.static(path.join(__dirname, '../../public/')));
  app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules/')));

  // template engine
  app.engine('html', renderer);
  app.set('views', path.join(__dirname, '../views/'));

  app.use(bodyParser.urlencoded({
    extended: false,
  }));
  app.use(bodyParser.json());

  app.use(cookie());
  app.use(session({
    secret: 'you can\'t get it, bro!',
    resave: true,
    saveUninitialized: true,
    // persistent session
    store: new MongoStore({
      mongooseConnection: connection,
    }),
  }));

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
};
