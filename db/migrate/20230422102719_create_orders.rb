class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    t.string "quantity"
    t.integer "total_sales"
    t.string "supplier_name"
    t.timestamps
    end
  end
end
