const md5 = require('blueimp-md5');
const uuid = require('uuid').v4;

const UserModel = require('../models/user');
const RememberMeTokenModel = require('../models/rememberMeToken');

async function registerToken(uid) {
  const token = uuid();
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  const rememberMeToken = await RememberMeTokenModel.create({
    uid,
    token,
    expires: expires.getTime(),
  });
  return rememberMeToken;
}

exports.tryAutoLogin = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  const token = req.cookies.remember_me;
  const tokenModel = await RememberMeTokenModel.findOne({ token }).exec();
  if (tokenModel) {
    if (tokenModel.expires.getTime() > Date.now()) {
      const user = await UserModel.findOne({ _id: tokenModel.uid }).exec();
      if (user) {
        req.login(user, () => {});
      }
    } else {
      await UserModel.remove({ token });
    }
  }
  return next();
};

exports.loadLogin = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    const errors = req.flash('error')[0];
    const formData = req.flash('formData')[0];

    res.render('login.html', {
      formData,
      errors,
    });
  }
};

exports.rememberMe = async (req, res, next) => {
  if (req.body.remember_me === 'on') {
    const rememberMeToken = await registerToken(req.user.id);
    res.cookie('remember_me', rememberMeToken.token, {
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });
  }
  return next();
};

exports.logout = async (req, res) => {
  const token = req.cookies.remember_me;

  await RememberMeTokenModel.remove({ token }).exec();

  req.logOut();
  res.clearCookie('remember_me');
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
