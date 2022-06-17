import { LogoutUser, storeUserData } from "../../utils/LocalStorage";
import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS, LOGIN_FAIL} from "../types";

const initialState = {
    user:null,
    errors:null,
    isAuth:false,
    fail:null,
   
}
const authReducer =(state =initialState,{type,payload})=>{
    
    switch (type) {
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return {...state,user:payload.User,isAuth:true,errors:null}


        case  LOGIN_USER:  
            localStorage.setItem("token",payload.token)
            storeUserData(payload.found)
            return{...state,user:payload.found,isAuth:true,errors:true}
            case LOGIN_FAIL:
        return { ...state, errors: payload,  };
        case GET_CURRENT:
            return {...state,user:payload,isAuth:true}
        case LOGAOUT_USER:
                localStorage.removeItem("token",payload.token)
                 LogoutUser(payload.found)
            return {...state,user:null,isAuth:false}
            
        case ERRORS:
            return{...state,fail:payload.errors}
        default:
            return state;
    }
}
export default authReducer

   