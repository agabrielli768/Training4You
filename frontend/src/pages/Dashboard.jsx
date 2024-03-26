import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Home/style.css";
import { Link } from "react-router-dom";


function Dashboard() {
  const [name, setName] = useState ('')
  const handleConnexion = () => {
    setName ('')
  }
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  });
  return (
    <div className="container">
      <div className="text-wrapper-2">training 4 you</div>
      <div className="text-wrapper-2">toujours avec vous</div>
      <Button
        className="button-instance"
        state="default"
        text="Accueil &gt;&gt;"
      />
      <div className="text-wrapper-2">Bienvenue {name}</div>
      <div className="overlap">
        <Link className="text-wrapper-3" to="/programme">
          Programmes réalisés
        </Link>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
        <Link className="text-wrapper-3" to="/programme">
          Exercices réalisés
        </Link>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
        <Link className="text-wrapper-3" to="/programme">
          Programmes en cours
        </Link>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
        <Link className="text-wrapper-3" to="/programme">
          Mes Favoris
        </Link>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
      </div>
      <div className="text-wrapper-4">ACTUALITES</div>
      <div className="group">
        <div className="group-2">
          <div className="overlap">
            <div className="group-3">
              <img
                className="group-4"
                alt="Group"
                src="https://c.animaapp.com/bDc8z2Pf/img/group-1@2x.png"
              />
              <p className="comment-pr-venir-les">
                <span className="span">Comment </span>
                <span className="span">
                  prévenir les blessures (échauffements, équipements) retrouvez
                  tous nos conseils
                  <br />
                </span>
              </p>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img
                  className="group-5"
                  alt="Group"
                  src="https://c.animaapp.com/bDc8z2Pf/img/group-3@2x.png"
                />
                <p className="pourquoi-de-plus-en">
                  <span className="span">Pourquoi </span>
                  <span className="span">
                    de plus en plus de français pratiquent le fitness à domicile
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="line"
        alt="Line"
        src="https://c.animaapp.com/bDc8z2Pf/img/line-1.svg"
      />
      <div className="text-wrapper-4">A propos de</div>
      
      <div className="frame" />
      <div className="text-wrapper-7">LA RECETTE DU MOIS</div>
      <div className="text-wrapper-8">Salade d’avocats aux crevettes</div>
      <div className="group-10">
        <div className="overlap-2">
          <div className="text-wrapper-9">Découvre la recette</div>
          <button onClick={logout}>Se déconnecter</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
