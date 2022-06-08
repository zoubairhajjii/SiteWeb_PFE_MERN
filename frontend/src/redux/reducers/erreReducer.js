import { ERRORS } from "../types";

 const erreReducer = () => async (dispatch) => {
    dispatch({
        type: ERRORS
    });
}
export default erreReducer

