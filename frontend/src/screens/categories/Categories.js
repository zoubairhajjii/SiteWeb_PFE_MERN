import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imag from "../../images/imag.png";
import plonB from "../../images/imagePlonB.png";
import chef from "../../images/chef.png"
import clamatiseur from '../../images/clamatiseur.png'

function Categories() {
  const Navigate = useNavigate();

  const [categories, setCategirues] = useState([
    { name: "électricite", image:  imag },
    { name: "plombier", image: plonB },
    { name: "cheff", image: chef },
    { name: "climatisation", image: clamatiseur }
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "200px",
      }}
    >
      {categories.map((element) => (
        <div
          onClick={() => {
            console.log("wtf is this");
            Navigate("/product", { state: { name: element.name } });
          }}
        >
          <h1>{element.name}</h1>
          <img src={element.image} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
