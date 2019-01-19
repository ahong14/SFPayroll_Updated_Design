//react component for careers section


class OpenPositions extends React.Component{
    render(){
        return(
            <div className = "learning_resources underline" id = "open_positions">
                <h3> Open Positions </h3>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll__Benefits___HRIS_Manager_0808.pdf" target="_blank"> Payroll, Benefits & HRIS Manager </a> San Rafael, EAH Housing, 8/08/2018 </li>
                    <li> <a href = "https://segment.com/jobs/1280505-Global-Payroll-Lead" target = "_blank"> Senior Global Payroll </a> San Francisco, Meltwater, 07/19/2018     </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/DeWinter_Associates_-_Global_Payroll_Lead_-_San_Francisco.pdf" target = "_blank"> Global Payroll Lead </a> San Francisco, Dewinter Associates, 06/17/2018 </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll_Specialist_061518.pdf" target = "_blank"> Payroll Specialist</a> Alameda, Penumbra, 06/15/2018  </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/AppDirect_-_Global_Payroll_Manager_052318.pdf" target = "_blank"> Global Payroll Manager</a> San Francisco, AppDirect, 05/23/2018 </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll_Administrator_052218.pdf" target = "_blank"> Payroll Administrator</a> San Francisco -- The Arc San Francisco -- 05/22/2018   </li>
                    <li> <a href = "https://themomproject.com/projects/payroll-executive-4598d0d85a" target = "_blank"> Payroll Executive</a> San Francisco -- the Mom Project -- 05/09/2018   </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll_Manager_in_Alamo.pdf" target = "_blank"> Payroll Manager</a> Alamo -- Robert Half International -- 05/09/2018   </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll_Manager_050918.pdf" target = "_blank"> Payroll Manager</a> San Francisco -- CFStaffing -- 05/09/2018   </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Payroll_Supervisor_050718.pdf" target = "_blank"> Payroll Supervisor</a> Petaluma -- Amy's Kitchen -- 05/07/2018   </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/Assistant_Payroll_Manager_021918.pdf" target = "_blank"> Assistant Payroll Manager</a> San Francisco -- California College of the Arts -- 05/03/2018  </li>
                    <li> <a href = "http://www.sfpayroll.org/JobPosting/2018/UCSF_Health_-_HBS_Payroll_Supervisor.pdf" target = "_blank"> HBS Payroll Supervisor (15310)</a> San Francisco -- UCSF Health -- 04/02/2018  </li>
            </div> 
        )
    }
}

class CareerHelpSites extends React.Component{
    render(){
        return(
            <div id = "career_help_sites">
                <h3 className = "text-center underline_header"> Career Help Sites </h3>
                <ul>
                    <a href = "https://www.americanpayroll.org/membership/career-advancement" target = "_blank" > <li> APA- Career Center  </li> </a>
                    <a href = "" target = "_blank" > <li> APA- Job Board </li> </a>
                    <a href = "https://gecd.mit.edu/" target = "_blank" > <li> Resume Tips  </li> </a>
                    <a href = "" target = "_blank" > <li> Interview Tips  </li> </a>
                    <a href = "https://www.livecareer.com/career/advice/jobs/career-assessment" target = "_blank" > <li> Employment Assessments </li> </a>
                </ul>
            </div>
        )
    }
}

class JobSearchSites extends React.Component{
    render(){
        return(
            <div id = "job_search_sites">
                <h3 className = "text-center underline_header"> Other Job Search Sites </h3>
                <ul>
                    <a href = "https://sanfrancisco.jobing.com/" target = "_blank"> <li> Jobing.com </li></a>
                    <a href = "https://hiring.monster.com/?wt.mc_n=skr_www_intercept" target = "_blank"> <li> Monster.com</li></a>
                    <a href = "https://www.careerbuilder.com/?cbrecursioncnt=1&cbsid=9dcb8ee8ba45473bb15baa8d13e881f6-229153885-VE-4" target = "_blank"> <li> Career Builder</li></a>
                    <a href = "http://www.international-job-search.com/" target = "_blank"> <li> International Job Search</li></a>
                    <a href = "http://www.juju.com/about/" target = "_blank"> <li> JuJu.com </li></a>
                </ul>

            </div>
        )
    }
}

class OtherCareerSites extends React.Component{
    render(){
        return(
            <div id = "job_search_sites">
                <h3 className = "text-center underline_header"> Other Career Help Sites </h3>  
                <ul>
                    <a href = "https://www.careeronestop.org/" target = "_blank"> <li> Career One Stop </li></a>
                    <a href = "https://www.mynextmove.org/" target = "_blank"> <li> My Next Move </li></a>
                    <a href = "http://discpersonalitytesting.com" target = "_blank"> <li> DISC Assesment </li></a>
                    <a href = "http://www.grocery-store-applications.com/" target = "_blank"> <li> Grocery-store-applications.com </li></a>
                    <a href = "https://www.learnhowtobecome.org/" target = "_blank"> <li> Learn How To Become </li></a>
                </ul>        
            </div>
        )
    }
}

class FormGroup extends React.Component{
    render(){
        return(
            <div className="form-group" id = "job_form_input">
                <form className = "gform" method = "POST"  
                    action = "https://script.google.com/macros/s/AKfycbwIDCwkXJ8tTWdub-SUQKxpS4LccZwcp9iSi9DR/exec" >
                    <label for="title">Title of Position:</label>
                    <input type="text" class="form-control" id="position"/>

                    <label for="city">City: </label>
                    <input type="text" class="form-control" id="city"/>


                    <label for="state">State: </label>
                    <input type="text" className="form-control" id="state"/>

                    <label for="position">Select Position:</label>
                    <select className="form-control" id="payroll_position">
                        <option>Payroll Position- Full Time </option>
                        <option>Payroll Position- Part Time</option>
                        <option>Payroll Position- Temp</option>
                        <option>Non Payroll Position - Full Time </option>
                        <option>Non Payroll Position - Part Time </option>
                        <option>Non Payroll Position - Temp </option>
                    </select>

                    <label for="description">Job Description:</label>
                    <textarea className="form-control" rows="5" id="job_description"></textarea>
                </form>
            </div>
        )
    }
}

class SubmitButton extends React.Component{
    render(){
        return(
            <div id = "submit_container">
                <button type="button" class="btn btn-outlined btn-primary" id = "submit_button" onClick = {sendJobPost}>  Submit </button>
            </div>
        )
    }
}


const careersContainer = (
    <div>
        <div id = "career_header">
            <h2 className = "section_header text-center"> Careers </h2>
            <img src = "photos/gpmi_background.jpg" id = "career_image"/>
        </div>

        <br/>

        <OpenPositions/>

        <br/>

        <div id = "help_sites">
            <CareerHelpSites/>
            <JobSearchSites/>
            <OtherCareerSites/>
        </div>

        <div className = "text-center" id = "accountants_international">
            <blockquote> Accountants International, provides great service to all Finance professionals from Controllers to Payroll Clerks. They even have sister branch that can assist with Human Resources and HRIS Management positions. Visit them at <a href = "" target = "_blank"> http://www.accountantsinc.com  </a>to learn about the Payroll positions available near you! </blockquote>
        </div>

        <div className = "text-center" id = "job_form">
            <h3> For job posting, please fill out the following form: </h3>
        </div>

        <FormGroup/>

        <br/>

        <SubmitButton/>
    </div>
)

ReactDOM.render(
    careersContainer,
    document.getElementById('careers_container')
)

