import { combineReducers } from "redux";

import authReducer from './authReducer'
import erreReducer from './erreReducer'
import feedbackReducer from './feedbackReducer'
import serviceReducer from './serviceReducer'
import passwordReducer from "./passwordReducer"
import {productReducer} from "./productReducer"
import {newReviewReducer} from "./newReviewReducer"

export default combineReducers({
    passwordReducer: passwordReducer,
    authReducer: authReducer,
    erreReducer: erreReducer,
    feedbackReducer:feedbackReducer,
    serviceReducer:serviceReducer,
    newReviewReducer:newReviewReducer,
    productReducer:productReducer
    
    
})