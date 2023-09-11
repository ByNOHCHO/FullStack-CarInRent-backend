require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(require("./routes/users.route"));
app.use(require("./routes/reviews.route"))

mongoose
  .connect(`${process.env.MONGO}CarInRent`)
  .then(() => console.log("Связь с MongoBD установлена"))
  .catch((error) => console.log(error.toString()));

app.listen(process.env.PORT, () => console.log("Сервер запущен"));
 