import React, { Component } from 'react';
import './EditEventItem.css';
import axios from 'axios';

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
        }
    }

    //show modal to edit event
    editEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //submit updates to event
    updateEvent = () => {
        //get copy of state, check which values have updates
        let currentEdits= {...this.state};
        //check if an update was found, avoid request if no changes found
        let updateFound = false;
        Object.keys(currentEdits).forEach(edit => {
            //if value was not modified, use previous values from props
            if(currentEdits[edit] == ''){
                currentEdits[edit] = this.props[edit];
            }

            else{
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
            axios.put('/api/events/edit', {
                params: {
                    newEdits: {...currentEdits},
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
                            </div>

                            <div className="modal-footer">
                                <button className="form-control" type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button className="form-control" type="button" className="btn btn-success" onClick={this.updateEvent}> Submit Edit </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditEventItem;