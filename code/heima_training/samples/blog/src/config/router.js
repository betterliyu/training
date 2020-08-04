const post = require('../controllers/post');
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const isLoggedIn = require('../auth/isLoggedIn');

module.exports = function router(app, passport) {
  // local strategy
  const authLocalOption = {
    failureRedirect: '/auth/login',
    failureFlash: true,
  };

  // routes

  app.use(auth.tryAutoLogin);

  // post routes
  app.get('/', isLoggedIn, post.load);

  // auth routes
  app.post(
    '/auth/login',
    passport.authenticate('local', authLocalOption),
    auth.rememberMe,
    (req, res) => res.redirect('/')
  );

  app.get('/auth/login', auth.loadLogin);
  app.get('/auth/logout', auth.logout);
  app.get('/auth/register', auth.loadRegister);
  app.post('/auth/register', auth.register);

  // user routes
  app.get('/profile', isLoggedIn, user.profile);

  // 404 handler
  app.use((req, res) => {
    res.render('404.html');
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    if (error.errorCode) {
      return res.status(error.errorCode).json(error);
    }
    return res.status(500).json({
      errorCode: 500,
      error,
    });
  });
};
