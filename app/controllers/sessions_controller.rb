class SessionsController < ApplicationController



  # def create
  #   user = User.new(user_params)
  #   if email.present? && password_digest.present?
  #   render json:  user
  #   else
  #     render json: { error: 'Email and password are required' }, status: :unprocessable_entity
  #   end
  # end

  
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