import React, {Component} from 'react';
import '../Awards/Awards.css';
import Grid from '@material-ui/core/Grid';

class AwardsSponsors extends Component{
    render(){
      // source: https://stackoverflow.com/questions/56347783/how-to-display-every-image-inside-an-image-folder-in-react
      // banner image sources
      const bannerAwards = require.context('../../../public/banners', true, /\.(png|jpe?g|svg)$/).keys().reverse().map(image => {
        let imageSource = '/banners/' + image;
        return(
          <Grid key={imageSource} item sm={3}> <img className="bannerImage" src={imageSource}/> </Grid>
        )
      }); 

      // award image sources
      const awards = require.context('../../../public/awards', true, /\.(png|jpe?g|svg)$/).keys().reverse().map(image => {
        let imageSource = '/awards/' + image;
        return(
          <Grid key={imageSource} item sm={4}> <img className="award_image" src={imageSource}/> </Grid>
        )
      });
            
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
            <Grid container direction="row"  justify="center" alignItems="center" wrap="wrap">
              { bannerAwards }
            </Grid>

            <Grid id="awardsGrid" container direction="row" justify="center" alignItems="center" wrap="nowrap">
              { awards }
            </Grid>
          </div>
        </div>
      );
    }
}
export default AwardsSponsors;