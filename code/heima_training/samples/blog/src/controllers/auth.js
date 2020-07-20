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
  res.render('register.html', { message: req.flash('message') });
};

exports.register = async (req, res, next) => {
  try {
    req.body.password = md5(md5(req.body.password));

    await UserModel.create(req.body);

    res.redirect('/auth/login');
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.render('register.html', {
        errors: error.errors,
      });
    } else {
      next(error);
    }
  }
};
