import "./ProjectCardStyles.css"
import ProjectCard from "./ProjectCard"
import ProjectCardData from "./ProjectCardData"

import React from 'react'
import { NavLink } from "react-router-dom"

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {
                   ProjectCardData.map((val, ind) => {
                    return (
                        <ProjectCard 
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )
                   })
                }
            </div>

        </div>
    )
}

export default Work
