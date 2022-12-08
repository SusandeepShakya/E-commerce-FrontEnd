import React from 'react'
import Announcement from '../components/Anouncement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Slider/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home