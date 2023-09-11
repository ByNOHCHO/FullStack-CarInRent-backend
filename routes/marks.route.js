const { Router } = require("express")
const { markController } = require("../controllers/marks.controller")

const router = Router()

router.get("/mark", markController.getAllMarks)
router.get("/mark/:id", markController.getMarkById)
router.post("/mark", markController.addMark)
router.delete("/mark/:id", markController.deleteMarkById)
router.patch("/mark/:id", markController.updateMarkById)

module.exports = router
