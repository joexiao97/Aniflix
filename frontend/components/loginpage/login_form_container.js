import { connect } from 'react-redux';
import Session from "./session_form";
import { loginUser,removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(loginUser(user)),
    removeErrors: (errors) => dispatch(removeErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session)