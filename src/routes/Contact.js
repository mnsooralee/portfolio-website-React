import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgGlobal from '../components/HeroImgGlobal'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
        <NavBar />
        <HeroImgGlobal heading="CONTACT" text="let's have a chat"/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact
