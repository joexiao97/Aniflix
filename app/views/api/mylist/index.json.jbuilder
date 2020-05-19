# json.extract! @my_list_shows.pluck(:id)
# json.extract! @my_list_shows, :id, :title
# json.picture url_for(@my_list_shows.picture)
# json.video url_for(@my_list_shows.video)

@my_list_shows.each do |show|
    json.set! show.id do
        json.extract! show, :id, :title, :show_type
        json.picture url_for(show.picture)
        json.video url_for(show.video)
    end
end