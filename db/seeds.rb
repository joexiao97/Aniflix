# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Show.destroy_all
User.destroy_all

joexiao97 = User.create!(username: "joexiao97", password:"password", email:"joexiao97@aniflix.com")
demo_user = User.create!(username: "demouser", password:"password123",email:"demouser@aniflix.com")


### SHOWS ###
#  title        :string           not null
#  description  :string
#  genres       :string           not null
#  type         :string           not null
#  runtime      :integer          not null
#  release_date :date             not null
#  ratings      :integer
#  cast         :string           not null

hunterxhunter = Show.create!(
    title: "Hunter x Hunter",
    description: "Gon becomes a Hunter to find his father",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2011-10-02",
    ratings: 10,
    cast: "joe-placeholder"
)

hunterxhunter.picture.attach(io: open('https://aniflix-dev.s3.amazonaws.com/hunterxhunter.jpg'), filename:'hunterxhunter.jpg')
hunterxhunter.video.attach(io: open('https://aniflix-dev.s3.amazonaws.com/hunterxhunter.mp4'), filename:'hunterxhunter.mp4')