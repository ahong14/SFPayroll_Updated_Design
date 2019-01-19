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
                    <h3 className = "underline"> Paycards/EY Topic </h3>
                    <p> <strong>Date:</strong> November 15th, 2018   </p>
                    <p> <strong>Speakers:</strong> Jennifer Wall from Rapid Paycards, Stephanie Pfister from EY Employment Tax Services </p>    
                    <p> <strong>Time:</strong>  2:00 - 4:00 pm</p>
                    <p> <strong>Location:</strong> Salesforce East, 350 Mission Street, San Francisco </p>
                    <p> <strong>Registration:</strong> </p>
                </div>

                 <div className = "event_info">
                    <h3 className = "underline"> Holiday Dinner & Year End Legislation Updates </h3>
                    <p> <strong>Date:</strong> December 7th, 2018   </p>
                    <p> <strong>Speakers:</strong> Bill Schmalle CPP, Brookelyn Sproviero  </p>    
                    <p> <strong>Time:</strong>  6:00 - 9:00 pm</p>
                    <p> <strong>Location:</strong> Salesforce East, 350 Mission Street, San Francisco </p>
                    <p> <strong>Registration:</strong> </p>
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
