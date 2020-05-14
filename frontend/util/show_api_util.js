export const fetchShows = () => (
    $.ajax({
        method: "GET",
        url: "/api/shows"
    })
)

export const fetchShow = (showId) => (
    $.ajax({
        method: "GET",
        url: `/api/shows/${showId}`
    })
)

export const fetchMylistShows = () => (
    $.ajax({
        method: "GET",
        url: "/api/shows/mylist"
    })
)