class SessionsController < ApplicationController
  
  def create
    user = User.find_by(email: params[:email])
    session[:user_id] 
    render json: user
  end
  
  
  def destroy
        session.delete(:user_id)
        redirect_to root_path
      end
end
