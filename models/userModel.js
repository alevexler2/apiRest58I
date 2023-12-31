const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userCategory: {
    type: Schema.Types.ObjectId,
    ref: 'UserCategory',
    required: true,
  },
});

module.exports = model('User', userSchema);
