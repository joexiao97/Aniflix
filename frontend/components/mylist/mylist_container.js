import { logoutUser } from "../../actions/session_actions"
import { connect } from 'react-redux';
import MyList from "./mylist";

const mapStateToProps = (state) => {
    return {
        user: state.entities.user[state.session.id],
        shows: state.entities.shows,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);