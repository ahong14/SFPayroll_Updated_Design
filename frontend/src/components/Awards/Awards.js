import React, {Component} from 'react';
import '../Awards/Awards.css';
import Grid from '@material-ui/core/Grid';

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
import banner10 from '../../photos/2019_ Chapter_Photo_Contest_Banner_360x75_01.png';

//award tiles
import Award1  from '../../photos/award1.jpg';
import Award2  from '../../photos/award2.jpg';
import Award4  from '../../photos/award4.jpg';
import Award5  from '../../photos/award5.jpg';
import Award6  from '../../photos/award6.jpg';
import Award7  from '../../photos/award7.jpg';
import Award8  from '../../photos/award8.jpg';
import Award9 from '../../photos/chapterphoto2018third.png';
import Award10 from '../../photos/2019_Chapter_Photo_Contest_125x125_01.png';

class AwardsSponsors extends Component{
    render(){
        return(
          <div className="card border-dark" id="awardsCard">
            <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap">
                <div id="npwContainer">
                  <a href="https://gpminstitute.com/education-events/global-payroll-week" rel="noopener noreferrer" target="_blank"> <img id="npwImage" src="/images/gpmi_week_2020.png"/> </a>
                </div>

                <div>
                  <a href="https://www.nationalpayrollweek.com/" rel="noopener noreferrer" target="_blank"> <img src="/images/NPW20_Logo-200.png"/></a>
                </div>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap">
                <div id="apaImageContainer">
                  <a 
                    href="https://ebiz.americanpayroll.org/ebusiness/Education/ViewCourse.aspx?CourseID=1&utm_source=DFP&utm_medium=APAWebsite-DeskHoriz&utm_campaign=2020Congress" 
                    rel="noopener noreferrer" 
                    target="_blank"> 
                    <img id="apaImageEvent" src="/images/apa_congress_38th.jpg" alt="APA Logo"/> 
                  </a>
                </div>
            </Grid>

            <div className="card-body awardsBody">
              <Grid container direction="row"  justify="center" alignItems="center" wrap="nowrap">
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="2019 first place banner pictorial" src={banner10}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="2018 chapter pictorial first banner" src={banner1}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" id="thirdPlaceBanner" alt="honorable mention banner" src={banner2}/> </Grid>
              </Grid>

              <Grid container direction="row"  justify="center" alignItems="center" wrap = "nowrap">
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="gavel banner" src={banner3}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="2018 chapter pictorial first banner" src={banner4}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="2018 photo contest third" src={banner5}/> </Grid>
              </Grid>

              <Grid container direction="row"  justify="center" alignItems="center" wrap="nowrap">
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="participation 2017" src={banner6}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="participation banner" src={banner7}/> </Grid>
                <Grid item xs={6} sm={4}> <img className="bannerImage" alt="statewide part banner" src={banner8}/> </Grid>
              </Grid>

              <Grid id="awardsGrid" spacing={16} container direction="row"  justify="space-evenly" alignItems="center" wrap="nowrap">
                <img className="award_image" alt="2019 chapter pictorial first place" src={Award10}/>
                <img className="award_image" alt="2018 chapter pictorial first" src={Award7}/>
                <img className="award_image" alt="2017 chapter photo contest first" src={Award8}/> 
                <img className="award_image" alt="2018 chapter pictorial third place" src={Award9}/> 
                <img className="award_image" alt="gavel award innovator" src={Award5}/> 
                <img className="award_image" alt="2017 honorable mention chapter of year " src={Award1}/>
                <img className="award_image" alt="participant 2018 statewide meeting" src={Award6}/>  
                <img className="award_image" alt="participant 2017 statewide meeting" src={Award2}/> 
              </Grid>
            </div>
          </div>
        );
    }
}
export default AwardsSponsors;