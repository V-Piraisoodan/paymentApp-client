import axios from "axios";


export const placeOrder=(token,subtotal)=>async (dispatch , getstate)=>{

    dispatch({type:"PLACE_ORDER_REQUEST"})
    const cartItems = getstate().cartReducer.cartItems

    function success(){
    alert("Your Order Placed successfully",window.location.reload(false))  
    localStorage.clear("cartItems")
}

    try {

        const response = await axios.post('/placeorder',{token,subtotal,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        console.log(response)
        success();
        
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILURE"})
        console.log(error)     
    }
}