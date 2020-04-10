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
require 'test_helper'

class ShowgenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
