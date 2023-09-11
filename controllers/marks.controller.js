const Mark = require("../models/Mark.model");

module.exports.markController = {
  addMark: async (req, res) => {
    try {
      const addedMark = await Mark.create({
        mark: req.body.mark,
      });
      res.json(addedMark);
    } catch (err) {
      res.json(err);
    }
  },
  getAllMarks: async (req, res) => {
    try {
      const allMarks = await Mark.find();
      res.json(allMarks);
    } catch (err) {
      res.json(err);
    }
  },

  getMarkById: async (req, res) => {
    try {
      const markById = await Mark.findById(req.params.id);
      res.json(markById);
    } catch (err) {
      res.json(err);
    }
  },
  updateMarkById: async (req, res) => {
    try {
      const updateMark = await Mark.findByIdAndUpdate(req.params.id, {
        mark: req.body.mark,
      });
      res.json(updateMark);
    } catch (err) {
      res.json(err);
    }
  },
  deleteMarkById: async (req, res) => {
    try {
      const deleteMark = await Mark.findByIdAndDelete(req.params.id);
      res.json(deleteMark);
    } catch (err) {
      res.json(err);
    }
  },
};
