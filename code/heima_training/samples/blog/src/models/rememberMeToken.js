const mongoose = require('mongoose');

const RememberMeTokenSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const RememberMeTokenModel = mongoose.model('RememberMeToken', RememberMeTokenSchema);

module.exports = RememberMeTokenModel;
