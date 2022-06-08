import {FORGOT_PASSWORD_REQUEST,
FORGOT_PASSWORD_SUCCESS,
FORGOT_PASSWORD_FAIL,
FORGOT_PASSWORD_RESET,
RESET_PASSWORD_REQUEST,
RESET_PASSWORD_SUCCESS,
RESET_PASSWORD_FAIL,
ERRORS
} from "../types"
const initialState = {
    error:null
}
 const passwordReducer = (state =initialState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload
            };
        case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FORGOT_PASSWORD_RESET:
            return {
                ...state,
                loading: false,
                message: null,
            };
        case ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
export default passwordReducer
// ERRORS

