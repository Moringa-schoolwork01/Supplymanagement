class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product
      t.boolean :code
      t.string :name
      t.integer :price
      t.string :action

      t.timestamps
    end
  end
end
