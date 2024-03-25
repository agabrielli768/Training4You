import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Programme() {
  const navigate = useNavigate();
  const [programmes, setProgrammes] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:3001/realiser", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setProgrammes(response.data);
      })
      .catch((error) => {
        if (error.response.status) {
          navigate("/");
        }
        console.log(error);
      });
  },);

  const manageProgramme = (id, state) => {
    axios
      .post(
        `http://localhost:3001/realiser/${id}/${state}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((_) => {
        //Recharge automatiquement la page
        window.location.reload();
      })
      .catch((_) => {
        alert("Une erreur est survenue");
      });
  };
  return (
    <div>
      <h2>Programme</h2>
      <ul>
        {programmes.map((p) => (
          <li>
            <div className="programme">
              <h2>{p.nom}</h2>
              <p>type : {p.programme.type}</p>
              <p>duree: {p.programme.duree}</p>
              {p.statut === "a realiser" ? (
                <button
                  onClick={() => manageProgramme(p.programme.id, "en cours")}
                >
                  Commencer
                </button>
              ) : p.statut === "en cours" ? (
                <button
                  onClick={() => manageProgramme(p.programme.id, "realise")}
                >
                  Terminer
                </button>
              ) : (
                "Terminé"
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programme;
