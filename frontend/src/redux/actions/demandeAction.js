import { ADD_DEMANDE, DELET_DEMANDE, EDIT_DEMANDE, ERRORS, GET_DEMANDES } from "../types"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const header = {
    "content-type" : "application/json",
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const addDemande = (demande,id) =>async (dispatch)=>{
    try {
        const res= await axios.post(`/Demande/addDemande/${id}`,demande,{Headers:header})
        dispatch({type :ADD_DEMANDE,payload:res.data})
        if (res.status===200){
            toast.success(res.data.msg)}
        else{
            toast.error(res.data.msg)

        }    

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }
}
export const deletDemande = (id) =>async (dispatch)=>{
    try {
        const res= await axios.delete(`/Demande/deleteDemande/${id}`,{Headers:header})
        dispatch({type :DELET_DEMANDE,payload:res.data})
        if (res.status===200){
            toast.success(res.data.msg)}
        else{
            toast.error(res.data.msg)

        }   


    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }}
    export const getDemande = (id) =>async (dispatch)=>{
        try {
            const res= await axios.get(`/api/Demande/Demandes/${id}`,)
            console.log(res)
            dispatch({type :GET_DEMANDES,payload:res.data})
            if (res.status===200){
                toast.success(res.data.msg)}
            else{
                toast.error(res.data.msg)
    
            }   
    
        } catch (error) {
            dispatch({type :ERRORS ,payload:error.response.data})
            }
        }
        export const editeDemande = (demande,id) =>async (dispatch)=>{
            try {
                const res= await axios.post(`/Demande/editDemande/${id}`,demande,{Headers:header})
                dispatch({type :EDIT_DEMANDE,payload:res.data})
                if (res.status===200){
                    toast.success(res.data.msg)}
                else{
                    toast.error(res.data.msg)
        
                }   
        
            } catch (error) {
                dispatch({type :ERRORS ,payload:error.response.data})
                }
            }
    
    
    
    