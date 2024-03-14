"use strict";
const programmeServices = require("../services/programme.services");
const Programme = require("../entities/Programmes");

/*on crée la methode pour retourner les programmes, et on crée une promesse (async, await) 
on appelle la methode getProgramme() des services et on renvoi les programmes, sinon on renvoit une erreur*/

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

    //TODO addTODO pour tout les utilisateur
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
    const programmeId = await programmeServices.putProgramme(updateProgramme);
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

const manageProgrammeState = async (req, res) => {
  const idProgramme = req.params.id;
  const etatProgramme = req.body;
  id_createur: req.user.id
  try {
    await programmeServices.removeProgramme(idProgramme);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
};
  //TODO recuperer id programme et etat ex id: req.params.id;
  //TODO aussi récuperer id user
  //appeler le service qui va appeler le repository pour modifier l'etat du programme de l'user


module.exports = {
  getProgramme,
  addProgramme,
  putProgramme,
  removeProgramme,
  getProgrammeById,
  manageProgrammeState,
};
