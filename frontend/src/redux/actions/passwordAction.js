import {FORGOT_PASSWORD_REQUEST,
FORGOT_PASSWORD_SUCCESS,
FORGOT_PASSWORD_FAIL,
RESET_PASSWORD_REQUEST,
RESET_PASSWORD_SUCCESS,
RESET_PASSWORD_FAIL,ERRORS} from "../types"
import axios from 'axios'
const header = {
    "content-type" : "application/json",
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}


// FORGOT PASSWORD --user

export const forgotPassword = (email) => async (dispatch) => {
    
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        const { data } = await axios.post(`/password/forgot`,
            { email }, {
            headers:{header},        })
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        });
    }
}

// RESET PASSWORD --user

export const resetPassword = (token, password, confirmPassword) => async (dispatch) => {
    const url = `/api/password/reset/${token}`;
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        const { data } = await axios.put(url,
            { password, confirmPassword }, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message
        });
    }
}
