import axios from "axios";
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function EditeProfilePoff() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    password:"",
    Telephone: "",
    Adresse: "",
    role: "",
   
  });

  const { name, prenom, email,password,Telephone, Adresse, role } = user;
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/user/edituser/${id}`, user);
    Navigate("/login  ");
  };


  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <hr />
      <div className="col-md-9">
        <form className="form-horizontal" onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            {/* left column */}

            {/* edit form column */}
            <div className="col-md-9 personal-info">
              <div className=" alert-info alert-dismissable"></div>
              <h3>Personal info</h3>

              <div className="form-group">
                <label className="col-lg-3 control-label"> firstname:</label>
                <div className="col-lg-8">
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">lastName</label>
                <div className="col-lg-8">
                  <input
                    name="prenom"
                    value={prenom}
                    className="form-control"
                    type="text"
                    placeholder="prenom"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="email99@gmail.com "
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                <label className="col-md-3 control-label">Password:</label>
                <div className="col-md-8">
                  <input className="form-control" 
                  type="password" 
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}/>
                  
                  
                </div>
              </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">phone:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      name="Telephone"
                      type="text"
                      placeholder="+216 456 7894"
                      value={Telephone}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Adresse:</label>
                    <div className="col-lg-8">
                      <input
                        name="Adresse"
                        className="form-control"
                        type="text"
                        placeholder="Adresse"
                        value={Adresse}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label">Adresse:</label>
                    <div className="col-lg-8">
                      <input
                        name="role"
                        className="form-control"
                        type="text"
                        placeholder="role"
                        value={role}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

             
             
              <div className="form-group">
                <label className="col-md-3 control-label" />
                <div className="col-md-8">
                  <button className="btn btn-success">Edite</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditeProfilePoff;
