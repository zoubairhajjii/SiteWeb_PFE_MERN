import isEmpty from "../../util/isEmpty";
import { LOGIN_USER } from "../types";

const initialState = {
    isConnected: false,
    user: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isConnected: !isEmpty(action.payload),
                user: action.payload,
                // contenu eli bech yji mel reponse(action.paylode)
            };

        default:
            return state;
    }
}