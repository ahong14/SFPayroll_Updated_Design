import React from 'react';
import '../../AboutUs/AboutSections/AboutSections.css';
import apa from '../../../photos/american_payroll_association_logo.png';
import gpmi from '../../../photos/GPMILogo.png';
import cpc from '../../../photos/cpclogo.png';

const AboutSections = () => {
    return (
        <div className=" container-fluid card-group">
            <div className="card">
                <img
                    className="card-img-top section_image"
                    src={apa}
                    alt="Card caption"
                />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        American Payroll Association
                    </h5>
                    <p className="text-center">
                        <a
                            href="https://www.americanpayroll.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            More Info
                        </a>
                    </p>
                    <blockquote className="text-center font-italic">
                        Established in 1982, the American Payroll Association
                        (APA), headquartered in San Antonio , TX , is the
                        nation's leader in payroll education, training, and
                        publications. The nonprofit association conducts more
                        than 300 payroll education conferences and seminars
                        across the country each year and publishes a complete
                        library of resource texts and newsletters. Every year,
                        nearly 18,000 professionals attend APA training
                        sessions. Representing over 22,000 members, APA is the
                        industry's highly respected, collective voice in
                        Washington DC. If you want to become a member of APA
                        National, check out
                        <a
                            href="https://www.americanpayroll.org/members"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.americanpayroll.org/members
                        </a>
                        to learn more and join today, or fill out the Membership
                        Application."
                    </blockquote>
                </div>
            </div>

            <div className="card">
                <img
                    className="card-img-top section_image"
                    src={gpmi}
                    alt="Card caption"
                />
                <div className="card-body">
                    <h5 className="card-title text-center"> GPMI </h5>
                    <p className="text-center">
                        <a
                            href="https://www.gpminstitute.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            More Info
                        </a>
                    </p>
                    <blockquote className="text-center font-italic">
                        The Global Payroll Management Institute (GPMI) is the
                        world’s leading community of payroll leaders, managers,
                        practitioners, researchers, and technology experts.
                        GPMI's mission is to create opportunities and forge a
                        community by providing the education, skills, and
                        resources necessary for global payroll professionals to
                        become successful leaders and strategic partners within
                        their organizations. Subscribe To GPMI Exclusive
                        education, publications, and whitepapers dedicated to
                        global payroll strategies, knowledge, research,
                        employment, and training.
                    </blockquote>
                </div>
            </div>

            <div className="card">
                <img
                    className="card-img-top section_image"
                    src={cpc}
                    alt="card caption"
                />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        California Payroll Conference
                    </h5>
                    <p className="text-center">
                        <a
                            href="https://californiapayroll.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            More Info
                        </a>
                    </p>
                    <blockquote className="text-center font-italic">
                        The California Payroll Conference provides opportunites
                        for networking among conference attendees and sponsors.
                        Payroll professionals gather to speak and provide
                        expertise information among various payroll fields. The
                        goal of the conference is to educate and entertain
                        payroll professionals. We also awarded 3 scholarships to
                        the California Payroll Conference. We intend to continue
                        this scholarship program, so keep an eye out for
                        announcements!
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default AboutSections;
