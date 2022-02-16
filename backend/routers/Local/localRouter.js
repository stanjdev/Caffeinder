const router = require("express").Router();
const controller = require("../../controllers/Local/localController.js");

router
  .route("/reviews")
  .get(controller.localReivews.get)
  .post(controller.localReivews.post)
  .patch(controller.localReivews.patch)
  .delete(controller.localReivews.delete);

module.exports = router;
