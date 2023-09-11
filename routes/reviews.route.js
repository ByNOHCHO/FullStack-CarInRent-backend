const { Router } = require("express")
const { reviewsController } = require("../controllers/reviews.controller")

const router = Router()

router.post("/reviews", reviewsController.addReviews)
router.delete('/reviews/:id', reviewsController.deleteReviewsById)
router.get('/reviews',  reviewsController.getReviews)
router.patch('/reviews/:id', reviewsController.updateReviewsById)

module.exports = router