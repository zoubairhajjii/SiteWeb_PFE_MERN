import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import MetaData from "../../utils/title/MetaData";
import {  useDispatch } from "react-redux";
import Categories from "../categories/Categories";
import Hom from "./Hom";
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
      
      <div className="cat">
     
      <Categories/>
      </div>
      <h1 className="h1">notre service</h1>
      <div className="hom">
      <Hom /> 
     

      </div>
    
    </div>
  );
};

export default Home;
