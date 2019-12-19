import React, {Component} from 'react';
import '../../Careers/HelpSites/HelpSites.css';

class HelpSites extends Component{
    render(){
        return(
            <div className="container-fluid" id="sites_container">
                <div id="career_help_sites">
                    <h3 className="text-center underline_header"> Career Help Sites </h3>
                    <ul className="careerLinks">
                        <a href="https://www.americanpayroll.org/membership/career-advancement" rel="noopener noreferrer" target="_blank" > <li> APA- Career Center  </li> </a>
                        <a href="" target="_blank" > <li> APA- Job Board </li> </a>
                        <a href="https://gecd.mit.edu/" rel="noopener noreferrer" target="_blank" > <li> Resume Tips  </li> </a>
                        <a href="" target="_blank" > <li> Interview Tips  </li> </a>
                        <a href="https://www.livecareer.com/career/advice/jobs/career-assessment" rel="noopener noreferrer" target="_blank" > <li> Employment Assessments </li> </a>
                    </ul>
                </div>

                <div id="job_search_sites">
                    <h3 className="text-center underline_header"> Other Job Search Sites </h3>
                    <ul className="careerLinks">
                        <a href="https://sanfrancisco.jobing.com/" rel="noopener noreferrer" target="_blank"> <li> Jobing.com </li></a>
                        <a href="https://hiring.monster.com/?wt.mc_=kr_www_intercept" rel="noopener noreferrer" target="_blank"> <li> Monster.com</li></a>
                        <a href="https://www.careerbuilder.com/?cbrecursioncn=&cbsi=dcb8ee8ba45473bb15baa8d13e881f6-229153885-VE-4" rel="noopener noreferrer" target="_blank"> <li> Career Builder</li></a>
                        <a href="http://www.international-job-search.com/" rel="noopener noreferrer" target="_blank"> <li> International Job Search</li></a>
                        <a href="http://www.juju.com/about/" rel="noopener noreferrer" target="_blank"> <li> JuJu.com </li></a>
                    </ul>
                </div>

                <div id="job_search_sites">
                    <h3 className="text-center underline_header"> Other Career Help Sites </h3>  
                    <ul className="careerLinks">
                        <a href="https://www.careeronestop.org/" rel="noopener noreferrer" target="_blank"> <li> Career One Stop </li></a>
                        <a href="https://www.mynextmove.org/" rel="noopener noreferrer" target="_blank"> <li> My Next Move </li></a>
                        <a href="http://discpersonalitytesting.com" rel="noopener noreferrer" target="_blank"> <li> DISC Assesment </li></a>
                        <a href="http://www.grocery-store-applications.com/" rel="noopener noreferrer" target="_blank"> <li> Grocery-store-applications.com </li></a>
                        <a href="https://www.learnhowtobecome.org/" rel="noopener noreferrer" target="_blank"> <li> Learn How To Become </li></a>
                    </ul>        
                </div>
            </div>           
        );
    }
}

export default HelpSites;
