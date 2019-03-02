import React, {Component} from 'react';
import axios from 'axios';
import '../Events/Events.css';
import EventItem from '../Events/EventItem/EventItem';
import eventHeaderImage from '../../photos/events_photo.jpg';
import EventCarousel from './EventCarousel/EventCarousel';
import apa from '../../photos/american_payroll_association_logo.png';
import cpc from '../../photos/cpclogo.png';
import Grid from '@material-ui/core/Grid';

//Events component to display events
//state contains array of events retrieved from mongoDB

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {events: []};
    }

    componentDidMount(){
        const apiURL = '/api/events';

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
            //if the event has a registration, return registration link
            if(result.registration != undefined){
              return <EventItem key = {result._id} eventTitle = {result.event} date = {result.date} time = {result.time} speakers = {result.speakers} location = {result.Location} registration = {result.registration}/>
            }

            //no registration link
            else{
              return <EventItem key = {result._id} eventTitle = {result.event} date = {result.date} time = {result.time} speakers = {result.speakers} location = {result.Location}/>
            }
        });

        return(
            <div className = "container-fluid" id = "event_container">
                <div className = "align_center">
                    <div className = "container-fluid" id = "event_header">
                        <h2 className = "section_header"> Events </h2>
                        <EventCarousel/>
                        <div id = "conferenceLinks">
                            <div className = "conference">
                                <a href = "https://www.apacongress.com/" target = "_blank"> <h4> American Payroll Congress Schedule </h4> </a>
                            </div>

                            <div className = "conference">
                                <a href = "https://californiapayroll.org/meetinginfo.php" target = "_blank"> <h4> California Payroll Congress Schedule </h4> </a>
                            </div>
                        </div>
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
