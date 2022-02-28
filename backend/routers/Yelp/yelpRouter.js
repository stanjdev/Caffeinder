const router = require("express").Router();
const controller = require("../../controllers/Yelp/yelpController.js");

router.route("/businesses").post(controller.yelpBusinesses.post);

router.route("/reviews").post(controller.yelpReviews.post);

router.route("/details").get(controller.yelpDetails.get);

router.route("/similar").get(controller.yelpSimilar.get);

module.exports = router;
