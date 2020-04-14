import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footers/footer-log-sign";
// import Background from "/app/assets/images/aniflixpic.jpg"


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
        };
        this.errors = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

    }

    componentDidMount(){
        this.props.removeErrors(this.props.errors)
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

    handleDemoLogin(e) {
        e.preventDefault();
        const user = { username: "demouser", password: "password123" };
        this.props.login(user);
    }



    render() {
        if (this.props.formType === "login") {
            return (
                <>

                    {/* <img
                        src={window.mainpage}
                        alt="mainpage background"
                        className="mainpage-background"
                    /> */}
                    <div className="main">
                    
                    <div className="main-nav">
                    <Link className="logo hover-box" to="/" >ANIFLIX</Link>
                    </div>
                    <div className="sign-in-box">
                        <header className="sign-in-logo">Sign In</header>

                        <form onSubmit={this.handleSubmit}>
                        <label>
                           <input className="sign-in-input" type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} />
                        </label>
                        <label>
                            <input className="sign-in-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                        </label>

                        <ul className="sign-box-errors">
                            {this.props.errors.map((error, i) => <li className="sign-error" key={i}>{error}</li>)}
                        </ul>

                        {/* <Link className="sign-in-btn hover-box" to="/browse">Sign In</Link> */}
                            <input type="submit" className="sign-in-btn hover-box" value="Sign In"/>
                        </form>

                        <div className="sign-up-session">
                            <p className="new-to-ani">New to Aniflix?  </p>
                            <Link className="sign-up-btn-text hover-box" to="/signup" >Sign Up</Link>
                        </div>
                    </div>
                    <Link className="demo-user-button-log-in-session" onClick={this.handleDemoLogin} to="/browse">Demo Login</Link>
                    <Footer />
                    </div>
                </>
            )
        }

        if (this.props.formType === "signup") {
            return (
                <>
                <div className="main">
                {/* <div className="main-nav"> */}
                    <Link className="logo hover-box" to="/" >ANIFLIX</Link>
                    <div className="sign-up-box">
                        <header className="sign-up-logo">Sign Up</header>
            
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            <input className="sign-in-input" type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} />
                        </label>
                        <label>
                            <input className="sign-in-input" type="email" placeholder="Email" value={this.state.email} onChange={this.update("email")} />
                        </label>
                        <label>
                            <input className="sign-in-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                        </label>

                        <ul className="sign-box-errors">
                            {this.props.errors.map((error, i) => <li className="sign-error" key={i}>{error}</li>)}
                        </ul>

                        {/* <Link className="sign-up-btn hover-box" onClick={this.handleSubmit} to="/browse">Sign Up</Link> */}
                            <input type="submit" className="sign-up-btn hover-box" value="Sign Up" />
                        </form>

                        <div className="sign-in-session">
                            <p className="new-to-ani">Already have an account?  </p>
                            <Link className="sign-in-btn-text hover-box" to="/login">Log In Here</Link>
                        </div>

                    </div>
                <Footer />
                </div>
                {/* </div> */}
                </>
            )
        }

        return (
            <>
            <Link to="/"></Link>
            </>
        )
    }
}

export default SessionForm;
