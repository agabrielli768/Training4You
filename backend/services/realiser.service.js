"use strict";

const realiserRepository = require("../repositories/realiser.repository");
const programmeServices = require("../services/programme.services");
const Realiser = require("../entities/Realiser");

const manageProgrammeState = async (idProgramme, state, userId) => {
  try {
    const realiser = await realiserRepository.getRealiserByIdProgrammeAndUserId(
      idProgramme,
      userId
    );
    if (
      realiser !== null &&
      ((realiser.statut == "a realiser" && state == "en cours") ||
        (realiser.statut === "en cours" && state == "realise"))
    ) {
      realiser.statut = state;
      if (state == "realise") {
        realiser.date_realisation = new Date();
      }
      await realiserRepository.updateRealiserStateById(realiser);
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
  console.log(
    `le statut n'a pas été changé : idProgramme : ${idProgramme}, state : '${state}', userId : ${userId},`
  );
  return false;
};

const getProgrammeRealiserByUserId = async (userId) => {
  try {
    const realises = await realiserRepository.getProgrammeRealiserByUserId(
      userId
    );
    return realises;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const addAllRealiser = async (userId) => {
  const programmes = await programmeServices.getProgramme();
  if (programmes != null) {
    for (const p of programmes) {
      await realiserRepository.addNewRealiser(
        new Realiser(p, userId, null, "a realiser")
      );
    }
  }
};
module.exports = {
  manageProgrammeState,
  getProgrammeRealiserByUserId,
  addAllRealiser,
};
