import React, { Fragment } from "react";
import "./AboutUs.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MetaData from "../../utils/title/MetaData";

const AboutUs = () => {
  return (
    <Fragment>
      <MetaData title="about" />
      <div className="AboutPage">
        <div className="about__cart">
          <div className="about__image">
            <img alt="" src="" />
          </div>

          <div className="about__content">
            <p>
              JobFinder est une plate-forme de mise en relation entre des
              clients et des professionnels. Si vous avez un problème au niveau
              de votre maison, bureau, cabinet , JobFinder se charge
              de vous dépêcher un spécialiste pour intervenir dans les meilleurs
              délais avec la garantie de l’efficacité, la qualité et la
              transparence.
            </p>
            <div className="aboutCart__icons">
              <div className="icons">
                <LocalShippingIcon />
                <span>free delivery</span>
              </div>
              <div className="icons">
                <AttachMoneyIcon />
                <span>easy payments</span>
              </div>
              <div className="icons">
                <HeadsetMicIcon />
                <span>24/7 service</span>
              </div>
            </div>
            <button className="learnMore__about">learn more</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
