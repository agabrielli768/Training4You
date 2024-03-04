"use strict";
const programmeServices = require("../services/programme.services");
const Programme = require("../entities/Programmes");
const getProgramme = async (_, res) => {
  try {
    const programmes = await programmeServices.getProgramme();
    res.send(programmes);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
const addProgramme = async (req, res) => {
  console.log(req.user.id);
  const { name, type, duree } = req.body;
  const newProgramme = {
    name,
    type,
    duree,
    id_createur: req.user.id,
  };
  try {
    const programmeId = await programmeServices.addProgramme(newProgramme);
    res.send({ id: programmeId });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const putProgramme = async (req, res) => {
  const idProgramme = req.params.id;
  const { nom, type, duree } = req.body;
  const updateProgramme = {
    id: idProgramme,
    nom,
    type,
    duree,
    id_createur: req.user.id,
  };
  try {
    const programmeId = await programmeServices.putProgramme(
      updateProgramme
    );
    res.send({ message: "Programme updated successfully", programmeId });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const removeProgramme = async (req, res) => {
  const idProgramme = req.params.id;

  try {
    await programmeServices.removeProgramme(idProgramme);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
};

const getProgrammeById = async (req, res) => {
  const idProgramme = req.params.id;

  try {
    const programme = await programmeServices.getProgrammeById(idProgramme);
    if (programme && programme.length === 1) {
      res.send(programme[0]);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  getProgramme,
  addProgramme,
  putProgramme,
  removeProgramme,
  getProgrammeById,
};
