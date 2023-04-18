class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :date
      t.string :time
      t.string :product_sold
      t.integer :price
      t.string :quantity
      t.integer :total_sales

      t.timestamps
    end
  end
end
