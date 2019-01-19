import React, {Component} from 'react';
import '../Sponsors/Sponsors.css';
import McKesson from '../../photos/mckesson_logo.gif';
import Clif from '../../photos/clif_logo.jpg';
import iipay from '../../photos/iipay_logo.jpg';

class Sponsors extends Component{
    render(){
        return(
            <div id = "sponsors">
                <p className = "text-center font-weight-bold font-italic" > Sponsors: </p>

                <div  className = "text-center" id = "sponsor_logos">
                    <a href = "https://www.mckesson.com/" target = "_blank"> <img className = "sponsor_images" id = "mckesson" src = {McKesson} alt = "mckesson_logo"/> </a>
                    <a href = "https://www.clifbar.com/" target = "_blank"> <img className = "sponsor_images" src = {Clif} alt = "clif-logo"/> </a>
                    <a href = "https://www.iipay.com/" target = "_blank"> <img className = "sponsor_images" src = {iipay} alt = "iipay_logo"/> </a>
                </div>
            </div>
        );
    }
}

export default Sponsors;
