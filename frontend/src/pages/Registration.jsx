import React from "react";
import axios from "axios";
//redirige l'utilisateur vers sa page d'accueil
import { useNavigate } from "react-router-dom";

//composant d'inscription
function Registration() {
  const navigate = useNavigate();
  //fonction qui est appelé lors de la soumission du formulaire
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //recuperation des données du formulaire
    const lastName = evt.target.lastname.value;
    const firstName = evt.target.firstname.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    const confirmPassword = evt.target.confirm_password.value;
    if (password !== confirmPassword) {
      alert("Mot de passe différent");
      return;
    }
    //utilisation de la methode POST grace au client axios
    axios
      .post("http://localhost:3001/auth/register", {
        firstName,
        lastName,
        email,
        password,
      })
      //on attend la creation du token pour rediriger l'utilisateur vers sa page d'accueil
      .then((reponse) => {
        localStorage.setItem("token", reponse.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("Une erreur est survenue");
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Inscription</h2>
      <form id="register-form" onSubmit={handleSubmit}>
        <label for="lastname">Votre nom:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="votre nom"
          required
        />
        <label for="firstname">Votre prénom:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="votre prénom"
          required
        />
        <label for="email">Votre adresse email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="votre adresse email"
          required
        />
        <label for="password">Votre mot de passe:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="votre mot de passe"
          required
        />

        <label for="confirm_password">Confirmez votre mot de passe:</label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <input value="Creez votre compte" type="submit" />
      </form>
    </div>
  );
}

export default Registration;
