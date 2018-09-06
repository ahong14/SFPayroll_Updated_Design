class AboutHeader extends React.Component{
    render(){
        return(
            <div id = "about_us_header">
                <h2 className = "section_header font-italic"> About Us </h2>
            </div>
        )
    }
}

class AboutUsFirst extends React.Component{
    render(){
        return(
            <div className = "flex_column">
                <img className = "align_center" id = "about_us_1" src = "photos/about_us_3.JPG" alt = "chapter photo" />
                <br/>
                <h2 className = "text-center font-italic " > San Francisco Bay Area Chapter </h2>
                <div className = "blockquote_caption align_center">
                    <blockquote class = "font-weight-bold " id = "about_us_part1_blockquote">
                        The SFBAC has been providing educational and networking opportunities for the local Payroll 
                        Professional since 1983. Every day, we strive to support the Payroll Professional with member benefits 
                        including educational workshops, meetings, payroll legislative update, and scholarship programs. 
                        We genuinely care about our members and go above and beyond to provide the best support, 
                        as well as to support the goals of the National American Payroll Organization. 
                        The San Francisco Bay Area Chapter of the APA supports CurrenC SF in partnership with the City and 
                        County of San Francisco’s Office of Financial Empowerment. For more information go to: 
                        <a href = "http://currencsf.org ">http://currencsf.org </a>
                    </blockquote>
                </div>
            </div>
        )
    }
}

class APASection extends React.Component{
    render(){
        return(
            <div className = "about_section align_center" id = "apa_section">
                <h2 className = "text-center "> American Payroll Association </h2>
                
                <img className = "section_image " id = "apa_logo" src = "photos/american_payroll_association_logo.png" alt = "apa logo"/>

                <div className = "toggle_info" id = "apa_more_info">
                    <p className = "text-center font-italic" onClick = {showAPA}>  <i className="fa fa-caret-down"></i> More Info </p>
                </div>
            </div>
        )
    }
}


class GPMISection extends React.Component{
    render(){
        return(
            <div className = "about_section align_center" id = "gpmi_section">
                <h2 className = "text-center"> Global Payroll Management Institute </h2>
                
                <img className = "section_image" id = "gpmi_logo" src = "photos/GPMILogo.png" alt = "gpmi logo"/>

                <div className = "toggle_info" id = "gpmi_more_info">
                    <p className = "text-center font-italic" onClick = {showGPMI}> <i className="fa fa-caret-down"></i> More Info </p>
                </div>
            </div> 
        )
    }
}

class HistorySection extends React.Component{
    render(){
        return(
            <div className = "about_section align_center" id =  "history_section">
                <h2 className = "text-center "> San Francisco Bay Area Chapter History </h2>
                        
                <img className = "section_image" id = "history_logo" src = "photos/sf_payroll_logo.gif" alt = "sf logo"/>
        
                <div className = "toggle_info" id = "history_more_info">
                    <p className = "text-center font-italic" onClick = {showHistory}> <i className="fa fa-caret-down"></i> More Info </p>
                </div>
             </div> 
        )
    }
}

class ByLaws extends React.Component{
    render(){
        return(
            <div className = "about_section align_center" id =  "bylaws_section">
            
                <h2 className = "text-center "> San Francisco Bay Area Chapter By Laws </h2>
                                
                <img className = "section_image" id = "bylaws_logo" src = "photos/bylaws.jpg" alt = "by laws logo"/>
                
                <div>
                    <p className = "text-center font-italic" > Click here for details: <a href = "http://www.sfpayroll.org/boardfiles/2014_Bylaws_Constitution.pdf" target = "_blank"> By Laws </a> </p>
                </div>
                
            </div> 
        )
    }
}

class AboutSections extends React.Component{
    render(){
        return(
            <div>
                <APASection/>
                <GPMISection/>
                <HistorySection/>
                <ByLaws/>
            </div>
        )
    }
}

class President extends React.Component{
    render(){
        return(
            <div className = "officer_info text-center" id = "president">
                <img className = "officer_image" src = "photos/owhen_image.jpg"/>
                <p> Owhen Astorga </p>
                <p> President </p>
                <p> Salesforce.com </p>
                <p> Phone: 415-536-4524 </p>
                <p> Email: oastorga@salesforce.com </p>
             </div>
        )
    }
}

class OfficerMember extends React.Component{
    render(){
        return(
            <div className = "officer_info text-center">
                <img className = "officer_image" src = {this.props.imagesrc}/>
                <p> {this.props.name} </p>
                <p> {this.props.position} </p>
                <p> {this.props.company} </p>
                <p> Phone: {this.props.phone} </p>
                <p> Email: {this.props.email} </p>
             </div>
        )
    }
}

class Officers extends React.Component{
    render(){
        return(
            <div id = "officers_container">
                <h2 className = "text-center"> Officers </h2>
                <President/>
                <div id = "officers_content">
                    <OfficerMember imagesrc='photos/erin_image.jpg' name = 'Erin Svobada, CPP' position = 'First Vice President' company = 'Clif Bar' 
                                    phone = '510-597-3923' email = 'isvoboda@clifbar.com'/> 
                    <OfficerMember imagesrc='photos/darcy_image.jpg' name = 'Darcy French, CPP' position = 'Second Vice President' company = 'Gensler' 
                                    phone = '' email = 'darcy_frecnh@gensler.com'/>
                    <OfficerMember imagesrc='photos/rowerna_image.jpg' name = 'Rowerna Lau, CPP' position = 'Secretary' company = 'McKesson' 
                                    phone = '415-983-8905' email = 'rowerna.lau@mckesson.com'/>
                    <OfficerMember imagesrc='photos/becky_image.jpg' name = 'Becky Ng, CPP' position = 'Treasuer' company = '' 
                                    phone = '415-476-2327' email = 'becky.ng@ucsf.edu'/>
                    <OfficerMember imagesrc='photos/bill_image.JPG' name = 'Bill Schmalle, CPP' position = 'Government Liaison Officer' company = 'McKesson' 
                                    phone = '510-597-3923' email = 'William.schmalle@mckesson.com'/>
                    <OfficerMember imagesrc='photos/christine_image.jpg' name = 'Christine Corral, CPP' position = 'Membership Chairperson' company = 'Bio-Rad Laboratories' 
                                    phone = '' email = 'Chris_Corral@bio-rad.com'/>
                    <OfficerMember imagesrc='photos/lois_image.jpg' name = 'Lois Fried, CPP' position = 'Historian' company = 'Consultant' 
                                    phone = '' email = 'Loisfried35@gmail.com'/>
                    <OfficerMember imagesrc='photos/kim_image.jpg' name = 'Kim Norton, CPP' position = 'Bulletin Chairperson' company = 'Bio-Rad Laboratories' 
                                    phone = '510-741-6273' email = 'kimberly_norton@bio-rad.com'/>
                    <OfficerMember imagesrc='photos/angela_image.jpg' name = 'Angela Martin, CPP' position = 'Community Service Chairperson' company = 'iiPay' 
                                    phone = '408-712-9873' email = 'angela.martin@iipay.com'/>
                </div>
            </div>
        )
    }
}





const AboutContainer = (
    <div>
        <AboutHeader/>
        <AboutUsFirst/>
        <AboutSections/>
        <Officers/>
    </div>
);

ReactDOM.render(
    AboutContainer,
    document.getElementById('about_us_container')
)



