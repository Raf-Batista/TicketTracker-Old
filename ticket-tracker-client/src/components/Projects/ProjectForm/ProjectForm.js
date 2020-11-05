import React from 'react';
import useForm from '../../../hooks/useForm';
import createProject from '../../../async/createProject';
import './ProjectForm.css';

const ProjectForm = (props) => {
    const { history } = props;
    const userId = parseInt(props.match.params.id)
    const initialFormState = {name: '', description: ''}

    const submit = () => {
        if(createProject(userId, project)) props.history.push('/projects')
    }

    const { values, reset, handleChange, handleSubmit } = useForm(initialFormState, submit);
    const project = values;
    return (
        <div className="row justify-content-center">
            <div className="text-center col-sm-4 col-sm-offset-4 task-form mt-5">
                <h4>Create a new project</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text-area" class="form-control" name="description" onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ProjectForm
