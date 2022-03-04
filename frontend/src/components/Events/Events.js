import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import '../Events/Events.css';
import EventItem from '../Events/EventItem/EventItem';
import EventCarousel from './EventCarousel/EventCarousel';

//Events component to display events
//state contains array of events retrieved from mongoDB

const Events = () => {
    const [events, setEvents] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState({});

    useEffect(() => {
        const apiURL = '/api/events';

        //set state to new array of events
        axios
            .get(apiURL)
            .then((resp) => {
                let sortedDates = resp.data.filter((event) => {
                    return !isNaN(Date.parse(event.date));
                });

                sortedDates = sortedDates.map((event) => {
                    let updatedEventDateObject = { ...event };
                    updatedEventDateObject.sortDate = new Date(event.date);
                    return updatedEventDateObject;
                });

                sortedDates.sort((a, b) => {
                    return b.sortDate - a.sortDate;
                });

                // get dates greater than today
                let currentDate = new Date();
                let upcomingDate = {};
                sortedDates.forEach((date) => {
                    if (date.sortDate >= currentDate) {
                        upcomingDate = { ...date };
                    }
                });

                setUpcomingEvent(upcomingDate);
                setEvents(sortedDates);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    //render current state of events
    const eventList = events.map((result) => {
        //if the event has a registration, return registration link
        if (result.registration) {
            return (
                <EventItem
                    key={result._id}
                    eventTitle={result.event}
                    date={result.date}
                    time={result.time}
                    speakers={result.speakers}
                    location={result.Location}
                    registration={result.registration}
                    description={result.description}
                />
            );
        }

        //no registration link
        else {
            return (
                <EventItem
                    key={result._id}
                    eventTitle={result.event}
                    date={result.date}
                    time={result.time}
                    speakers={result.speakers}
                    location={result.Location}
                    description={result.description}
                />
            );
        }
    });

    return (
        <div className="container-fluid" id="event_container">
            <div className="align_center">
                <div className="container-fluid" id="event_header">
                    <h2 className="section_header"> Events </h2>
                    <EventCarousel />
                    <div id="conferenceLinks">
                        <div className="conference">
                            <a
                                href="https://www.apacongress.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <h4>American Payroll Congress Schedule</h4>
                            </a>
                        </div>

                        <div className="conference">
                            <a
                                href="https://californiapayroll.org/meetinginfo.php"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <h4>California Payroll Conference Schedule</h4>
                            </a>
                        </div>
                    </div>
                </div>

                {Object.keys(upcomingEvent).length > 0 ? (
                    <div id="upcomingEvent">
                        <h3> Upcoming Event </h3>
                        <EventItem
                            key={upcomingEvent._id}
                            eventTitle={upcomingEvent.event}
                            date={upcomingEvent.date}
                            time={upcomingEvent.time}
                            speakers={upcomingEvent.speakers}
                            location={upcomingEvent.Location}
                            registration={upcomingEvent.registration}
                            description={upcomingEvent.description}
                        />
                    </div>
                ) : (
                    <Fragment />
                )}

                <div id="eventPosts">
                    <h3> Events </h3>
                    {eventList}
                </div>
            </div>
        </div>
    );
};

export default Events;
