import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import Homepage from "./homepage";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);