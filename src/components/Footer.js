import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="left-container">
                        <div className="location">
                            <FaHome size={22} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                <p>Tech Solutions Inc</p>
                                <p>1234 Wilshire Blvd, Suite 500</p>
                                <p>Los Angeles, CA 90017</p>
                            </div>
                        </div>
                        <div className="phone">
                            <h4>
                                <FaPhone size={22} style={{ color: "#fff", marginRight: "2rem" }} />
                                (213) 555-7890
                            </h4>
                        </div>
                        <div className="email">
                            <h4>
                                <FaMailBulk size={22} style={{ color: "#fff", marginRight: "2rem" }} />
                                mnsooralee@gmail.com
                            </h4>
                        </div>
                    </div>
                    <div className="right-container">
                        <h4>About me</h4>
                        <p>passionate and detail-oriented fresh graduate with a strong foundation in frontend development</p>
                        <div className="social-links">
                        <FaGithub size={32} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaLinkedin size={32} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaTwitter size={32} style={{ color: "#fff", marginRight: "2rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
