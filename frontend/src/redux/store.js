import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Middleware from 'redux-thunk';
import Reducers from './reducers'
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
}
const store = createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(Middleware))
)

export default store;