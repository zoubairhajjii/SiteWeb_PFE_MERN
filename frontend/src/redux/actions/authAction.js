import axios from 'axios'
import { ERRORS } from '../types'
impo


export const LoginAction = (form, navigate)=>async (dispatch) =>{
    try {

        const res =await axios.post("/api/sinIn",newUser)
        dispatch({type :LOGIN_USER ,payload:res.data})
        if (res.data.found.role ==="ADMIN"){


            navigate("/ProfileAdmin");
        }
       else if (res.data.found.role ==="PROFISSIONEL"){


            navigate("/ProfileProfissionell");
        }
        else {

            navigate("/Profile");

        }



        
    } catch (error) {
        
    }



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
export  const Logaut =()=>dispatch=>{



}