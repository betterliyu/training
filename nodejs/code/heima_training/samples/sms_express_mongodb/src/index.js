const path = require('path');
const express = require('express');
const renderer = require('express-art-template');
const bodyParser = require('body-parser');

const student = require('./contollers/student');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules/')));

app.engine('html', renderer);

app.set('views', path.join(__dirname, 'pages'));

app.use(student);

app.use((req, res) => {
  res.render('404.html');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  if (err.errorCode) {
    return res.status(err.errorCode).send(err);
  }
  return res.status(500).send({
    errorCode: 500,
    errorMessage: 'Server error.',
  });
});

app.listen('3000', () => {});
