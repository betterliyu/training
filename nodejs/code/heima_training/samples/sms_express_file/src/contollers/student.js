const express = require('express');
const Student = require('../services/student');

const stdRouter = express.Router();

stdRouter.route('/').get((req, res) => {
  Student.getAll((err, students) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    return res.render('list.html', {
      students,
    });
  });
});

stdRouter
  .route('/student/add')
  .get((req, res) => {
    res.render('add.html');
  })
  .post((req, res) => {
    Student.save(req.body, (err) => {
      if (err) {
        return res.status(500).send('Server error');
      }
      return res.redirect(302, '/');
    });
  });

stdRouter
  .route('/student/edit/:id')
  .get((req, res) => {
    Student.get(parseInt(req.params.id, 10), (err, student) => {
      res.render('edit.html', {
        student,
      });
    });
  })
  .post((req, res) => {
    Student.update(req.body, (err) => {
      if (err) {
        return res.status(500).send('Server error');
      }
      return res.redirect(302, '/');
    });
  });

stdRouter.route('/student/delete/:id').get((req, res) => {
  Student.delete(parseInt(req.params.id, 10), (err) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    return res.redirect(302, '/');
  });
});

module.exports = stdRouter;
