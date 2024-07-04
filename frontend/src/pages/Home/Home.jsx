import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ViewCollections from '../../components/viewBouquets/ViewCollections'
import BouquetsDisplay from '../../components/BouquetsDisplay/BouquetsDisplay'

const Home = () => {

  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ViewCollections category={category} setCategory={setCategory}/>
      <BouquetsDisplay category={category}/>
    </div>
  )
}

export default Home
