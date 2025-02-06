import React from 'react'
import HeroImg from '../components/HeroImg'
import NavBar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
       <NavBar/>
       <HeroImg />
       <PricingCard />
        <Work />
       
       <Footer />
    </div>
  )
}

export default Home
