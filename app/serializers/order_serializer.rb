class OrderSerializer < ActiveModel::Serializer
    attributes :quantity, :supplier_name, :buying_price, :total_price, :product_name, :id

    def product_name
        if object.product
            object .product.name
            end
    end
  end