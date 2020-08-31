import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import Awards from '../Awards/Awards';
import JoinButton from '../JoinButton/JoinButton';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import BannerImage from '../../photos/golden_gate_bridge.jpg';
import apa from '../../photos/american_payroll_association_logo.png';
import gpmi from '../../photos/GPMILogo.png';
import cpc from '../../photos/cpclogo.png';

//banner image source:
//https://www.pexels.com/photo/architecture-bay-bridge-construction-417236/
//Home page component
class Home extends Component {
    render(){
        return(
            <div className="container-fluid" id="welcomeContainer">
                <div className="text-center" id="page_header">
                    <div className="centered" id="header_text">
                        <h1> San Francisco Bay Area Chapter </h1>
                        <h1> American Payroll Association   </h1>
                    </div>
                    <img className="img-fluid" id="golden_gate_background" src={BannerImage} alt="banner_image"/>
                </div>
                
                <div className="welcome_awards_join">
                    <h3 className="text-center" id="welcome_text" > Welcome to the San Francisco Bay Area Chapter
                        of the American Payroll Association
                    </h3>

                    <Grid container direction="row"  justify="center" alignItems="center" wrap="nowrap">
                        <a href="https://www.americanpayroll.org/" rel="noopener noreferrer" target="_blank"> <img className="logoImage" src={apa} alt="APA Logo"/> </a>
                        <a href="https://www.gpminstitute.com/" rel="noopener noreferrer" target="_blank"> <img id="gpmiLogoImageHome" className="logoImage" src={gpmi} alt="gpmi logo"/> </a>
                        <a href="https://californiapayroll.org/" rel="noopener noreferrer" target="_blank"> <img className="logoImage" src={cpc} alt="cpc logo"/> </a>
                    </Grid>

                    <Carousel/>
                    <Awards/>
                    <JoinButton/>
                </div>
            </div>
        );
    }
}

export default Home;
