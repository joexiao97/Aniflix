import * as MylistApiUtil from '../util/mylist_api_util';

export const RECEIVE_MYLIST_SHOWS = "RECEIVE_MYLIST_SHOWS";
export const RECEIVE_ALL_MY_LIST_SHOWS = "RECEIVE_ALL_MY_LIST_SHOWS";

const receiveListShows = (shows) => ({
    type: RECEIVE_MYLIST_SHOWS,
    shows
})

const receiveAllMyListShows = (my_list_shows) => ({
    type: RECEIVE_ALL_MY_LIST_SHOWS,
    my_list_shows
});

export const addShowToMyList = showId => dispatch => (
    MylistApiUtil.addShowToMyList(showId)
        .then((my_list_shows) => dispatch(receiveAllMyListShows(my_list_shows)))
);

export const removeFromMyList = showId => dispatch => (
    MylistApiUtil.removeFromMyList(showId)
        .then((my_list_shows) => dispatch(receiveAllMyListShows(my_list_shows)))
);

export const fetchMylistShows = () => (dispatch) => (
    MylistApiUtil.fetchMylistShows()
        .then((my_list_shows) => dispatch(receiveAllMyListShows(my_list_shows)))
);