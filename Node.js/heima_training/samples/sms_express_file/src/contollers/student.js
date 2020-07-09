const express = require('express');

const stdRouter = express.Router();

stdRouter
  .route('/')
  .get((req, res) => {
    res.render('list.html');
  });

stdRouter
  .route('/add')
  .get((req, res) => {
    res.send('add page');
  })
  .post((req, res) => {
    res.send('add');
  });

stdRouter
  .route('/edit/:id')
  .get((req, res) => {
    res.send('edit page');
  })
  .post((req, res) => {
    res.send('edit');
  });

stdRouter
  .route('/delete/:id')
  .delete((req, res) => {
    res.send('delete');
  });

module.exports = stdRouter;
