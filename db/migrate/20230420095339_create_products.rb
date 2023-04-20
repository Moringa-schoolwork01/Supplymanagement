class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    drop_table: products

    create_table :products do |t|
      t.boolean :code
      t.string :name
      t.string :image_url
      t.integer :price
      t.string :action

      t.timestamps
    end
  end
end
