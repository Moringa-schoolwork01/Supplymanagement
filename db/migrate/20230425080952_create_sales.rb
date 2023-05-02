class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.integer "total"
      t.integer "quantity"
      t.text "payment_method"
      t.integer "product_id"
      t.integer "customer_id"
      t.timestamps
    end
  end
end
