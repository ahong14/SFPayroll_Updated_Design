import React, {Component} from 'react';
import '../Footer/Footer.css';
import Grid from '@material-ui/core/Grid';
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

class Footer extends Component{
    render(){
        return(
            <div id = "ending">
                <div id = "ending_content">
                    <p> San Francisco Bay Area Chapter </p>
                    <p> PO Box: PO Box 683. San Bruno, CA 94066 </p>
                    <a id = "apa_link" href = "https://www.americanpayroll.org/" target = "_blank"> <p> American Payroll Association </p> </a>
                    <Grid container direction = "row"  justify = "flex-start">
                      <a className = "footerLink" href = "https://www.linkedin.com/in/sfbac-apa-74bb7421/" target = "_blank"> <FaLinkedin/> </a>
                      <a className = "footerLink" href = "https://twitter.com/SFBAC_APA" target = "_blank"> <FaTwitter/> </a>
                      <a className = "footerLink" href = "https://www.facebook.com/payrollpeeps/" target = "_blank"> <FaFacebook/> </a>
                    </Grid>
                    <p> Contact Webmaster: Alex Hong, Email: alexhong681@gmail.com </p>
                </div>
            </div>
        );
    }
}

export default Footer;
