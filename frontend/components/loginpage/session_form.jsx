import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    render() {

        if (this.props.formType === "login") {
            return (
                <>
                    <header>Login</header>

                    <label>username:
                        <input type="text" value={this.state.username} onChange={this.update("username")} />
                    </label>
                    <label>password:
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>

                    <Link className="btn" onClick={this.handleSubmit} to="/loginUser">Login</Link>
                </>
            )
        }

        if (this.props.formType === "signup") {
            return (
                <>
                    <header>Sign Up</header>
                    <form action="">
                        <label>email:
                        <input type="text" value={this.state.email} onChange={this.update("email")} />
                        </label>
                        <label>username:
                        <input type="text" value={this.state.username} onChange={this.update("username")} />
                        </label>
                        <label>password:
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                        </label>
                        <Link className="btn" onClick={this.handleSubmit} to="/signupUser">Sign up</Link>
                    </form>

                </>
            )
        }

        return (
            <Link to="/"></Link>
        )
    }
}

export default SessionForm;