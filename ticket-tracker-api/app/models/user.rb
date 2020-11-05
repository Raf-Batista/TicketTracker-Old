class User < ApplicationRecord
    has_secure_password 
    has_many :projects

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
    validates :username, presence: true, uniqueness: true

    def self.handle_login(email, password)
        user = User.find_by(email: email.downcase)
        
        if user && user.authenticate(password) then return user end
          
       return false
    end
end
