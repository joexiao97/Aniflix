import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return (
            <>
            <header className="homepage">
                <div>
                    <h1>Testing Homepage</h1>
                </div>
            </header>
                <h1>HOMEPAGE, WELCOME {this.props.username}</h1>
                <Link className="logout-btn" onClick={this.handleLogout} to="/">Log Out</Link>
            <div>
                
            </div>
            </>
        );
    }
};

export default Homepage;