import { connect } from 'react-redux';
import { requestAllShows} from "../../actions/show_actions";
import ShowType from './tvshows';

const mapStateToProps = (state) => {
    return {
        shows: state.entities.shows,
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestAllShows: () => dispatch(requestAllShows())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowType);