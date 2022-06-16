import { LineStyle, Storefront } from "@mui/icons-material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getUserData } from "../../../utils/LocalStorage";
import NewServiceAdd from "../pages/admin/NewServiceAdd";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./profi.module.css";
const ProfileProfissionell = () => {
  const location = useLocation();

  const [user, setUser] = useState({});
  useEffect(() => {
    getUserData().then((res) => setUser(res));

  }, []);
  const deletProfile=()=>{

  }
  


  return (
    <>

    <div className="container emp-profile">
      <form method="post">
        <div className="">
          <div className="zz">
            <div className="profile-img">
              <img
                src=""
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
               
               
              </div>
            </div>
          </div>
          <div className="">
            <div className="p">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
               
               
                
              </ul>
            </div>
          </div>
          <div className="col-md-2">
         
        
          </div>
        </div>
        <div className="row">
          <div className="">
          <Link to='/newerviceAd' className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
              addServices
            </Link>
          <Link to='/EditeProfilePoff' >
              <EditIcon className='sidebarIcon' />
              Edite Profile
            </Link>
            <button class="btn btn-danger mr-2" onClick={() => deletProfile(user._id)} > 
            delete Profil
           </button>
            
            

          
            
           </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
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
                    <label>Phone</label>
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
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
  )}

export default ProfileProfissionell;
