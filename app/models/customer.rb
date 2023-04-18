class Customer < ApplicationRecord
    has_many :sales
    has_many :orders
end
