import { connect } from 'react-redux';
import { requestAllShows} from "../../actions/show_actions";
import ShowType from './tvshows';
import { logoutUser } from '../../actions/session_actions';
import { addShowToMyList, fetchMylistShows, removeFromMyList } from "../../actions/mylist_actions";

const mapStateToProps = (state) => {
    return {
        user: state.entities.user[state.session.id],
        shows: state.entities.shows,
        mylist: state.entities.mylist,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    requestAllShows: () => dispatch(requestAllShows()),
    addShowToMyList: (showId) => dispatch(addShowToMyList(showId)),
    removeFromMyList: (showId) => dispatch(removeFromMyList(showId)),
    fetchMylistShows: () => dispatch(fetchMylistShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowType);