import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './ProjectsView.css';

const ProjectsView = (props) => {
    let { project } = props;
    return (
        <div className="text-center mt-5 projects-view">
           <Link to={{
               pathname:`/projects/${project.id}/tasks`, 
               state: {tasks: project.tasks} }}>{
               project.name}
            </Link>
           <span>{project.description}</span>
           <span>{project.tasks.length} tasks </span>
        </div>
    )
}

export default ProjectsView
