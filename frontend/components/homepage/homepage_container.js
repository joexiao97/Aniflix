import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import Homepage from "./homepage";
import { requestAllShows, requestShow } from "../../actions/show_actions";

const mapStateToProps = (state) => {
return {    
    user: state.session.id,
    //fix user
    shows: Object.values(state.shows)
}};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    requestAllShows: () => dispatch(requestAllShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);