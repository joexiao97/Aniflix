import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import showsReducer from "./shows_reducer";
import genresReducer from './genres_reducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    shows: showsReducer,
    genres: genresReducer,
});

export default entitiesReducer;