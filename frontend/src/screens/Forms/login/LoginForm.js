import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import MetaData from "../../../utils/title/MetaData";
import { LoginAction } from "../../../redux/actions/authAction";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

export default function LoginForm() {
  const Navigate = useNavigate();
  const [passeye, setPasseye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const[passwordError,setPasswordError]=useState(null);
const[emailError,setEmailError]=useState(null);
  function validateinput(){
    var emailvalid= false;
    var passwordvalid = false;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("please enter a valid email.")
      emailvalid=false;
  }
  else{
    setEmailError(null)
    emailvalid=true;
  }
  if(password.length<8){
    setPasswordError("password must be longer than 8 characters")
passwordvalid=false;
  }else{
    setPasswordError(null)
    passwordvalid=true;

  }
  if(emailvalid&&passwordvalid){
    dispatch(LoginAction({ email, password }, Navigate));
    return true;

  }
  else{return false}

  }
  return (
    <Container className="container">
      <Paper className="PaperClass">
        <MetaData title="login" />
        <div className="allTypeFormPage">
          <div className="mainFormContainer ">
            <div className="form__header">
              <h2>login</h2>
              <p>
                Not have an account ? <Link to="/signup">signup</Link>
              </p>
            </div>
            <span></span>
            <form id="login__form" className="formClass" method="POST">
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
               
                autoComplete="email"
                className="aa"
                autoFocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              {emailError&&<p>Please check email format</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                className="aa"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
                            {passwordError&&<p>password must be longer than 8 characters</p>}

              <div className="form__control " style={{ color: "red" }}>
                <Link to="/forgetpasword">forget password</Link>
              </div>
              <Button
                className="formSubmitBtn"
                variant="contained"
                color="success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault(e);
                  validateinput();

                }}
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>

        <ToastContainer />
      </Paper>
    </Container>
  );
}
