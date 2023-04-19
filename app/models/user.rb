class User < ApplicationRecord
    has_secure_password

    # validation
    validates :email, presence: true, uniqueness: true
    # validates :password, presence: true

    # # relationship
     has_many :products
    # has_many :orders


end
