const express = require ("express");
const router = express.Router();
const programmesController = require ("../controllers/programmes")
const isAdmin = require ("../middleware/isAdmin")

router.get ("/", programmesController.getProgramme)
router.post ("/",isAdmin,programmesController.addProgramme)

router.put("/:id", isAdmin, programmesController.putProgramme)
router.delete("/:id", isAdmin, programmesController.removeProgramme)

module.exports = router