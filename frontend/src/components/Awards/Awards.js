import React, {Component} from 'react';
import '../Awards/Awards.css';
import Grid from '@material-ui/core/Grid';
import apa from '../../photos/american_payroll_association_logo.png';
import Award1  from '../../photos/award1.jpg';
import Award2  from '../../photos/award2.jpg';
import Award4  from '../../photos/award4.jpg';
import Award5  from '../../photos/award5.jpg';
import Award6  from '../../photos/award6.jpg';
import Award7  from '../../photos/award7.jpg';
import Award8  from '../../photos/award8.jpg';
import McKesson from '../../photos/mckesson_logo.gif';
import Clif from '../../photos/clif_logo.jpg';
import iipay from '../../photos/iipay_logo.jpg';

class AwardsSponsors extends Component{
    render(){
        return(
          <div className = "card border-dark" id = "awardsCard">
            <div className="card-body awardsBody">

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <a href = "https://www.americanpayroll.org/" target = "_blank"> <img id = "apaLogo" src = {apa} alt = "APA Logo"/> </a>
              </Grid>

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <img className = "award_image" alt = "2018 first chapter pictorial " src = {Award1}/> 
                <img className = "award_image" alt = "first npw photo contest" src = {Award2}/> 
                <img className = "award_image" alt = "gavel award innovator" src = {Award4}/> 
                <img className = "award_image" alt = "2018 participant regional/statewide meeting" src = {Award5}/> 
                <img className = "award_image" alt = "2017 participant" src = {Award6}/> 
                <img className = "award_image" alt = "2017 chapter pictorial particpant" src = {Award7}/> 
                <img className = "award_image" alt = "honorable mention chapter of the year" src = {Award8}/> 
              </Grid>

              <p className = "text-center font-weight-bold font-italic" > <u> Sponsors </u> </p>
              <Grid container direction = "row"  justify="center" alignItems="center" spacing = {24}>
                <a href = "https://www.mckesson.com/" target = "_blank"> <img className = "sponsor_images" id = "mckesson" src = {McKesson} alt = "mckesson_logo"/> </a>
                <a href = "https://www.clifbar.com/" target = "_blank"> <img className = "sponsor_images" id = "clif" src = {Clif} alt = "clif-logo"/> </a>
                <a href = "https://www.iipay.com/" target = "_blank"> <img className = "sponsor_images" id = "iipay" src = {iipay} alt = "iipay_logo"/> </a>
              </Grid>
            </div>
          </div>
        );
    }
}



export default AwardsSponsors;
