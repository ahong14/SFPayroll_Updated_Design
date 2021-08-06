import React, { useState } from 'react';
import './EditEventItem.css';
import axios from 'axios';
import validator from 'validator';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';
import { connect } from 'react-redux';

const EditEventItem = props => {
    const [editEventItemState, setEditEventItem] = useState({
        event: '',
        date: '',
        time: '',
        speakers: '',
        Location: '',
        registration: '',
        selectedDate: '',
        deleteClicked: false,
        description: ''
    });

    // show modal to edit event
    const editEvent = event => {
        setEditEventItem({
            ...editEventItemState,
            [event.target.name]: event.target.value
        });
    };

    // function to handle delete clicked
    const handleDeleteClicked = () => {
        setEditEventItem({
            ...editEventItemState,
            deleteClicked: !editEventItemState.deleteClicked
        });
    };

    const handleCloseDelete = () => {
        setEditEventItem({
            ...editEventItemState,
            deleteClicked: false
        });
    };

    //delete event from database
    const deleteEvent = () => {
        axios
            .delete('/api/events/delete', {
                params: {
                    event: props.event
                }
            })
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    // select date
    const handleDatePickerChange = event => {
        if (editEventItemState.selectedDate !== event) {
            setEditEventItem({
                ...editEventItemState,
                selectedDate: event,
                date: moment(event).format('MMMM DD YYYY')
            });
        }
    };

    // submit updates to event
    const updateEvent = () => {
        //array to keep track of edit keys
        let currentEdits = [];

        // check if an update was found, avoid request if no changes found
        let updateFound = false;

        // return keys not equal to deleteClicked
        currentEdits = Object.keys(editEventItemState).filter(key => {
            return key !== 'deleteClicked';
        });

        // go through each edit key
        let editObject = {};
        currentEdits.forEach(edit => {
            //if value was not modified, use previous values from props
            if (editEventItemState[edit] === '') {
                editObject[edit] = props[edit];
            } else {
                editObject[edit] = editEventItemState[edit];
                updateFound = true;
            }
        });

        // no updates found, return
        if (updateFound === false) {
            alert('No edits found');
            return;
        }

        // make request to update event
        else {
            // check for valid url
            if (
                validator.isURL(editObject.registration, {
                    protocols: ['http', 'https'],
                    require_protocol: true
                }) === false
            ) {
                alert('Please insert valid URL');
                return;
            }

            // create lastEdited property with user and current date/time
            let currentEditDate = new Date();
            currentEditDate = moment(currentEditDate)
                .tz('America/Los_Angeles')
                .format('YYYY-MM-DD hh:mm:ss');
            editObject['lastEdited'] =
                props.firstName + ' ' + props.lastName + ' ' + currentEditDate;

            // create sortDate and timestamp
            let sortDate = new Date(editEventItemState.selectedDate);
            let timestamp = sortDate.getTime();

            editObject['sortDate'] = sortDate;
            editObject['unixTimestamp'] = timestamp;

            axios
                .put('/api/events/edit', {
                    params: {
                        newEdits: { ...editObject },
                        originalEventTitle: props.event
                    }
                })
                .then(res => {
                    //after successful edit
                    alert(res.data.message);
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    return (
        <div className="card border-info eventCard">
            <div className="card-body">
                <h5 className="card-title text-center"> {props.event} </h5>
                <p className="card-text text-center">
                    <strong> Date: </strong> {props.date}
                </p>
                <p className="card-text text-center">
                    <strong> Time: </strong> {props.time}
                </p>
                <p className="card-text text-center">
                    <strong> Speakers: </strong> {props.speakers}
                </p>
                <p className="card-text text-center">
                    <strong> Location: </strong> {props.Location}
                </p>
                <p className="card-text text-center">
                    <a
                        href={props.registration}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Registration
                    </a>
                </p>
                <p className="card-text text-center">
                    Last Edited By: {props.lastEdited}
                </p>
            </div>

            <div className="editButtonsContainer">
                <button
                    className="form-control btn btn-secondary editButton"
                    type="button"
                    data-toggle="modal"
                    data-target={'#' + props.id}
                >
                    Edit
                </button>
                <button
                    className="form-control btn btn-danger editButton"
                    type="button"
                    onClick={handleDeleteClicked}
                    data-toggle="modal"
                    data-target={'#' + props.id}
                >
                    Delete
                </button>
            </div>

            <div className="modal fade" id={props.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"> Edit Event </h4>
                            <button
                                className="form-control close"
                                type="button"
                                data-dismiss="modal"
                                onClick={handleCloseDelete}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            {editEventItemState.deleteClicked !== true ? (
                                <form>
                                    <label> Event Title </label>
                                    <input
                                        name="event"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.event}
                                        type="text"
                                    />

                                    <label> Date </label>
                                    <input
                                        disabled
                                        name="date"
                                        value={editEventItemState.date}
                                        className="form-control"
                                        placeholder={props.date}
                                        type="text"
                                    />

                                    <label> Select Date: </label>
                                    <div>
                                        <span>
                                            <FaCalendar />
                                        </span>
                                        <DatePicker
                                            selected={
                                                editEventItemState.selectedDate
                                            }
                                            onChange={handleDatePickerChange}
                                        />
                                    </div>

                                    <label> Time </label>
                                    <input
                                        name="time"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.time}
                                        type="text"
                                    />

                                    <label> Speakers</label>
                                    <input
                                        name="speakers"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.speakers}
                                        type="text"
                                    />

                                    <label> Location </label>
                                    <input
                                        name="Location"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.Location}
                                        type="text"
                                    />

                                    <label> Registration </label>
                                    <input
                                        name="registration"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.registration}
                                        type="text"
                                    />

                                    <label> Description </label>
                                    <textarea
                                        name="description"
                                        onChange={editEvent}
                                        className="form-control"
                                        placeholder={props.description}
                                    ></textarea>
                                </form>
                            ) : (
                                <p> Confirm Deleting {props.event} ? </p>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                className="form-control btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                                onClick={handleCloseDelete}
                            >
                                Close
                            </button>
                            {editEventItemState.deleteClicked === false ? (
                                <button
                                    className="form-control btn btn-success"
                                    type="button"
                                    onClick={updateEvent}
                                >
                                    Submit Edit
                                </button>
                            ) : (
                                <button
                                    className="form-control btn btn-danger"
                                    type="button"
                                    onClick={deleteEvent}
                                >
                                    Delete Event
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        firstName: state.authReducer.firstName,
        lastName: state.authReducer.lastName
    };
};

export default connect(mapStateToProps, null)(EditEventItem);
