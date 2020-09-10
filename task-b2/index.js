const express = require("express");
const apiRoutes = require("./api-routes");
const app = express();
const port = process.env.PORT || 8080;

app.use("/api", apiRoutes);

app.use("/", (req, res) => res.send("Hello from Express and Nodemon!"));

app.listen(port, () => {
  console.log("Application is listening at port " + port);
});
