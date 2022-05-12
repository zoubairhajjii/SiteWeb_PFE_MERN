import axios from 'axios'
import { ERRORS } from '../types'

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