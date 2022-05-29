import React, { useState, Fragment } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import { LoginAction } from '../../../redux/actions/authAction';
import { ToastContainer } from 'react-toastify';
import Loading from '../../loaders/Loading';
import {useNavigate } from "react-router-dom";
import  {useDispatch, useSelector } from "react-redux"

import MetaData from '../../title/MetaData'


const Login = () => {
    const [passeye, setPasseye] = useState(false);
    const dispatch = useDispatch();
    const Navigate = useNavigate()



    const [data, setData] = useState({ 
         email: '',
         password: '' 
    });


    const handleSubmit = (e) => {
        e.preventDefault(e);
        dispatch(LoginAction({ data }, Navigate))
    }
    const { auth } = useSelector(state => state.authReducer)
    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    return (
        <Fragment>
            {auth ?
                (<Loading />) : (
                    <Fragment>
                        <MetaData title='login' />
                        <div className='allTypeFormPage'>
                            <div className="mainFormContainer">
                                <div className="form__header">
                                        <h1>login</h1>
                                        <p>Not have an account ? <Link to='/register'>Register</Link></p>
                                    </div>
                                    <span></span>
                                    <form id="login__form" className="formClass" method="POST" onSubmit={handleSubmit}>
                                        <div className="form__control">
                                            <label htmlFor="username">Email</label>
                                            <input type="text" id="email" name="email" value={data.email} onChange={onChange} />

                                        </div>
                                        <div className="form__control password">
                                            <label htmlFor="password">Password</label>
                                            <input type={passeye ? "text" : "password"} id="password" className="password" name="password" value={data.password} onChange={onChange} />
                                            <span onClick={() => setPasseye(!passeye)} >{passeye ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>

                                        </div>
                                        <div className='form__control'>
                                            <Link to='/password/forgot'>forget password</Link>
                                        </div>
                                        <button className='formSubmitBtn' >Login</button>
                                    </form>
                                </div>
                            </div>
                        </Fragment>
                    )
                }
                <ToastContainer />
            </Fragment>
            )
        
   
}

export default Login