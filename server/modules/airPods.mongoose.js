const { model, mongoose } = require("mongoose");
const airPods = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  // category: {
  //   type: String,
  //   required: true,
  // },
  status: {
    type: String,
    required: true,
  },
});

module.exports = model("airPods", airPods);
