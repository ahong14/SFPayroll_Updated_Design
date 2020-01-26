import React, { Component } from 'react';
import './EditEventItem.css';

class EditEventItem extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
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
                    <p className= "card-text text-center"> <a href={this.props.registration} rel="noopener noreferrer" target="_blank"> Registration </a> </p>
                </div>

                <div className="editEventButtonsContainer">
                    <button type="button" className="btn btn-secondary editButton"> Edit </button>
                    <button type="button" className="btn btn-danger editButton"> Delete </button>
                </div>
            </div>
        )
    }
}

export default EditEventItem;