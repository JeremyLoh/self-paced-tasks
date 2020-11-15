const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./api-routes");
const app = express();
const port = process.env.PORT || 8080;
let serverless = require("serverless-http");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

console.log("process.env.TEST_DB_URL");
console.log(process.env.TEST_DB_URL);

// Server url
const mongoDbUrl =
  process.env.TEST_DB_URL ||
  "mongodb+srv://ADMIN:yA0JCt95mngsEUtH@cluster0.87un2.mongodb.net/Cluster0?retryWrites=true&w=majority";

// Make connection to localhost MongoDB database: contacts during testing, else to actual server
mongoose.connect(mongoDbUrl, {
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
// For serverless function
module.exports.handler = serverless(app);
