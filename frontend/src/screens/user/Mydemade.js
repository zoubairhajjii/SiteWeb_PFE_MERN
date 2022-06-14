import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../../utils/LocalStorage";
import { getDemande } from "../../redux/actions/demandeAction";
import { demandeReducer } from "../../redux/reducers/demandeReducer";
import "./Mydemade.css";
import { useDispatch, useSelector } from "react-redux";
function Mydemade() {
  const [demandes, setDemandes] = useState([]);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const { demande } = useSelector((state) => {
    return state.demandeReducer;
  });
  const location = useLocation();
  const navigate = useNavigate();

  function getData(id) {
    axios
      .get("http://localhost:5000/api/Demande/Demandes/" + id)
      .then((result) => setDemandes(result.data.ListOfDemande));
  }
  useEffect(() => {
    console.log("hello");
    getUserData().then((res) => getData(res._id));
  }, []);

  return (
    <div className="container">
        <div>

      {demandes.map((demn) => (
                <div style={{border:'solid black 1px',margin:10}}>
          <p>{demn.prix}</p>
          <p>{demn.prix}</p>
          <p>{demn.ServiceId.DescriptionService}</p>
          <p>{demn.prix}</p>
          <p>{demn.prix}</p>

                </div>

      ))}
              </div>

    </div>
  );
}
export default Mydemade;
