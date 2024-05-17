const { model, mongoose } = require("mongoose");

const project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
});

module.exports = model("project", project);
