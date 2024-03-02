const CompteUtilisateur = require("../entities/CompteUtilisateur");

//mappage de l'entité user avec la table compte_utilisateur
const userMapper = (users) => {
    const comptes = [];
          for (u of users) {
            comptes.push(
              new CompteUtilisateur(u.id, u.email, u.mot_de_passe, u.prenom, u.nom, u.role)
            );
          }
          return comptes
}

module.exports = {userMapper}