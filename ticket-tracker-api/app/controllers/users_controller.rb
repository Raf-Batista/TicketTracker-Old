class UsersController < ApplicationController

    def create 
        user = User.new(user_params)

        if user.valid?
            user.create 
            token = CoreModules::JsonWebToken.encode({user_id: user.id}, 4.hours.from_now)
            cookies.signed[:jwt] = {value: token, httponly: true}
            render json: user, status :ok and return
        end 

        render json: {"error"}
    end 

    private 

    def user_params 
        params.permit(:user).require(:username, :email, :password)
    end 
end
