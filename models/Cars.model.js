const mongoose = require("mongoose");

const carsSchema = mongoose.Schema({
  img: String,
  name: String,
  price: String,
  mark: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Mark",
  },
  description: String,
  capacity: String,
  isRent: Boolean
});

const Cars = mongoose.model("Cars", carsSchema);

module.exports = Cars;
