import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserData } from "../utils/LocalStorage";

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
      {demandes.map((el) => (
        <div style={{ border: "solid black 1px" }}>
          <p>service name = {el.service.DescriptionService}</p>
          <p>service name = {el.service.category}</p>

          <p>
            les demandes ={" "}
            {el.demandes.map((dem) => (
              <div style={{ border: "solid black 1px", margin: 10 }}>
                demande is
                <p>demande date = {dem.date}</p>
                <p>demande descfrpition = {dem.description}</p>
                <p>demande prix = {dem.prix}</p>
                <p>demande etat = {dem.etat}</p>
                <p>el user = {dem.userId.name}</p>
                <p>el user number = {dem.userId.Telephone}</p>
                <button
                  onClick={() => acceptdeny(dem._id, 1)}
                  style={{
                    border: "1px solid black",
                    margin: 5,
                    backgroundColor: "aqua",
                  }}
                >
                  accept
                </button>
                <button
                  onClick={() => acceptdeny(dem._id, 0)}
                  style={{
                    border: "1px solid black",
                    margin: 5,
                    backgroundColor: "aqua",
                  }}
                >
                  Deny{" "}
                </button>
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DemandesPro;
