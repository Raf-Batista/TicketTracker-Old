Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    resources :users do 
      resources :projects
    end 

    get '/current_user', to: 'sessions#logged_in?'
    
    resource :sessions
    
    resources :projects do 
      resources :tasks
    end 

    resources :tasks
end
