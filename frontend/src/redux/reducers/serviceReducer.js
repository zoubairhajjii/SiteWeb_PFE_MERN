import{ADD_SERVICE,DELET_SERVICE,GET_SERVICE,EDITE_SERVICE} from'../types'

const initialState = {
    
    service : [],
    serv:{}
};
 const serviceReducer=(state = initialState,{type,payload})=> {
    switch (type) {
        case ADD_SERVICE:
            return {
                ...state,
                Service: [...service,action.payload],
                // contenu eli bech yji mel reponse(action.paylode)
            };
            case GET_SERVICE :
                return{
                    ...state,
                    Service: [service,action.payload],
                }
                case EDITE_SERVICE :
                    return{
                        ...state,service:state.service.map((serv) => (serv._id == payload._id ? payload : serv))
                    }
            case DELET_SERVICE :
                return{
                    ...state,
                    service : state.service.slice(0,action.payload.service.id) 
                }
        default:
            return state;
    }
}
export default serviceReducer