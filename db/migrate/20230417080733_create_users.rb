class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_email
      t.string :user_password
      t.string :password_digest

      t.timestamps
    end
  end
end
