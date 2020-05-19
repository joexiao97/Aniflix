import { RECEIVE_MYLIST_SHOWS } from "../actions/mylist_actions";
import { RECEIVE_ALL_MY_LIST_SHOWS } from "../actions/mylist_actions";


const mylistReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MYLIST_SHOWS:
            return Object.assign({},action.my_list_shows);
            case RECEIVE_ALL_MY_LIST_SHOWS:
            return Object.assign({},action.my_list_shows);
            // return action.shows;
        default:
            return state;
    }
}

export default mylistReducer;