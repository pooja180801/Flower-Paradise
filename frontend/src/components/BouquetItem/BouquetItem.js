import React, { useContext } from 'react'
import './BouquetItem.css'
import starrating from '../../assets/images/starrating.jpg'
import { FaPlus } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { StoreContext } from '../context/StoreContext';

const BouquetItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
        <div className='bouquet-item'>
        <div className="bouquet-item-img-container">
            <img className='bouquet-item-image' src={require(`../../assets/images/${image}`)} alt="" />
            {!cartItems[id] ? (
                <FaPlus className='add-to-cart' onClick={() => addToCart(id)}/>
            ) : (
                <div className='bouquet-item-counter'>
                        <CiCircleMinus className='button-minus' onClick={() => removeFromCart(id)} />
                    <p>{cartItems[id]}</p>
                        <CiCirclePlus className='button-plus' onClick={() => addToCart(id)}/>
                </div>
            )}
        </div>

        <div className="bouquet-item-info">
            <div className='bouquet-item-name-rating'>
                <p>{name}</p>
                <img src={starrating} alt="" />
            </div>
            <p className="bouquet-item-desc">{description}</p>
            <p className='bouquet-item-price'>Rs.{price}</p>
        </div>
      
    </div>
  )
}

export default BouquetItem
