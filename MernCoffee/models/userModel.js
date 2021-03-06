const mongoose = require('mongoose');
// const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: [true, 'Please tell us your name.'],
    unique: ['Please use another name.'],
  },
  username: {
    type: String,
    trim: true,
    require: [true, 'Please tell us your username.'],
    unique: ['Please use another username.'],
  },
  email: {
    type: String,
    require: [true, 'Please provide your email.'],
    unique: ['Please use another email.'],
    lowercase: true,
    trim: true,
    // validate: [validator.isEmail, 'Please provide a valid email.']
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 0
  },
  cart: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  password: {
    type: String,
    require: [true, 'Please provide a password.']
  },
  role: {
    type: String,
    default: 'user'
  },
  image:  {
    type: String,
    // default: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png',
    default: '/img/avatar.jpg'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
