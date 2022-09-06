const express = require("express");
const router = express.Router();
const Vape = require("../model/Vape");
const vapesController = require("../controllers/vapes-controller");

router.get("/", vapesController.getAllVapes);
router.post("/", vapesController.addVape);
router.get("/:id", vapesController.getById);
router.put("/:id", vapesController.updateVape);
router.delete("/:id", vapesController.deleteVape);

module.exports = router;