import React, { Component } from 'react';
import '../AboutUs/AboutUs.css';
import aboutUs from '../../photos/eventsphoto3.png';
import AboutSections from '../AboutUs/AboutSections/AboutSections';
import Members from '../AboutUs/Members/Members';
import bylaws from '../../photos/bylaws.jpg';

//About Us Section
class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid" id="about_us_header">
                <h2 className="section_header font-italic"> About Us </h2>
                <img
                    className="align_center"
                    id="about_us_1"
                    src={aboutUs}
                    alt="chapter"
                />
                <h2 className="text-center font-italic ">
                    San Francisco Bay Area Chapter
                </h2>
                <div className="blockquote_caption align_center">
                    <blockquote
                        className="font-weight-bold "
                        id="about_us_part1_blockquote"
                    >
                        <p>
                            The SFBAC has been providing educational and
                            networking opportunities for the local Payroll
                            Professional since 1983. Every day, we strive to
                            support the Payroll Professional with member
                            benefits including educational workshops, meetings,
                            payroll legislative updates, study groups and
                            scholarship programs. We genuinely care about our
                            members! We go above and beyond to provide the best
                            support, as well as to support the goals of the
                            American Payroll Association. Payroll is a demanding
                            profession, and it deserves to be recognized.
                            Payroll Professionals are called upon to constantly
                            update their education and skills, to produce work
                            that conforms to the highest technical standards,
                            and to maintain the highest level of professional
                            ethics. SFBAC holds regular meetings featuring
                            speakers on topics ranging from taxation and
                            regulation to personal and professional development.
                            RCHs are available for all meetings. As a chapter we
                            continue to promote growth, education and personal
                            development.
                        </p>
                        <p>
                            Through the years, our Chapter has grown in more
                            ways than one. We have come a long way and we are
                            proud of where we are. We thank every member and
                            officer of our chapter from the past to the present.
                            We would not be the San Francisco Bay Area Chapter
                            of APA if not for your love, dedication and
                            generosity. Your passion for our profession is
                            admirable.
                        </p>
                        <p>
                            For the past few years, we have been called "the
                            hugging chapter" and mighty proud of it! We are
                            grateful for the friendships formed, for the family
                            we have created. What a unique gift!
                        </p>
                    </blockquote>
                </div>

                <div
                    className="about_section align_center"
                    id="chapter_history_section"
                >
                    <h2 className="text-center ">
                        San Francisco Bay Area Chapter History
                    </h2>
                    <div>
                        <p className="text-center font-italic">
                            Click here to view:
                            <a
                                href="https://sfpayroll.s3.us-east-2.amazonaws.com/pdfs/SFBACHistory2012.docx.pdf"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Chapter History
                            </a>
                        </p>
                    </div>
                </div>

                <div className="about_section align_center" id="bylaws_section">
                    <h2 className="text-center ">
                        San Francisco Bay Area Chapter By Laws
                    </h2>
                    <img
                        className="section_image"
                        id="bylaws_logo"
                        src={bylaws}
                        alt="by laws logo"
                    />
                    <div>
                        <p className="text-center font-italic">
                            Click here for details:
                            <a
                                href="https://sfpayroll.s3.us-east-2.amazonaws.com/pdfs/2014_Bylaws_Constitution.pdf"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                By Laws
                            </a>
                        </p>
                    </div>
                </div>
                <AboutSections />
                <Members />
            </div>
        );
    }
}

export default AboutUs;
