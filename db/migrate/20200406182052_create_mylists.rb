class CreateMylists < ActiveRecord::Migration[5.2]
  def change
    create_table :mylists do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null:false
      t.index :user_id
      t.index :movie_id

      t.timestamps
    end
  end
end
