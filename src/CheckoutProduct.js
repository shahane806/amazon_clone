import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id,title, image, price, rating }) {
  const[{basket},dispatch] = useStateValue();
  const handleRemoveItemFromBasket = () =>{
    dispatch({
      type:"REMOVE",
      id:id,
    })
  }
  return (
   
 <div className="checkout__product">
      <div className='details'>
      <div className="checkout__product__info">
        <p>{id}</p>
        <p>{title}</p>
      </div>
      <div className="checkout__product__price">
        <small>₹</small>
        <strong>{price}</strong>
      </div>
      <div className="checkout__product__rating">
        {
          Array(rating).fill().map((_,i)=>{return <p key={i}>⭐</p>})
          
        }
        
      </div> 
      <button onClick={handleRemoveItemFromBasket} id='checkout__product__removebtn'>
          Remove
        </button>
    </div>

      <img className='checkout__product__image' src={image} alt="images"></img>

      </div>
      
  )
}

export default CheckoutProduct