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