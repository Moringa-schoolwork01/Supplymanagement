class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create index]

  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  # GET /users/{username}
  def show
    render json: @user, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      token = encode_token({user_id: @user.id})
      render json: { user: @user, token: token }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /users/{username}
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # DELETE /users/{username}
  def destroy
    @user.destroy
  end

  private

  def find_user
    @user = User.find_by_username!(params[:_username])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.permit(
       :email, :password, :password_confirmation
    )
  end
end
    # class UsersController < ApplicationController

    #     def index
    #       users = User.all
    #       render json: users
    #     end
    
    #     def create
          
    #         user = User.create!(user_params)
            

    #         if user.valid?
    #           # user was successfully created
    #           render json: { message: "User created successfully", user: user }
    #         else
    #           # user creation failed
    #           render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    #         end
    #       end
        
    #       def destroy
    #         # session.delete(:user_id)
    #         # redirect_to root_path
    #         session[:user_id] = nil
    #         render json: { status: 200, logged_out: true }
    #       end
        
    #       def logged_in
    #         if current_user
    #           render json: { logged_in: true, user: current_user }
    #         else
    #           render json: { logged_in: false }
    #         end
    #       end
    #       private

    #       def user_params
    #         params.permit( :email, :password,:password_confirmation)  
    #       end
    #     end
