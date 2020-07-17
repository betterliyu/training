const localStrategy = require('../auth/localStrategy');
const UserModel = require('../models/user');

module.exports = function setPassport(app, passport) {
  passport.serializeUser((user, done) => {
    return done(null, user.email);
  });
  passport.deserializeUser((email, done) => {
    return UserModel.findOne({ email }, (err, data) => {
      done(err, data);
    });
  });

  passport.use(localStrategy);
};
