const router = require("express").Router();

// Set default API response
router.use("/", (request, response) => {
  response.json({
    status: "API is working",
    message: "Hello",
  });
});

module.exports = router;
