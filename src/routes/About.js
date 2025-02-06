import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgGlobal from '../components/HeroImgGlobal'
import AboutComponent from '../components/AboutComponent'

const About = () => {
  return (
    <div>
        <NavBar />
        <HeroImgGlobal heading="ABOUT" text="Web Developer" />
        <AboutComponent />
      <Footer />
    </div>
  )
}

export default About
