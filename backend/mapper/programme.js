"use strict";
const Programme = require("../entities/Programmes");

//mappage de l'entité user avec la table compte_utilisateur
const userProgramme = (result) => {
    const programmes = [];
          for (p of result) {
            programmes.push(
              new Programme(p.id, p.nom, p.type, p.duree, p.id_createur)
            );
          }
          return programmes
}

module.exports = userProgramme