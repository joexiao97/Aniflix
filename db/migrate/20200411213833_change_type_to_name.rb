class ChangeTypeToName < ActiveRecord::Migration[5.2]
  def change
    rename_column :genres, :type, :genre_type
  end
end
