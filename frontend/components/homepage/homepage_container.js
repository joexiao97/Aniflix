import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import Homepage from "./homepage";
import { requestAllShows, requestShow} from "../../actions/show_actions";
import { requestAllGenres } from "../../actions/genre_actions";
import { addShowToMyList, fetchMylistShows, removeFromMyList } from "../../actions/mylist_actions";

const mapStateToProps = (state) => {
return {   
    user: state.entities.user[state.session.id],
    shows: state.entities.shows,
    genres: Object.values(state.entities.genres),
    mylist: state.entities.mylist,
}};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    requestAllShows: () => dispatch(requestAllShows()),
    requestAllGenres: () => dispatch(requestAllGenres()),
    requestShow: (showId) => dispatch(requestShow(showId)),
    addShowToMyList: (showId) => dispatch(addShowToMyList(showId)), 
    removeFromMyList: (showId) => dispatch(removeFromMyList(showId)), 
    fetchMylistShows: () => dispatch(fetchMylistShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);