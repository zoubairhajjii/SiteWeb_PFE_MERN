import { combineReducers } from "redux";

import authReducer from './authReducer'
import erreReducer from './erreReducer'
import feedbackReducer from './feedbackReducer'
import serviceReducer from './serviceReducer'
export default combineReducers({
    authReducer: authReducer,
    errors: erreReducer,
    feedbackReducer:feedbackReducer,
    serviceReducer:serviceReducer,
    
    
})