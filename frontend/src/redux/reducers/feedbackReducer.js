import {GET_FEEDBACK,DELET_FEEDBACK,ADD_FEEDBACK}from '../types'


const initialState = {
    feedback : [],
    fedback:{}
};
 const feedbackReducer=(state = initialState,action)=> {
    switch (action.type) {
        case ADD_FEEDBACK:
            return {
                ...state,
                feedback: action.payload
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case GET_FEEDBACK :
                return{
                    ...state,
                    feedback: action.payload,
                }
            
            case DELET_FEEDBACK :
                return{
                    ...state,
                    feedback : state.feedback.slice(0,action.payload.feedback.id) 
                }
        default:
            return state;
    }
}
export default feedbackReducer