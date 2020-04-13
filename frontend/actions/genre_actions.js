import * as GenreAPIutil from '../util/genre_api_util'

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveAllGenres = (genres) => ({
    type: RECEIVE_ALL_GENRES,
    genres
})

const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre
})

export const requestAllGenres = () => dispatch => (
    GenreAPIutil.fetchGenres()
    .then((genres) => dispatch(receiveAllGenres(genres)))
);

export const requestGenre = (genreId) => (dispatch) => (
    GenreAPIutil.fetchGenre(genreId)
    .then((genre) => dispatch(receiveGenre(genre)))
);