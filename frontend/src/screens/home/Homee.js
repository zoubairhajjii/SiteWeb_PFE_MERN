import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import MetaData from "../../utils/title/MetaData";
import { useDispatch } from "react-redux";
import Categories from "../categories/Service";
import Hom from "./Hom";
import Job from "./job.png";
import Button from '@mui/material/Button';
import { borderColor } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = ["PLOMBIER", "ELECTRICINE", "NAJAR"];
const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ position: "relative", width: "100%" , marginTop: "45px",}}>
        <img
          src={Job}
          alt="JOB"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            height: "auto",
            borderRadius:"0px",    
          }}
        />
        <h2
              style={{
                position: "absolute",
                top: "50%",
                left: "75%",
                transform: "translate(-50%, -50%)",
                color: "#BDF2D5",
                width: "70%",
                height: "auto",
                
              }}
              className="tracking-in-contract"
              variant="outlined"
              color="primary"
              to="/service"
            >
            Find your Sercice
            </h2>
        <Link to="/service">
       <Button
              style={{
                position: "absolute",
                top: "80%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor:"#FF06B7",
                width: "17%",
                height: "auto", 
                borderRadius:"30px"
              }}
              variant="outlined"
              color="primary"
              to="/service"
              className="vibrate-1"
            >
            Get your Sercice !
            </Button>
            </Link>
      </div>
     

      <div className="hom">
        <Hom />
      </div>
    </div>
  );
};

export default Home;
