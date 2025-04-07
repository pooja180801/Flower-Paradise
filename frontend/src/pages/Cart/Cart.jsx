import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,bouquets_lists,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)
  console.log("123",cartItems)

  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {bouquets_lists.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='x'>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:150}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+150}</b>
            </div>
            <div className='checkout-button'>
            <button 
            disabled={Object.keys(cartItems).length === 0}
            onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
