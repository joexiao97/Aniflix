import React from "react";
import { Link } from "react-router-dom";

class ShowType extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            isSearched: false,
        }
        this.mounted = false;
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleMyList = this.handleMyList.bind(this);
    }

    componentDidMount(){
        this.props.requestAllShows();
        this.props.fetchMylistShows();
        this.mounted = true;
    }
    

    checkIfTvShow(){
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
        if (this.state.query.length >= 1) this.setState({ query: "" });
        e => e.target.classList.add(" selected-nav")
    }

    handleSearchChange(e) {
        e.preventDefault();
        this.setState({ query: e.currentTarget.value })
    }

    handleMyList(showId) {
        const { mylist, addShowToMyList, removeFromMyList } = this.props
        return (e => {
            e.preventDefault();
            if (!Object.keys(mylist).includes(showId.toString())) {
                addShowToMyList(showId)
            }
            else if (Object.keys(mylist).includes(showId.toString())) {
                removeFromMyList(showId)
            }
        })
    }

    onHoverPlay(e) {
        e.currentTarget.play();
    }

    onLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    showMylistBtn(showId) {
        if (Object.keys(this.props.mylist).includes(showId.toString())) return (<div className="mylistbtn"> <i class="fas fa-check"></i> My List</div>)
        else return (<div className="mylistbtn"> <i className="fas fa-plus"></i> My List</div>)
    }

    showIndilistBtn(showId) {
        if (Object.keys(this.props.mylist).includes(showId.toString())) return (<div className="mylistbtn"> <i class="fas fa-check"></i></div>)
        else return (<div className="mylistbtn"> <i className="fas fa-plus"></i></div>)
    }

    render(){
        if (Object.values(this.props.shows).length === 0 || !this.props.shows) {
            return (<div></div>);
        }

        const tvShowIds = this.checkIfTvShow();
        const randomShow = this.props.shows[tvShowIds[Math.floor(Math.random() * tvShowIds.length)]];

        let searchBar = <>
            <i className="fas fa-search"></i>
            <div className="search-bar">
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

        let searchedShows = [];
        Object.values(this.props.shows).map((show) => {
            if (show.title.toLowerCase().includes(this.state.query.toLowerCase())) searchedShows.push(show.id)
        })
        if (!this.mounted) {
            return (<div className="search-browse" />)
        }

        if (this.state.query === "") {
        return(
            <>
            <div className="homepage-browse">
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
            <div className="home-show-display">
                    <video className="home-vid" muted width="100%" height="100%" src={randomShow.video} type="video/mp4" autoPlay></video>

                    <div className="home-show-info">
                        <div className="random-show-title" onClick={this.handleMyList(randomShow.id)}>{randomShow.title}</div>
                        <div className = "play-and-mylist">
                        <Link to={`/shows/${randomShow.id}`}>
                        <div className="play-button">▶ Play</div>
                        </Link>
                        <button className="mylistbtn2" onClick={this.handleMyList(randomShow.id)}> {this.showMylistBtn(randomShow.id)} </button>
                        </div>
                    </div>
            </div>

                <div className="type-shows-display">
                {tvShowIds.map((showId) => (
                    <div className="show-pic-vid" key={showId}>
                        <img className="show-picture" src={this.props.shows[showId].picture} alt="" />
                            <button className="mylistbtn4" onClick={this.handleMyList(showId)}> {this.showIndilistBtn(showId)} </button>
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
        )}

        if (searchedShows.length === 0) {
            return (
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
                <div className="home-show-display">
                    <div className="empty-show-list">
                        <div>Your search for "{this.state.query}" did not have any matches.</div>
                        <div>Suggestions:</div>
                        <ul>
                            <li>Try different keywords</li>
                            <li>Looking for a movie or TV show?</li>
                            <li>Try using a movie, TV show title</li>
                        </ul>
                        </div>
                    </div>
                </div>
            )
        }

        if(this.state.query.length >= 1){
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
                {searchedShows.map((showId) => (
                    <div className="show-pic-vid" key={showId}>
                        <img className="show-picture" src={this.props.shows[showId].picture} alt="" />
                            <button className="mylistbtn4" onClick={this.handleMyList(showId)}> {this.showIndilistBtn(showId)} </button>
                        <Link to={`/shows/${showId}`}>
                            <video preload="none" className="show-vid" muted width="100%" height="100%" src={this.props.shows[showId].video}
                                type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
                            </video>
                        </Link>
                    </div>
                ))}
                </div>
            </div>  
            )
        }
    }
}


export default ShowType;