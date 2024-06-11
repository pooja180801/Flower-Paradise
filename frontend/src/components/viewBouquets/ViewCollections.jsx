import React from 'react'
import './ViewCollections.css'
import img from '../../assets/images/collection1.png'

const ViewCollections = () => {
  return (
    <div className='view-collections' id='view-collections'>
      <h1>Explore our collections</h1>
      <p className='view-collections-text'>Discover a stunning array of bouquets, thoughtfully curated to celebrate every moment and mood, in our exclusive collection.</p>
      <div className='view-collections-list'>
        {/* {collections_list.map((item,index)=>{
            return (
                <div key={index} className='collections-list-item'>
                    <img src={item.collection_image} alt='' />
                    <p>{item.collection_name}</p>
                </div>
            )
        })} */}
        <div className='collections-list-item'>
                    <img src={img} alt='' />
                    {/* <p>anniversary</p> */}
                </div>
                <div className='collections-list-item'>
                    <img src={img} alt='' />
                    {/* <p>anniversary</p> */}
                </div>
                <div className='collections-list-item'>
                    <img src={img} alt='' />
                    {/* <p>anniversary</p> */}
                </div>
                <div className='collections-list-item'>
                    <img src={img} alt='' />
                    {/* <p>anniversary</p> */}
                </div>
                <div className='collections-list-item'>
                    <img src={img} alt='' />
                    {/* <p>anniversary</p> */}
                </div>
      </div>

    </div>
  )
}

export default ViewCollections
