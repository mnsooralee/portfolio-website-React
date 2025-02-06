import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import React, { useState } from 'react'

import { FaBars } from "react-icons/fa"
import { HiX } from "react-icons/hi";

const NavBar = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click);
    }
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        }else {
            setColor(false);
        }        
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" id="logo">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>                
                <li>
                    <Link to="/About">About</Link>
                </li>
                {/* <li>
                    <Link to="/Contact">Contact</Link>
                </li> */}
                <Link to="/Contact" className="btn">Contact</Link>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<HiX size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
                                
            </div>

        </div>
    )
}

export default NavBar

