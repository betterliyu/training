const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const StudentModel = mongoose.model(
  'Student',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    hobbies: {
      type: String,
    },
  })
);

module.exports = StudentModel;
