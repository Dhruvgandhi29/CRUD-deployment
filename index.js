const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./Controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://test2:12345@cluster0.3vjysna.mongodb.net/schooldb"
);
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error Occured"));

//creating app
const app = express();
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/students", studentRoute);
//Listening to a port number
app.listen(4000, () => {
  console.log("Server started at 4000");
});
