json.array! @genres do |genre|
    json.extract! genre, :id, :genre_type
    showsid = []
    genre.shows_under_genre.each do |show|
        showsid << show.id
    end
    json.showsid showsid
end

# json.array! @genres do |genre|
#     json.extract! genre, :id, :genre_type
#     showsid = []
#     nextrow= 0
#     count = 0
#     shows = {}
#     genre.shows_under_genre.each do |show|
#         if count < 4
#             shows[nextrow] << show.id
#             count++
#         else
#             showsid << shows
#             nextrow++
#             count = 0
#             shows = {}
#         end
#     end
#     json.showsid showsid
# end

