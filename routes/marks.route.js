const { Router } = require("express")
const { markController } = require("../controllers/marks.controller")

const router = Router()

router.get("/marks", markController.getAllMarks)
router.get("/marks/:id", markController.getMarkById)
router.post("/marks", markController.addMark)
router.delete("/marks/:id", markController.deleteMarkById)
router.patch("/marks/:id", markController.updateMarkById)

module.exports = router
