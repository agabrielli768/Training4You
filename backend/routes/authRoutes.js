//on importe express et la fonction Router ()
const express = require ("express");
const router = express.Router();
//importe le fichier authControllers qui gere la connexion utilisateur et la generation du token
const authController = require ("../controllers/authControllers")
//dirige l'utilisateur vers la page d'authentification
router.post ("/login",authController.login)
router.post ("/register", authController.register)


module.exports = router