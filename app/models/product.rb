class Product < ApplicationRecord
    has_many :sales
    has_many :orders, through: :sales
end
