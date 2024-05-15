const mongoose = require("mongoose");

const component = new mongoose.Schema({
  component_name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
const Component = mongoose.model("component", component);

module.exports = Component;
