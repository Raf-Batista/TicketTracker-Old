class User < ApplicationRecord
    has_secure_password 
    has_many: :projects

    def self.handle_login(email, password)
        user = User.find_by(email: email.downcase)
        
        if user && user.authenticate(password) then return user end
          
       return false
    end
end
