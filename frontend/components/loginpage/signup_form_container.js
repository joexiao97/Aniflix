import { connect } from 'react-redux';
import Session from "./session_form";
import { signupUser } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
    formType: "signup",
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session)