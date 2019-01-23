import React, {Component} from 'react';
import '../ContactUs/ContactUs.css';
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import HearFrom from '../ContactUs/HearFrom/HearFrom';

class ContactUs extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "contact_us_container">
                <h3 class = "section_header"> Contact Us </h3>

                <div className = "align_center" id = "contact_info">
                    <p> General Information/Government Update: <a href="mailto:info@sfpayroll.org" target = "_blank"> info@sfpayroll.org </a> </p>
                    <p> Reservation: <a href = "mailto:RSVP@sfpayroll.org" target = "_blank"> RSVP@sfpayroll.org </a> </p>
                    <p> Membership: <a href = "mailto:member@sfpayroll.org" target = "_blank" > member@sfpayroll.org </a> </p>
                    <p> Study Group: <a href = "mailto:studygroup@sfpayroll.org" target = "_blank"> studygroup@sfpayroll.org </a> </p>
                    <p> Job Posting/Webmaster: <a href = "mailto:admin@sfpayroll.org" target = "_blank"> admin@sfpayroll.org </a> </p>
                </div>

                <div class = "follow_us_container">
                    <h3 class = "font-weight-bold">  LinkedIn </h3>
                    <a href = "https://www.linkedin.com/in/sfbac-apa-74bb7421/" target = "_blank"> <FaLinkedin className = "follow_image"/> </a>
                </div>

                <div class = "follow_us_container">
                    <h3 class = "font-weight-bold"> Twitter </h3>
                    <a href = "https://twitter.com/SFBAC_APA" target = "_blank"> <FaTwitter className = "follow_image"/> </a>
                </div>

                <div class = "follow_us_container">
                    <h3 class = "font-weight-bold">  Facebook </h3>
                    <a href = "https://www.facebook.com/payrollpeeps/" target = "_blank"> <FaFacebook className = "follow_image"/> </a>
                </div>

                <HearFrom/>
            </div>
        );
    }
}

export default ContactUs;
