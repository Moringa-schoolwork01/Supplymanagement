Rails.application.routes.draw do
  resources :products
  resources :users
  resources :sales
  resources :orders
  resources :customers
  resources :users, param: :_username
  post '/login', to: 'sessions#create'
  get '/*a', to: 'application#not_found'
end
# Rails.application.routes.draw do
  # resources :products
  # resources :users
  # resources :sales
  # resources :orders
  # resources :customers
# #   # Routes for logging in and out
#   # get '/auth', to: 'users#show'
#   post '/login', to: 'sessions#create'
#   get "/me", to: "users#show"
#   delete '/logout', to: 'sessions#destroy'

# end

#   # get "/login", to: "login#showlogin"
#   # get "/login/ids/:id", to: "login#singlelogin"
#   # get "login/search/:title", to: "login#singleLogin"
#   # # get "login/view/:id", to: "login#singlelogin"
  

#   # get "login/view/:id", to: "login#viewlogin"
#   # put "login/edit/:id", to: "login#editlogin"
  
#   # post "/login/delete/:id", to: "login#deletelogin"
#   # post "/login", to: "login#createlogin"


#   # get "/users", to: "users#usersList"
#   # post "/users/signup", to: "users#addUser"
#   # post "/users/login", to: "users#login"
