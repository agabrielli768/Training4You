"use strict";
const Programme = require("../entities/Programmes");
const Realiser = require("../entities/Realiser");

//mappage de l'entité user avec la table compte_utilisateur
const realiserMapper = (result) => {
  const realiser = [];
  for (const r of result) {
    const programme = new Programme(
      r.id,
      r.nom,
      r.type,
      r.duree,
      r.id_createur
    );
    realiser.push(
      new Realiser(
        programme,
        r.id_Compte_utilisateur,
        r.date_realisation,
        r.statut
      )
    );
  }
  return realiser;
};

module.exports = realiserMapper;
