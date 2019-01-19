import React, {Component} from 'react';
import '../Events/Events.css';
import EventItem from '../Events/EventItem/EventItem';
import eventHeaderImage from '../../photos/events_photo.jpg';


class Events extends Component{
    constructor(props){
        super(props);
        this.state = {events: []};
    }

    render(){
        return(
            <div className = "container-fluid" id = "event_container">
                <div className = "align_center">
                    <div id = "event_header">
                        <h2 className = "section_header"> Events </h2>
                        <img id = "events_image" src = {eventHeaderImage} alt = "event image"/>
                    </div>

                    <div id = "eventPosts">

                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
