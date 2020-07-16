const express = require('express');
const StudentModel = require('../models/student');

const stdRouter = express.Router();

stdRouter
  .route('/')
  .get(async (req, res, next) => {
    try {
      const students = await StudentModel.find().exec();
      res.render('list.html', {
        students,
      });
    } catch (error) {
      next(error);
    }
  });

stdRouter
  .route('/student/add')
  .get((req, res) => {
    res.render('add.html');
  })
  .post(async (req, res, next) => {
    try {
      const student = new StudentModel({
        name: req.body.name,
        age: parseInt(req.body.age, 10),
        gender: parseInt(req.body.gender, 10),
        hobbies: req.body.hobbies,
      });

      if (await student.save()) {
        res.redirect(302, '/');
      } else {
        next({
          errorCode: 400,
          errorMessage: 'Save failed!',
        });
      }
    } catch (error) {
      next(error);
    }
  });

stdRouter
  .route('/student/edit/:id')
  .get(async (req, res, next) => {
    try {
      const student = await StudentModel.findById(req.params.id).exec();
      if (student) {
        res.render('edit.html', { student });
      } else {
        next({
          errorCode: 404,
          errorMessage: 'can not find student'
        })
      }
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      if (await StudentModel.updateOne({ _id: req.params.id }, {
        name: req.body.name,
        age: parseInt(req.body.age, 10),
        gender: parseInt(req.body.gender, 10),
        hobbies: req.body.hobbies,
      }).exec()) {
        res.redirect(302, '/');
      } else {
        next({
          errorCode: 400,
          errorMessage: 'Update failed!',
        });
      }
    } catch (error) {
      next(error);
    }
  });

stdRouter
  .route('/student/delete/:id')
  .get(async (req, res, next) => {
    try {
      if (await StudentModel.remove({ _id: req.params.id }).exec()) {
        res.redirect(302, '/');
      } else {
        next({
          errorCode: 400,
          errorMessage: 'Delete failed!',
        });
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = stdRouter;
