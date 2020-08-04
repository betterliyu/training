const mongoose = require('mongoose');
const regExp = require('../constant/regexp');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Your email is required.'],
  },
  familyName: {
    type: String,
    required: [true, 'Your family name is required.'],
  },
  firstName: {
    type: String,
    required: [true, 'Your first name is required.'],
  },
  nickname: {
    type: String,
    required: [true, 'Your username is required.'],
  },
  password: {
    type: String,
    required: [true, 'Your password is required.'],
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
    return regExp.email.test(email);
  }, 'Please enter a valid email address')
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

UserSchema.path('nickname').validate(async function checkUserExist(nickname) {
  const User = mongoose.model('User');
  // Check only when it is a new user or when email field is modified
  if (this.isNew || this.isModified('nickname')) {
    try {
      const users = await User.find({ nickname }).exec();
      return !users.length;
    } catch (error) {
      return false;
    }
  } else {
    return true;
  }
}, 'Username already exists');

// UserSchema.post('save', (error, doc, next) => {
//   if (error.name === 'ValidationError') {
//     next({
//       errorCode: 422,
//       ...error,
//     });
//   } else {
//     next();
//   }
// });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
