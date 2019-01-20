import React, {Component} from 'react';
import '../Membership/Membership.css';
import Corporate from '../Membership/Corporate/Corporate';
import Benefits from '../Membership/Benefits/Benefits';
import StudyGroup from '../Membership/StudyGroup/StudyGroup';
import JoinButton from '../JoinButton/JoinButton';
import membershipPhoto from '../../photos/membership_photo.jpg';


class Membership extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "membership_container">
                <div className = "text-center" id = "membership_fess">
                    <h2 className = "section_header text-center"> Membership </h2>
                    <img src = {membershipPhoto} id = "membership_photo"/>
                    <h3> Individual Membership - $60 </h3>
                    <h3> <u> Corporate Membership </u> </h3>
                    <Corporate/>
                    <Benefits/>
                    <StudyGroup/>
                    <JoinButton/>  
                </div>
            </div>
        );
    }
}

export default Membership;
