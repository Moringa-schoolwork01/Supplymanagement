class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def show
      current_user = user.find(session[:user_id])
      render json: current_user
    end
     
    def create
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
          session[:user_id] = user.id

          render json: user, status: :created
        else
          render json: {error: {login: "invalid username or password"}}, status: :unauthorised
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
end
