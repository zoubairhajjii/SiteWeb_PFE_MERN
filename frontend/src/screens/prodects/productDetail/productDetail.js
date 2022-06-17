import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Podcasts,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import Modal from "../../model/Modal";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React from "react";
import "./productDetail.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../../utils/LocalStorage";
const ProductDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const [prod, setProd] = useState(null);
  const [user, setUser] = useState();
  function addservice() {
    axios
      .post(
        `http://localhost:5000/api/Demande/addDemande/${location.state.id}/${user._id}`,
        { price: price, description: description }
      )
      .then((result) => alert("all good"))
      .catch((err) => alert("error is" + err));
  }
  useEffect(() => {
    getUserData().then((res) => setUser(res));

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
    <div className="raszeby">
      <div>
        <div>
          <img src={prod.image} alt="" />
        </div>
      </div>

      <div className="asba">
        <div className="coucou">
          {" "}
          <CategoryIcon />
          {prod.category}
        </div>
        <div className="coucou">
          <PlaceIcon />
          {prod.localisation}
        </div>
        <div className="coucou">
        <MonetizationOnIcon/>
        {prod.price}
        </div>
        <div>
          <div className="coucou">
            {" "}
            <AccountCircleIcon />
            {prod.userId.name}
          </div>
          <AccountCircleIcon />
          {prod.userId.prenom}
        </div>
        <div className="coucou">
          <HomeIcon />

          {prod.userId.Adresse}
        </div>

        <div className="coucou">
          <PhoneIcon /> {prod.userId.Telephone}
        </div>
        <div className="coucou">
          <EmailIcon /> {prod.userId.email}
        </div>
      </div>
      <div className="App">
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
            console.log("clicked");
          }}
        >
          Add demand
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
};

export default ProductDetail;
