import React from 'react';
import '../../Resources/StudyGroupResources/StudyGroupResources.css';
import cpp from '../../../photos/cpp.jpg';
import fpc from '../../../photos/fpc.jpg';

function StudyGroupResources() {
    return (
        <div id="study_group_resources">
            <div className="card">
                <img
                    className="card-img-top"
                    id="cpp_image"
                    src={cpp}
                    alt="Card caption"
                />
                <div className="card-body resourceBody">
                    <h5 className="card-title text-center">
                        Certified Payroll Professional (CPP)
                    </h5>
                    <p className="card-text">
                        The CPP is a certification credential for those with
                        some experience in payroll
                    </p>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a
                            href="https://www.americanpayroll.org/education-certification/certification/certified-payroll-professional-(cpp)"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Overview information </p>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a
                            href="https://info.americanpayroll.org/pdfs/certification/CPP-KSA-Outline-09-28-2019.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Content outline </p>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a
                            href="https://pages.americanpayroll.org/cpp-handbook-download-form"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Handbook</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="card">
                <img
                    className="card-img-top"
                    id="fpc_image"
                    src={fpc}
                    alt="card caption"
                />
                <div className="card-body resourceBody">
                    <h5 className="card-title text-center">
                        Fundamental Payroll Certification (FPC)
                    </h5>
                    <p className="card-text">
                        The FPC is a certification credential for payroll
                        beginners and service and support for professionals.
                    </p>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a
                            href="https://www.americanpayroll.org/education-certification/certification/fundamental-payroll-certification-(fpc)"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Overview information </p>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a
                            href="https://home.pearsonvue.com/getattachment/c71e7f8c-9a0d-4166-bb72-0711cdb3d931/Fundamental%20Payroll%20Certification%20Candidate%20Handbook-189800.aspx"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Content outline </p>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a
                            href="https://pages.americanpayroll.org/fpc-handbook-download-form-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <p> Handbook</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StudyGroupResources;
