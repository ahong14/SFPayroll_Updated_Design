//react component for resources section


class StudyGroupResources extends React.Component{
    render(){
        return(
            <div id = "study_group_resources">
                <div id = "cpp">
                    <img id = "cpp_image" src = "photos/cpp.jpg" alt = "cpp logo"/>
                    <p className = "font-weight-bold"> Certified Payroll Professional (CPP) </p>
                    <p> The CPP is a certification credential for those with some experience in payroll</p>
                    <a href = "https://www.americanpayroll.org/education-certification/certification/certified-payroll-professional-(cpp)" target = "_blank"> <p> Overview information </p> </a>
                    <a href = ""> <p> Content outline </p> </a>
                    <a href = ""><p> Handbook </p> </a>
                </div>


                <div id = "fpc">
                    <img id = "fpc_image" src = "photos/fpc.jpg" alt = "fpc logo"/>
                    <p className = "font-weight-bold"> Fundamental Payroll Certification (FPC)</p>
                    <p> The FPC is a certification credential for payroll beginners and service and support for professionals.</p>
                    <a href = "https://www.americanpayroll.org/education-certification/certification/fundamental-payroll-certification-(fpc)" target = "_blank"> <p> Overview information </p> </a>
                    <a href = ""> <p> Content outline </p> </a>
                    <a href = ""><p> Handbook </p> </a>
                </div>
            </div>
        )
    }
}

class LearningResources extends React.Component{
    render(){
        return(
            <div id = "learning_resources_container">
                <div className = "learning_resources">
                    <h3 className = "text-center underline"> Learning Resources </h3>
                    <a href = "https://www.americanpayroll.org/news-resources/apa-news?"  target="_blank"> <p> Webinar from American Payroll Association</p> </a>
                    <a href = "https://www.americanpayroll.org/education-certification/education/learning-paths"  target="_blank"> <p> American Payroll Association</p> </a>
                    <a href = "http://www.gpminstitute.com/"  target="_blank"> <p> Global Payroll Management Institute </p></a>
                    <a href = "https://californiapayroll.org/"  target="_blank"> <p> Calfornia Payroll Conference </p></a>
                    <a href = "http://www.nationalpayrollweek.com/"  target="_blank"> <p> National Payroll Week </p></a>
                    <a href = "https://www.edd.ca.gov/Payroll_Tax_seminars/"  target="_blank"> <p> Payroll Tax Seminars - EDD </p></a>
                    <a href =""> <p> Study Group </p></a>
                    <a href ="https://www.americanpayroll.org/news-resources/resource-library?resourcelibary=51ddd56c-da58-4b96-9c28-3f3099421cb3"  target="_blank"> <p> APA News and Resources</p></a>
                </div>


                <div className = "learning_resources" id = "government_agencies">
                    <h3 className = "text-center underline"> Government Agencies </h3>
                    <a href ="https://www.irs.gov/" target = "_blank"> <p> Internal Revenue Service </p></a>
                    <a href ="https://www.ssa.gov/" target = "_blank"> <p> Social Security Administration </p></a>
                    <a href ="https://www.frbservices.org/resources/routing-number-directory/index.html" target = "_blank"> <p> Federal Reserve E-Payments Routing Directory</p></a>
                    <a href ="https://www.dol.gov/" target = "_blank"> <p> Department of Labor- Wage & Hour Division </p></a>
                    <a href ="https://fiscal.treasury.gov/fsservices/gov/debtColl/rsrcsTools/debt_InformationForEmployers.htm" target = "_blank"> <p> Administrative Wage Garnishment </p></a>
                </div>

                <div className = "learning_resources" id = "california_agencies">
                    <h3 className = "text-center underline"> California/San Francisco Agencies </h3>
                    <a href ="https://www.sco.ca.gov/upd_rptg.html" target = "_blank"> <p> CA Unclaimed Property Division</p></a>
                    <a href ="https://www.edd.ca.gov/" target = "_blank"> <p> California Employed Development Department</p></a>
                    <a href ="http://www.childsup.ca.gov/default.aspx" target = "_blank"> <p> California Department of Child Support </p></a>
                    <a href ="https://www.dir.ca.gov/DLSE/dlse.html" target = "_blank"> <p> California Division of Labor Standards Enforcement</p></a>
                    <a href ="https://www.dir.ca.gov/workers'_comp.html" target = "_blank"> <p> California Department of Industrial Relationship</p></a>
                    <a href ="https://www.calchamber.com/Pages/Default.aspx" target = "_blank"> <p> California Chamber of Commerce</p></a>
                    <a href ="https://www.ftb.ca.gov/" target = "_blank"> <p> Franchise Tax Board</p></a>
                    <a href ="http://www.boe.ca.gov/" target = "_blank"> <p> California State Board of Equalization</p></a>
                    <a href ="http://sftreasurer.org/" target = "_blank"> <p> SF Office of Treasuer and Tax Collector</p></a>
                    <a href ="https://sfgov.org/olse/paid-sick-leave-ordinance-pslo" target = "_blank"> <p> SF Paid Sick Leave Ordinance </p></a>
                    <a href ="https://sfgov.org/olse/health-care-security-ordinance-hcso" target = "_blank"> <p> SF Health Care Security Ordinance </p></a>
                </div>

                <div className = "learning_resources" id = "payroll_links">
                    <h3 className = "text-center underline"> Payroll Links </h3>
                    <a href ="https://payrolltalk.symmetry.com/" target = "_blank"> <p> Payroll Talk </p></a>
                    <a href ="https://www.paycheckcity.com/" target = "_blank"> <p> PayCheck City - PayCheck Calculator</p></a>
                    <a href ="https://commuterbenefits.com/" target = "_blank"> <p> Commuter Checks </p></a>
                    <a href ="https://www.xe.com/" target = "_blank"> <p> Currency Convertor</p></a>
                    <a href ="https://www.donotcall.gov/" target = "_blank"> <p> National No Call Registry </p></a>
                    <a href ="https://www.worldatwork.org/" target = "_blank"> <p> World at Work </p></a>
                    <a href ="https://www.shrm.org/pages/default.aspx" target = "_blank"> <p> Society for HR Management</p></a>
                </div>
            </div>
        )
    }
}

const ResourcesContainer = (

    <div>
        <h2 className = "section_header text-center"> Resources </h2>
        <br/>
        <StudyGroupResources/>
        <LearningResources/>
    </div>

)

ReactDOM.render(
    ResourcesContainer,
    document.getElementById('resources_container')
)