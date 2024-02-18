require ("dotenv").config();
//informations pour creer une connexion avec la DB
const mysql = require("mysql2");
const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});
//renvoi une erreur si la connexion a la DB n'a pas pu s'effectuer
database.connect ((erreur)=>{
    if (erreur) {
        console.log ("Impossible de se connecter à la base de données")
        console.log (erreur)
    } else {
//si la connexion réussie, on renvoi un autre message d'erreur
        console.log ("Connexion réussie à la base de données")
    }
})

module.exports = database 