//react component for membership section

class MembershipContent extends React.Component{
    render(){
        return(
            <div className = "text-center" id = "membership_fees">
                <h2 class = "section_header text-center"> Membership </h2>
                <img src = "photos/membership_photo.jpg" id = "membership_photo"/>
                <h3> Individual Membership - $60 </h3>
        
                <br/> 
                
                <h3> <u> Corporate Membership </u> </h3>

                <br/> 

                <div className = "corporate_type" >
                    <div id = "silver"> </div>
                    <h3> Silver (5 Members) - $225 </h3>
                </div>

                <div className = "corporate_type">
                    <div id = "gold"> </div>
                    <h3> Gold (20 Members) - $900 </h3>
                </div>

                <div className = "corporate_type">
                    <div id = "platinum"> </div>
                    <h3> Platinum (20+ members) - $1500 </h3>
                </div>
            
                <br/>

                <div id = "benefits">
                    <h3> <u> Membership Benefits </u> </h3>
                    <ul>
                        <li> Educational workshops and meetings </li>
                        <li> Informative industry speakers</li>
                        <li> Networking and community service opportunities </li>
                        <li> Certified Payroll Professional program study groups</li>
                        <li> Educational scholarship programs </li>
                        <li> Monthly bulletin including government updates</li>
                        <li> Access to website and job board</li>
                        <li> RCH's and credit hours towards recertification </li>
                    </ul>
                </div>

                <div className = "about_section" id = "study_group">
                    <h2 className = "text-center "> Study Group </h2>
                    
                    <img className = "section_image " id = "study_group_image" src = "photos/study_group.jpg" alt = "study group logo"/>

                    <div className = "toggle_info" id = "study_more_info">
                        <p className = "text-center font-italic" onClick = {showStudy}>  More Info </p>
                    </div>
        
                </div> 

                <h3> Click here to join! </h3>
                <a className = "text-center" id="join_link" href = "https://www.cvent.com/events/ContactPortal/Login.aspx?cwstub=e9b2ed48-33d2-4d6c-bd0e-f6459cd30d89" target="_blank"> 
                    <button type="button" className ="btn btn-outlined btn-primary" id = "join_button">  Join </button>  
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <MembershipContent/>,
    document.getElementById('membership_container')
);