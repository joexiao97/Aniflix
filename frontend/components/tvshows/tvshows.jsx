import React from "react";
import { Link } from "react-router-dom";

class ShowType extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        this.props.requestAllShows()
    }

    checkIfTvShow(){
        debugger
        let tvShowIds = []
        let moviesIds = []
        Object.values(this.props.shows).forEach((show) => {
            if (this.props.match.path === "/tvshows") {
                if(show.show_type === "tvshow"){
                    tvShowIds.push(show.id)
                }
            }
            if (this.props.match.path === "/movies") {
                if (show.show_type === "movie") {
                    moviesIds.push(show.id)
                }
            }
        })
        if(this.props.match.path === "/tvshows") return tvShowIds
        if(this.props.match.path === "/movies") return moviesIds
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected() {
        e => e.target.classList.add(" selected-nav")
    }

    onHoverPlay(e) {
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    render(){
        if (Object.values(this.props.shows).length === 0 || !this.props.shows) {
            return (<div></div>);
        }

        const tvShowIds = this.checkIfTvShow();
        const randomShow = this.props.shows[tvShowIds[Math.floor(Math.random() * tvShowIds.length)]];
        return(
            <>
            <div className="homepage-browse">
            <div className="nav-bar">
                <div className="left-bar">
                    <div className="nav-sub-btns">
                        <Link className="browse-logo hover-box nav-sub-logo" onCLick={this.handleSelected()} to="/browse">ANIFLIX</Link>
                        <Link className="nav-home hover-box nav-sub-c" onCLick={this.handleSelected()} to="/browse" >Home</Link>
                        <Link className="nav-tv-shows hover-box nav-sub-c" onCLick={this.handleSelected()} to="/tvshows" >TV Shows</Link>
                        <Link className="nav-movies hover-box nav-sub-c" onCLick={this.handleSelected()} to="/movies" >Movies</Link>
                        <Link className="nav-mylist hover-box nav-sub-c" onCLick={this.handleSelected()} to="/my-list" >My List</Link>

                    </div>
                </div>

                <div className="right-bar">
                    <Link className="logout-btn hover-box" onClick={this.handleLogout} to="/">Log Out</Link>
                </div>

            </div>
                <div className="home-show-display">
                    <video className="home-vid" muted width="100%" height="100%" src={randomShow.video} type="video/mp4" autoPlay>
                    </video>
                    <div className="random-show-title">{randomShow.title}</div>
                    <Link to={`/shows/${randomShow.id}`}>
                        <div className="play-button">▶ Play</div>
                    </Link>
                </div>

                <div className="type-shows-display">
                {tvShowIds.map((showId) => (
                    <div className="show-pic-vid" >
                        <img className="show-picture" src={this.props.shows[showId].picture} alt="" key={showId} />
                        <Link to={`/shows/${showId}`}>
                            <video preload="none" className="show-vid" muted width="100%" height="100%" src={this.props.shows[showId].video}
                                type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
                            </video>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            </>
        )
    }

}


export default ShowType;