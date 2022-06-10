import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS} from "../types";
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifySuccess } from "../../utils/alerts/Alerts";



export const LoginAction = (user, Navigate)=>async (dispatch) =>{
    try {

        const res =await axios.post("/auth/signIn",user)
        dispatch({type :LOGIN_USER ,payload:res.data})
        if (res.data.found.role ==="Admin"){
            
                Navigate("/profileadmin")
                notifySuccess(res.data.msg,{position:toast.POSITION.TOP_CENTER})
                notifySuccess(res.data.msg,{position:toast.POSITION.TOP_CENTER})
                notifySuccess(res.data.msg,{position:toast.POSITION.TOP_CENTER})

                
             
            
        }
       else if (res.data.found.role ==="Professionnel"){
           
              Navigate("/ProfileProfissionell"); 
             
              notifySuccess(res.data.msg,{position:toast.POSITION.TOP_CENTER})
              notifySuccess(res.data.msg,{position:toast.POSITION.TOP_CENTER})


        }
        
        else {
           
               Navigate("/homee")};
              

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data.errors})        
    }

}
export const Registration = (user, Navigate)=>async (dispatch)=>{
   
    try {
        const res= await axios.post("auth/signUp",user)
        dispatch({type :REGISTER_USER,payload:res.data})
        if (res.status===200){
            
            Navigate("/login")
          
         }
         else if(res.status===400){
            notifyError(res.data.msg)

         }
         else{
            notifyError(res.data.msg)

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