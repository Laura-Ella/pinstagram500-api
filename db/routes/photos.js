const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photos");

router.get("/", photoController.index);
router.post("/", photoController.create);
router.get("/:id", photoController.show);
router.put("/:id", photoController.update);
router.put("/photo/:id", photoController.update2);
router.delete("/:id", photoController.delete);

module.exports = router;
