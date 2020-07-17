const mongoose = require('mongoose');
const md5 = require('blueimp-md5');

const UserModel = mongoose.model('User');

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

exports.register = (req, res, next) => {
  try {
    req.body.password = md5(md5(req.body.password));

    const user = new UserModel(req.body);
    user.save();

    res.redirect('/auth/login');
  } catch (error) {
    next(error);
  }
};
