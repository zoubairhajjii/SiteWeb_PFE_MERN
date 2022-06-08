import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box, display, margin } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import "./prodect.css";
import { useSelector } from "react-redux";
function Product() {
  const location = useLocation();
  const navigate = useNavigate()
  const [prods, setProds] = useState([]);
  const { service } = useSelector((state) => state.serviceReducer);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/Service/getByServiceName/" +
          location.state.name
      )
      .then((res) => setProds(res.data.ListOfService));
  }, []);

 
  const navigateToDetail = (id) => {
    navigate(`/productDetail/${id}`)
  }
             


return (
      
  <div className="container">
     
      {
          prods.map((el) => {
              return (

                  <div className="card_item" key={el.category}>
                      <div className="card_inner">
                          <img src={el.image} alt="" />
                          <div className="userName">{el.location}</div>
                          <div className="userUrl">{el.DescriptionService}</div>
                          <div className="detail-box">

                              <div className="gitDetail"><span>{el.price}</span>11</div>
                          </div>
                          <button onClick={() => navigateToDetail(el._id)} className="seeMore">See More</button>
                      </div>

                  </div>
              )
          })
      }

  </div> )}
  export default Product