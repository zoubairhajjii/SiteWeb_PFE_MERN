import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserData } from "../utils/LocalStorage";
import "./listeServiceProf.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { notifySuccess } from "../utils/alerts/Alerts";

function ListeServicePof() {
  const [service, setService] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    getUserData().then((res) => {
      setUser(res);
      axios
        .get(`http://localhost:5000/api/Service/getProDemandes/${res._id}`)

        .then((result) => {
          setService(result.data);
        });
    });
  }, []);
  const deletService = async (id) => {
    await axios
      .delete(
        `http://localhost:5000/api/Service/deleteService/${user._id}/${id}/`
      )
      .then(() => notifySuccess("Delete successful"));
  };

  return (
    <div className="container">
      {service.map((el) => {
        return (
          <div className="card_item">
            <div className="card_inner">
              <img src={el.image} alt="" />
              <div className="userName">
                {el.category}
                <div>{el.DescriptionService}</div>
                <div />
                <MonetizationOnIcon />
                price: {el.price}
              </div>
              <div />
              <button
                className="btn btn-danger "
                onClick={() => deletService(el._id)}
              >
                delet
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListeServicePof;
