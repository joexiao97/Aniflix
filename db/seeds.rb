# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Showgenre.destroy_all
Show.destroy_all
Genre.destroy_all

joexiao97 = User.create!(username: "joexiao97", password:"password", email:"joexiao97@aniflix.com")
demo_user = User.create!(username: "demouser", password:"password123",email:"demouser@aniflix.com")


### Genres

genre_action = Genre.create!(genre_type: "Action")
genre_adventure = Genre.create!(genre_type: "Adventure")
genre_comedy = Genre.create!(genre_type: "Comedy")
genre_drama = Genre.create!(genre_type: "Drama")
genre_fantasy = Genre.create!(genre_type: "Fantasy")
genre_romance = Genre.create!(genre_type: "Romance")
genre_magic = Genre.create!(genre_type: "Magic")
genre_shounen = Genre.create!(genre_type: "Shounen")
### SHOWS ###
#  title        :string           not null
#  description  :string
#  genres       :string           not null
#  type         :string           not null
#  runtime      :integer          not null
#  release_date :date             not null
#  ratings      :integer
#  cast         :string           not null

### Shows

## Hunter x Hunter
hunterxhunter = Show.create!(
    title: "Hunter x Hunter",
    description: "Gon becomes a Hunter to find his father",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2011-10-02",
    ratings: 10,
    cast: "joe-placeholder"
)

hunterxhunter.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/hunterxhunter.jpg'), filename:'hunterxhunter.jpg')
hunterxhunter.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/hunterxhunter.mp4'), filename:'hunterxhunter.mp4')

Showgenre.create!(show_id: hunterxhunter.id, genre_id: genre_action.id)
Showgenre.create!(show_id: hunterxhunter.id, genre_id: genre_adventure.id)
Showgenre.create!(show_id: hunterxhunter.id, genre_id: genre_shounen.id)

## Naruto
naruto = Show.create!(
    title: "Naruto",
    description: "Naruto strives to become the Hokage to prove to everyone he is amazing",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2002-10-03",
    ratings: 8,
    cast: "joe-placeholder"
)

naruto.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/naruto.jpg'), filename:'naruto.jpg')
naruto.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/naruto.mp4'), filename:'naruto.mp4')

Showgenre.create!(show_id: naruto.id, genre_id: genre_shounen.id)
Showgenre.create!(show_id: naruto.id, genre_id: genre_action.id)

## Kimi no Na wa
kiminoNawa = Show.create!(
    title: "kimi no Na wa",
    description: "kimi no Nawa revolves around Mitsuha and Taki's actions as they try to find eachother",
    show_type: "movie",
    runtime: 106,
    release_date: "2016-08-26",
    ratings: 9,
    cast: "joe-placeholder"
)

kiminoNawa.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/KiminoNawa.jpg'), filename:'KiminoNawa.jpg')
kiminoNawa.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kiminoNawa.mp4'), filename:'kiminoNawa.mp4')

Showgenre.create!(show_id: kiminoNawa.id, genre_id: genre_romance.id)
Showgenre.create!(show_id: kiminoNawa.id, genre_id: genre_drama.id)

## Sword Art Online
swordArtOnline = Show.create!(
    title: "Sword Art Online",
    description: "Players are stuck in an online game, and Kirito tries to beat it to save everybody",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2016-08-26",
    ratings: 9,
    cast: "joe-placeholder"
)

swordArtOnline.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/swordartonline.jpg'), filename:'swordartonline.jpg')
swordArtOnline.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/swordartonline.mp4'), filename:'swordartonline.mp4')

Showgenre.create!(show_id: swordArtOnline.id, genre_id: genre_romance.id)
Showgenre.create!(show_id: swordArtOnline.id, genre_id: genre_adventure.id)

## Kimetsu no Yaiba
kimetsuNoYaiba = Show.create!(
    title: "Kimetsu no Yaiba",
    description: "After Tanjiros family has been kileld by demons, he sets out to find a way to save his sister",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2019-04-06",
    ratings: 10,
    cast: "joe-placeholder"
)

kimetsuNoYaiba.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kimetsunoyaiba.jpg'), filename:'kimetsunoyaiba.jpg')
kimetsuNoYaiba.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kimetsunoyaiba.mp4'), filename:'kimetsunoyaiba.mp4')

Showgenre.create!(show_id: kimetsuNoYaiba.id, genre_id: genre_comedy.id)
Showgenre.create!(show_id: kimetsuNoYaiba.id, genre_id: genre_fantasy.id)
Showgenre.create!(show_id: kimetsuNoYaiba.id, genre_id: genre_action.id)

