import React, { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import "./login.css";
import { Link } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../utils/title/MetaData';
import { LoginAction } from '../../../redux/actions/authAction'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {useNavigate}   from "react-router-dom";

export default function LoginForm() {
           
    const Navigate = useNavigate()
        
    const [passeye, setPasseye] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();







    return (
       

            <Paper  className="PaperClass">
                <MetaData title='login' />
                <div className='allTypeFormPage'>
                
                    <div className="mainFormContainer ">
                       
                        <div className="form__header">
                            <h2>login</h2>
                            <p>Not have an account ? <Link to='/signup'>signup</Link></p>
                        </div>
                        <span></span>
                        <form id="login__form" className="formClass" method="POST" >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                className='aa'

                                autoFocus
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                value={email}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                className='aa'

                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                            />
                            <div className='form__control'>
                                <Link to='/NewServiceAd'>forget password</Link>
                            </div>
                            <Button
                                className='formSubmitBtn'
                                style={{color :"red"}}
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault(e);
                                    dispatch(LoginAction({ email, password }, Navigate))
                                }}

                            >
                                Sign In
                            </Button>
                        </form>
                 
                    </div>
                </div>
           

            <ToastContainer />
        </Paper>
    )
}