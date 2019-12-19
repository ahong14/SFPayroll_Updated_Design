import React, {Component} from 'react';
import '../ContactUs/ContactUs.css';
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import HearFrom from '../ContactUs/HearFrom/HearFrom';

class ContactUs extends Component{
    render(){
        return(
            <div className="container-fluid" id="contact_us_container">
                <h3 class="section_header"> Contact Us </h3>

                <div className="align_center" id="contact_info">
                    <p> General Information <a href="emailto:sfbac.apa@gmail.com" rel="noopener noreferrer" target="_blank"> sfbac.apa@gmail.com </a> </p>
                    <p> Reservation: <a href="mailto:RSVP@sfpayroll.org" rel="noopener noreferrer" target="_blank"> RSVP@sfpayroll.org </a> </p>
                    <p> Job Posting: <a href="mailto:sfbac.apa@gmail.com" rel="noopener noreferrer" target="_blank"> sfbac.apa@gmail.com </a> </p>
                    <p> Webmaster <a href="mailto:alexhong681@gmail.com" rel="noopener noreferrer" target="_blank"> alexhong681@gmail.com </a> </p>
                </div>

                <div class="follow_us_container">
                  <a href="https://www.linkedin.com/in/sfbac-apa-74bb7421/" rel="noopener noreferrer" target="_blank">
                    <h3 class="font-weight-bold">  LinkedIn </h3>
                  </a>
                  <FaLinkedin className="follow_image"/> 
                </div>

                <div class="follow_us_container">
                  <a href="https://twitter.com/SFBAC_APA" rel="noopener noreferrer" target="_blank">
                    <h3 class="font-weight-bold"> Twitter </h3>
                  </a>
                  <FaTwitter className="follow_image"/> 
                </div>

                <div class="follow_us_container">
                  <a href="https://www.facebook.com/payrollpeeps/" rel="noopener noreferrer" target="_blank">
                    <h3 class="font-weight-bold">  Facebook </h3>
                  </a>
                  <FaFacebook className="follow_image"/> 
                </div>

                <HearFrom/>
            </div>
        );
    }
}

export default ContactUs;
