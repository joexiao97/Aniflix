import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{


    render(){
        return (
            <>
            <header className="homepage">
                <div>
                    <h1>Testing Homepage</h1>
                </div>
            </header>

            <div>
                {/* <Link className="btn" to="/signupUser">Sign Up</Link> */}
                <Link className="btn" to="/loginUser">Log In</Link>
            </div>
            </>
        );
    }
};

export default Homepage;