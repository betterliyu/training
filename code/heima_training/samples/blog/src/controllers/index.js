const express = require('express');
const authentication = require('../auth/authentication');

const router = express.Router();

router.get('/', authentication(), (req, res) => {
  res.render('index.html');
});

module.exports = router;