import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserData } from "../utils/LocalStorage";
import "./demandProf.css"
function DemandesPro() {
  const [demandes, setDemandes] = useState("");

  function getMyDemandesPro(id) {
    getUserData().then((res) =>
      axios
        .get("http://localhost:5000/api/Demande/ddd/" + res._id)
        .then((result) => {
          setDemandes(result.data);
          
        })
    );
  }
  function acceptdeny(demandeid, status) {
    axios
      .post(
        `http://localhost:5000/api/Demande/acceptDeny/${demandeid}/${status}`
      )
      .then(()=>getMyDemandesPro());
  }

  useEffect(() => {getMyDemandesPro()}, []);

  if (demandes == "") {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <div className="pro">
      {demandes.map((el) => (
        <div>
        
         <h1> {el.service.category}</h1>
            {" "}
            <div className="lkol">
            {el.demandes.map((dem) => (
              <div className="cat">
                demande par 
                <div className="demande">
                <p> {dem.userId.name}</p>
                <p> {dem.userId.prenom}</p>
                <p>{dem.description}</p>
                <p>{dem.prix}</p>
                <p>{dem.etat}</p>
                <p>{dem.userId.Telephone}</p>
                <p>{dem.userId.email}</p>
                </div>
                <button
                  onClick={() => acceptdeny(dem._id, 1)}
                  className="btnn1"
                >
                  accept
                </button>
                <button
                  onClick={() => acceptdeny(dem._id, 0)}
                  className="btnn2"
                >
                  Deny{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default DemandesPro;
