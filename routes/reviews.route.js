const { Router } = require("express")
const { reviewsController } = require("../controllers/reviews.controller")
const { checkAuth } = require("../models/middlewares/auth.middleware")


const router = Router()

router.post('/reviews', checkAuth, reviewsController.addReviews)
router.delete('/reviews/:id', checkAuth, reviewsController.deleteReviewsById)
router.get('/reviews',  reviewsController.getReviews)
router.patch('/reviews/:id', checkAuth, reviewsController.updateReviewsById)

module.exports = router