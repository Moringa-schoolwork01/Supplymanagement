class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :code
      t.string :name
      t.integer :price
      t.integer :quantity
      t.timestamps
    end
  end
end
