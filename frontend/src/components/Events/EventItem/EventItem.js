import React, { Component, Fragment } from 'react';
import moment from 'moment-timezone';
import './EventItem.css';

//EventItem for Events component

class EventItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card border-info eventCard">
                <div className="card-body">
                    <h5 className="card-title text-center"> {this.props.eventTitle} </h5>
                    <p className="card-text text-center"> <strong> Date: </strong> {this.props.date} </p>
                    <p className="card-text text-center"> <strong> Time: </strong> {this.props.time} </p>
                    <p className="card-text text-center"> <strong> Speakers: </strong> {this.props.speakers} </p>
                    <p className="card-text text-center"> <strong> Location: </strong> {this.props.location} </p>
                    {this.props.registration.length > 0 ? 
                        <p className= "card-text text-center"> <a href={this.props.registration} rel="noopener noreferrer" target="_blank"> Registration </a> </p>
                        :
                        <Fragment/>
                    }
                </div>
            </div>
        );
    }
}

export default EventItem;
