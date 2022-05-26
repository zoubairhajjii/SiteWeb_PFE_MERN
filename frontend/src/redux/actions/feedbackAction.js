import {ADD_FEEDBACK,DELET_FEEDBACK,EDITE_FEEDBACK}from "../types"

const header = {
    "content-type" : "application/json",
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const addFeedBack = (Feedback,id) =>async (dispatch)=>{
    try {
        const res= await axios.post(`/FeedBack/addFeedBack/${id}`,Feedback,{Headers:header})
        dispatch({type :ADD_FEEDBACK,payload:res.data})

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }
}
export const deleteFeedBack = (id) =>async (dispatch)=>{
    try {
        const res= await axios.post(`/FeedBack/deleteFeedBack/${id}`,{Headers:header})
        dispatch({type :DELET_FEEDBACK,payload:res.data})

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }}
    export const getFeedBack = (demande) =>async (dispatch)=>{
        try {
            const res= await axios.post(`/FeedBack/FeedBacks/`,demande,{Headers:header})
            dispatch({type :,payload:res.data})
    
        } catch (error) {
            dispatch({type :ERRORS ,payload:error.response.data})
            }
        }
        export const editeDemande = (demande,id) =>async (dispatch)=>{
            try {
                const res= await axios.post(`/FeedBack/Demandes/${id}`,demande,{Headers:header})
                dispatch({type :EDIT_DEMANDE,payload:res.data})
        
            } catch (error) {
                dispatch({type :ERRORS ,payload:error.response.data})
                }
            }
    
    
    
    