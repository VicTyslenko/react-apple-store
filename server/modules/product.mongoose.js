const { Schema, model, mongoose } = require("mongoose");

const product = new mongoose.Schema({
  src: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },

  desc: {
    type: String,
    require: true,
  },

  category: {
    type: Number,
    require: true,
  },
});

module.exports = model("Product", product);
