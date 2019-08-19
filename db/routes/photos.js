const express = require("express")
const router = express.Router()
const photoController = require("../controllers/photos")

router.get("/home", photoController.index)
router.post("/photos", photoController.create)
router.put("/photos/:id", photoController.update)
router.delete("/photos/:id", photoController.delete)

module.exports = router