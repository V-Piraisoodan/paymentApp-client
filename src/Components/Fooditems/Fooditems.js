import React, {useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import "./Fooditems.css";
import { getAllFoods } from '../../Actions/foodAction';
import { addtoCart } from '../../Actions/cartAction';

function Fooditems(){
  const dispatch = useDispatch()
// foodReducer.js --> state --> foods
  const foodsstate = useSelector(state=>state.getAllFoodsReducer)
  const {foods , error , loading} = foodsstate
  useEffect(()=>{
    dispatch(getAllFoods())
  },[])

  return(
    <section className='home-food-container'>
      {loading ? (<h1>Loading...</h1>) : error ? (<h1>Somthing went wrong</h1>) : (
        // render the components
        foods.map(({_id,name,pic,price},index)=>(
          <Foodcomponent 
          key={index}
          _id ={_id}
          name={name}
          pic = {pic}
          price={price}
          /> ))
      )}
    </section>
  )
}

function Foodcomponent({_id,name,pic,price})
{
  const dispatch = useDispatch()
  function addtocart(){
    dispatch(addtoCart({_id,name,pic,price}))
  }
  return (
    <div className="food-container">
      <img className = "food-img"
        src = {pic}
        alt = {name} />
      <p className="food-name">{name}</p>
      {/* <p>{_id}</p> */}
      <p className="food-price">₹{price}</p>
      <button onClick={addtocart} className="button">Order</button>
    </div>
  )
}

export  {Fooditems,Foodcomponent}