exports.load = (req, res) => {
  res.render('index.html', {
    posts: [
      {
        user: req.app.locals.user,
        content: 'testte  stt esttestt estte  sttesttest testtest testtest ',
      },
    ],
  });
};
