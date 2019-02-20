import React, {Component} from 'react';
import './EventItem.css';

//EventItem for Events component

class EventItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "card border-info eventCard">
                <div className="card-body">
                    <h5 className ="card-title text-center"> {this.props.eventTitle} </h5>
                    <p className ="card-text text-center"> <strong> Date: </strong> {this.props.date} </p>
                    <p className ="card-text text-center"> <strong> Time: </strong> {this.props.time} </p>
                    <p className ="card-text text-center"> <strong> Location: </strong> {this.props.location} </p>
                    <p className = "card-text text-center"> <a href = {this.props.registration} target = "_blank"> Registration </a> </p>
                </div>
            </div>
        );
    }
}

export default EventItem;
