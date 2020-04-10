# == Schema Information
#
# Table name: shows
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :string
#  show_type    :string           not null
#  runtime      :integer          not null
#  release_date :date             not null
#  ratings      :integer
#  cast         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Show < ApplicationRecord
    validates :title, :show_type, :runtime, :cast, presence: true

    has_one_attached :picture
    has_one_attached :video
end
