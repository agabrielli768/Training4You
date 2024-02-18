//import du framework Express
const express = require("express");
//creation d'une nouvelle instance d'express
const app = express();
//definition du port d'ecoute
const port = 3000;
//importation et utilisation des routes d'authentification
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
//on demarre le serveur et ecoute le port definit ci dessus
app.listen(port, (erreur) => {
  if (erreur) {
    console.log("Une erreur est survenue");
  } else {
    console.log("Le serveur est lancé sur le port " + port);
  }
});