# Magi
magi = Show.create!(
    title: "Magi",
    description: "Aladdin goes on an adventure to explore the world",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2013-10-06",
    ratings: 8,
    cast: "joe-placeholder"
)

magi.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/magi.jpg'), filename:'magi.jpg')
magi.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/magi.mp4'), filename:'magi.mp4')

Showgenre.create!(show_id: magi.id, genre_id: genre_magic.id)
Showgenre.create!(show_id: magi.id, genre_id: genre_fantasy.id)
Showgenre.create!(show_id: magi.id, genre_id: genre_adventure.id)

# Haikyuu!!
haikyuu = Show.create!(
    title: "Haikyuu!!",
    description: "Hinata, who if very short, aspires to become the best volleyball player!",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2014-04-14",
    ratings: 8,
    cast: "joe-placeholder"
)

haikyuu.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/haikyuu.jpg'), filename:'haikyuu.jpg')
haikyuu.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/haikyuu.mp4'), filename:'haikyuu.mp4')

Showgenre.create!(show_id: haikyuu.id, genre_id: genre_shounen.id)
Showgenre.create!(show_id: haikyuu.id, genre_id: genre_comedy.id)

# Code Geass
codegeass = Show.create!(
    title: "Code Geass",
    description: "Aladdin goes on an adventure to explore the world",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2013-10-06",
    ratings: 9,
    cast: "joe-placeholder"
)

codegeass.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/codegeass.jpg'), filename:'codegeass.jpg')
codegeass.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/codegeass.mp4'), filename:'codegeass.mp4')

Showgenre.create!(show_id: codegeass.id, genre_id: genre_magic.id)
Showgenre.create!(show_id: codegeass.id, genre_id: genre_adventure.id)

# Kimi no Suizou
kiminosuizou = Show.create!(
    title: "Kimi no Suizou",
    description: "Sakura has a terminal disease and Haruki spends her remaining time with her",
    show_type: "movie",
    runtime: 108,
    release_date: "2018-09-01",
    ratings: 9,
    cast: "joe-placeholder"
)

kiminosuizou.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kiminosuizou.jpg'), filename:'kiminosuizou.jpg')
kiminosuizou.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kiminosuizou.mp4'), filename:'kiminosuizou.mp4')

Showgenre.create!(show_id: kiminosuizou.id, genre_id: genre_drama.id)
Showgenre.create!(show_id: kiminosuizou.id, genre_id: genre_romance.id)

# Kuroko no Basket
kuroko = Show.create!(
    title: "Kuroko no Basket",
    description: "Kuroku, the ghost, who has no presence on the basketball court is the teams best player",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2012-04-08",
    ratings: 8,
    cast: "joe-placeholder"
)

kuroko.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kuroko.jpg'), filename:'kuroko.jpg')
kuroko.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/kuroko.mp4'), filename:'kuroko.mp4')

Showgenre.create!(show_id: kuroko.id, genre_id: genre_comedy.id)
Showgenre.create!(show_id: kuroko.id, genre_id: genre_shounen.id)

# Your Lie in April
yourlie = Show.create!(
    title: "Your Lie in April",
    description: "One piantist + one violinist = a true love story",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2011-04-06",
    ratings: 9,
    cast: "joe-placeholder"
)

yourlie.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/yourlie.jpg'), filename:'yourlie.jpg')
yourlie.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/yourlie.mp4'), filename:'yourlie.mp4')

Showgenre.create!(show_id: yourlie.id, genre_id: genre_romance.id)
Showgenre.create!(show_id: yourlie.id, genre_id: genre_drama.id)
Showgenre.create!(show_id: yourlie.id, genre_id: genre_comedy.id)

# Spirited Away
spiritedaway = Show.create!(
    title: "Spirited Away",
    description: "Chihiro Ogino discovers an abanonded amusement park and ventures inside",
    show_type: "movie",
    runtime: 130,
    release_date: "2001-08-20",
    ratings: 9,
    cast: "joe-placeholder"
)

spiritedaway.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/spiritedaway.jpg'), filename:'spiritedaway.jpg')
spiritedaway.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/spiritedaway.mp4'), filename:'spiritedaway.mp4')

