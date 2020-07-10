const fs = require('fs');
const path = require('path');
const express = require('express');

const stdRouter = express.Router();

const dbPath = path.resolve(__dirname, '../db.json');

stdRouter
  .route('/')
  .get((req, res) => {
    fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return res
          .status(500)
          .send('Server error');
      }
      const db = JSON.parse(data);
      console.log(db.students);
      return res.render('list.html', {
        students: db.students,
      });
    });
  });

stdRouter
  .route('/add')
  .get((req, res) => {
    res.render('add.html');
  })
  .post((req, res) => {
    fs.readFile(dbPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return res
          .status(500)
          .send('Server error');
      }
      const db = JSON.parse(data);
      const { students } = db;
      students.push(req.body);

      return res.send(true);
    });
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
