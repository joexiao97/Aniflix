# json.extract! @shows, :id, :title
# json.picture url_for(@shows.picture)
# json.video url_for(@shows.video)

json.array! @shows do |show|
    json.extract! show, :id, :title
    json.picture url_for(show.picture)
    json.video url_for(show.video)
end
