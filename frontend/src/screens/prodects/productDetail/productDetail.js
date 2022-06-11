import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";

import React from "react";
import "./productDetail.css";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/Service/getProductDetail/" +
          location.state.id
      )
      .then((res) => setProd(res.data.ListOfService));
  }, []);

  if (prod == null) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className="all">
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={prod.image} alt="" />
            </div>
            <div className="alldis">
              <div className="userShowBottom">
                <h3>Account Details</h3>
                <h4>{prod.category}</h4> 
                <div className="userShowInfo">
                  
                  <PermIdentity className="userShowIcon" />
                  <span>{prod.userId.name}</span>
                </div>
                <div>
                <PermIdentity className="userShowIcon" />
                  {prod.userId.prenom}
                </div>

                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <h5>{prod.userId.Telephone}</h5>
                </div>
                <div className="userShowInfo">
                 <MailOutline className="userShowIcon" />
                  <span>{prod.userId.email}</span>
                </div>
                <div className="userShowInfo">
                  <HomeIcon className="userShowIcon" />
                  <span>{prod.userId.Adresse} </span>
                </div>
                <div className="userShowInfo">
                  <PinDropIcon className="userShowIcon" />
                  <span>{prod.location} </span>
                </div>
              </div>
              <div className="usershowleft">
                <button>Demande Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
