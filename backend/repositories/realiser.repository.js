"use strict";
const database = require("../database/database");
const realiserMapper = require("../mapper/realiser.mapper");

const getRealiserByIdProgrammeAndUserId = (idProgramme, userId) => {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM realiser r INNER JOIN programme p  ON p.id=r.id_programme WHERE id=? and id_compte_utilisateur=? limit 1",
      [idProgramme, userId],
      (error, result) => {
        if (error || !result || result.length !== 1) {
          reject(error);
        } else {
          resolve(realiserMapper(result)[0]);
        }
      }
    );
  });
};

const getProgrammeRealiserByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM realiser r INNER JOIN programme p  ON p.id=r.id_programme WHERE id_compte_utilisateur=?",
      [userId],
      (error, result) => {
        if (error || !result) {
          reject(error);
        } else {
          resolve(realiserMapper(result));
        }
      }
    );
  });
};

const updateRealiserStateById = (realiser) => {
  return new Promise((resolve, reject) => {
    database.query(
      "UPDATE realiser SET date_realisation =?, statut=? where id_programme =? and id_Compte_Utilisateur = ?",
      [
        realiser.date_realisation,
        realiser.statut,
        realiser.programme.id,
        realiser.userId,
      ],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.updateId);
        }
      }
    );
  });
};

const addNewRealiser = (realiser) => {
  return new Promise((resolve, reject) => {
    database.query(
      "insert into realiser (date_realisation, statut, id_Compte_Utilisateur, id_programme) values(?,?,?,?)",
      [
        realiser.dateRealisation,
        realiser.statut,
        realiser.userId,
        realiser.programme.id,
      ],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.insertId);
        }
      }
    );
  });
};

module.exports = {
  getProgrammeRealiserByUserId,
  getRealiserByIdProgrammeAndUserId,
  updateRealiserStateById,
  addNewRealiser,
};
