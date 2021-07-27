import React, { useState, useEffect } from 'react';
import './EditEvents.css';
import axios from 'axios';
import EditEventItem from '../EditEventItem/EditEventItem';
import validator from 'validator';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';
import { connect } from 'react-redux';

const EditEvents = props => {
    const [editEventsState, setEditEventsState] = useState({
        events: [],
        event: '',
        date: '',
        time: '',
        speakers: '',
        Location: '',
        registration: '',
        selectedDate: '',
        description: ''
    });

    // handle event forms
    const handleCreateEvent = event => {
        setEditEventsState({
            ...editEventsState,
            [event.target.name]: event.target.value
        });
    };

    // select date
    const handleDatePickerChange = event => {
        if (editEventsState.selectedDate !== event) {
            setEditEventsState({
                ...editEventsState,
                selectedDate: event,
                date: moment(event).format('MMMM DD YYYY')
            });
        }
    };

    // submit new event
    const createNewEvent = () => {
        // check empty fields
        if (
            editEventsState.event === '' ||
            editEventsState.date === '' ||
            editEventsState.time === '' ||
            editEventsState.speakers === '' ||
            editEventsState.Location === ''
        ) {
            alert('One or more fields empty');
            return;
        } else if (
            editEventsState.registration.length > 0 &&
            validator.isURL(editEventsState.registration, {
                protocols: ['http', 'https'],
                require_protocol: true
            }) === false
        ) {
            // check for valid url
            alert('Please insert valid URL');
            return;
        } else {
            // create lastEdited property with current date/time
            let currentEditDate = new Date();
            currentEditDate = moment(currentEditDate)
                .tz('America/Los_Angeles')
                .format('YYYY-MM-DD hh:mm:ss');
            axios
                .post('/api/events/createEvent', {
                    params: {
                        event: editEventsState.event,
                        date: editEventsState.date,
                        time: editEventsState.time,
                        speakers: editEventsState.speakers,
                        location: editEventsState.Location,
                        registration: editEventsState.registration,
                        lastEdited:
                            props.firstName +
                            ' ' +
                            props.lastName +
                            ' ' +
                            currentEditDate,
                        sortDate: editEventsState.selectedDate,
                        description:
                            editEventsState.description ||
                            editEventsState.description.length > 0
                                ? editEventsState.description
                                : null
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    // make call to get updated events
                    getEvents();
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    // get events from database
    const getEvents = () => {
        axios
            .get('/api/events')
            .then(res => {
                let sortedDates = res.data.filter(event => {
                    return !isNaN(Date.parse(event.date));
                });

                sortedDates = sortedDates.map(event => {
                    let updatedEventDateObject = { ...event };
                    updatedEventDateObject.sortDate = new Date(event.date);
                    return updatedEventDateObject;
                });

                sortedDates.sort((a, b) => {
                    return b.sortDate - a.sortDate;
                });

                setEditEventsState({ ...editEventsState, events: sortedDates });
            })
            .catch(err => {
                alert(err);
            });
    };

    // get list of events from database
    useEffect(() => {
        getEvents();
    }, []);

    const editEvents = editEventsState.events.map(event => {
        return (
            <EditEventItem
                key={event._id}
                id={event._id.toLowerCase().replace(/[^a-z]/g, '')}
                event={event.event}
                date={event.date}
                time={event.time}
                speakers={event.speakers}
                Location={event.Location}
                registration={event.registration}
                lastEdited={event.lastEdited}
                description={event.description}
            />
        );
    });

    return (
        <div className="editContainer">
            <div id="editEventsContainer">
                <div id="createEvent">
                    <h3> Edit Events </h3>
                    <button
                        type="button"
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#create"
                    >
                        Create New Event
                    </button>
                    <div className="modal fade" id="create">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title editEventTitle">
                                        Create Event
                                    </h4>
                                    <button
                                        className="form-control close"
                                        type="button"
                                        data-dismiss="modal"
                                    >
                                        &times;
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <form>
                                        <label> Event Title </label>
                                        <input
                                            name="event"
                                            onChange={handleCreateEvent}
                                            className="form-control"
                                            placeholder="Event Title"
                                            type="text"
                                        />

                                        <label> Date </label>
                                        <input
                                            name="date"
                                            disabled
                                            value={editEventsState.date}
                                            className="form-control"
                                            placeholder="Select Date"
                                            type="text"
                                        />

                                        <label> Select Date: </label>
                                        <div>
                                            <span>
                                                <FaCalendar />
                                            </span>
                                            <DatePicker
                                                selected={
                                                    editEventsState.selectedDate
                                                }
                                                onChange={
                                                    handleDatePickerChange
                                                }
                                            />
                                        </div>

                                        <label> Time </label>
                                        <input
                                            name="time"
                                            onChange={handleCreateEvent}
                                            className="form-control"
                                            placeholder="Time"
                                            type="text"
                                        />

                                        <label> Speakers</label>
                                        <input
                                            name="speakers"
                                            onChange={handleCreateEvent}
                                            className="form-control"
                                            placeholder="Speakers"
                                            type="text"
                                        />

                                        <label> Location </label>
                                        <input
                                            name="Location"
                                            onChange={handleCreateEvent}
                                            className="form-control"
                                            placeholder="Location"
                                            type="text"
                                        />

                                        <label> Registration </label>
                                        <input
                                            name="registration"
                                            onChange={handleCreateEvent}
                                            className="form-control"
                                            placeholder="Registration Link"
                                            type="text"
                                        />

                                        <label> Description </label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            onChange={handleCreateEvent}
                                            placeholder="Enter Optional Description"
                                        ></textarea>
                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        className="form-control btn btn-danger"
                                        type="button"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="form-control btn btn-success"
                                        type="button"
                                        onClick={createNewEvent}
                                    >
                                        Create Event
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {editEventsState.events.length > 0 ? (
                    editEvents
                ) : (
                    <p> No events found </p>
                )}
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

export default connect(mapStateToProps, null)(EditEvents);
