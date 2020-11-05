class ProjectsController < ApplicationController

    def create 
        user = User.find_by(id: params[:user_id].to_i)
        user.projects.create(project_params)
        if user.save 
            render json: "Project Created", status: :ok and return
        end     

        render json: {errors: "An error occured"}
    end 

    private 

    def project_params 
        params.permit(:name, :description)
    end 
end
