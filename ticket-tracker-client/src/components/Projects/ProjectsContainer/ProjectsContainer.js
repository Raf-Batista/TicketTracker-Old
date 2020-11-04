import React, { useState, useEffect } from 'react'
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
        <div>
            {/* <ProjectsView projects={projects} /> */}
        </div>
    )
}

export default ProjectsContainer
