class Order < ApplicationRecord
    belongs_to :customer
    has_many :sales
    has_many :products, through: :sales
end
