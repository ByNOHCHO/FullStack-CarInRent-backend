const mongoose = require("mongoose");

const markSchema = mongoose.Schema({
  img: String,
  mark: String,
});

const Mark = mongoose.model("Mark", markSchema);

module.exports = Mark;
