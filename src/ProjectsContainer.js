import React from 'react'
import projects from './ProjectData'
import ProjectCard from './ProjectCard'

class ProjectsContainer extends React.Component {
    
    render() {
        return (
            <>
                <h2>Projects</h2>
                {projects.map(p => <ProjectCard {...p} />)}
            </>
        )
    }
}

export default ProjectsContainer