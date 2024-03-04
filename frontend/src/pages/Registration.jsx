import React from "react";

function Registration() {
  return (
    <div>
      <h2>Inscription</h2>
      <form>
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
        <label for="password">Votre mot de passe:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="votre mot de passe"
          required
        />
        <label for="confirm_password">Confirmez votre mot de passe:</label>
        <input type="password" 
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
