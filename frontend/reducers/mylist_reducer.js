import { RECEIVE_MYLIST_SHOWS } from "../actions/mylist_actions";
import { RECEIVE_ALL_MY_LIST_SHOWS } from "../actions/mylist_actions";


const mylistReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        // case RECEIVE_MYLIST_SHOWS:
        // return action.shows.ShowsIds
        case RECEIVE_ALL_MY_LIST_SHOWS:
            return action.shows;
        default:
            return state;
    }
}

export default mylistReducer;