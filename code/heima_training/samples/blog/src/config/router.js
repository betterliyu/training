const post = require('../controllers/post');
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const isLoggedIn = require('../auth/isLoggedIn');

module.exports = function router(app, passport) {
  // local strategy
  const authLocalOption = {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
  };

  // routes
  // post routes
  app.get('/', isLoggedIn, post.load);

  // auth routes
  app.post('/login', passport.authenticate('local', authLocalOption));

  app.get('/login', auth.loadLogin);
  app.get('/logout', auth.logout);
  app.get('/register', auth.loadRegister);
  app.post('/register', auth.register);

  // user routes
  app.get('/profile', isLoggedIn, user.profile);

  // 404 handler
  app.use((req, res) => {
    res.render('404.html');
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (err.errorCode) {
      return res.status(err.errorCode)
        .json(err);
    }
    return res.status(500)
      .json({
        errorCode: 500,
        errorMessage: 'Server error.',
      });
  });
};
