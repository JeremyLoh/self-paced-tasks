const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./api-routes");
const app = express();
const port = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Make connection to localhost MongoDB database: contacts
mongoose.connect("mongodb://localhost/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
if (!db) {
  console.log("Error connecting db");
} else {
  console.log("Connected to db successfully");
}

app.use("/api", apiRoutes);

app.use("/", (req, res) => res.send("Hello from Express and Nodemon!"));

app.listen(port, () => {
  console.log("Application is listening at port " + port);
});

// Export the application for testing
module.exports = app;
