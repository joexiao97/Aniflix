import React from "react";
import { Link } from 'react-router-dom';

class Mainpage extends React.Component{

    constructor(props){
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e){
        e.preventDefault();
        const user = {username: "demouser", password:"password123"};
        this.props.login(user);
    }

    render(){
        return(
            <>
            <img 
                src={window.mainpage}
                alt="mainpage background"
                className="mainpage-background"
            />
            
            <div className="main">

            <div className="main-nav">
                <div className="logo">ANIFLIX</div>
                <Link to="/loginUser" className="login-button">Sign In</Link>
            </div>


            <div className="aniflixpic"></div>
            
            <main className="center">
                <section className="main-info">
                        <h1>Unlimited movies, TV</h1>
                        <h1>shows, and more!</h1>
                    <h2>Watch any Anime, anywhere, anytime.</h2>
                <Link className="demo-user-button" onClick={this.handleDemoLogin} to="/browse">Demo Login</Link>
                </section>
            </main>
            
            </div>
            </>
        )
    }

}

export default Mainpage;