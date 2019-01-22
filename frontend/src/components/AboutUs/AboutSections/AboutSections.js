import React, {Component} from 'react';
import '../../AboutUs/AboutSections/AboutSections.css';
import apa from '../../../photos/american_payroll_association_logo.png';
import gpmi from '../../../photos/GPMILogo.png';
import payrollLogo from '../../../photos/sf_payroll_logo.gif';

class AboutSections extends Component{
    render(){
        return(
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top section_image" src= {apa} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 class="card-title text-center">American Payroll Association </h5>
                        <blockquote className = "text-center font-italic">  
                            Established in 1982, the American Payroll Association (APA), headquartered in San Antonio , TX , is the nation's leader in payroll education, training, and publications. 
                            The nonprofit association conducts more than 300 payroll education conferences and seminars across the country each year and publishes a complete library of resource texts and newsletters. 
                            Every year, nearly 18,000 professionals attend APA training sessions. Representing over 22,000 members, APA is the industry's highly respected, collective voice in Washington DC.
                            If you want to become a member of APA National, check out www.americanpayroll.org/members to learn more and join today, or fill out the Membership Application."
                        </blockquote>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top section_image" src= {gpmi} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title text-center"> GPMI </h5>
                        <blockquote className = "text-center font-italic">  
                            "The Global Payroll Management Institute (GPMI) is the world’s leading community of payroll leaders, managers, practitioners, researchers, and technology experts. 
                            GPMI's mission is to create opportunities and forge a community by providing the education, skills, and resources necessary for global payroll professionals to become successful leaders and strategic partners within their organizations. 
                            Subscribe To GPMI Exclusive education, publications, and whitepapers dedicated to global payroll strategies, knowledge, research, employment, and training."
                        </blockquote>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top section_image" src= {payrollLogo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title text-center">San Francisco Bay Area Chapter History </h5>
                        <blockquote className = "text-center font-italic">  
                            "Thank you for stopping by our site. The San Francisco Bay Area Chapter (SFBAC) of the American Payroll Association was formed in 1983 to provide educational and networking opportunities for local Payroll Professionals, as well as to support the goals of the National Organization. 
                            Payroll is a demanding profession, and deserves to be recognized as such.Payroll Professionals are called upon to constantly update their education and skills, to produce work that conforms to the highest technical standards, and to maintain the highest level of professional ethics. 
                            SFBAC holds regular meetings featuring speakers on topics ranging from taxation and regulation to personal and professional development. Continuing Education Units (CEUs) are available for all meetings.In 2010, the Chapter provided a scholarship to attend the Annual APA Congress. 
                            We also awarded 3 scholarships to the California Payroll Conference. We intend to continue this scholarship program, so keep an eye out for announcements!        
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}





export default AboutSections;
