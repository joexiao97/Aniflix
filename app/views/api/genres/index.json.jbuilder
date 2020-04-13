json.array! @genres do |genre|
    json.extract! genre, :id, :genre_type
    showsid = []
    genre.shows_under_genre.each do |show|
        showsid << show.id
    end
    json.showsid showsid
end

