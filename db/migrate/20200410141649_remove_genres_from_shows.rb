class RemoveGenresFromShows < ActiveRecord::Migration[5.2]
  def change
    remove_column :shows, :genres
  end
end
