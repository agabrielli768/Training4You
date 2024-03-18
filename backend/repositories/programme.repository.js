"use strict";
const database = require("../database/database");
const programmeMapper = require("../mapper/programme.mapper");

const getProgramme = () => {
  //on cree une nouvelle promesse, on demande a la DB de nous retourner l'email et le mot de passe de l'utilisateur
  //si une erreur survient la promesse est rejetée sinon la promesse est résolue
  return new Promise((resolve, reject) => {
    database.query("select * from programme", (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(programmeMapper(result));
      }
    });
  });
};

const addProgramme = (p) => {
  return new Promise((resolve, reject) => {
    database.query(
      "insert into programme (nom,type,duree,id_createur) values (?,?,?,?)",
      [p.name, p.type, p.duree, p.id_createur],
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

const putProgramme = (programme) => {
  return new Promise((resolve, reject) => {
    database.query(
      "update programme SET nom =?,type =?,duree=?,id_createur=?  where id=?",
      [
        programme.nom,
        programme.type,
        programme.duree,
        programme.id_createur,
        programme.id,
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

const removeProgramme = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      "DELETE FROM programme WHERE id=?",
      [id],
      (error, result) => {
        if (error || result.affectedRows == 0) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};

const getProgrammeById = (id) => {
  return new Promise((resolve, reject) => {
    database.query(
      "SELECT * FROM programme WHERE id=? limit 1",
      [id],
      (error, result) => {
        if (error || !result) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  getProgramme,
  addProgramme,
  putProgramme,
  removeProgramme,
  getProgrammeById,
};
