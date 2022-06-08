import React, { Fragment, useState, useEffect } from 'react'
import "./auth.css";
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {showSuccessMsg,showErrMsg} from "../../../utils/notification/Notification"
import { useDispatch, useSelector } from 'react-redux'
import {forgotPassword} from "../../../redux/actions/passwordAction"
import{notifySuccess} from "../../../utils/alerts/Alerts"
import { FORGOT_PASSWORD_RESET } from '../../../redux/types'
import {isEmail}from '../../../utils/validation/Validation'
/*const ForgotPassword = () =>{
    const error=useSelector(state=>state.erreReducer)
    const [inputs, setInputs] = useState({ email: '' });
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const { email } = inputs;
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    }
    const success = email;*/
import axios from 'axios'
import { color } from '@mui/system';

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }
    const forgotPassword = async (e) => {
        e.preventDefault();
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
        try {
            const res = await axios.post('/password/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    return (
        <Fragment>
          
               
                <Fragment>
                    <div className="allTypeFormPage">
                        <div className='mainFormContainer'>
                            <div className="form__header">
                                <h4>Forgot Password</h4>
                            </div>
                                      
                            <form className="formClass" >
                                    
                                <div className="form__control">
                                   
                                    <label htmlFor="email">Enter Email</label>
                                    <input type="email" className="email" id='email' name="email" value={email} onChange={handleChangeInput} />
                                      <h3 style={{color:"red"}}>{err && showErrMsg(err)}</h3> 
                                      <h4 style={{color:"green"}}> {success && showSuccessMsg(success)}</h4>
                                </div>
                                <button onClick={forgotPassword} className='formSubmitBtn'>Forgot Password</button>
                            </form>
                        </div>
                    </div>
                </Fragment>
                
       
            <ToastContainer />
        </Fragment>
    )
}


export default ForgotPassword
