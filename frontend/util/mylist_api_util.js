export const addShowToMyList = (showId) => (
    $.ajax({
        method: 'post',
        url: '/api/mylist',
        data: { movie_id: showId }
    })
);

export const removeFromMyList = (showId) => (
    $.ajax({
        method: 'delete',
        url: `/api/mylist/${showId}`
    })
);

export const fetchMylistShows = () => (
    $.ajax({
        method: "GET",
        url: "/api/shows/mylist"
    })
)