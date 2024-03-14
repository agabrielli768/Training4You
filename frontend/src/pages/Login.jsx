import React from "react";
import axios from "axios";
//redirige l'utilisateur vers sa page d'accueil

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//composant de connexion
function Login () {
  const navigate =  useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    // Vérification du token lors du chargement de la page
    const token = localStorage.getItem('token');

    if (token) {
      // Redirection vers la page sécurisée si le token est présent
      navigate();
    }
  }, [navigate]);

  //fonction qui est appelé lors de la soumission du formulaire
  const handleSubmit = async (evt) => {
    //permet de neutraliser l'envoi du formulaire si celui ci est mal rempli
    evt.preventDefault();
    //recupération des données du formulaire
    try {
      const reponse = await axios.post("http://localhost:3001/auth/login", { email, password });
      localStorage.setItem('token', reponse.data)
      navigate ("/dashboard") 
      
    } catch (error) {
      setError('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
    }
  }
    
      return (
    <div>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
