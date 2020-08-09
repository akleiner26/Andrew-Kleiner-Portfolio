import React from "react";
import "./portfolio.css";
import ProjectCard from "../Card/card";
import projects from "../../projects.json"

function Portfolio(props) {
    return (
        <>
            {projects.map(project => <ProjectCard
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                repo={project.repo}
                link={project.link} />
            )}
        </>
    )
}

export default Portfolio