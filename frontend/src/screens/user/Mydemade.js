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

  function addfeedback(id) {
    axios.post(`http://localhost:5000/api/FeedBack/${id}/addFeedBack`).then();
  }

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
    
      <div>
        {demandes.map((demn) => (
          <div class="row row-cols-1 row-cols-md-2 g-4">
             <div class="card-body">
             <div class="col">
             <h5 class="card-title">{demn.ServiceId.DescriptionService}</h5>
             <div class="card-text"> 
             <h1>price</h1> 
               {demn.prix}
              </div>
               <div class="card-text"> 
              
               {demn.etat}</div>
        
         
           
               {demn.etat === "validé" && (
              <button onClick={() => {}} style={{ backgroundColor: "aqua" }}>
                add feedback
              </button>
            )}
          </div>
          </div>
          </div>
        ))}
      </div>
   
  );
}
export default Mydemade;



