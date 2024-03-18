"use strict";
const realiserServices = require("../services/realiser.service");

const getProgrammeRealiserByUserId = async (req, res) => {
  const userId = req.user.id;
  const realises = await realiserServices.getProgrammeRealiserByUserId(userId);
  if (realises) {
    res.send(realises);
  } else {
    res.sendStatus(400);
  }
};

const manageProgrammeState = async (req, res) => {
  const idProgramme = req.params.id;
  const state = req.params.state;
  const userId = req.user.id;
  try {

    await realiserServices.manageProgrammeState(idProgramme, state, userId);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
module.exports = {
  manageProgrammeState,
  getProgrammeRealiserByUserId,
};
