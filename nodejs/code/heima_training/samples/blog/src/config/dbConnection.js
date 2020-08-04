const mongoose = require('mongoose');

module.exports = function connectMongoDB() {
  mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};
