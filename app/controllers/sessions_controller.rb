class SessionsController < ApplicationController



  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password_digest])
      session[:user_id] = user.id
      render json: { status: 200, logged_in: true, user: user }
    else
      render json: { status: 401, errors: ['Authentication failed'] }
    end
  end


    def destroy
        session.delete(:user_id)
        redirect_to root_path
      end

      private

      def user_params
        params.permit(:email, :password_digest)
      end
    
end
