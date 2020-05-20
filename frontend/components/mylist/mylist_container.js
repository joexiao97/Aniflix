import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import Mylist from "./mylist";
import { addShowToMyList, fetchMylistShows, removeFromMyList } from "../../actions/mylist_actions";

const mapStateToProps = (state) => {
    return {
        user: state.entities.user[state.session.id],
        mylist: state.entities.mylist,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    addShowToMyList: (showId) => dispatch(addShowToMyList(showId)),
    removeFromMyList: (showId) => dispatch(removeFromMyList(showId)),
    fetchMylistShows: () => dispatch(fetchMylistShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);