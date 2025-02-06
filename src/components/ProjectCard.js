import "./ProjectCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="image" />
                    <h2 className="project-title">{props.title}</h2>
                    <p className="project-details">{props.text}</p>
                    <div className="project-buttons">
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to={props.source} className="btn">Source</NavLink>
                    </div>
                </div>                                                                                                                                                                                                                                                                                                                                                                                      
    )
}

export default ProjectCard
