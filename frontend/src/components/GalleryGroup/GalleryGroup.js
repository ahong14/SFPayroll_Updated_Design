import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import CarouselItem from '../CarouselItem/CarouselItem';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import './GalleryGroup.css';

class GalleryGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSources: []
        };
    }

    //make api request to get image sources based on current group name
    componentDidMount() {
        axios
            .get(`/api/images/${this.props.groupName}`)
            .then(res => {
                //create image sources based on returned image names in image group
                let currentImageSources = res.data.images.map(image => {
                    return `/api/imageSource/${this.props.groupName}/${image}`;
                });

                this.setState({
                    imageSources: currentImageSources
                });
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    }

    setPdfPages = pdf => {
        this.setState({
            pdfPages: pdf._pdfInfo.numPages,
            pdf: true
        });
    };

    render() {
        //render GalleryItem for each image source
        const renderImages = this.state.imageSources.map(image => {
            return <GalleryItem imageSrc={image} />;
        });

        const asTimeGoesByImageSources = this.state.imageSources.map(
            (image, index) => {
                return <CarouselItem index={index} image={image} />;
            }
        );

        const asTimeGoesBySlides = this.state.imageSources.map(
            (image, index) => {
                return (
                    <CarouselSlide
                        target="#asTimeGoesByCarousel"
                        slideToIndex={index}
                    />
                );
            }
        );

        return (
            <div>
                {this.props.groupName == 'as_time_goes_by' ? (
                    // setup carousel if as_time_goes_by
                    <div
                        className="carousel slide"
                        id="asTimeGoesByCarousel"
                        data-ride="carousel"
                        data-interval="5500"
                    >
                        <ol className="carousel-indicators">
                            {asTimeGoesBySlides}
                        </ol>

                        <div className="carousel-inner">
                            {asTimeGoesByImageSources}
                        </div>
                    </div>
                ) : (
                    <div className="row galleryGroupContainer">
                        {renderImages}
                    </div>
                )}
            </div>
        );
    }
}

export default GalleryGroup;
