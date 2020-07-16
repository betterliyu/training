// dependencies
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session');
const renderer = require('express-art-template');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const initPassport = require('./auth/passport');
const connect = require('./db');

const IndexRouter = require('./controllers');
const UserRouter = require('./controllers/user');

const app = express();

const dbConnection = connect();


// static resources
app.use('public', express.static(path.join(__dirname, './public/')));
app.use('node_modules', express.static(path.join(__dirname, '../node_modules/')));

// template engine
app.engine('html', renderer);
app.set('views', path.join(__dirname, './views/'));

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
    mongooseConnection: dbConnection,
  }),
}));


// auth
initPassport();

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', IndexRouter);
app.use('/user', UserRouter);

// 404 handler
app.use((req, res) => {
  res.render('404.html');
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.errorCode) {
    return res.status(err.errorCode)
      .json(err);
  }
  return res.status(500)
    .json({
      errorCode: 500,
      errorMessage: 'Server error.',
    });
});

dbConnection
  .on('error', console.error)
  .on('disconnected', connect)
  .once('open', () => {
    app.listen(4000, () => {
      console.log('server is running...');
    });
  });
