import React, { Component } from 'react';
import './EditEventItem.css';
import axios from 'axios';
import validator from 'validator';

class EditEventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            event: '',
            date: '',
            time: '',
            speakers: '',
            Location: '',
            registration: '',
            deleteClicked: false
        }
    }

    //show modal to edit event
    editEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //function to handle delete clicked
    handleDeleteClicked = () => {
        this.setState({
            deleteClicked: !this.state.deleteClicked
        });
    }

    handleCloseDelete = () => {
        this.setState({
            deleteClicked: false
        })
    }

    //delete event from database
    deleteEvent = () => {
        axios.delete('/api/events/delete', {
            params: {
                event: this.props.event
            }
        })
        .then(res => {
            alert(res.data.message);
        })
        .catch(err => {
            alert(err.response.data.message);
        })
    }

    //submit updates to event
    updateEvent = () => {
        //array to keep track of edit keys
        let currentEdits = [];

        //check if an update was found, avoid request if no changes found
        let updateFound = false;

        //return keys not equal to deleteClicked
        currentEdits = Object.keys(this.state).filter(key => {
            return key != "deleteClicked";
        });

        //go through each edit key
        let editObject = {};
        currentEdits.forEach(edit => {
            //if value was not modified, use previous values from props
            if(this.state[edit] == ''){
                editObject[edit] = this.props[edit];
            }

            else{
                editObject[edit] = this.state[edit];
                updateFound = true;
            }
        });

        //no updates found, return 
        if(updateFound == false){
            alert("No edits found");
            return;
        }

        //make request to update event
        else{
            if(validator.isURL(editObject.registration) === false){
                alert("Please insert valid URL");
                return;
            }

            axios.put('/api/events/edit', {
                params: {
                    newEdits: {...editObject},
                    originalEventTitle: this.props.event
                }
            })
            .then(res => {
                //after successful edit
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            })
        }
    }

    render(){
        return(
            <div className="card border-info eventCard">
                <div className="card-body">
                    <h5 className="card-title text-center"> {this.props.event} </h5>
                    <p className="card-text text-center"> <strong> Date: </strong> {this.props.date} </p>
                    <p className="card-text text-center"> <strong> Time: </strong> {this.props.time} </p>
                    <p className="card-text text-center"> <strong> Speakers: </strong> {this.props.speakers} </p>
                    <p className="card-text text-center"> <strong> Location: </strong> {this.props.Location} </p>
                    <p className= "card-text text-center"> <a href={this.props.registration} rel="noopener noreferrer" target="_blank"> Registration </a> </p>
                </div>

                <div className="editButtonsContainer">
                    <button className="form-control" type="button" className="btn btn-secondary editButton" data-toggle="modal" data-target={"#" + this.props.id}> Edit </button>
                    <button className="form-control" type="button" className="btn btn-danger editButton" onClick={this.handleDeleteClicked} data-toggle="modal" data-target={"#" + this.props.id}> Delete </button>
                </div>

                <div className="modal fade" id={this.props.id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"> Edit Event </h4>
                                <button className="form-control" type="button" className="close" data-dismiss="modal" onClick={this.handleCloseDelete}>&times;</button>
                            </div>

                            <div className="modal-body">
                                {this.state.deleteClicked != true ? 
                                        <form>
                                            <label> Event Title </label>
                                            <input name="event" onChange={this.editEvent} className="form-control" placeholder={this.props.event} type="text"/>

                                            <label> Date </label>
                                            <input name="date" onChange={this.editEvent} className="form-control" placeholder={this.props.date} type="text"/>

                                            <label> Time </label>
                                            <input name="time" onChange={this.editEvent} className="form-control" placeholder={this.props.time} type="text"/>

                                            <label> Speakers</label>
                                            <input name="speakers" onChange={this.editEvent} className="form-control" placeholder={this.props.speakers} type="text"/>

                                            <label> Location </label>
                                            <input name="Location" onChange={this.editEvent} className="form-control" placeholder={this.props.Location} type="text"/>

                                            <label> Registration </label>
                                            <input name="registration" onChange={this.editEvent} className="form-control" placeholder={this.props.registration} type="text"/>
                                        </form>
                                    :
                                        <p> Confirm Deleting {this.props.event} ? </p>
                                }
                            </div>

                            <div className="modal-footer">
                                <button className="form-control" type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseDelete}>Close</button>
                                {this.state.deleteClicked == false ? 
                                    <button className="form-control" type="button" className="btn btn-success" onClick={this.updateEvent}> Submit Edit </button>
                                    :
                                    <button className="form-control" type="button" className="btn btn-danger" onClick={this.deleteEvent}> Delete Event </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEventItem;