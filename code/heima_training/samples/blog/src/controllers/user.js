const express = require('express');
const passport = require('passport');
const authentication = require('../auth/authentication');

const router = express.Router();

router.get('/', authentication(), (req, res) => {
  res.render('index.html');
});

router.get('/login', (req, res) => {
  res.render('login.html');
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/user/login' }),
  (req, res) => {
    res.redirect('/');
  });






module.exports = router;
