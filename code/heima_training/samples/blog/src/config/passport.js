const passport = require('passport');
const LocalStrategy = require('passport-local');
const md5 = require('blueimp-md5');
const UserModel = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => UserModel.findOne({ _id: id }, done));

  passport.use(new LocalStrategy({
    usernameField: 'account',
    passwordField: 'password',
  }, async (account, password, done) => {
    try {
      const user = await UserModel.findOne({
        username: account,
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
  }));

  return passport;
};
