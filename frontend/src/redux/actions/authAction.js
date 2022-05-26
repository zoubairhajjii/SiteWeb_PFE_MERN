import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS} from "../types";
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const LoginAction = (user, Navigate)=>async (dispatch) =>{
    try {

        const res =await axios.post("/auth/signIn",user)
        dispatch({type :LOGIN_USER ,payload:res.data})
        if (res.data.found.role ==="ADMIN"){
           
                Navigate("/ProfileAdmin")
            
        }
       else if (res.data.found.role ==="Professionnel"){
              Navigate("/ProfileProfissionell"); 
        }
        
        else {
           
               Navigate("/ProfileClient")};

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})        
    }



}


export const Registration = (user, Navigate)=>async (dispatch)=>{
   
    try {
        const res= await axios.post("auth/signUp",user)
        dispatch({type :REGISTER_USER,payload:res.data})
        if (res.status===200){
            toast.success(res.data.msg)
            Navigate("/login")
         }
         else if(res.status===400){
             toast.error(res.data.msg)

         }
         else{
            toast.error(res.data.msg)

         }

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

