class TasksController < ApplicationController
    def update 
        task = Task.find_by(id: params[:id].to_i)
        task.update(completed: true) 

        if task.save 
            render json: "Completed", status: :ok and return
        end 

        render json: {errors: "An error occured"}
    end 
end
