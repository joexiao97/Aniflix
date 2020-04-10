import * as ShowAPIUtil from "../util/show_api_util.js";

export const RECEIVE_ALL_SHOWS = "RECEIVE_ALL_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";

const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows
});

const receiveShow = (show) => ({
    type: RECEIVE_SHOW,
    show
});

export const requestAllShows = () => dispatch => (
    ShowAPIUtil.fetchShows()
    .then((shows) => dispatch(receiveAllShows(shows)))
);

export const requestShow = (showId) => dispatch => (
    ShowAPIUtil.fetchShow(showId)
    .then((show) => dispatch(receiveShow(show)))
)