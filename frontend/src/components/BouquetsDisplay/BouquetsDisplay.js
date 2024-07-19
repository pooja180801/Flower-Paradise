import React, { useContext } from 'react'
import './BouquetsDisplay.css'
import { StoreContext } from '../context/StoreContext'
import BouquetItem from '../BouquetItem/BouquetItem'

const BouquetsDisplay = ({category}) => {

     const {bouquets_lists}=useContext(StoreContext)
     
  return (
    <div className='bouquet-display' id='bouquet-display'>
        <h2>View Bouquets</h2>
        <div className="bouquets-display-list">
            {bouquets_lists.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <BouquetItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
                })}
        </div>
    </div>
  )
}

export default BouquetsDisplay
