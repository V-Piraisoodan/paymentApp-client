
export const addtoCart=({_id,name,pic,price})=>(dispatch , getState)=>{
    var cartItems = {
        _id : _id,
        name : name ,
        pic : pic,
        price : price,
    }
 
    dispatch({type : "ADD_TO_CART" , payload : cartItems})

    // value updated in local storage
    const cartItem = getState().cartReducer.cartItems
    
    localStorage.setItem("cartItems" , JSON.stringify(cartItem) )
}

export const deleteFromcart = (foods)=>(dispatch , getState)=>{
    dispatch({type : "DELETE_FROM_CART" , payload : foods })

    const cartItem = getState().cartReducer.cartItems
    localStorage.setItem("cartItems" , JSON.stringify(cartItem) )
}