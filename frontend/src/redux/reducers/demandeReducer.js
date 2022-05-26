import demande from '../../../../backend/models/demande';
import   { ADD_DEMANDE, GET_DEMANDES,EDIT_DEMANDE,DELET_DEMANDE} from '../types'



const initialState = {
  
    user: {},
    demande : []
};
export default function (state = initialState, action) {
    switch (type) {
        case ADD_DEMANDE:
            return {
                ...state,
              
                demande: [...demande,action.payload],
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
                    demande : state.demande.slice(0,action.payload.demande.id)
                    
                }
    

        default:
            return state;
    }
}