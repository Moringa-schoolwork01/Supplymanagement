class CreateProducts < ActiveRecord::Migration[7.0]
  def change

    create_table :products,if_not_exists: true do |t|
      t.boolean :code
      t.string :name
      t.string :image_url
      t.integer :price
      t.integer :quantity
      t.timestamps
    end
  end
end
