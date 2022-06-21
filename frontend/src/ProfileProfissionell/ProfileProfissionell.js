import { LineStyle, Storefront } from "@mui/icons-material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getUserData } from "../utils/LocalStorage";
import NewServiceAdd from "../screens/service/pages/admin/NewServiceAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./profi.module.css";
import { notifySuccess } from "../utils/alerts/Alerts";
import ListeServicePof from "./ListeServicePof";
const ProfileProfissionell = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  useEffect(() => {
    getUserData().then((res) => setUser(res));
  }, []);

  const deletProfile = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/user/deleteuser/${id}`)
      .then(()=>navigate("/"))  };
  return (
    <>
      <div className="container emp-profile">
        <form method="post">
          <div className="">
            <div className="zz">
              <div className="profile-img">
                <img src="" alt="" />
                <div className="file btn btn-lg btn-primary"></div>
              </div>
            </div>
            <div className="">
              <div className="p">
                <ul className="nav nav-tabs" id="myTab" role="tablist"></ul>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="">
              <Link to="/newerviceAd" className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                addServices
              </Link>
              <Link to={`/EditeProfilePoff/${user._id}`}>
                <EditIcon className="sidebarIcon" />
                Edite Profile
              </Link>
              <Link to="/ListeServicePof">
                <EditIcon className="sidebarIcon" />
                ListeService
              </Link>
              <Link to="/demandesPro">
                <EditIcon className="sidebarIcon" />
                demandesPro
              </Link>
              <p
                className="btn btn-danger mr-2"
                onClick={() => deletProfile(user._id)}
              >
                delete Profil
              </p>
            </div>
            <div className="col-md-8">
               
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user._id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>prenom</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.prenom}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Telephone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.Telephone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.role}</p>
                    </div>
                  </div>
                </div>
              </div>
          
        
        </form>
      
      </div>
    </>
  );
};

export default ProfileProfissionell;
