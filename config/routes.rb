Rails.application.routes.draw do
  resources :sales
  resources :orders
  resources :customers
  resources :products
  resources :users

  # config/routes.rb

Rails.application.routes.draw do
  resources :sales
  resources :orders
  resources :customers
  resources :products
  # Routes for logging in and out
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end

  # get "/login", to: "login#showlogin"
  # get "/login/ids/:id", to: "login#singlelogin"
  # get "login/search/:title", to: "login#singleLogin"
  # # get "login/view/:id", to: "login#singlelogin"
  

  # get "login/view/:id", to: "login#viewlogin"
  # put "login/edit/:id", to: "login#editlogin"
  
  # post "/login/delete/:id", to: "login#deletelogin"
  # post "/login", to: "login#createlogin"


  # get "/users", to: "users#usersList"
  # post "/users/signup", to: "users#addUser"
  # post "/users/login", to: "users#login"
end
