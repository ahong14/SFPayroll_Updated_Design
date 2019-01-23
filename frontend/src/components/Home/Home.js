import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel';
import Awards from '../Awards/Awards';
import Sponsors from '../Sponsors/Sponsors';
import JoinButton from '../JoinButton/JoinButton';
import '../Home/Home.css';
import BannerImage from '../../photos/golden_gate_bridge.jpg';

//Home page component
class Home extends Component {
    render(){
        return(
            <div className = "container-fluid" id = "welcomeContainer">
                <div className = "text-center" id = "page_header">
                    <div className = "centered" id = "header_text">
                        <h1> San Francisco Bay Area Chapter </h1>
                        <h1> American Payroll Association   </h1>
                    </div>
                    <img src = {BannerImage} id = "golden_gate_background"/>
                </div>


                <div className = "welcome_awards_join">
                    <h3 className = "text-center" id = "welcome_text" > Welcome to the San Francisco Bay Area Chapter
                        of the American Payroll Association
                    </h3>
                    <Carousel/>
                    <Awards/>
                    <Sponsors/>
                    <JoinButton/>
                </div>
             
            </div>
        );
    }
}

export default Home;