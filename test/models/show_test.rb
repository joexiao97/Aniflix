# == Schema Information
#
# Table name: shows
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :string
#  genres       :string           not null
#  type         :string           not null
#  runtime      :integer          not null
#  release_date :date             not null
#  ratings      :integer
#  cast         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class ShowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
