import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from './errors_reducer';
import showsReducer from './shows_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    shows: showsReducer,
});

export default rootReducer;