import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../Actions/orderAction'
import "./Checkout.css"

export default function Checkout({subtotal}) {

    const dispatch = useDispatch()
    function tokenHandler(token){
        console.log(token)
        dispatch(placeOrder(token , subtotal))
    }

  return (
    <StripeCheckout className="Checkout"
    amount={subtotal*100}
    shippingAddress
    stripeKey="pk_test_51MRS1PSIuNLhE9SLvumVHeKXukzgNnUIjzACFJ94nEjJYMkkr9xqxwaPqlU9QgUmL7aKyxtixsRLMjJviSdERoXc00HasTyekM"
    token={tokenHandler}
    currency="INR"
       >
    <Link className='cart-icon' to='/placeorder'>
      <button className='btn'>PLACE ORDER</button>          
    </Link>
      
    </StripeCheckout>
  )
}
