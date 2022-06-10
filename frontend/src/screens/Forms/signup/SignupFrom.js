import React, { useState, useEffect, Fragment } from "react";
import "../AllForm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import MetaData from "../../../utils/title/MetaData";
import { Registration } from "../../../redux/actions/authAction";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/material";
import Paper from '@mui/material/Paper';


export default function SignupForm() {
  const Navigate = useNavigate();

  const [passeye, setPasseye] = useState(false);
  const [avatar, setAvatar] = useState("/profile.png");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    prenom: "",
    email: "",
    password: "",
    Telephone: "",
    role: "",
  });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(data, Navigate));
  };

  return (
    <Container className="container">
      <Paper  className="PaperClass">
        <MetaData title="signup" />
        <div className="allTypeFormPage">
          <div className="mainFormContainer">
            <div className="form__header">
              <h2>Signup</h2>
              <p>
                Already have an account ? <Link to="/Login">login</Link>
              </p>
            </div>
            <form
              id="signup__form"
              className="formClass"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form__control">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                  maxLength="40"
                />
              </div>
              <div className="form__control">
                <label htmlFor="prenom">prenom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={data.prenom}
                  onChange={onChange}
                />
              </div>
              <div className="form__control">
                <label htmlFor="email">email</label>
                <EmailIcon />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                />
              </div>
              <div className="form__control password">
                <label htmlFor="password">password</label>
                <input
                  type={passeye ? "text" : "password"}
                  id="password"
                  className="password"
                  name="password"
                  value={data.password}
                  onChange={onChange}
                  minLength="8"
                />
                <span onClick={() => setPasseye(!passeye)}>
                  {passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </div>

              <div className="form__control">
                <label htmlFor="Telephone">Telephone</label>
                <PhoneIcon />
                <input
                  type="text"
                  id="Telephone"
                  name="Telephone"
                  value={data.Telephone}
                  onChange={onChange}
                />
              </div>
              
              <div className="form__control">
                <label htmlFor="Adresse">Adresse</label>
                <HomeIcon />
                <input
                  type="text"
                  id="Adresse"
                  name="Adresse"
                  value={data.Adresse}
                  onChange={onChange}
                />
              </div>
              

              <div className="form__control">
                <label htmlFor="role">role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={data.role}
                  onChange={onChange}
                />
              </div>
              <button className="formSubmitBtn">Register</button>
            </form>
          </div>
        </div>
      </Paper>

      <ToastContainer />
    </Container>
  );
}
