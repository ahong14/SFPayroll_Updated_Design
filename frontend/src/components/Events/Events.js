import React, { Component, Fragment } from 'react';
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
        this.state = {events: [], upcomingEvent: {}};
    }

    componentDidMount(){
        const apiURL = '/api/events';

        //set state to new array of events
        axios.get(apiURL)
            .then(resp => {
                let sortedDates = resp.data.filter(event => {
                    if (!isNaN(Date.parse(event.date))) {
                        return event;
                    } 
                });

                sortedDates = sortedDates.map(event => {
                    let updatedEventDateObject = {...event};
                    updatedEventDateObject.sortDate = new Date(event.date);
                    return updatedEventDateObject;
                });

                sortedDates.sort((a,b) => {
                    return b.sortDate - a.sortDate;
                });


                // get dates greater than today
                let currentDate = new Date();
                let upcomingDate = {};
                sortedDates.forEach(date => {
                    if (date.sortDate >= currentDate) {
                        upcomingDate = {...date};
                    }
                });

                this.setState({
                    upcomingEvent: upcomingDate,
                    events: sortedDates
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    render(){
        //render current state of events
        const eventList = this.state.events.map(result => {
            //if the event has a registration, return registration link
            if(result.registration != undefined){
              return <EventItem key={result._id} eventTitle={result.event} date={result.date} time={result.time} speakers={result.speakers} location={result.Location} registration={result.registration}/>
            }

            //no registration link
            else{
              return <EventItem key={result._id} eventTitle={result.event} date={result.date} time={result.time} speakers={result.speakers} location={result.Location}/>
            }
        });

        return(
            <div className="container-fluid" id="event_container">
                <div className="align_center">
                    <div className="container-fluid" id="event_header">
                        <h2 className="section_header"> Events </h2>
                        <EventCarousel/>
                        <div id="conferenceLinks">
                            <div className="conference">
                                <a href="https://www.apacongress.com/" rel="noopener noreferrer" target="_blank"> <h4> American Payroll Congress Schedule </h4> </a>
                            </div>

                            <div className="conference">
                                <a href="https://californiapayroll.org/meetinginfo.php" rel="noopener noreferrer" target="_blank"> <h4> California Payroll Congress Schedule </h4> </a>
                            </div>
                        </div>
                    </div>

                    <div id="upcomingEvent">
                        <h3> Upcoming Event </h3>
                        {
                            Object.keys(this.state.upcomingEvent).length > 0 ? <EventItem key={this.state.upcomingEvent._id} eventTitle={this.state.upcomingEvent.event} date={this.state.upcomingEvent.date} time={this.state.upcomingEvent.time} speakers={this.state.upcomingEvent.speakers} location={this.state.upcomingEvent.Location} registration={this.state.upcomingEvent.registration}/> : <Fragment/>
                        }
                    </div>

                    <div id="eventPosts">
                        <h3> Other Events </h3>
                        {eventList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
