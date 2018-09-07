//react component for event section

//page header
class EventHeader extends React.Component{
    render(){
        return(
            <div id = "event_header">
                <h2 className = "section_header"> Events </h2>
                <img id = "events_image" src = "photos/events_photo.jpg" alt = "event image"/>
            </div>
        )
    }
}

//time/date portion
class TimeDate extends React.Component{
    //set date for events section
    render(){
        return(
            <div id = "time_date">
            </div>
        )    
    }
}

//div storing multiple events
class Events extends React.Component{
    render(){
        return(
            <div id = "events">
                <div className = "event_info">
                    <h3 className = "underline"> NPW Luncheon -  Wage & Hour Law Update </h3>
                    <p> <strong>Date:</strong> September 7th, 2018   </p>
                    <p> <strong>Speakers:</strong>  Jeanine DeBacker from Partner at McPharlin Sprinkles & Thomas LLP </p>    
                    <p> <strong>Time:</strong>  11:30 am - 3:00 pm</p>
                    <p> <strong>Location:</strong> Salesforce East, 350 Mission Street, San Francisco </p>
                    <p> <strong>Registration:</strong> <span>View the <a href="http://www.cvent.com/d/1gq63b/1Q" target = "_blank">event invitation</a>.</span>  </p>
                </div>

                <div className = "event_info">
                    <h3 className = "underline"> Summer 2018 Study Group</h3>
                    <p> <strong>Dates:</strong> July 11 - September 12, Every Wednesday Night</p>
                    <p> <strong>Time:</strong> 6:00 pm - 8:00 pm </p>
                    <p> <strong>Organizer:</strong> Hannah Huneidi - Silicon Valley Chapter </p>
                    <p> <strong>Supporter:</strong> Iggy Svoboda -- San Francisco Bay Area Chapter</p>
                    <p> <strong>Location:</strong> Adobe, 345 Park Ave, San Jose, near Caltrain Station </p>
                    <p> <strong>Registration:</strong> <a href = "https://svapa.org/meetinginfo.php?id=55" target = "_blank"> Link </a> </p>
                </div>
            </div>
        )
    }
}

//container holding components
const eventContainer = (
    <div className = "align_center">
        <EventHeader/>
        <TimeDate/>
        <Events/>
    </div>
);

//render 
ReactDOM.render(
    eventContainer,
    document.getElementById('events_container')
)