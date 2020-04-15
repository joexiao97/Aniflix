# json.extract! @shows, :id, :title
# json.picture url_for(@shows.picture)
# json.video url_for(@shows.video)

@shows.each do |show|
    json.set! show.id do
        json.extract! show, :id, :title
        json.picture url_for(show.picture)
        json.video url_for(show.video)
    end
end


# json.array! @shows do |show|
#     json.extract! show, :id, :title
#     json.picture url_for(show.picture)
#     json.video url_for(show.video)
# end