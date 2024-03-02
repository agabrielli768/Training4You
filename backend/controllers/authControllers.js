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
  const user = await userServices.getUserByEmail(email);
  if (user.length === 0) {
    res.sendStatus(403);
    return;
  }
  //on compare le mot de passe saisit par l'utilisateur et le mot de passe hashé en BDD
  const result = await bcrypt.compare(password, user[0].password);
  if (!result) {
    res.sendStatus(403);
    return;
  }
  // on crée un objet avec l'identifiant et le role de l'utilisateur
  const payload = {
    id: user[0].id,
    role: user[0].role,
  };
  //generation du token avec les informations de l'utilisateur du payload
  const token = tokenHelper.token(payload);
  //on genere le token et on l'envoi au front end en tant que reponse a la demande de connexion
  res.send(token);
};
// Inscription a l'application
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hash = await bcrypt.hash(password, 5);
  //Vérification si l email n'est deja pas existant
  const user = await userServices.getUserByEmail(email);
  if (user.length !== 0) {
    res.sendStatus(403);
    return;
  }
  // Creation d'un nouvel utilisateur
  const id = userServices.addUser(firstName, lastName, email, hash);

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
