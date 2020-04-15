import { connect } from 'react-redux';
import { requestShow } from "../../actions/show_actions";
import Showpage from './showpage';

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.entities.shows[ownProps.match.params.showId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestShow: (showId) => dispatch(requestShow(showId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Showpage);