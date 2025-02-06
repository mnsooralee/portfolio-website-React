import React from 'react'

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgGlobal from '../components/HeroImgGlobal'
// import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Projects = () => {
    return (
        <div>
            <NavBar />            
            <HeroImgGlobal heading="PROJECTS" text="learning journey with projects" />
            {/* <PricingCard /> */}
            <Work />
            
            <Footer />
        </div>
    )
}

export default Projects
