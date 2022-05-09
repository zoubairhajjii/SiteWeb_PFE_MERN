import axios from 'axios'
import { ERRORS } from '../types'

export const signUp=(form)=>dispatch=>{

    axios.post('/api/signUp',form)

.then(res=>{
    console.log()


})
.catch(err=>
    dispatch({
        type:ERRORS,
        payload:err.response.data

    })



    )
}