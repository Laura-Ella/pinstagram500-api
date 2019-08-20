const express = require("express")
const router = express.Router()
const collectionController = require("../controllers/collections")

router.get("/", collectionController.index)
router.post("/", collectionController.create)
router.get("/:id", collectionController.show); 
router.put("/:id", collectionController.update)
router.delete("/:id", collectionController.delete)

module.exports = router