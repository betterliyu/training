const md5 = require('blueimp-md5');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

module.exports = new LocalStrategy({
  usernameField: 'account',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, account, password, done) => {
  try {
    req.flash('formData', req.body);
    const user = await UserModel.findOne({
      $or: [{ email: account }, { nickname: account }],
    }).exec();

    if (!user) {
      return done(null, false, { message: 'User not exist.' });
    }

    if (user.password !== md5(md5(password))) {
      return done(null, false, { message: 'Password is not valid.' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
