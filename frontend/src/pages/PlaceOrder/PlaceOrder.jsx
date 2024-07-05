import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='District'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Postal Code'/>
            <input type="text" placeholder='Phone Number'/>
          </div>
      </div>
      <div className="place-order-right">
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
            <button>PROCEED TO PAYMENT</button>
            </div>
      </div>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder
