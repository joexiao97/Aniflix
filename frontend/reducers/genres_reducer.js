import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from "../actions/genre_actions";

const genresReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_GENRES:
            return Object.assign( {}, state, action.genres)
        case RECEIVE_GENRE:
            return Object.assign({}, state, {[action.genre.id]: action.genre})
        default:
            return state
    }
}

export default genresReducer;