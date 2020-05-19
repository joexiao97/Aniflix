# == Schema Information
#
# Table name: mylists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Mylist < ApplicationRecord

    validates :movie_id, uniqueness:{scope: :user_id}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :show,
    foreign_key: :movie_id,
    class_name: :Show
    
end
