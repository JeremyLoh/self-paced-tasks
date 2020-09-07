const router = require("express").Router();
const contactController = require("./contactController");

// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// Set default API response
router.use("/", (request, response) => {
  response.json({
    status: "API is working",
    message: "Hello",
  });
});

module.exports = router;
