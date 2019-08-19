const express = require("express")
const router = express.Router()
const photoController = require("../controllers/photos")

router.get("/home", photoController.index)
router.get("/collections", photoController.show)
router.post("/collections", photoController.create)
router.put("/collections/:id", photoController.update)
router.delete("/collections/:id", photoController.delete)

module.exports = router