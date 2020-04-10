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

    componentDidMount(){
        this.props.requestAllShows();
        // document.getElementById('home-vid').play();
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
        <div className="homepage-browse">
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
            
            <div className="home-show-display">
                    {this.props.shows.map((show, i) => (
                        <>
                            <video className="home-vid" muted width="100%" height="100%" src={show.video} type="video/mp4" autoPlay>
                            </video>

                            {/* <img className="home-pic-display" src={show.picture} alt="" />
                            <h1 className="show-title" key={i}>{show.title}</h1> */}
                        </>
                    ))}
            </div>
        </div>
                
            </>
        );
    }
};

export default Homepage;