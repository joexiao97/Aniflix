import { RECEIVE_ALL_SHOWS, RECEIVE_SHOW} from "../actions/show_actions";
// import { RECEIVE_ALL_MY_LIST_SHOWS } from "../actions/mylist_actions";

const showsReducer = (state ={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOWS:
            return Object.assign( {}, state, action.shows)
        // case RECEIVE_ALL_MY_LIST_SHOWS:
        //     return Object.assign({},action.shows)
        case RECEIVE_SHOW:
            return Object.assign( {}, state, {[action.show.id]: action.show})
        default:
            return state;
    }
}

export default showsReducer