class ApplicationController < ActionController::API
    # include ActionController::Cookies
    # before_action :authorized
    # def authorized
    # end render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
     def encode_token(payload)
        JWT.encode(payload, 'secret')
    
     end
         
     def decode_token
        auth = request.headers["Authorization"]
        if auth 
            token = auth.split("    ")[1]
            begin
                JWT.decode(token, 'secret', true, algorithim: "HS256" )
            rescue JWT::DecodeError
                nil
            end
        end 
     end

    
    end
# end
