import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Programme() {
  const navigate = useNavigate();
  const [programmes, setProgrammes] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:3001/programmes", {
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
        //TODO afficher un message d'erreur
      });
  }, [navigate]);

  const manageProgramme = (id, state) => {
    axios.post(`http://localhost:3001/programmes/"${id}"/${state}`, {
      headers: { Authorization: `Bearer ${token}` },
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
              <p>type : {p.type}</p>
              <p>duree: {p.duree}</p>
              <button onClick={() => manageProgramme(p.id, "commence")}>
                Start
              </button>
              <button onClick={() => manageProgramme(p.id, "termine")}>
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programme;
