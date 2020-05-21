import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footers/footer-homepage";

class Homepage extends React.Component{

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
        this.handleMyList = this.handleMyList.bind(this);
    }

    componentDidMount(){
        this.props.requestAllShows().then(() =>
        this.props.requestAllGenres());
        this.props.fetchMylistShows();
        this.mounted = true;
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected(){
        if(this.state.query.length >= 1) this.setState({query: ""});
        e => e.target.classList.add(" selected-nav");
    }

    handleSearchChange(e){
        e.preventDefault();
        this.setState({query: e.currentTarget.value})
    }

    onHoverPlay(e){
        e.currentTarget.play();
    }

    onLeave(e){
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    handleMyList(showId){
        const {mylist, addShowToMyList, removeFromMyList} = this.props
        return(e => {
            e.preventDefault();
            if (!Object.keys(mylist).includes(showId.toString())){
                addShowToMyList(showId)
            }
            else if (Object.keys(mylist).includes(showId.toString())) {
                removeFromMyList(showId)
            }
        })
    }

    showMylistBtn(showId){
        if (Object.keys(this.props.mylist).includes(showId.toString())) return (<div className="mylistbtn"> <i className="fas fa-check"></i> My List</div>)
        else return (<div className="mylistbtn"> <i className="fas fa-plus"></i> My List</div>)
    }

    showIndilistBtn(showId){
        if (Object.keys(this.props.mylist).includes(showId.toString())) return (<div className="mylistbtn"> <i className="fas fa-check"></i></div>)
        else return (<div className="mylistbtn"> <i className="fas fa-plus"></i></div>)
    }

    showRows(genre){
    // if(this.props.genres.length > 0){
        let count = 0
        let shows = []
        let specShows = []
        genre.forEach((gen) => {
            // if(genre.showsid.length > 4){
                gen.showsid.forEach((id) => {
                    if(count < 4){
                        specShows.push(id);
                        count++;
                    }else{
                        shows.push(specShows);
                        count = 0;
                        specShows = [id];
                    }
                })
            // }
        })
        shows.push(specShows);
        return shows;
    // }
    }

    
    render(){
        if(this.props.genres.length === 0 || this.props.shows.length === 0 || !this.props.shows){
                return (<div className="search-browse" />)
        }
        if (!this.mounted) {
            return (<div className="search-browse" />)
        }

        const randomShow = this.props.shows[Object.keys(this.props.shows)[Math.floor(Math.random() * Object.keys(this.props.shows).length)]];

        let searchBar = <>
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



        let searchedShows = [];
        Object.values(this.props.shows).map((show) => {
            if(show.title.toLowerCase().includes(this.state.query.toLowerCase())) searchedShows.push(show.id)
        })

        if(this.state.query === ""){
        return (           
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
                    <div className="nav-user-dropdown">
                        <div className="dropdown-menu">
                            <p>Welcome, {this.props.user.username}</p>
                            <p><a target="_blank" href="https://github.com/joexiao97/Aniflix">Github</a></p>
                            <p><a target="_blank" href="https://www.linkedin.com/in/joe-xiao-8a5669109/">LinkedIn</a></p>
                            <p><a target="_blank" href="https://joexiao97.github.io/">Portfolio</a></p>
                            <p><Link onClick={this.handleLogout} to="/">Sign out of Aniflix</Link></p>
                        </div>
                    </div>
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

            <div className="shows-by-genres-display">
                {this.props.genres.map((genre, i) => (
                    <div className="genre-tag" key={i} >{genre.genre_type}
                            <div className="show-list">
                            {genre.showsid.map((id) => (
                                <div className="show-pic-vid" key={id}>
                                        <img className="show-picture" src={this.props.shows[id].picture } alt=""/>
                                    <button className="mylistbtn3" onClick={this.handleMyList(id)}> {this.showIndilistBtn(id)} </button>
                                        <Link to={`/shows/${id}`}>
                                        <video preload="none" className="show-vid" muted width="100%" height="100%" src={this.props.shows[id].video}
                                            type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
                                        </video>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>  
            </>
        );}

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
                <>
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
                    <div className="show-pic-vid" key={showId} >
                        <button className="mylistbtn3" onClick={this.handleMyList(showId)}> {this.showIndilistBtn(showId)} </button>
                        <img className="show-picture" src={this.props.shows[showId].picture} alt="" />
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
};

export default Homepage;