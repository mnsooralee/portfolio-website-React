import "./HeroImgGlobalStyles.css"
import coverImg from "../assets/img (8).jpg"

import React, { Component } from 'react'

class HeroImgGlobal extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="mask">
          <img className="cover-img" src={coverImg} alt="intro Image"></img>
        </div>
        <div className="content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }

}

export default HeroImgGlobal
