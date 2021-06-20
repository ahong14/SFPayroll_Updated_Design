import React from 'react';
import '../../Membership/StudyGroup/StudyGroup.css';
import studyGroup from '../../../photos/study_group.jpg';

const StudyGroup = () => {
    return (
        <div className="about_section" id="study_group">
            <h2 className="text-center "> Study Group </h2>

            <img
                className="section_image "
                id="study_group_image"
                src={studyGroup}
                alt="study group logo"
            />
            <div id="study_more_info">
                <blockquote
                    className="text-center font-italic"
                    id="studyBlockInfo"
                >
                    Details TBD
                    {/* "This is a special group designed to cater to those who prefer a smaller, more intimate study environment, 
                            so limited space is available. Enroll now to ensure your spot is reserved! The APA has several different grant programs to not only help pay for Congress, but will also cover classes and resources. 
                            Visit the follow web page for more details: <a href = "http://www.americanpayroll.org/members/edgrant/" target = "_blank"> http://www.americanpayroll.org/members/edgrant/ </a> . 
                            The American Payroll Association website also has  posted all Study Group sessions from other local chapters.  */}
                </blockquote>
            </div>
        </div>
    );
};

export default StudyGroup;
