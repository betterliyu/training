const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};
