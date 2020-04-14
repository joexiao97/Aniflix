import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footers/footer-homepage";

class Homepage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
        this.handleLogout = this.handleLogout.bind(this);
        // this.onHoverPlay = this.onHoverPlay.bind(this);
    }

    componentDidMount(){

        this.props.requestAllShows().then(() =>
        this.props.requestAllGenres());
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSelected(){
        e => e.target.classList.add(" selected-nav")
    }

    onHoverPlay(e){
        e.currentTarget.play();
    }

    onLeave(e){
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    render(){
        if(this.props.genres.length === 0 || this.props.shows.length === 0 || !this.props.shows){
            return(<div></div>);
        }
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
                    <video className="home-vid" muted width="100%" height="100%" src={Object.values(this.props.shows)[Math.floor(Math.random() * Object.values(this.props.shows).length - 1)].video} type="video/mp4" autoPlay>
                    </video>
            </div>

            <div className="shows-by-genres-display">

                {this.props.genres.map((genre, i) => (
                    <div className="genre-tag" key={i} >{genre.genre_type}
                        {/* <div className="shows-under-genre"> */}
                            <div className="show-list">
                               {/* <div className="show"> */}
                                    {genre.showsid.map((id) => (
                                        <div className="show-pic-vid">
                                            <img className="show-picture" src={this.props.shows[id].picture } alt=""/>
                                            <video className="show-vid" muted width="100%" height="100%" src={this.props.shows[id].video}
                                                type="video/mp4" onMouseOver={this.onHoverPlay} onMouseLeave={this.onLeave} controls={false}>
                                            </video>
                                        </div>
                                    ))}
                                {/* </div> */}
                            {/* </div>  */}
                        </div>
                    </div>
                ))}
                
            </div>

        </div>  
            </>
        );
    }
};

export default Homepage;