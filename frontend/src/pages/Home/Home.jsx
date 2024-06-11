import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ViewCollections from '../../components/viewBouquets/ViewCollections'

const Home = () => {
  return (
    <div>
      <Header/>
      <ViewCollections/>
    </div>
  )
}

export default Home
