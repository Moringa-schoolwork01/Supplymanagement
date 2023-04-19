class User < ApplicationRecord

    # Validations
    has_secure_password

    # user validation
    validates :email, uniqueness: true, presence: true
    # validates :password, presence: true
    # relationships
    has_many :products
end
