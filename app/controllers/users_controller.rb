
    class UsersController < ApplicationController

        def index
          users = User.all
          render json: users
        end
    
        def create
            user = User.create!(user_params)
            
            if user.valid?
              # user was successfully created
              render json: { message: "User created successfully", user: user }
            else
              # user creation failed
              render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
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


          private

          def user_params
            params.permit(:name, :email, :password_digest)  
          end
        end
