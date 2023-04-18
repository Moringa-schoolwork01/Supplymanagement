class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.integer :contact
      t.string :email
      t.string :action

      t.timestamps
    end
  end
end
