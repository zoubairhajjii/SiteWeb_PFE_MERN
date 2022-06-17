import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import elect from '../../images/elect.png';
import plonB from "../../images/plomberie.png"
import chauffage from "../../images/chauffage.png"
import clamatiseur from '../../images/climatisation.png'
import './service.css';
function Categories() {
  const Navigate = useNavigate();

  const [categories, setCategirues] = useState([
    { name: "électricite", image:  clamatiseur },
    { name: "plombier", image: plonB },
    { name: "chef", image: chauffage },
    { name: "climatisation", image: clamatiseur }
  ]);
  return (
    <div className="aa">
      {categories.map((element) => (
        <div
         className="bb"
          onClick={() => {
           
            Navigate("/product", { state: { name: element.name } });
          }}
        >
          <img src={element.image} className="imgcc" />
          <h6 className="h6dd">{element.name}</h6>
          
        </div>
      ))}
    </div>
  );
}

export default Categories;
