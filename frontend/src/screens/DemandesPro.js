import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserData } from "../utils/LocalStorage";

function DemandesPro() {
    const [demandes, setDemandes] = useState("");

function getMyDemandesPro(id){
axios.get("http://localhost:5000/api/Demande/ddd/"+id).then((result)=>{setDemandes(result.data);console.log(result.data[0].service)})
}

  useEffect(() => {
    getUserData().then((res) => getMyDemandesPro(res._id));
  }, []);

  if (demandes == "") {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      {demandes.map((el)=>(
        <div style={{border:"solid black 1px"}}>
<p>service name = {el.service.DescriptionService}</p>
<p>service name = {el.service.category}</p>

<p>les demandes = {el.demandes.map((dem)=>(
    <div style={{border:"solid black 1px",margin:10}}>
        demande is
        <p>demande date = {dem.date}</p>
        <p>demande descfrpition = {dem.description}</p>
        <p>demande prix = {dem.prix}</p>
        <p>demande etat = {dem.etat}</p>
        
        <p>el user = {dem.userId.name}</p>
        <p>el user number = {dem.userId.Telephone}</p>

</div>

))}</p>




    </div>

      ))}
    </div>
  );
}

export default DemandesPro;
