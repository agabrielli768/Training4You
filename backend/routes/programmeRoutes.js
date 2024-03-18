"use strict";
const express = require("express");
const router = express.Router();
const programmesController = require("../controllers/programmes");
const isAdmin = require("../middleware/isAdmin");

router.get("/", programmesController.getProgramme);
router.get("/:id", isAdmin, programmesController.getProgrammeById);
router.put("/", isAdmin, programmesController.addProgramme);
router.put("/:id", isAdmin, programmesController.putProgramme);
router.delete("/:id", isAdmin, programmesController.removeProgramme);

module.exports = router;
