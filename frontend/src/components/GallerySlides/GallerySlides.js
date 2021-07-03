import React, { useState, useEffect } from 'react';
import { Alert, Container, Carousel } from 'react-bootstrap';
import './GallerySlides.css';

const GallerySlides = props => {
    const [interval, setSlideInterval] = useState(5500);
    const [showToast, setShowToast] = useState(false);
    const [showSlide, setShowSlide] = useState(false);

    const startSlideshowAnimation = () => {
        setShowSlide(true);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const asTimeGoesByImageSources = props.imageSources.map((image, index) => {
        return (
            <Carousel.Item
                key={'carousel' + index}
                interval={interval}
                index={index}
                image={image}
            >
                <img className="gallerySlideImage" src={image} alt={image} />
            </Carousel.Item>
        );
    });
    return (
        <div id="gallerySlidesContainer">
            <Container>
                <button
                    className="btn btn-primary startSlideButton"
                    onClick={startSlideshowAnimation}
                >
                    View Slideshow
                </button>
                <Alert variant="success" show={showToast}>
                    Slideshow Started
                </Alert>
                {!showSlide ? (
                    <img
                        className="gallerySlideImage"
                        src={props.imageSources[0]}
                        alt={props.imageSources[0]}
                    />
                ) : (
                    <Carousel autoPlay={false} interval={interval}>
                        {asTimeGoesByImageSources}
                    </Carousel>
                )}
            </Container>
        </div>
    );
};

export default GallerySlides;
