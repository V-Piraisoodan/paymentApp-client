import {combineReducers}  from "redux";
import { createStore , applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { getAllFoodsReducer } from "./Reducers/foodReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { placeOrderReducer } from "./Reducers/orderReducer";

const finalReducer = combineReducers({
    getAllFoodsReducer : getAllFoodsReducer,
    cartReducer : cartReducer,
    placeOrderReducer : placeOrderReducer
})
const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const initialState = {
    cartReducer :{
        cartItems : cartItems
    } 
}
const store = createStore(finalReducer , initialState , applyMiddleware(thunk))

export default store