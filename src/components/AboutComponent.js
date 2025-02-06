import { Link } from "react-router-dom"
import "./AboutComponentStyles.css"
import react1 from "../assets/react (1).jpeg"
import react2 from "../assets/react (2).jpeg"

import React from 'react'

const AboutComponent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Objective</h1>
                <p>To have a career in a creative and progressive organization that offers professional growth prospects as well as lucrative personal & to pursue my excellence with hard work and self-determination in order to interact with the best of my professional approach towards my carrier path and job assignments. </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={react1} className="img" alt="true"/>
                    </div>
                    <div className="image-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
