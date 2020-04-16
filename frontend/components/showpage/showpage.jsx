import React from "react";
import { Link } from "react-router-dom";

class Showpage extends React.Component {


    componentDidMount(){
        this.props.requestShow(this.props.match.params.showId)
    }

    render(){
        if(!this.props.show){
            return(<div></div>)
        }

        return(
            <div className="show-vid-page">
                <Link to={`/browse`}>
                <div className ="back-to-browse"> 
                    <div className="back-to-browse-icon">←
                    <div className="back-to-browse-text">Back to Browse</div>
                    </div>
                </div>
                </Link>
                <video className="selectedShow" autoPlay={true} width="100%" height="100%" src={this.props.show.video}
                    type="video/mp4" controls={true} >
                </video>
            </div>
        )
    }
}

export default Showpage