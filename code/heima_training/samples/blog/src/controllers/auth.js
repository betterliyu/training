const md5 = require('blueimp-md5');

const UserModel = require('../models/user');

exports.loadLogin = (req, res) => {
  const errors = req.flash('error')[0];
  const formData = req.flash('formData')[0];
  res.render('login.html', {
    formData,
    errors,
  });
};

exports.logout = (req, res) => {
  req.logOut();
  res.redirect('/auth/login');
};

exports.loadRegister = (req, res) => {
  const errors = req.flash('validationError')[0];
  const formData = req.flash('formData')[0];
  res.render('register.html', {
    formData,
    errors,
  });
};

exports.register = async (req, res, next) => {
  try {
    req.flash('formData', req.body);
    if (req.body.password !== req.body.confirmPassword) {
      req.flash('validationError', {
        conformPassword: 'The two passwords you entered did not match. ',
      });
      return res.redirect('/auth/register');
    }
    req.body.password = md5(md5(req.body.password));

    await UserModel.create(req.body);

    return res.redirect('/auth/login');
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach((k) => {
        errors[k] = error.errors[k].message;
      });
      req.flash('validationError', errors);
      return res.redirect('/auth/register');
    }
    return next(error);
  }
};
