class ApplicationController < ActionController::API

    def not_found
      render json: { error: 'not_found' }
    end
  
    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end
  end

#   authoriazation Bearer {token}

# class AuthenticationController < ApplicationController
#     before_action :authenticate_request, except: :authenticate
  
#     def authenticate
#       user = User.find_by(email: login_params[:email])
#       admin = Admin.find_by(email: login_params[:email])
  
#       if user && user.is_a?(User) && user.authenticate(login_params[:password])
#         token = JsonWebToken.encode(user_id: user.id)
#         render json: { token: token }
#       elsif admin && admin.is_a?(Admin) && admin.authenticate(login_params[:password])