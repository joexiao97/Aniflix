class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.string :description
      t.string :genres, null: false
      t.string :type, null: false
      t.integer :runtime, null: false
      t.date :release_date, null: false
      t.integer :ratings
      t.string :cast, null: false
      t.index :title

      t.timestamps
    end
  end
end
