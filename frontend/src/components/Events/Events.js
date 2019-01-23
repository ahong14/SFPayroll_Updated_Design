import React, {Component} from 'react';
import axios from 'axios';
import '../Events/Events.css';
import EventItem from '../Events/EventItem/EventItem';
import eventHeaderImage from '../../photos/events_photo.jpg';

//Events component to display events
//state contains array of events retrieved from mongoDB

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {events: []};
    }

    componentDidMount(){
        const apiURL = 'http://localhost:4000/events';
        //const apiURL = 'http://sfpayroll.herokuapp.com/events';

        //set state to new array of events
        axios.get(apiURL)
            .then(resp => {
                this.setState({
                    events: resp.data
                })
            })
    }

    render(){
        //render current state of events
        const eventList = this.state.events.map(result => {
            return <EventItem key = {result._id} eventTitle = {result.event} date = {result.date} time = {result.time} location = {result.Location}/>
        });

        return(
            <div className = "container-fluid" id = "event_container">
                <div className = "align_center">
                    <div id = "event_header">
                        <h2 className = "section_header"> Events </h2>
                        <img id = "events_image" src = {eventHeaderImage} alt = "event image"/>
                    </div>

                    <div id = "eventPosts">
                        {eventList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;