import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from '../thunk/thunk';


const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;