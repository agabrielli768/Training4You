import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Home/style.css";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

function Dashboard() {
  const [name, setName] = useState("");
  const handleConnexion = () => {
    setName("");
  };
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
      <div className="flex-wrap">
        <div className="overlap">
          <Link className="text-wrapper-3" to="/programme">
            Programmes réalisés
          </Link>
        </div>
        <div className="overlap">
          <Link className="text-wrapper-3" to="/programme">
            Exercices réalisés
          </Link>
        </div>
        <div className="overlap">
          <Link className="text-wrapper-3" to="/programme">
            Programmes en cours
          </Link>
        </div>
        <div className="overlap">
          <Link className="text-wrapper-3" to="/programme">
            Mes Favoris
          </Link>
        </div>
      </div>
      <div className="text-wrapper-4">RECETTE DU MOIS</div>
      <p className="subtext">Salade d'avocats aux crevettes</p>
      <div className="group">
        <img className="group-2" alt="Group" src="./assets/Recette.webp" />
      </div>
      <div className="text-wrapper-4">ACTUALITES</div>
      <div className="group">
        <img
          className="group-2"
          alt="Group"
          src="https://c.animaapp.com/3qAMEnpQ/img/group-1@2x.png"
        />
        <p className="comment-pr-venir-les">
          <span className="span">Comment </span>
          <span className="span">
            prévenir les blessures (échauffements, équipements) retrouvez tous
            nos conseils
            <br />
          </span>
        </p>
      </div>
      <div className="group-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              className="group-3"
              alt="Group"
              src="https://c.animaapp.com/3qAMEnpQ/img/group-3@2x.png"
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
      <p className="nous-rejoindre">
        <span className="text-wrapper-5">
          POURQUOI NOUS REJOINDRE ?<br />
        </span>
        <span className="text-wrapper-6">
          <br />
          Retrouvez nos programmes force, cardio afin de
          <br /> donner le meilleur de vous meme!
          <br />
          Un large choix de programmes et exercices s’adaptent à vos besoins
          (perte de poids, prise de masse...).
          <br />
          Inclus, nos conseils nutrition et recettes diététiques pour
          accompagner vos efforts.
          <br />
          <br />
        </span>
      </p>
      <img
        className="line"
        alt="Line"
        src="https://c.animaapp.com/3qAMEnpQ/img/line-1.svg"
      />
      <div className="flex">
        <div className="text-wrapper-8">A propos de</div>
        <Footer className="component-1" />
      </div>
    </div>
  );
}

export default Dashboard;
