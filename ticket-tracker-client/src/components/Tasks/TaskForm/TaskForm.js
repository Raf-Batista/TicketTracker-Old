import React from 'react';
import useForm from '../../../hooks/useForm';
import createTask from '../../../async/createTask'
import './TaskForm.css';

const TaskForm = (props) => {
    const { history } = props;
    const projectId = parseInt(props.match.params.id)
    const initialFormState = {name: '', description: ''}

    const submit = () => {
        if(createTask(projectId, task)) props.history.push('/projects')
    }

    const { values, reset, handleChange, handleSubmit } = useForm(initialFormState, submit);
    const task = values;
    
    return (
        <div className="row justify-content-center">
            <div className="text-center col-sm-4 col-sm-offset-4 task-form mt-5">
                <h4>Create a new task</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" value={task.name} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text-area" class="form-control" name="description" value={task.description} onChange={handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default TaskForm
