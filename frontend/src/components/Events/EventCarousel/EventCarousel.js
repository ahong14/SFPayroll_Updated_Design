import React from 'react';
import './EventCarousel.css';

import image1 from '../../../photos/events_photo.jpg';
import image2 from '../../../photos/eventsphoto2.png';
import image3 from '../../../photos/eventsphoto3.png';
import image4 from '../../../photos/eventsphoto4.png';

const EventCarousel = () => {
    return (
        <div
            className="carousel carousel-fade"
            id="myCarousel"
            data-ride="carousel"
            data-interval="5000"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="slide_image" src={image2} alt="first" />
                </div>

                <div className="carousel-item">
                    <img className="slide_image" src={image1} alt="second" />
                </div>

                <div className="carousel-item">
                    <img className="slide_image" src={image3} alt="third" />
                </div>

                <div className="carousel-item">
                    <img className="slide_image" src={image4} alt="fourth" />
                </div>
            </div>
        </div>
    );
};

export default EventCarousel;
