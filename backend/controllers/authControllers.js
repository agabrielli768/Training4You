//on importe users.services qui contient les fonctions pour interagir avec les utilisateurs de la BDD
const userServices = require("../services/user.services");
//on importe jwtHelper pour gerer les tokens JWT
const tokenHelper = require("../utils/jwtHelper");

//la fonction login pour gerer la connexion des utilisateurs avec req en requete entrante et res en requete sortante
const login = (req, res) => {
//extraction des attributs email et password de la requete
  const { email, password } = req.body;
//on recupere l'email et le mot de passe de l'utilisateur du fichier userServices
  userServices.getUser(email, password).then((user) => {
// on crée un objet avec l'identifiant et le role de l'utilisateur
    const payload = {
      id: user.id,
      role: user.role,
    };
//generation du token avec les informations de l'utilisateur du payload
    const token = tokenHelper.token(payload);
//on genere le token et on l'envoi au front end en tant que reponse a la demande de connexion
    res.send(token);
  });
};

module.exports = { login };
