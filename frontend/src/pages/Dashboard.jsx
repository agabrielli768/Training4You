import React from "react";
import { Button } from "../components/Button/Button";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="div-2">
        <div className="title">TRAINING 4 YOU</div>
        <div className="text-wrapper-2">TOUJOURS AVEC VOUS</div>
        <Button
          className="button-instance"
          state="default"
          text="Accueil &gt;&gt;"
        />
        <div className="group">
          <div className="group-2">
            <div className="div-wrapper">
              <div className="text-wrapper-3">ACTUALITES</div>
            </div>
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
                    prévenir les blessures (échauffements, équipements)
                    retrouvez tous nos conseils
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
                      de plus en plus de français pratiquent le fitness à
                      domicile
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
        <div className="bienvenue-anthony">BIENVENUE ANTHONY</div>
        <div className="group-6">
          <div className="group-7">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Programmes réalisés</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Programmes en cours</div>
            </div>
          </div>
          <div className="group-8">
            <div className="overlap-group-2">
              <div className="text-wrapper-6">Mes favoris</div>
            </div>
          </div>
          <div className="group-9">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Exercices réalisés</div>
            </div>
          </div>
        </div>
        <div className="frame" />
        <div className="text-wrapper-7">LA RECETTE DU MOIS</div>
        <div className="text-wrapper-8">Salade d’avocats aux crevettes</div>
        <div className="group-10">
          <div className="overlap-2">
            <div className="text-wrapper-9">Découvre la recette</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;