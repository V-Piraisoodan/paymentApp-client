import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { deleteFromcart } from '../../Actions/cartAction'
import Checkout from '../Checkout'
import "./Cartscreen.css"

const Cartscreen = () => {
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems;
    var totalItems = cartItems.length;
    var subtotal = cartItems.reduce((initial,item)=> initial+ +item.price,0)
    const dispatch = useDispatch()
  return (
    <div className='cart-container'>
        <section className='cart-sub-container'>
           {cartItems.map((item,index)=>{        
            return (
                <div key = {index} className="cart-items">
                    <div className='cart-img'> 
                       <img src={item.pic} alt={item.name} />                                     
                    </div>
                    <div className='cart-btn-name'>
                        <h3>{item.name}</h3>
                        <h3 className='price'>₹{item.price}</h3>   
                        <button onClick={()=>{dispatch(deleteFromcart(item))}}>REMOVE</button>
                    </div>      
                </div>)})}
       
        </section>
        <div className='place-order'>
            <div className='pricedetail'>
                <p>PRICE DETAILS</p>
                <p></p>
            </div>
            <div className='no-of-item'>
                <p>No.of Items</p>
                <p>{totalItems}</p>
            </div>
            <div className='delivery'>
                <p>Delivery charge</p>
                <p className='free'>FREE</p>
            </div>
            <div className='total-amoubt'>
                <p>Total Amount</p>
                <p>₹{subtotal}</p>
            </div>
            
            <Checkout subtotal={subtotal}/>
        </div>
    </div>
  )
}

export default Cartscreen