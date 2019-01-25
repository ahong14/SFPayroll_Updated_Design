import React, {Component} from 'react';
import '../../AboutUs/Members/Members.css';
import President from './President/President';
import OfficerMember from '../../AboutUs/Members/OfficerMember/OfficerMember';

import erin from '../../../photos/erin_image.jpg';
import darcy from '../../../photos/darcy_image.jpg';
import rowerna from '../../../photos/rowerna_image.jpg';
import becky from '../../../photos/becky_image.jpg';
import bill from '../../../photos/bill_image.JPG';
import christine from '../../../photos/christine_image.jpg';
import lois from '../../../photos/lois_image.jpg';
import kim from '../../../photos/kim_image.jpg';
import angela from '../../../photos/angela_image.jpg';

class Members extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "officers_container">
                <h2 className = "text-center"> Officers </h2>
                <div className = "members container-fluid card-group">
                    <President/>
                    <OfficerMember imagesrc={darcy} name = "Darcy French, CPP" position = "Second Vice President" company = "Gensler" 
                                        phone = '' email = "darcy_frecnh@gensler.com"/>
                    <OfficerMember imagesrc={rowerna} name = 'Rowerna Lau, CPP' position = 'Secretary' company = 'McKesson' 
                                        phone = '415-983-8905' email = 'rowerna.lau@mckesson.com'/>
                    <OfficerMember imagesrc={becky} name = 'Becky Ng, CPP' position = 'Treasurer, WebMaster' company = '' 
                                        phone = '415-476-2327' email = 'becky.ng@ucsf.edu'/>
                    <OfficerMember imagesrc= {angela} name = 'Angela Martin, CPP' position = 'Community Service Chairperson' company = 'iiPay' 
                                        phone = '408-712-9873' email = 'angela.martin@iipay.com'/>
                </div>

                <div className = "members card-group">
                    <OfficerMember imagesrc= {bill} name = 'Bill Schmalle, CPP' position = 'Government Liaison Officer' company = 'McKesson' 
                                        phone = '510-597-3923' email = 'William.schmalle@mckesson.com'/>
                    <OfficerMember imagesrc= {christine} name = 'Christine Corral, CPP' position = 'Membership Chairperson' company = 'Bio-Rad Laboratories' 
                                        phone = '' email = 'Chris_Corral@bio-rad.com'/>
                    <OfficerMember imagesrc= {lois} name = 'Lois Fried, CPP' position = 'Historian' company = 'Consultant' 
                                        phone = '' email = 'Loisfried35@gmail.com'/>
                    <OfficerMember imagesrc= {kim} name = 'Kim Norton, CPP' position = 'Bulletin Chairperson' company = 'Bio-Rad Laboratories' 
                                        phone = '510-741-6273' email = 'kimberly_norton@bio-rad.com'/>
                    <OfficerMember name = 'Catherine Zolli' position = 'Hospitality Chairperson'/>
                </div>                    
            </div>
        );
    }
}

export default Members;
