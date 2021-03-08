import React, { Component } from 'react';
import { Alert, Container, Carousel } from 'react-bootstrap';
import './GallerySlides.css';

export default class GallerySlides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 5500,
            showToast: false,
            showSlide: false
        };
    }

    startSlideshowAnimation = () => {
        this.setState(
            {
                showToast: true,
                showSlide: true
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        showToast: false
                    });
                }, 3000);
            }
        );
    };

    render() {
        const asTimeGoesByImageSources = this.props.imageSources.map(
            (image, index) => {
                return (
                    <Carousel.Item
                        interval={this.state.interval}
                        index={index}
                        image={image}
                    >
                        <img
                            class="gallerySlideImage"
                            src={image}
                            alt={image}
                        />
                    </Carousel.Item>
                );
            }
        );
        return (
            <div id="gallerySlidesContainer">
                <Container>
                    <button
                        className="btn btn-primary startSlideButton"
                        onClick={this.startSlideshowAnimation}
                    >
                        View Slideshow
                    </button>
                    <Alert variant="success" show={this.state.showToast}>
                        Slideshow Started
                    </Alert>
                    {!this.state.showSlide ? (
                        <img
                            class="gallerySlideImage"
                            src={this.props.imageSources[0]}
                            alt={this.props.imageSources[0]}
                        />
                    ) : (
                        <Carousel
                            autoPlay={false}
                            interval={this.state.interval}
                        >
                            {asTimeGoesByImageSources}
                        </Carousel>
                    )}
                </Container>
            </div>
        );
    }
}
