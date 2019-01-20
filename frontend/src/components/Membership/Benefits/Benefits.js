import React, {Component} from 'react';
import '../../Membership/Benefits/Benefits.css';

class Benefits extends Component{
    render(){
        return(
            <div id = "benefits">
                <h3> <u> Membership Benefits </u> </h3>
                <ul id = "benefitsList">
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
        );
    }
}

export default Benefits;
