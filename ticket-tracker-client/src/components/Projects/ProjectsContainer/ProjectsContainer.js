import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectsView from '../ProjectsView'
import currentUser from '../../../async/currentUser';

const ProjectsContainer = (props) => {
    const { history } = props;
    let loggedInUser;

    const [projects, setProjects] = useState([])

    useEffect(async () => {
      loggedInUser = await currentUser();
      console.log(loggedInUser)
      setProjects(loggedInUser.projects)
    //   if (!loggedInUser) history.push('/')
    }, []);

    return (
        <div className="text-center mt-5">
             <Link>Create a Project</Link>
             <span className="d-block">Click on a project to view tasks</span>
            {projects.map(project => (<ProjectsView project={project} />))}
        </div>
    )
}

export default ProjectsContainer
