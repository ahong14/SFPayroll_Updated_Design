import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel';
import Awards from '../Awards/Awards';
import '../Home/Home.css';
import BannerImage from '../../photos/golden_gate_bridge.jpg';

class Home extends Component {
    render(){
        return(
            <div className = "container-fluid">
                <div className = "jumbotron">
                    <div className = "centered" id = "header_text">
                        <h1> San Francisco Bay Area Chapter </h1>
                        <h1> American Payroll Association   </h1>
                    </div>
                    <img className = "jumbotronImage" src = {BannerImage}/>
                </div>
                <Awards/>
                <Carousel/>
            </div>
        );
    }
}

export default Home;
