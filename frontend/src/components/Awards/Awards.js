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
            <div className="eventBannerContainer">
              <div className="eventBanner">
                <a href="https://californiapayroll.org/" rel="noopener noreferrer" target="_blank"> <img className="eventBannerImage" src='../images/cpc2020banner.png'/> </a>
              </div>
            </div>
          </Grid>

          <div className="card-body awardsBody">
            <Grid container direction="row" justify="center" alignItems="center">
              <h1 className="italicUnderline"> Chapter Awards </h1>
            </Grid>
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