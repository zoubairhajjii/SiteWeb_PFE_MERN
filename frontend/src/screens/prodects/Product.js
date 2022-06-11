

import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

import "./prodect.css";
function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prods, setProds] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/Service/getByServiceName/" +
          location.state.name
      )
      .then((res) => {setProds(res.data.ListOfService)});
  }, []);

  return (
    <div className="container">
      {prods.map((el) => {
        return (
          <div className="card_item">
            <div className="card_inner">
              <img src={el.image} alt="" />
              <div className="userName">{el.category}</div>
           
             
              <button
                className="seeMore "
                onClick={() => {

                  navigate("/productDetail", { state: { id: el._id }});
                }}
              >
                See More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
