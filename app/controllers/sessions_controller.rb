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
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid password or username"] }, status: :unauthorized
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
