import React, { useState } from 'react'
import './BouquetItem.css'
import starrating from '../../assets/images/starrating.jpg'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

const BouquetItem = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount]=useState(0)

  return (
        <div className='bouquet-item'>
        <div className="bouquet-item-img-container">
            <img className='bouquet-item-image' src={require(`../../assets/images/${image}`)} alt="" />
            {!itemCount ? (
                <button className='add-to-cart' onClick={() => setItemCount(prev => prev + 1)}>Add to Cart</button>
            ) : (
                <div className='bouquet-item-counter'>
                        <RemoveCircleOutlineIcon onClick={() => setItemCount(prev => prev - 1)} sx={{color:''}}/>
                    <p>{itemCount}</p>
                        <AddCircleOutlineIcon onClick={() => setItemCount(prev => prev + 1)} sx={{ color: '' }}/>
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
