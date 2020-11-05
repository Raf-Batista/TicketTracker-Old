import React, { useEffect } from 'react';
import complete from '../../async/complete';

const Task = (props) => {
    const { history } = props;
    const { tasks } = props.location.state
    useEffect(() => { 
    }, [])

    const handleClick = (id) => {
        if(complete(id)) props.history.push('/projects');
    }

    const content = tasks.map(task => (
    <div>
        <span className="d-block mt-2">{task.name}</span>
        <span className="d-block">{task.description}</span>
        <span className="d-block">completed: {task.completed ? 'yes' : 'no'}</span>
        <button className="d-inline-block" onClick={() => handleClick(task.id)}>Complete</button>
    </div>
        )
    )

    return (
        <div className="text-center mt-5">
            {content}
        </div>
    )
}

export default Task
