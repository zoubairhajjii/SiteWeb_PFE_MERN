import React from "react";
import disponibilite from "../../images/disponibilite.png";
import garantie from "../../images/garantie.png";
import qualite from "../../images/qualite.png";
import prix from "../../images/prix.png";
import "./hom.css";

function Hom() {
  return (
    <div className="big-card">
      <div className="top-card">
        <h1 className="title-top">Qualité de Service</h1>
        <p className="text-top">La Qualité de service est notre priorité.</p>
      </div>
      <div className="buttom-card">
        <div className="card">
          <img src={disponibilite} alt="card img" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">Disponible 7/7</h5>
            <p className="card-text">
              Réseau de techniciens compétents, disponibles sur le grand Tunis
              même pendant des heures tardives.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={garantie} alt="card img" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">Garantie assuré</h5>
            <p className="card-text">
              Darydar vous offre une garantie sur les interventions et un
              service de suivi à la hauteur de vos attentes.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={prix} alt="card img" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">Transparence de prix</h5>
            <p className="card-text">
              Nous vous proposons une grille tarifaire selon votre besoin en
              réparation / installation.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={qualite} alt="card img" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">Service de qualité</h5>
            <p className="card-text">
              Nos techniciens sont sélectionnés et testés par DaryDar pour vous
              offrir la meilleure prestation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hom;
