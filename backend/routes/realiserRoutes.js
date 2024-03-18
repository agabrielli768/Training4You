"use strict";
const express = require("express");
const router = express.Router();
const realiserController = require("../controllers/realiserController");

router.get("/", realiserController.getProgrammeRealiserByUserId);
router.post("/:id/:state", realiserController.manageProgrammeState);

module.exports = router;
