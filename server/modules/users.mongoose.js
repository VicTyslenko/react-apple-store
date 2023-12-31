const { Schema, model } = require("mongoose");

const user = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  // password: {
  //     type: String,
  //     minlength: 6,
  //     require: true
  // },
  // tokenUser: {
  //     type: String,
  //     require: true
  // },

  // role: {
  //     type: String,
  //     enum: ['admin', 'user'],
  //     default: 'user',
  // },
});

module.exports = model("User", user);
