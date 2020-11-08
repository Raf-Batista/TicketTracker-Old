import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProjectsView from '../ProjectsView'
// import currentUser from '../../../async/currentUser';

const ProjectsContainer = (props) => {
    const { history, user } = props;
    // const [user, setUser] = useState({id: 0, projects: []})

    // useEffect( async () => {
    // setUser(await currentUser())
    // }, []);
    return (
        <div className="text-center mt-5">
            { user ?
                <>
                    <Link to={`/users/${user.id}/projects/new`}>Create a Project</Link>
                    <span className="d-block">Click on a project to view tasks</span>
                    {
                        user.projects.map(project => (<ProjectsView project={project} />))
                    }
                </>
                : null}
        </div>
    )
}

export default ProjectsContainer
