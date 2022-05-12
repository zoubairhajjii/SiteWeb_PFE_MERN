import   { ADD_DEMANDE, GET_DEMANDES,EDIT_DEMANDE,DELET_DEMANDE} from '../types'



const initialState = {
  
    user: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DEMANDE:
            return {
                ...state,
              
                user: action.payload,
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case GET_DEMANDES :
                return{


                }
            case EDIT_DEMANDE :
                return{
    
                        
                    }

            case DELET_DEMANDE :
                return{

                    
                }
    

        default:
            return state;
    }
}