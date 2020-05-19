import React from "react";
import { Link } from "react-router-dom";

class MyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            query: "",
            isSearched: false,
        }
        this.mounted = false;
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchMylistShows();
        this.mounted = true;
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected() {
        if (this.state.query.length >= 1) this.setState({ query: "" });
        e => e.target.classList.add(" selected-nav");
    }

    handleSearchChange(e) {
        e.preventDefault();
        this.setState({ query: e.currentTarget.value })
    }

    onHoverPlay(e) {
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    render(){
        let searchBar = 
        <>
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <form>
                    <input
                        type="text"
                        value={this.state.query}
                        placeholder="Search by titles"
                        onChange={this.handleSearchChange}
                    />
                </form>
            </div>

        </>

        // if(!this.mounted){
        //     return (<div className="search-browse"/>)
        // }
        // else{
        debugger
        return(
        <div className="search-browse">
            <div className="nav-bar">
                <div className="left-bar">
                    <div className="nav-sub-btns">
                        <Link className="browse-logo hover-box nav-sub-logo" onClick={this.handleSelected} to="/browse">ANIFLIX</Link>
                        <Link className="nav-home hover-box nav-sub-c" onClick={this.handleSelected} to="/browse" >Home</Link>
                        <Link className="nav-tv-shows hover-box nav-sub-c" onClick={this.handleSelected} to="/tvshows" >TV Shows</Link>
                        <Link className="nav-movies hover-box nav-sub-c" onClick={this.handleSelected} to="/movies" >Movies</Link>
                        <Link className="nav-mylist hover-box nav-sub-c" onClick={this.handleSelected} to="/my-list" >My List</Link>
                    </div>
                </div>

                <div className="right-bar">
                    <div className="search-bar-wrapper" >{searchBar}</div>
                    <Link className="logout-btn hover-box" onClick={this.handleLogout} to="/">Log Out</Link>
                </div>
            </div>

                <div className="type-shows-display">
                    {Object.values(this.props.mylist).map((show) => (
                    <div className="show-pic-vid" key={show.id} >
                        <img className="show-picture" src={show.picture} alt="" />
                        <Link to={`/shows/${show.id}`}>
                            <video preload="none" className="show-vid" muted width="100%" height="100%" src={show.video}
                                type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
                            </video>
                        </Link>
                    </div>
                ))}
                </div>


            </div>
        )
        }
    // }

}

export default MyList;