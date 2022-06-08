
import   { ADD_SERVICE, GET_SERVICE,EDITE_SERVICE,DELET_SERVICE} from '../types'



const initialState = {
    
    service : [],
    sevr:{}
};
 const serviceReducer=(state = initialState,{type,payload})=> {
    switch (type) {
        case ADD_SERVICE:
            return {
                ...state,
                service: payload,
                loading: true,
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case GET_SERVICE :
                return{
                    ...state,
                    service: payload
                }
                case EDITE_SERVICE :
                    return{
                        ...state,
                        service:state.service.map((sevr) => (sevr._id == payload._id ? payload : sevr)),
                        loading: true,

                    }
            case DELET_SERVICE :
                return {
                    ...state,
                 service:state.service.filter((sevr) => (sevr._id == payload._id ? payload : sevr)),
                 loading: true,
                }; 
              
        default:
            return state;
    }
}
export default serviceReducer