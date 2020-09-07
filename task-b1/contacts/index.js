const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./api-routes");

const app = express();
const port = process.env.PORT || 8080;

app.use("/api", apiRoutes);
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect("mongodb://localhost/contacts", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
if (!db) {
  console.log("Error connecting db");
} else {
  console.log("db connected successfully");
}

// Set default homepage
app.use("/", (request, response) => {
  response.send("Hello from Express and Nodemon!");
});

app.listen(port, () => {
  console.log("Application is listening on port " + port);
});
