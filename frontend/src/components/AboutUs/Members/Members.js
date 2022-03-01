import React from 'react';
import '../../AboutUs/Members/Members.css';
import OfficerMember from './OfficerMember/OfficerMember';
import EmptyMember from './EmptyMember/EmptyMember';

import owhen from '../../../photos/owhenupdatedpic.jpg';
import darcy from '../../../photos/darcypic.jpg';
import rowerna from '../../../photos/rowernapic.jpg';
import becky from '../../../photos/beckypic.jpg';
import bill from '../../../photos/bill_member_image.png';
import christine from '../../../photos/christinepic.jpg';
import lois from '../../../photos/loispicture.jpg';
import alex from '../../../photos/alex_image.jpg';
import trinity from '../../../photos/trinity_img.JPG';
import noImage from '../../../photos/default.jpg';

const Members = () => {
    return (
        <div className="container-fluid" id="officers_container">
            <h2 className="text-center"> Officers </h2>
            <div className="row">
                <OfficerMember
                    imagesrc={owhen}
                    name="Owhen Astorga"
                    position="President"
                />
                <OfficerMember
                    imagesrc={darcy}
                    name="Darcy French, CPP"
                    position="Vice President"
                />
                <OfficerMember
                    imagesrc={rowerna}
                    name="Rowerna Lau, CPP"
                    position="Secretary"
                />
                <OfficerMember
                    imagesrc={becky}
                    name="Becky Ng, CPP"
                    position="Treasurer"
                />
                <OfficerMember
                    imagesrc={bill}
                    name="Bill Schmalle, CPP"
                    position="Government Liaison Officer"
                />
                <OfficerMember
                    imagesrc={christine}
                    name="Christine Corral, CPP"
                    position="Membership Chairperson"
                />
                <OfficerMember
                    imagesrc={lois}
                    name="Lois Fried, CPP"
                    position="APA Immediate Past-President"
                />
                <OfficerMember
                    imagesrc={alex}
                    name="Alex Hong"
                    position="Webmaster"
                    email="alexhong681@gmail.com"
                />
                <OfficerMember
                    imagesrc={noImage}
                    name="Catherine Zolli"
                    position="Hospitality Chairperson"
                />
                <EmptyMember />
            </div>
        </div>
    );
};

export default Members;
