class TasksController < ApplicationController

    def create 
        project = Project.find_by(id: params[:project_id].to_i)
        project.tasks.create(task_params)
        if project.save 
            render json: "Task created", status: :ok and return 
        end 

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    def update 
        task = Task.find_by(id: params[:id].to_i)
        task.update(completed: true) 

        if task.save 
            render json: "Completed", status: :ok and return
        end 

        render json: {errors: "An error occured"}
    end 

    private 

    def task_params 
        params.permit(:name, :description)
    end 
end
