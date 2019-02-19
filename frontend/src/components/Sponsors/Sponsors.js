import React, {Component} from 'react';
import '../Sponsors/Sponsors.css';
import Grid from '@material-ui/core/Grid';
import McKesson from '../../photos/mckesson_logo.gif';
import Clif from '../../photos/clif_logo.jpg';
import iipay from '../../photos/iipay_logo.jpg';

class Sponsors extends Component{
  render(){
    return(
      <div className = "card border-dark corporateCard">
        <div className="card-body">
          <p className = "text-center font-weight-bold font-italic" > <u> Sponsors </u> </p>
          <Grid container direction = "row"  justify="center" alignItems="center">
            <a href = "https://www.mckesson.com/" target = "_blank"> <img className = "sponsor_images" id = "mckesson" src = {McKesson} alt = "mckesson_logo"/> </a>
            <a href = "https://www.clifbar.com/" target = "_blank"> <img className = "sponsor_images" src = {Clif} alt = "clif-logo"/> </a>
            <a href = "https://www.iipay.com/" target = "_blank"> <img className = "sponsor_images" src = {iipay} alt = "iipay_logo"/> </a>
          </Grid>
        </div>
      </div>
    );
  }
}


export default Sponsors;
