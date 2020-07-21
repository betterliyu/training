const md5 = require('blueimp-md5');

const UserModel = require('../models/user');

exports.loadLogin = (req, res) => {
  res.render('login.html', { message: req.flash('message') });
};

exports.logout = (req, res) => {
  req.logOut();
  res.redirect('/auth/login');
};

exports.loadRegister = (req, res) => {
  const errors = req.flash('validationError');
  res.render('register.html', { errors });
};

exports.register = async (req, res, next) => {
  try {
    req.body.password = md5(md5(req.body.password));

    await UserModel.create(req.body);

    res.redirect('/auth/login');
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach((k) => {
        errors.key = error.errors[k].message;
      });
      req.flash('validationError', errors);
      res.redirect('/auth/register');
    } else {
      next(error);
    }
  }
};
