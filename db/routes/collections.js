const express = require("express")
const router = express.Router()
const collectionController = require("../controllers/collections")

router.get("/home", collectionController.index)
router.get("/collections", collectionController.show)
router.post("/collections", collectionController.create)
router.put("/collections/:id", collectionController.update)
router.delete("/collections/:id", collectionController.delete)

module.exports = router