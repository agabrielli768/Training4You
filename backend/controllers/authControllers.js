"use strict";
const bcrypt = require("bcrypt");

//on importe users.services qui contient les fonctions pour interagir avec les utilisateurs de la BDD
const userServices = require("../services/user.services");
//on importe jwtHelper pour gerer les tokens JWT
const tokenHelper = require("../utils/jwtHelper");

//la fonction login pour gerer la connexion des utilisateurs avec req en requete entrante et res en requete sortante
const login = async (req, res) => {
  //extraction des attributs email et password de la requete
  const { email, password } = req.body;

  //on recupere l'email et le mot de passe de l'utilisateur du fichier userServices
  const user = await userServices.isRegistered(email);
  if (user == null) {
    res.sendStatus(403);
    return;
  }

  if (user == undefined) {
    res.sendStatus(500);
    return;
  }
  //on compare le mot de passe saisit par l'utilisateur et le mot de passe hashé en BDD
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    res.sendStatus(403);
    return;
  }
  // on crée un objet avec l'identifiant et le role de l'utilisateur
  const payload = {
    id: user.id,
    role: user.role,
  };
  //generation du token avec les informations de l'utilisateur du payload
  const token = tokenHelper.token(payload);
  //on genere le token et on l'envoi au front end en tant que reponse a la demande de connexion
  res.send(token);
};
// Inscription a l'application
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // Appel la méthode isRegistered
  const isRegistered = await userServices.isRegistered(email);
  if (isRegistered) {
    res.sendStatus(403);
    return;
  }
  const hash = await bcrypt.hash(password, 5);
  // Creation d'un nouvel utilisateur
  const id = await userServices.createUser(firstName, lastName, email, hash);
  //TODO addTODO pour tout les programme de cette user

  if (!id) {
    res.sendStatus(500);
    return;
  }
  const payload = {
    id,
    role: "user",
  };
  //generation du token avec les informations de l'utilisateur du payload
  const token = tokenHelper.token(payload);
  //on genere le token et on l'envoi au front end en tant que reponse a la demande de connexion
  res.send(token);
};

module.exports = { login, register };
