import {ADD_SERVICE,DELET_SERVICE,EDITE_SERVICE} from "../types"









const initialState = {
  
    user: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            return {
                ...state,
              
                user: action.payload,
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case DELET_SERVICE :
                return{


                }
            case EDITE_SERVICE :
                return{
    
                        
                    }

          
    

        default:
            return state;
    }
}