const passport = require('passport');
const LocalStrategy = require('passport-local');
const md5 = require('blueimp-md5');
const UserModel = require('../models/user');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'account',
    passwordField: 'password',
  }, async (account, password, done) => {
    try {
      const user = await UserModel.findOne({
        '$or': [{ email: account }, { username: account }]
      }).exec();

      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }

      if (user.password !== password) {
        return done(null, false, { message: 'Invalid password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));

  passport.serializeUser((user, done) => {
    return done(null, user.email);
  });
  passport.deserializeUser((email, done) => {
    return UserModel.findOne({ email }, (err, data) => {
      done(err, data);
    });
  });

  return passport;
};
