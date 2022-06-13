import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditeSerivce = () => {
 Navigate=useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    Telephone: "",
    Address: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 

  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    return (
      <>
        <div className="user">
          <div className="userTitleContainer">
            <h1>Edit User</h1>
            <Link to="/newUser">
              <button>Create</button>
            </Link>
          </div>

          <div className="userUpdate">
            <h3>Edit</h3>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateLeftItmes">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateLeftItmes">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Beck "
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateLeftItmes">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com "
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateLeftItmes">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+ 123 456 7894"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateLeftItmes">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York / USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?cs=srgb&dl=pexels-ba-phi-1116380.jpg&fm=jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
};

export default EditeSerivce;
