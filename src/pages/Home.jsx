import React from 'react'
import NavBar from '../components/NavBar'
import Slide from '../components/Slide'
import PopularEvents from '../components/PopularEvents'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slide/>
      <PopularEvents/>
      <Footer/>
    </div>
  )
}

export default Home