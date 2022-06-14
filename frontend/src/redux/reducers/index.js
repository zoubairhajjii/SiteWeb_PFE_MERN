import { combineReducers } from "redux";

import authReducer from './authReducer'
import erreReducer from './erreReducer'
import feedbackReducer from './feedbackReducer'
import serviceReducer from './serviceReducer'
import passwordReducer from "./passwordReducer"
import demandeReducer from "./demandeReducer"
import {productReducer} from "./productReducer"

export default combineReducers({
    passwordReducer: passwordReducer,
    authReducer: authReducer,
    erreReducer: erreReducer,
    demandeReducer:demandeReducer,
    feedbackReducer:feedbackReducer,
    serviceReducer:serviceReducer,
    productReducer:productReducer
    
    
})