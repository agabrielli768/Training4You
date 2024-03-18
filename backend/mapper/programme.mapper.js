"use strict";
const Programme = require("../entities/Programmes");

//mappage de l'entité user avec la table compte_utilisateur
const programmeMapper = (result) => {
  const programmes = [];
  for (const p of result) {
    programmes.push(new Programme(p.id, p.nom, p.type, p.duree, p.id_createur));
  }
  return programmes;
};

module.exports = programmeMapper;
