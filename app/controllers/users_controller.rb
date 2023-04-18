class UsersController < ApplicationController

    def index
      users = User.all
      render json: users
    end

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { status: 200, logged_in: true, user: user }
        else
          render json: { status: 401, errors: ['Authentication failed'] }
        end
      end
    
      def destroy
        # session.delete(:user_id)
        # redirect_to root_path
        session[:user_id] = nil
        render json: { status: 200, logged_out: true }
      end
    
      def logged_in
        if current_user
          render json: { logged_in: true, user: current_user }
        else
          render json: { logged_in: false }
        end
      end
    end
