import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS} from "../types";

const initialState = {
    user:null,
    errors:null,
    auth:false,
    err:null,
   


}
const authReducer =(state =initialState,{type,payload})=>{
    
    switch (type) {
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return {...state,user:payload.User,auth:true,errors:null}


        case  LOGIN_USER:  
            localStorage.setItem("token",payload.token)
            return{...state,user:payload.found,auth:true,errors:null}
        case GET_CURRENT:
            return {...state,user:payload,auth:true}
        case LOGAOUT_USER:
            localStorage.removeItem("token")
            return {...state,user:null,auth:false}
        case ERRORS:
            return{...state,err:payload.errors}
        default:
            return state;

             
       
    }




}
export default authReducer

   