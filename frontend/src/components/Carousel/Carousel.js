import React, {Component} from 'react';
import '../Carousel/Carousel.css';
import image1 from '../../photos/npw2018group.png';
import image2 from '../../photos/about_us_2.JPG';
import image3 from '../../photos/about_us_3.JPG';
import image4 from '../../photos/about_us_6.jpg';


class Carousel extends Component{
    render(){
        return(
            <div className="carousel slide" id="myCarousel" data-ride="carousel" data-interval = "5000">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className= "slide_image img-responsive" src={image1} alt="first image"/>
                    </div>

                    <div className="carousel-item">
                        <img className= "slide_image img-responsive" src={image2} alt = "second image"/>
                    </div>

                    <div className="carousel-item">
                        <img className= "slide_image img-responsive" src={image3} alt="third image"/>
                    </div>

                    <div className="carousel-item">
                        <img className= "slide_image img-responsive" src={image4} alt="fourth image"/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Carousel;
