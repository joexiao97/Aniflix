import { connect } from 'react-redux';
import { requestAllShows} from "../../actions/show_actions";
import ShowType from './tvshows';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        shows: state.entities.shows,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    requestAllShows: () => dispatch(requestAllShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowType);