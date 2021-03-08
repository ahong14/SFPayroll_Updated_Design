import React, { Component } from 'react';
import GallerySlides from '../GallerySlides/GallerySlides';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
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
        if (this.props.groupName === 'as_time_goes_by') {
            axios
                .get(`/api/images/${this.props.groupName}`)
                .then(res => {
                    // make requests from each directory found
                    const imagePromises = [];
                    res.data.images.forEach(directory => {
                        const folderName = directory;
                        imagePromises.push(
                            axios.get(`/api/images/slidesFolder/${folderName}`)
                        );
                    });
                    Promise.all(imagePromises)
                        .then(images => {
                            const imageSources = [];
                            images.forEach(response => {
                                response.data.images = response.data.images.map(
                                    image => {
                                        return `/api/imageSource/${this.props.groupName}/${response.data.directory}/${image}`;
                                    }
                                );
                                imageSources.push(response.data);
                            });
                            this.setState({
                                imageSources: imageSources
                            });
                        })
                        .catch(err => {
                            alert(err);
                        });
                })
                .catch(err => {
                    alert(err);
                });
        } else {
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

        const gallerySlides = this.state.imageSources.map((gallery, index) => {
            return (
                <GallerySlides
                    galleryId={'gallery' + index}
                    imageSources={gallery.images}
                />
            );
        });

        return (
            <div>
                {this.props.groupName === 'as_time_goes_by' ? (
                    // setup carousel if as_time_goes_by
                    <div>{gallerySlides}</div>
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
