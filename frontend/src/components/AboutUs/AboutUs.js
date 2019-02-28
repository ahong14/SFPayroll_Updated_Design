import React, {Component} from 'react';
import '../AboutUs/AboutUs.css';
import aboutUs from '../../photos/eventsphoto3.png';
import AboutSections from '../AboutUs/AboutSections/AboutSections';
import Members from '../AboutUs/Members/Members';
import bylaws from '../../photos/bylaws.jpg';

//About Us Section
class AboutUs extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "about_us_header">
                <h2 className = "section_header font-italic"> About Us </h2>
                <img className = "align_center" id = "about_us_1" src = {aboutUs} alt = "chapter photo" />
                <h2 className = "text-center font-italic " > San Francisco Bay Area Chapter </h2>
                <div className = "blockquote_caption align_center">
                    <blockquote className = "font-weight-bold " id = "about_us_part1_blockquote">
                        The SFBAC has been providing educational and networking opportunities for the local Payroll 
                        Professional since 1983. Every day, we strive to support the Payroll Professional with member benefits 
                        including educational workshops, meetings, payroll legislative update, and scholarship programs. 
                        We genuinely care about our members and go above and beyond to provide the best support, 
                        as well as to support the goals of the National American Payroll Organization. 
                        The San Francisco Bay Area Chapter of the APA supports CurrenC SF in partnership with the City and 
                        County of San Francisco’s Office of Financial Empowerment. For more information go to: 
                        <a href = "http://currencsf.org ">http://currencsf.org </a>

                        Payroll is a demanding profession, and deserves to be recognized as such. Payroll Professionals are called upon to constantly update their education and skills, to produce work that conforms to the highest technical standards, and to maintain the highest level of professional ethics. 
                        SFBAC holds regular meetings featuring speakers on topics ranging from taxation and regulation to personal and professional development. Continuing Education Units (CEUs) are available for all meetings.In 2010, the Chapter provided a scholarship to attend the Annual APA Congress. 
                    </blockquote>
                </div>

                <div className = "about_section align_center" id =  "bylaws_section">
                    <h2 className = "text-center "> San Francisco Bay Area Chapter By Laws </h2>                    
                    <img className = "section_image" id = "bylaws_logo" src = {bylaws} alt = "by laws logo"/>   
                    <div>
                        <p className = "text-center font-italic" > Click here for details: <a href = "http://www.sfpayroll.org/boardfiles/2014_Bylaws_Constitution.pdf" target = "_blank"> By Laws </a> </p>
                    </div>
                </div>
                <AboutSections/>
                <Members/>
            </div>
        );
    }
}

export default AboutUs;
