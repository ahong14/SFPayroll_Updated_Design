import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel';
// import { Carousel } from 'react-responsive-carousel';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Home/Home.css';
import BannerImage from '../../photos/golden_gate_bridge.jpg';


// const images = [
//     {
//         original: image1,
//         thumbnail: image1
//     },

//     {
//         original: image2,
//         thumbnail: image2
//     },

//     {
//         original: image3,
//         thumbnail: image3
//     }
// ]



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

                <Carousel/>
            </div>
        );
    }
}

export default Home;
