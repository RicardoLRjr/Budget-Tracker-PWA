const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;
var MONGODB_URI = process.env.MONGODB_URI ||"mongodb://localhost/budget"
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${PORT}!`);
});

// const MONGODB_URI =  process.env.MONGODB_URI ||"mongodb://localhost/budget"
// mongoose.connect(MONGODB_URI);
