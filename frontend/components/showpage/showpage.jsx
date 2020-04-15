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
                <h1>This is the showpage</h1>
                {this.props.show.title}
            </>
        )
    }
}

export default Showpage