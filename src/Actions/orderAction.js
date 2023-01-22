import axios from "axios";


export const placeOrder=(token,subtotal)=>async (dispatch , getstate)=>{

    dispatch({type:"PLACE_ORDER_REQUEST"})
    const cartItems = getstate().cartReducer.cartItems

    function success(){
    alert("Your Order Placed successfully",localStorage.clear("cartItems"))  
    window.location.reload();
    // window.history.go(-1)  

}

    try {

        const response = await axios.post('https://payment-server-996t.onrender.com/api/orders/placeorder',{token,subtotal,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        console.log(response)
        success();
        
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILURE"})
        console.log(error)     
    }
}