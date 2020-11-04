class UsersController < ApplicationController

    def create
        user = User.new(user_params)

        if user.save 
            token = CoreModules::JsonWebToken.encode({user_id: user.id}, 4.hours.from_now)
            cookies.signed[:jwt] = {value: token, httponly: true}
            render json: user, status: :created and return
        else 
            render json: {errors: user.errors.full_messages}, status: :not_acceptable and return
        end  

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 

    def user_params 
        params.permit(:username, :email, :password)
    end 
end
