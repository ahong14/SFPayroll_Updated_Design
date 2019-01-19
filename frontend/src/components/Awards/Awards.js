import React, {Component} from 'react';
import '../Awards/Awards.css';
import Award1  from '../../photos/award1.jpg';
import Award2  from '../../photos/award2.jpg';
import Award4  from '../../photos/award4.jpg';
import Award5  from '../../photos/award5.jpg';
import Award6  from '../../photos/award6.jpg';
import Award7  from '../../photos/award7.jpg';
import Award8  from '../../photos/award8.jpg';

class Awards extends Component{
    render(){
        return(
            <div id = "awards">
                <img className = "award_image" alt = "2018 first chapter pictorial " src = {Award1}/> 
                <img className = "award_image" alt = "first npw photo contest" src = {Award2}/> 
                <img className = "award_image" alt = "gavel award innovator" src = {Award4}/> 
                <img className = "award_image" alt = "2018 participant regional/statewide meeting" src = {Award5}/> 
                <img className = "award_image" alt = "2017 participant" src = {Award6}/> 
                <img className = "award_image" alt = "2017 chapter pictorial particpant" src = {Award7}/> 
                <img className = "award_image" alt = "honorable mention chapter of the year" src = {Award8}/> 
            </div>
        );
    }
}

export default Awards;
