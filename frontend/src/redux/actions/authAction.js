import axios from 'axios'
import { ERRORS } from '../types'
impo


export const Login = (form, navigate)=>dispatch=>{
    axios.post('/api/sinIN', form) 
    .then(res=>{
     
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const Registration = (form, navigate)=>dispatch=>{
    axios.post('/api/sinUp', form) 
    .then(res=>{
      navigate('/sinIN')
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export  const LogAute =()=>dispatch=>{


    
}