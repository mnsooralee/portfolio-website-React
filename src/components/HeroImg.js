import "./HeroImgStyles.css"
import introImg from "../assets/img (3).jpg"
import React from 'react'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero-container">
      <div className="mask">
        <img className="cover-img" src={introImg} alt="intro Image"></img>
      </div>
      <div className="content">
        <p>HI, this is Mansoor Ahmed</p>
        <h1>Software Engineer</h1>
        <div className="hero-btns">
          <Link to="/About" className="btn">About</Link>
          <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
