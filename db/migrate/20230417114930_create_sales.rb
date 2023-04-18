class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.string :date
      t.string :name
      t.integer :price
      t.integer :discount
      t.integer :total
      t.string :payment_method

      t.timestamps
    end
  end
end
