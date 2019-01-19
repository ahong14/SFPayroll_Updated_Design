import React, {Component} from 'react';
import './EventItem.css';

class EventItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card-body">
                <h5 className ="card-title"> {this.props.eventTitle} </h5>
                <p className ="card-text"> <strong> Date: </strong> {this.props.date} </p>
                <p className ="card-text"> <strong> Time: </strong> {this.props.time} </p>
                <p className ="card-text"> <strong> Location: </strong> {this.props.location} </p>
            </div>
        );
    }
}

export default EventItem;