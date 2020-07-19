const mongoose = require('mongoose');
const regExp = require('../constant/regexp');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
});

UserSchema.virtual('fullName')
  .get(function getFullName() {
    return `${this.firstName} ${this.familyName}`;
  })
  .set(function setFullName(v) {
    this.firstName = v.substr(0, v.indexOf(' '));
    this.familyName = v.substr(v.indexOf(' ') + 1);
  });

UserSchema.path('email')
  .validate((email) => {
    return email && !!email.length;
  }, 'Email cannot be blank')
  .validate((email) => {
    return regExp.email.test(email);
  }, 'Please enter an email')
  .validate(async function checkUserExist(email) {
    const User = mongoose.model('User');
    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('email')) {
      try {
        const users = await User.find({ email }).exec();
        return !users.length;
      } catch (error) {
        return false;
      }
    } else {
      return true;
    }
  }, 'Email already exists');

// UserSchema.post('save', (error, doc, next) => {
//   if (error.name === 'ValidationError') {
//     next({
//       errorCode: 422,
//       errorStack: error.stack,
//       errorMessage: error.message,
//     });
//   } else {
//     next();
//   }
// });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