Showgenre.create!(show_id: spiritedaway.id, genre_id: genre_magic.id)
Showgenre.create!(show_id: spiritedaway.id, genre_id: genre_fantasy.id)
Showgenre.create!(show_id: spiritedaway.id, genre_id: genre_adventure.id)


## Death Note
# deathnote = Show.create!(
#     title: "Death Note",
#     description: "Light aquires a notebook that is connected to a Shinigami and whoevers name he writes in there dies",
#     show_type: "tvshow",
#     runtime: 2,
#     release_date: "2006-10-04",
#     ratings: 7,
#     cast: "joe-placeholder"
# )

# deathnote.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/deathnote.jpg'), filename:'deathnote.jpg')
# deathnote.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/deathnote.mp4'), filename:'deathnote.mp4')

# Showgenre.create!(show_id: deathnote.id, genre_id: genre_drama.id)

# Fullmetal Alchemist
fullmetal = Show.create!(
    title: "Fullmetal Alchemist",
    description: "Alchemy is the source of all power and Elric controls the alchemy of metal",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2009-04-05",
    ratings: 9,
    cast: "joe-placeholder"
)

fullmetal.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/fullmetal.jpg'), filename:'fullmetal.jpg')
fullmetal.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/fullmetal.mp4'), filename:'fullmetal.mp4')

Showgenre.create!(show_id: fullmetal.id, genre_id: genre_magic.id)
Showgenre.create!(show_id: fullmetal.id, genre_id: genre_action.id)
Showgenre.create!(show_id: fullmetal.id, genre_id: genre_fantasy.id)

# Made in Abyss
madeinabyss = Show.create!(
    title: "Made in Abyss",
    description: "The abyss is full of relics, and people go searching in attempts to strike rich",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2017-07-07",
    ratings: 8,
    cast: "joe-placeholder"
)

madeinabyss.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/madeinabyss.jpg'), filename:'madeinabyss.jpg')
madeinabyss.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/madeinabyss.mp4'), filename:'madeinabyss.mp4')

Showgenre.create!(show_id: madeinabyss.id, genre_id: genre_drama.id)
Showgenre.create!(show_id: madeinabyss.id, genre_id: genre_magic.id)

# Koe no Katachi
koenokatachi = Show.create!(
    title: "Koe no Katachi",
    description: "Shouya bullies a deaf classmate and seeks redemption as he gets older",
    show_type: "movie",
    runtime: 130,
    release_date: "2017-09-17",
    ratings: 9,
    cast: "joe-placeholder"
)

koenokatachi.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/koenokatachi.jpg'), filename:'koenokatachi.jpg')
koenokatachi.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/koenokatachi.mp4'), filename:'koenokatachi.mp4')

Showgenre.create!(show_id: koenokatachi.id, genre_id: genre_drama.id)
Showgenre.create!(show_id: koenokatachi.id, genre_id: genre_romance.id)


# One Punch Man
onepunchman = Show.create!(
    title: "One Punch Man",
    description: "Saitama is a hero who is bored because he can beat anybody with one punch",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2015-08-05",
    ratings: 8,
    cast: "joe-placeholder"
)

onepunchman.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/onepunchman.jpg'), filename:'onepunchman.jpg')
onepunchman.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/onepunchman.mp4'), filename:'onepunchman.mp4')

Showgenre.create!(show_id: onepunchman.id, genre_id: genre_action.id)
Showgenre.create!(show_id: onepunchman.id, genre_id: genre_comedy.id)

# Iron Blooded Orphans
ironblooded = Show.create!(
    title: "Iron Blooded Orphans",
    description: "Orga and Mikazuki fight to change the world they live in",
    show_type: "tvshow",
    runtime: 2,
    release_date: "2015-10-04",
    ratings: 8,
    cast: "joe-placeholder"
)

ironblooded.picture.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/ironblooded.jpg'), filename:'ironblooded.jpg')
ironblooded.video.attach(io: open('https://ani-flix-dev.s3.amazonaws.com/ironblooded.mp4'), filename:'ironblooded.mp4')

Showgenre.create!(show_id: ironblooded.id, genre_id: genre_fantasy.id)
Showgenre.create!(show_id: ironblooded.id, genre_id: genre_shounen.id)

Mylist.create!(user_id: demo_user.id, movie_id: hunterxhunter.id)
Mylist.create!(user_id: demo_user.id, movie_id: kimetsuNoYaiba.id)
Mylist.create!(user_id: demo_user.id, movie_id: haikyuu.id)
Mylist.create!(user_id: demo_user.id, movie_id: naruto.id)