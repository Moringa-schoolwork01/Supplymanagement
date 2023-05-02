class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  attributes :id, :total, :quantity, :payment_method, :product_id, :customer_id, :created_at, :updated_at
end
