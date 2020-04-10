# == Schema Information
#
# Table name: showgenres
#
#  id         :bigint           not null, primary key
#  show_id    :integer
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Showgenre < ApplicationRecord
    validates :show_id , :genre_id, presence: true

    belongs_to :show
    belongs_to :genre
end
