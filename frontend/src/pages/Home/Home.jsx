import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";

function HomePage() {
  return (
    <div>
      <div className="home">
        <div className="div-2">
          <img
            className="title"
            alt="Title"
            src="https://c.animaapp.com/3qAMEnpQ/img/title.png"
          />
        </div>
        <div className="text-wrapper-2">TOUJOURS AVEC VOUS</div>
        <div className="overlap">
          <Link className="text-wrapper-3" to="/registration">
            S'inscrire
          </Link>
        </div>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
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
        <div className="div-wrapper">
          <div className="text-wrapper-7">TEMOIGNAGES</div>
        </div>
        <img
          className="line"
          alt="Line"
          src="https://c.animaapp.com/3qAMEnpQ/img/line-1.svg"
        />
        <div className="text-wrapper-8">A propos de</div>
        <Footer className="component-1" />
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <p className="p">
              <span className="text-wrapper-9">Julie: “</span>
              <span className="span">
                {" "}
                Depuis plusieurs semaines, je cherchais des programmes
                d’entrainements pour femmes enceintes”
              </span>
            </p>
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="text-wrapper-10">Découvrez la suite</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-2">
            <p className="p">
              <span className="text-wrapper-9">Romain: “</span>
              <span className="span">
                {" "}
                Grâce aux tutoriels vidéos, je peux réaliser les mouvements avec
                la bonne technique.”
              </span>
            </p>
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="text-wrapper-10">Découvrez la suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
