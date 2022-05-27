import { ADD_SERVICE, DELET_SERVICE, EDITE_SERVICE, ERRORS, GET_SERVICE } from "../types"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const header = {
    "content-type" : "application/json",
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const addService = (Service) =>async (dispatch)=>{
    try {
        const res= await axios.post(`/Service/addService/`,Service,{Headers:header})
        dispatch({type :ADD_SERVICE,payload:res.data})
        if (res.status===200){
            toast.success(res.data.msg)}
        else{
            toast.error(res.data.msg)

        }    

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }
}
export const deleteService = (id) =>async (dispatch)=>{
    try {
        const res= await axios.delete(`/Service/deleteService/${id}`,{Headers:header})
        dispatch({type :DELET_SERVICE,payload:res.data})
        if (res.status===200){
            toast.success(res.data.msg)}
        else{
            toast.error(res.data.msg)

        }   


    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }}
    export const getService = () =>async (dispatch)=>{
        try {
            const res= await axios.get(`/Service/Services/`,{Headers:header})
            dispatch({type :GET_SERVICE,payload:res.data})
            if (res.status===200){
                toast.success(res.data.msg)}
            else{
                toast.error(res.data.msg)
    
            }   
    
        } catch (error) {
            dispatch({type :ERRORS ,payload:error.response.data})
            }
        }
        export const editService = (ServiceEdited,id) =>async (dispatch)=>{
            try {
                const res= await axios.put(`/Service/editService/${id}`,ServiceEdited,{Headers:header})
                dispatch({type :EDITE_SERVICE,payload:res.data})
                if (res.status===200){
                    toast.success(res.data.msg)}
                else{
                    toast.error(res.data.msg)
        
                }   
        
            } catch (error) {
                dispatch({type :ERRORS ,payload:error.response.data})
                }
            }
    
    
    
    