import { connect } from 'react-redux';
import Session from "./session_form";
import { loginUser } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
    formType: "login",
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session)