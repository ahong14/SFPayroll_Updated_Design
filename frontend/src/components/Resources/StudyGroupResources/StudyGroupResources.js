import React, {Component} from 'react';
import '../../Resources/StudyGroupResources/StudyGroupResources.css';
import cpp from '../../../photos/cpp.jpg';
import fpc from '../../../photos/fpc.jpg';

class StudyGroupResources extends Component {
    render(){
        return(
            <div id = "study_group_resources">
                <div className="card">
                    <img className="card-img-top" id = "cpp_image" src= {cpp} alt="Card image cap"/>
                    <div className="card-body resourceBody">
                        <h5 className="card-title text-center">Certified Payroll Professional (CPP)</h5>
                        <p className="card-text">The CPP is a certification credential for those with some experience in payroll</p>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href = "https://www.americanpayroll.org/education-certification/certification/certified-payroll-professional-(cpp)" target = "_blank"> <p> Overview information </p> </a></li>
                        <li className="list-group-item"><a href = ""> <p> Content outline </p> </a> </li>
                        <li className="list-group-item"><a href = ""><p> Handbook </p> </a></li>
                    </ul>
                </div>

                <div className="card">
                    <img className="card-img-top" id = "fpc_image" src= {fpc} alt="Card image cap"/>
                    <div className="card-body resourceBody">
                        <h5 className="card-title text-center">Fundamental Payroll Certification (FPC)</h5>
                        <p className="card-text">The FPC is a certification credential for payroll beginners and service and support for professionals.</p>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href = "https://www.americanpayroll.org/education-certification/certification/fundamental-payroll-certification-(fpc)" target = "_blank"> <p> Overview information </p> </a></li>
                        <li className="list-group-item"><a href = ""> <p> Content outline </p> </a> </li>
                        <li className="list-group-item"><a href = ""><p> Handbook </p> </a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default StudyGroupResources;
