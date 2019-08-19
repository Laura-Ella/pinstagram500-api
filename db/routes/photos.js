const express = require("express")
const router = express.Router()
const photoController = require("../controllers/photos")

router.get("/", photoController.index)
router.post("/photos/:id", photoController.create)
router.put("/photos/:id", photoController.update)
router.delete("/photos/:id", photoController.delete)

module.exports = router