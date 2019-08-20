const express = require("express")
const router = express.Router()
const collectionController = require("../controllers/collections")

router.get("/", collectionController.index)
router.post("/collection/:id", collectionController.create)
// router.get("/collection/:id", collectionController.show); 
router.put("/collection/:id", collectionController.update)
router.delete("/collection/:id", collectionController.delete)

module.exports = router