import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected(){
        e => e.target.classList.add(" selected-nav")
    }

    render(){
        return (
            <>
            {/* <header className="homepage">
                <div>
                    <h1>Testing Homepage</h1>
                </div>
            </header> */}
            <div className="nav-bar">
                <div className="left-bar">
                    <div className="nav-sub-btns">
                            <Link className="browse-logo hover-box nav-sub-logo" onCLick={this.handleSelected()} to="/browse">ANIFLIX</Link>
                            <Link className="nav-home hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >Home</Link>
                            <Link className="nav-tv-shows hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >TV Shows</Link>
                            <Link className="nav-movies hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >Movies</Link>
                            <Link className="nav-mylist hover-box nav-sub-c" onCLick={this.handleSelected()} to="/my-list" >My List</Link>
                    </div>
                </div>

                <div className="right-bar">
                    <Link className="logout-btn hover-box" onClick={this.handleLogout} to="/">Log Out</Link>

                </div>
            </div>

            <div className="homepage-browse">



            </div>

            </>
        );
    }
};

export default Homepage;