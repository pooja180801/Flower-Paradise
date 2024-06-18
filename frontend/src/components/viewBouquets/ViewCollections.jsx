import React from 'react'
import './ViewCollections.css'
import {collections_list} from '../../data/data'
import img1 from '../../assets/images/collection1.png'
import img2 from '../../assets/images/collection2.png'
import img3 from '../../assets/images/collection3.png'
import img4 from '../../assets/images/collection4.png'
import img5 from '../../assets/images/collection5.png'
import img6 from '../../assets/images/collection6.png'
import img7 from '../../assets/images/collection7.png'
import img8 from '../../assets/images/collection8.png'

const ViewCollections = ({category,setCategory}) => {
  return (
    <div className='view-collections' id='view-collections'>
      <h1>Explore our collections</h1>
      <p className='view-collections-text'>Discover a stunning array of bouquets, thoughtfully curated to celebrate every moment and mood, in our exclusive collection.</p>
      <div className='view-collections-list'>
        {collections_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.collection_name?"All":item.collection_name)} key={index} className='collections-list-item'>
                    <img className={category===item.collection_name?"active":""} src={require(`../../assets/images/${item.img_src}`)} alt='' />
                    <p>{item.collection_name}</p>
                </div>
            )
        })}
        
      </div>
      <hr/>


    </div>
  )
}

export default ViewCollections
