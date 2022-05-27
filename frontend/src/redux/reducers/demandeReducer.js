
import   { ADD_DEMANDE, GET_DEMANDES,EDIT_DEMANDE,DELET_DEMANDE} from '../types'



const initialState = {
    
    demande : [],
    demand:{}
};
 const demandeReducer=(state = initialState,{type,payload})=> {
    switch (type) {
        case ADD_DEMANDE:
            return {
                ...state,
                demande: [...demande,action.payload],
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case GET_DEMANDES :
                return{
                    ...state,
                  demande: [...demande,action.payload],
                }
                case EDIT_DEMANDE :
                    return{
                        ...state,demande:state.demande.map((demand) => (demand._id == payload._id ? payload : demand))
                    }
            case DELET_DEMANDE :
                return{
                    ...state,
                    demande : state.demande.slice(0,action.payload.demande.id) 
                }
        default:
            return state;
    }
}
export default demandeReducer