import {ADD_FEEDBACK,DELET_FEEDBACK, ERRORS, GET_FEEDBACK}from "../types"

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
        const res= await axios.delete(`/FeedBack/deleteFeedBack/${id}`,{Headers:header})
        dispatch({type :DELET_FEEDBACK,payload:res.data})

    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})
        
    }}
    export const getFeedBack = (id) =>async (dispatch)=>{
        try {
            const res= await axios.get(`/FeedBack/FeedBacks/${id}`,{Headers:header})
            dispatch({type :GET_FEEDBACK,payload:res.data})
    
        } catch (error) {
            dispatch({type :ERRORS ,payload:error.response.data})
            }
        }
        
    
    