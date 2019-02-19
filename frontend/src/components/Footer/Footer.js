import React, {Component} from 'react';
import '../Footer/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div id = "ending">
                <div id = "ending_content">
                    <p> San Francisco Bay Area Chapter </p>
                    <a  id = "apa_link" href = "https://www.americanpayroll.org/" target = "_blank"> <p> American Payroll Association </p> </a>
                    <p> Contact Webmaster: Alex Hong, Email: alexhong681@gmail.com </p>
                </div>
            </div>
        );
    }
}

export default Footer;
