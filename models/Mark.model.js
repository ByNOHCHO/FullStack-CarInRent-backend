const mongoose = require("mongoose");

const markSchema = mongoose.Schema({
  mark: String,
});

const Mark = mongoose.model("Mark", markSchema);

module.exports = Mark;
