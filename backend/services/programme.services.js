"use_strict";
const programmeRepository = require("../repositories/programme.repository");

const getProgramme = programmeRepository.getProgramme;

const addProgramme = programmeRepository.addProgramme;

const putProgramme = programmeRepository.putProgramme;

const removeProgramme = programmeRepository.removeProgramme;

const getProgrammeById = programmeRepository.getProgrammeById;

module.exports = { getProgramme, addProgramme, putProgramme, removeProgramme, getProgrammeById };
