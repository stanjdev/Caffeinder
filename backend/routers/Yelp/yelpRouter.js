const router = require("express").Router()
const controller = require("../../controllers/Yelp/yelpController.js");

router
  .route('/businesses')
  .get(controller.yelpBusinesses.get)

router
  .route('/reviews')
  .get(controller.yelpReviews.get)

router
  .route('/details')
  .get(controller.yelpDetails.get)

router
  .route('/similar')
  .get(controller.yelpSimilar.get)

module.exports = router;