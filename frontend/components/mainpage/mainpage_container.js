import { loginUser } from "../../actions/session_actions";
import { connect } from "react-redux";
import Mainpage from "./mainpage"

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage)