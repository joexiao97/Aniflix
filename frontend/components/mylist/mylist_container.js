import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import Mylist from "./mylist";
import { fetchMylistShows } from "../../actions/mylist_actions";

const mapStateToProps = (state) => {
    debugger
    return {
        user: state.entities.user[state.session.id],
        mylist: state.entities.mylist,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    fetchMylistShows: () => dispatch(fetchMylistShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);