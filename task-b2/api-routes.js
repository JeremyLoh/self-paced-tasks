const router = require("express").Router();
const controller = require("./contactController");

// Contact routes
router.route("/contacts").get(controller.index).post(controller.new);
router
  .route("/contacts/:contact_id")
  .get(controller.view)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.delete);

router.use("/", (req, res) => {
  res.json({
    status: "API Homepage",
    message: "API is working!",
  });
});

module.exports = router;
