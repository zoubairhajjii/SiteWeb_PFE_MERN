import axios from "axios";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import { ToastContainer } from "react-toastify";

function UserProfile()  {
    
  return (
    <Fragment>
      <Fragment>
        <div className="userProfile">
          <div className="profile__info">
            <div className="userProfile__image"></div>
            <h2 className="UserName"></h2>
            <div className="personal__info">
              <span>profile </span>
            </div>
            <Link to="update">
              <div className="btnPrimary">Edit Profile</div>
            </Link>
          </div>
          <div className="moreAboutUser">
            <Link to="/Mydemade">
              <div className="btnPrimary profileBtn">My Demande</div>
            </Link>
            <Link to="password/update">
              <div className="btnPrimary profileBtn">Change Password</div>
            </Link>
          </div>
        </div>
      </Fragment>

      <ToastContainer />
    </Fragment>
  );
};

export default UserProfile;
