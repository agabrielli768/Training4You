const database = require("../database/database");

//on recupere l'email et le mot de passe de l'utilisateur de la DB
const getUser = (email, password) => {

//on cree une nouvelle promesse, on demande a la DB de nous retourner l'email et le mot de passe de l'utilisateur
//si une erreur survient la promesse est rejetée sinon la promesse est résolue
    return new Promise ((
        resolve, reject
    )=>{
        database.query(
            "select * from compte_utilisateur where email=? and mot_de_passe=?",
            [email, password],
            (error, result)=>{
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            }
          ); 
    })
};


module.exports = {getUser}
