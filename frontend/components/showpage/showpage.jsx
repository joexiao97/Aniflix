import React from "react";

class Showpage extends React.Component {


    componentDidMount(){
        this.props.requestShow(this.props.match.params.showId)
    }

    render(){
        if(!this.props.show){
            return(<div></div>)
        }

        return(
            <>
                <video className="selectedShow" autoPlay={true} width="100%" height="100%" src={this.props.show.video}
                    type="video/mp4" controls={true} >
                </video>
            </>
        )
    }
}

export default Showpage