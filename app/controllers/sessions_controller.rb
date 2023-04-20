class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    puts user
    if user && user.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: { user: @user, token: token }, status: :created
    else
      render json: {  errors: 'Invalid email or password' }, status: :unprocessable_entity
    end


    def destroy
        session.delete(:user_id)
        redirect_to root_path
      end

      private

      def user_params
        params.permit(:email, :password)
      end
    
end
# class SessionsController < ApplicationController
#   def create
#     user = User.find_by(username: params[:username])
#     session[:user_id] = user.id
#     render json: user
#   end

#   def destroy
#       session.delete :user_id
#       head :no_content
#     end

  
# end