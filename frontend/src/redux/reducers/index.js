import { combineReducers } from "redux";

import authReducer from './authReducer'
import erreReducer from './erreReducer'

export default combineReducers({
    auth: authReducer,
    errors: erreReducer,
   
})