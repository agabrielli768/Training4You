const database = require("../database/database");
const { userMapper } = require("../mapper/user");
//on recupere l'email et le mot de passe de l'utilisateur de la DB
const getUser = (email, password) => {
  //on cree une nouvelle promesse, on demande a la DB de nous retourner l'email et le mot de passe de l'utilisateur
  //si une erreur survient la promesse est rejetée sinon la promesse est résolue
  return new Promise((resolve, reject) => {
    database.query(
      "select * from compte_utilisateur where email=? and mot_de_passe=?",
      [email, password],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(userMapper(result));
        }
      }
    );
  });
};
//Recupération d'un utilisateur par son email
const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    database.query(
      "select * from compte_utilisateur where email=?",
      [email],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(userMapper(result));
        }
      }
    );
  });
};

//Insertion du nouvel utilisateur crée dans la DB
const addUser = (firstName, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    database.query(
      "insert into compte_utilisateur (email, mot_de_passe, prenom, nom, date_inscription, date_modification, statut, role) values(?,?,?,?,?,?,?,?)",
      [
        email,
        password,
        firstName,
        lastName,
        new Date(),
        new Date(),
        "actif",
        "user",
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

module.exports = { getUser, getUserByEmail, addUser };
