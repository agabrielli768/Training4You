const database = require("../database/database");
const programmeMapper = require("../mapper/programme");

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
  console.log(p);
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

module.exports = { getProgramme, addProgramme, removeProgramme };
