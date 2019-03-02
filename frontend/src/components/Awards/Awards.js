import React, {Component} from 'react';
import '../Awards/Awards.css';
import Grid from '@material-ui/core/Grid';
import apa from '../../photos/american_payroll_association_logo.png';

//award banners
import banner1 from '../../photos/chapterpictorialfirst2018.jpg';
import banner2 from '../../photos/contestbannerthird2018.png';
import banner3 from '../../photos/contestbannerfirst2017.jpg';
import banner4 from '../../photos/gavelbanner2018.jpg';
import banner5 from '../../photos/honerablementionabanner2017.jpg';
import banner6 from '../../photos/chapterpictorialpart2017.jpg';
import banner7 from '../../photos/statewidepart2017.jpg';
import banner8 from '../../photos/chapterpictorialsecond2016.jpg';
import banner9 from '../../photos/photocontesthird2015.jpg';

//award tiles
import Award1  from '../../photos/award1.jpg';
import Award2  from '../../photos/award2.jpg';
import Award4  from '../../photos/award4.jpg';
import Award5  from '../../photos/award5.jpg';
import Award6  from '../../photos/award6.jpg';
import Award7  from '../../photos/award7.jpg';
import Award8  from '../../photos/award8.jpg';
import Award9 from '../../photos/chapterphoto2018third.png';
import McKesson from '../../photos/mckesson_logo.gif';
import Clif from '../../photos/clif_logo.jpg';
import iipay from '../../photos/iipay_logo.jpg';
import npw from '../../photos/npw2019.jpg';


class AwardsSponsors extends Component{
    render(){
        return(
          <div className = "card border-dark" id = "awardsCard">
            <div className="card-body awardsBody">

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <div id = "apaImageContainer">
                  <a href = "https://www.americanpayroll.org/" target = "_blank"> <img className = "logoImage" src = {apa} alt = "APA Logo"/> </a>
                </div>
                <div id = "npwContainer">
                  <a href = "https://www.nationalpayrollweek.com/" target = "_blank"> <img id = "npwImage" src = {npw}/> </a>
                </div>
              </Grid>

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "2018 chapter pictorial first banner" src = {banner1}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" id = "thirdPlaceBanner" alt = "honorable mention banner" src = {banner2}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "gavel banner" src = {banner3}/> </Grid>
              </Grid>

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "2018 chapter pictorial first banner" src = {banner4}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "2018 photo contest third" src = {banner5}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "participation 2017" src = {banner6}/> </Grid>
              </Grid>

              <Grid container direction = "row"  justify="center" alignItems="center" wrap = "nowrap">
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "participation banner" src = {banner7}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "statewide part banner" src = {banner8}/> </Grid>
                <Grid item xs = {6} sm = {4}> <img className = "bannerImage" alt = "gavel banner" src = {banner9}/> </Grid>
              </Grid>

              <Grid id = "awardsGrid" spacing = {16} container direction = "row"  justify="space-evenly" alignItems="center" wrap = "nowrap">
                <img className = "award_image" alt = "2018 chapter pictorial first" src = {Award7}/>
                <img className = "award_image" alt = "2017 chapter photo contest first" src = {Award8}/> 
                <img className = "award_image" alt = "2018 chapter pictorial third place" src = {Award9}/> 
                <img className = "award_image" alt = "gavel award innovator" src = {Award5}/> 
                <img className = "award_image" alt = "2017 honorable mention chapter of year " src = {Award1}/>
                <img className = "award_image" alt = "participant 2018 statewide meeting" src = {Award6}/>  
                <img className = "award_image" alt = "participant 2017 statewide meeting" src = {Award2}/> 
                <img className = "award_image" alt = "participant 2017 chapter pictorial" src = {Award4}/> 
              </Grid>
            </div>
          </div>
        );
    }
}



export default AwardsSponsors;
