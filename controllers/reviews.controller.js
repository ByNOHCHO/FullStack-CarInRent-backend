const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    const { user, cars, text, rating } = req.body;
    try {
      const data = await Reviews.create({
        user: user,
        cars: cars,
        text: text,
        rating: rating,
      });
      const review = await Reviews.find({_id: data._id}).populate("user")
      res.json(review);
    } catch (err) {
      res.json(err);
    }
  },
  getReviews: async (req, res) => {
    try {
      const data = await Reviews.find().populate("user");
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteReviewsById: async (req, res) => {
    try {
      const deleteReviews = await Reviews.findByIdAndRemove(req.params.id);
      res.json(deleteReviews);
    } catch (err) {
      res.json(err);
    }
  },
  updateReviewsById: async (req, res) => {
    try {
      const updateReviews = await Reviews.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        rating: req.body.rating,
        user: req.body.user,
        cars: req.body.cars,
      });
      res.json(updateReviews);
    } catch (err) {
      req.json(err);
    }
  },
};
