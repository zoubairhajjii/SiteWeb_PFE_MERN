import React, { useEffect, useState } from "react";
import "./Modal.css";
import { getUserData } from "../../utils/LocalStorage";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


function Modal({ setOpenModal }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const location = useLocation();
  const [prod, setProd] = useState(null);
  const [user, setUser] = useState();
  function addservice() {
    axios
      .post(
        `http://localhost:5000/api/Demande/addDemande/${location.state.id}/${user._id}`,
        { prix: price , description: description }
      )
      .then((result) => alert("all good"))
      .catch((err) => alert("error is" + err));
  }
  useEffect(() => {
    getUserData().then((res) => setUser(res));
  }, []);
  const pricefunction=(e)=>{
    setprice(e.target.value)
  }
  const desfunction=(e)=>{
    setdescription(e.target.value)
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
        x
          </button>
        </div>
       
        <div className="input">
          <input type="text" placeholder="description"
          onChange={desfunction}/>
        </div>
        <div>
            <input type="number" placeholder="price"
            name="price"
            onChange={pricefunction}/>
    
          <button onClick={addservice}>Continue</button>
          </div>
      </div>
    </div>
  );
}

export default Modal;
