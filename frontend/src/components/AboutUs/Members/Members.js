import React, {Component} from 'react';
import '../../AboutUs/Members/Members.css';
import Grid from '@material-ui/core/Grid';
import President from './President/President';
import OfficerMember from '../../AboutUs/Members/OfficerMember/OfficerMember';
import EmptyMember from './EmptyMember/EmptyMember';

import owhen from '../../../photos/owhenupdatedpic.jpg';
import darcy from '../../../photos/darcypic.jpg';
import rowerna from '../../../photos/rowernapic.jpg';
import becky from '../../../photos/beckypic.jpg';
import bill from '../../../photos/billpic.JPG';
import christine from '../../../photos/christinepic.jpg';
import lois from '../../../photos/loispicture.jpg';
import kim from '../../../photos/kimnortonpic.jpg';
import angela from '../../../photos/angela_image.jpg';
import alex from '../../../photos/alex_image.jpg';
import noImage from '../../../photos/default.jpg';

class Members extends Component{
    render(){
        return(
            <div className = "container-fluid" id = "officers_container">
                <h2 className = "text-center"> Officers </h2>
                <div className = "row">
                  <OfficerMember imagesrc = {owhen} name = "Owhen Astorga" position = "President, President Advice" company = "Salesforce.com"
                                        phone = "415-536-4524" email = "oastorga@salesforce.com"/>
                  <OfficerMember imagesrc={darcy} name = "Darcy French, CPP" position = "Second Vice President" company = "Gensler" 
                                        phone = '' email = "darcy_french@gensler.com"/>
                  <OfficerMember imagesrc={rowerna} name = 'Rowerna Lau, CPP' position = 'Secretary' company = 'McKesson' 
                                        phone = '415-983-8905' email = 'rowerna.lau@mckesson.com'/>
                  <OfficerMember imagesrc={becky} name = 'Becky Ng, CPP' position = 'Treasurer, WebMaster' company = '' 
                                        phone = '415-476-2327' email = 'becky.ng@ucsf.edu'/>
                  <OfficerMember imagesrc= {angela} name = 'Angela Martin, CPP' position = 'Community Service Chairperson' company = 'iiPay' 
                                        phone = '408-712-9873' email = 'angela.martin@iipay.com'/>


                  <OfficerMember imagesrc= {bill} name = 'Bill Schmalle, CPP' position = 'Government Liaison Officer' company = 'McKesson' 
                                        phone = '510-597-3923' email = 'William.schmalle@mckesson.com'/>
                  <OfficerMember imagesrc= {christine} name = 'Christine Corral, CPP' position = 'Membership Chairperson' company = 'Bio-Rad Laboratories' 
                                        phone = '' email = 'Chris_Corral@bio-rad.com'/>
                  <OfficerMember imagesrc= {lois} name = 'Lois Fried, CPP' position = 'Historian' company = 'Consultant' 
                                        phone = '' email = 'Loisfried35@gmail.com'/>
                                        
                  <OfficerMember imagesrc = {kim} name = 'Kim Norton, CPP' position = 'Bulletin Chairperson' company = 'Bio-Rad Laboratories' 
                                        phone = '510-741-6273' email = 'kimberly_norton@bio-rad.com'/>
                  <OfficerMember imagesrc = {alex} name = 'Alex Hong' position = 'Web Developer Intern' email = 'alexhong681@gmail.com'/>
                  <OfficerMember imagesrc = {noImage} name = 'Catherine Zolli' position = 'Hospitality Chairperson'/>
                  <EmptyMember/>
                </div>
            </div>
        );
    }
}

export default Members;
