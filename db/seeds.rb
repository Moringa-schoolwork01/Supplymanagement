User.create(user_email: "email", password_digest: BCrypt::Password.create("123admin"))

# users = [
#   {                                                                                                                 Admin.create( password_digest: BCrypt::Password.create("123admin")                                                                                                          
#     "user_email":"you@gmail.com",
#     "user_password":"You123.."
#   },
#   {
#     "user_email":"ten@gmail.com",
#     "user_password":"Ten123.."
#   }, 
#    {
#     "user_email":"tuff@gmail.com",
#     "user_password":"Tuff38.."
#   }
# ]
# users.each do |user| 
# User.create(user)

# end
