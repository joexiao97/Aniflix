class ChangeShowsTypeToShowType < ActiveRecord::Migration[5.2]
  def change
    rename_column :shows, :type, :show_type
  end
end
