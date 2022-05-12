import {ADD_FEEDBACK,DELET_FEEDBACK,EDITE_FEEDBACK} from '../types'





const initialState = {
  
    user: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FEEDBACK:
            return {
                ...state,
              
                user: action.payload,
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case DELET_FEEDBACK :
                return{


                }
            case EDITE_FEEDBACK :
                return{
    
                        
                    }

        default:
            return state;
    }
}