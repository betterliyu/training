const md5 = require('blueimp-md5');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

module.exports = new LocalStrategy({
  usernameField: 'account',
  passwordField: 'password',
}, async (account, password, done) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ email: account }, { username: account }],
    }).exec();

    if (!user) {
      return done(null, false, { message: 'Unknown user' });
    }

    if (user.password !== md5(md5(password))) {
      return done(null, false, { message: 'Invalid password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
