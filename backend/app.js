"use strict";
const cors = require ("cors")
//import du framework Express
const express = require("express");
//creation d'une nouvelle instance d'express
const app = express();
//definition du port d'ecoute
const port = 3001;
//importation et utilisation des routes d'authentification
const authRoutes = require("./routes/authRoutes");
const programmeRoutes = require ("./routes/programmeRoutes");
const verifAuth = require ("./middleware/verifAuth")
app.use (express.json());
app.use (cors())
app.use("/auth", authRoutes);
app.use ("/programmes",verifAuth, programmeRoutes);
//on demarre le serveur et ecoute le port definit ci dessus
app.listen(port, (erreur) => {
  if (erreur) {
    console.log("Une erreur est survenue");
  } else {
    console.log("Le serveur est lancé sur le port " + port);
  }
});
