import React from "react";
import { Link } from "react-router-dom";
// import Background from "/app/assets/images/aniflixpic.jpg"


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

                    <img
                        src={window.mainpage}
                        alt="mainpage background"
                        className="mainpage-background"
                    />

                    <Link className="logo" to="/" >ANIFLIX</Link>
                    <div className="sign-in-box">
                        <header className="sign-in-logo">Sign In</header>

                        <label>
                           <input className="sign-in-input" type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} />
                        </label>
                        <label>
                            <input className="sign-in-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                        </label>

                        <Link className="sign-in-btn" onClick={this.handleSubmit} to="/browse">Sign In</Link>

                        <div className="sign-up-session">
                            <p className="new-to-ani">New to Aniflix?  </p>
                            <Link className="sign-up-btn" to="/">Sign Up</Link>
                        </div>

                    </div>
                </>
            )
        }

        if (this.props.formType === "signup") {
            return (
                <>
                    <header>Sign Up</header>
                    <form >
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