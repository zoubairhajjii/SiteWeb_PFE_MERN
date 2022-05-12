import { combineReducers } from "redux";

import authReducer from './authReducer'
import erreReducer from './erreReducer'
import  feedbackReducer from './feedbackReducer'

export default combineReducers({
    auth: authReducer,
    errors: erreReducer,
    feedback:feedbackReducer,
    
})