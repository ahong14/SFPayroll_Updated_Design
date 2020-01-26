import React, { Component } from 'react';
import './EditEventItem.css';

class EditEventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventTitle: '',
            date: '',
            time: '',
            speakers: '',
            location: '',
            registration: ''
        }
    }

    //show modal to edit event
    editEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    <button className="form-control" type="button" className="btn btn-secondary editButton" data-toggle="modal" data-target={"#" + this.props.id}> Edit </button>
                    <button className="form-control" type="button" className="btn btn-danger editButton"> Delete </button>
                </div>

                <div className="modal fade" id={this.props.id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"> Edit Event </h4>
                                <button className="form-control" type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <form>
                                    <label> Event Title </label>
                                    <input name="eventTitle" onChange={this.editEvent} className="form-control" placeholder={this.props.eventTitle} type="text"/>

                                    <label> Date </label>
                                    <input name="date" onChange={this.editEvent} className="form-control" placeholder={this.props.date} type="text"/>

                                    <label> Time </label>
                                    <input name="time" onChange={this.editEvent} className="form-control" placeholder={this.props.time} type="text"/>

                                    <label> Speakers</label>
                                    <input name="speakers" onChange={this.editEvent} className="form-control" placeholder={this.props.speakers} type="text"/>

                                    <label> Location </label>
                                    <input name="location" onChange={this.editEvent} className="form-control" placeholder={this.props.location} type="text"/>

                                    <label> Registration </label>
                                    <input name="registration" onChange={this.editEvent} className="form-control" placeholder={this.props.registration} type="text"/>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button className="form-control" type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button className="form-control" type="button" className="btn btn-success"> Submit Edit </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditEventItem;