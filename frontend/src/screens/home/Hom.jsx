import React from "react";
import disponibilite from "../../images/disponibilite.png";

function Hom() {
  return (
    <div data-v-45d3dc11 className="card">
      <div data-v-45d3dc11 className="card-body">
        <div data-v-45d3dc11 className="mt-3 mb-3 text-center">
          <h1 data-v-45d3dc11 className="text-secondary">
            <b data-v-45d3dc11> Qualité de Service</b>
          </h1>{" "}
          <p data-v-45d3dc11>La Qualité de service est notre priorité.</p>
        </div>{" "}
        <div data-v-45d3dc11 className="row">
          <div data-v-45d3dc11 className="card-deck">
            <div data-v-45d3dc11 className=" col-md-6 col-lg-3">
              <div data-v-45d3dc11 className="card position-static">
                <img
                  data-v-45d3dc11
                  src={disponibilite}
                  alt="card img"
                  className="card-img-top"
                />
                {/**/}
                <div data-v-45d3dc11 className="card-body">
                  <h4 data-v-45d3dc11 className="card-title">
                    Transparence de prix
                  </h4>
                  {/**/}
                  <p data-v-45d3dc11 className="card-text">
                    Nous vous proposons une grille tarifaire selon votre besoin
                    en réparation / installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hom;
