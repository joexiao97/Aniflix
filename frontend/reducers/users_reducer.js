import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_MYLIST_SHOWS } from "../actions/mylist_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        // case RECEIVE_MYLIST_SHOWS:
        //     return action.shows.ShowsIds
        default:
            return state;
    }
}

export default usersReducer;