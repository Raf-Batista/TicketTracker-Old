import React from 'react'; 
import { Link } from 'react-router-dom';
import './ProjectsView.css';

const ProjectsView = (props) => {
    let { projects } = props
    if(!projects) projects = []
    console.log(projects)
    return (
        <div className="text-center mt-5">
            <Link>Create a Project</Link>
            {projects.map(project => {
                <div>project.name</div>
            })}
        </div>
    )
}

export default ProjectsView
