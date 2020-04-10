class CreateShowgenres < ActiveRecord::Migration[5.2]
  def change
    create_table :showgenres do |t|
      t.integer :show_id
      t.integer :genre_id
      t.index :show_id
      t.index :genre_id
      t.timestamps
    end
  end
end
