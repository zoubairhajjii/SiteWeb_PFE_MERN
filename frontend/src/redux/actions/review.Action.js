
import{ NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL}from "../types"
    import axios from "axios";



export const newReview = (rating, comment, productId) => async (dispatch) => {
    const url = `/api/product/review`;
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });
        const { data } = await axios.put(url, { rating, comment, productId }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        });
    }
}