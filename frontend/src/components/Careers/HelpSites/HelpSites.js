import React, {Component} from 'react';
import '../../Careers/HelpSites/HelpSites.css';


class HelpSites extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "sites_container">
                <div id = "career_help_sites">
                    <h3 className = "text-center underline_header"> Career Help Sites </h3>
                    <ul className = "careerLinks">
                        <a href = "https://www.americanpayroll.org/membership/career-advancement" target = "_blank" > <li> APA- Career Center  </li> </a>
                        <a href = "" target = "_blank" > <li> APA- Job Board </li> </a>
                        <a href = "https://gecd.mit.edu/" target = "_blank" > <li> Resume Tips  </li> </a>
                        <a href = "" target = "_blank" > <li> Interview Tips  </li> </a>
                        <a href = "https://www.livecareer.com/career/advice/jobs/career-assessment" target = "_blank" > <li> Employment Assessments </li> </a>
                    </ul>
                </div>

                <div id = "job_search_sites">
                    <h3 className = "text-center underline_header"> Other Job Search Sites </h3>
                    <ul className = "careerLinks">
                        <a href = "https://sanfrancisco.jobing.com/" target = "_blank"> <li> Jobing.com </li></a>
                        <a href = "https://hiring.monster.com/?wt.mc_n=skr_www_intercept" target = "_blank"> <li> Monster.com</li></a>
                        <a href = "https://www.careerbuilder.com/?cbrecursioncnt=1&cbsid=9dcb8ee8ba45473bb15baa8d13e881f6-229153885-VE-4" target = "_blank"> <li> Career Builder</li></a>
                        <a href = "http://www.international-job-search.com/" target = "_blank"> <li> International Job Search</li></a>
                        <a href = "http://www.juju.com/about/" target = "_blank"> <li> JuJu.com </li></a>
                    </ul>
                </div>

                <div id = "job_search_sites">
                    <h3 className = "text-center underline_header"> Other Career Help Sites </h3>  
                    <ul className = "careerLinks">
                        <a href = "https://www.careeronestop.org/" target = "_blank"> <li> Career One Stop </li></a>
                        <a href = "https://www.mynextmove.org/" target = "_blank"> <li> My Next Move </li></a>
                        <a href = "http://discpersonalitytesting.com" target = "_blank"> <li> DISC Assesment </li></a>
                        <a href = "http://www.grocery-store-applications.com/" target = "_blank"> <li> Grocery-store-applications.com </li></a>
                        <a href = "https://www.learnhowtobecome.org/" target = "_blank"> <li> Learn How To Become </li></a>
                    </ul>        
                </div>

            </div>           
        );
    }
}

export default HelpSites;
