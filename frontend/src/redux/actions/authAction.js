import React from "react";
import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS} from "../types";
import axios from 'axios';
export const LoginAction = (user, navigate)=>async (dispatch) =>{
    try {

        const res =await axios.post("/auth/signIn",user)
        dispatch({type :LOGIN_USER ,payload:res.data})
        if (res.data.found.role ==="ADMIN"){


            navigate("/ProfileAdmin");
        }
       else if (res.data.found.role ==="Professionnel"){


            navigate("/ProfileProfissionell");
        }
        else {

            navigate("/ProfileClient");

        }
      



        
    } catch (error) {
        
    }



}

export const Registration = (user, Navigate)=>async (dispatch)=>{
    try {
        const res= await axios.post("auth/signUp",user)
        dispatch({type :REGISTER_USER,payload:res.data})
        Navigate("/login")

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }




}
export const logout=(Navigate)=>{
    Navigate("/")
    return {
        type :LOGAOUT_USER,
    };


};

