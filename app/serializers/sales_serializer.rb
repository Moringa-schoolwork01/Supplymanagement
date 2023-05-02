class SalesSerializer < ActiveModel::Serializer
    attributes :id, :total, :quantity, :payment_method, :product_name, :customer_name, :created_at, :updated_at

    def product_name
        object.product.name if object.product.present?
    end

    def customer_name
        object.customer.full_name
    end
    
  end