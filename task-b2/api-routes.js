const router = require("express").Router();

router.use("/", (req, res) => {
  res.json({
    status: "API Homepage",
    message: "API is working!",
  });
});

module.exports = router;
