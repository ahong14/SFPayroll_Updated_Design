import React , { Component } from 'react';
import './EditEvents.css';
import axios from 'axios';
import EditEventItem from '../EditEventItem/EditEventItem';

class EditEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    createNewEvent = () => {

    }

    //get list of events from database
    componentDidMount(){
        axios.get('/api/events')
            .then(res => {
                this.setState({
                    events: res.data
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    render(){
        const editEvents = this.state.events.map(event => {
            return(
                <EditEventItem
                    key={event._id}
                    id={event.event.toLowerCase().replace(/ /g,'')}
                    eventTitle={event.event}
                    date={event.date}
                    time={event.time}
                    speakers={event.speakers}
                    location={event.Location}
                    registration={event.registration}
                />
            )
        });

        return(
            <div id="createEventsContainer">
                <div id="editEventsContainer">
                    <div id="createEvent">
                        <h3> Edit Events </h3>
                        <button type="button" className="btn btn-success" onClick={this.createNewEvent}> Create New Event </button>
                    </div>
                    { editEvents }
                </div>
            </div>
        )
    }
}

export default EditEvents;