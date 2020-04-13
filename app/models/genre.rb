# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
    validates :genre_type, presence: true;

    has_many :showgenres

    has_many :shows_under_genre,
        through: :showgenres,
        source: :show

end
