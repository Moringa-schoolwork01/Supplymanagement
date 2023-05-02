class SalesSerializer < ActiveModel::Serializer
    attributes :id, :total, :quantity, :payment_method, :product_name,:product_price, :customer_name, :created_at, :updated_at

    def product_name
        object.product.name
    end

    def customer_name
        object.customer.full_name
    end
    def product_price
        object.product.price
    end
  end