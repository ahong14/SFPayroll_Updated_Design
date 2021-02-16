import React, { Component } from 'react';
import './EditEvents.css';
import axios from 'axios';
import EditEventItem from '../EditEventItem/EditEventItem';
import validator from 'validator';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';
import { connect } from 'react-redux';

class EditEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            event: '',
            date: '',
            time: '',
            speakers: '',
            Location: '',
            registration: '',
            selectedDate: '',
            description: ''
        };
    }

    //handle event forms
    handleCreateEvent = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //select date
    handleDatePickerChange = event => {
        if (this.state.selectedDate !== event) {
            this.setState({
                selectedDate: event,
                date: moment(event).format('MMMM DD YYYY')
            });
        }
    };

    //submit new event
    createNewEvent = () => {
        //check empty fields
        if (
            this.state.event === '' ||
            this.state.date === '' ||
            this.state.time === '' ||
            this.state.speakers === '' ||
            this.state.Location === ''
        ) {
            alert('One or more fields empty');
            return;
        } else if (
            this.state.registration.length > 0 &&
            validator.isURL(this.state.registration, {
                protocols: ['http', 'https'],
                require_protocol: true
            }) === false
        ) {
            //check for valid url
            alert('Please insert valid URL');
            return;
        } else {
            //create lastEdited property with current date/time
            let currentEditDate = new Date();
            currentEditDate = moment(currentEditDate)
                .tz('America/Los_Angeles')
                .format('YYYY-MM-DD hh:mm:ss');
            axios
                .post('/api/events/createEvent', {
                    params: {
                        event: this.state.event,
                        date: this.state.date,
                        time: this.state.time,
                        speakers: this.state.speakers,
                        location: this.state.Location,
                        registration: this.state.registration,
                        lastEdited:
                            this.props.firstName +
                            ' ' +
                            this.props.lastName +
                            ' ' +
                            currentEditDate,
                        sortDate: this.state.selectedDate,
                        description:
                            this.state.description ||
                            this.state.description.length > 0
                                ? this.state.description
                                : null
                    }
                })
                .then(res => {
                    alert(res.data.message);
                    //make call to get updated events
                    this.getEvents();
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    };

    //get events from database
    getEvents = () => {
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

                this.setState({
                    events: sortedDates
                });
            })
            .catch(err => {
                alert(err);
            });
    };

    //get list of events from database
    componentDidMount() {
        this.getEvents();
    }

    render() {
        const editEvents = this.state.events.map(event => {
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
                            {' '}
                            Create New Event{' '}
                        </button>
                        <div className="modal fade" id="create">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title editEventTitle">
                                            {' '}
                                            Create Event{' '}
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
                                                onChange={
                                                    this.handleCreateEvent
                                                }
                                                className="form-control"
                                                placeholder="Event Title"
                                                type="text"
                                            />

                                            <label> Date </label>
                                            <input
                                                name="date"
                                                disabled
                                                value={this.state.date}
                                                className="form-control"
                                                placeholder="Select Date"
                                                type="text"
                                            />

                                            <label> Select Date: </label>
                                            <div>
                                                <span>
                                                    {' '}
                                                    <FaCalendar />{' '}
                                                </span>
                                                <DatePicker
                                                    selected={
                                                        this.state.selectedDate
                                                    }
                                                    onChange={
                                                        this
                                                            .handleDatePickerChange
                                                    }
                                                />
                                            </div>

                                            <label> Time </label>
                                            <input
                                                name="time"
                                                onChange={
                                                    this.handleCreateEvent
                                                }
                                                className="form-control"
                                                placeholder="Time"
                                                type="text"
                                            />

                                            <label> Speakers</label>
                                            <input
                                                name="speakers"
                                                onChange={
                                                    this.handleCreateEvent
                                                }
                                                className="form-control"
                                                placeholder="Speakers"
                                                type="text"
                                            />

                                            <label> Location </label>
                                            <input
                                                name="Location"
                                                onChange={
                                                    this.handleCreateEvent
                                                }
                                                className="form-control"
                                                placeholder="Location"
                                                type="text"
                                            />

                                            <label> Registration </label>
                                            <input
                                                name="registration"
                                                onChange={
                                                    this.handleCreateEvent
                                                }
                                                className="form-control"
                                                placeholder="Registration Link"
                                                type="text"
                                            />

                                            <label> Description </label>
                                            <textarea
                                                className="form-control"
                                                name="description"
                                                onChange={
                                                    this.handleCreateEvent
                                                }
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
                                            onClick={this.createNewEvent}
                                        >
                                            {' '}
                                            Create Event{' '}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.state.events.length > 0 ? (
                        editEvents
                    ) : (
                        <p> No events found </p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.authReducer.firstName,
        lastName: state.authReducer.lastName
    };
};

export default connect(mapStateToProps, null)(EditEvents);
