import React, {Component} from 'react';
import '../Careers/Careers.css';
import gpmi from '../../photos/gpmi_background.jpg';

import OpenPositions from '../Careers/OpenPositions/OpenPositions';
import HelpSites from '../Careers/HelpSites/HelpSites';
import JobForm from '../Careers/JobForm/JobForm';

class Careers extends Component{
    render(){
        return(
            <div className = "container-fluid careers_container">
                <div id = "career_header">
                    <h2 className = "section_header text-center"> Careers </h2>
                    <img src = {gpmi} id = "career_image"/>
                </div>
                <OpenPositions/>
                <HelpSites/>
                <div className = "text-center" id = "job_form">
                    <h3> For job posting, please email sfbac.apa@gmail.com or fill out the following form: </h3>
                </div>
                <JobForm/>
            </div>
        );
    }
}

export default Careers;
