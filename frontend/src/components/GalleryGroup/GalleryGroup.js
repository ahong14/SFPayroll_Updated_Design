import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import './GalleryGroup.css';

class GalleryGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSources: [],
            pdfPages: 0,
            pdfWidth: null
        };
    }

    //make api request to get image sources based on current group name
    componentDidMount() {
        if (!this.state.pdfWidth) {
            // get width of gallery container, set width of pdf page
            const containerElements = document.getElementsByClassName(
                'tab-content'
            );
            this.setState({
                pdfWidth: containerElements[0].offsetWidth
            });
        }

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

        // reference: https://github.com/wojtekmaj/react-pdf/blob/master/sample/webpack/Sample.jsx
        // create array from pdf pages, apply callback function on each element
        // create new array of pdf pages from callback results
        const pdfPages = Array.from(
            new Array(this.state.pdfPages),
            (element, index) => {
                return (
                    <Page pageNumber={index + 1} width={this.state.pdfWidth} />
                );
            }
        );

        const pdfSource =
            '/api/imageSource/as_time_goes_by/2020_Congress_San_Francisco_Bay_Area_Chapter.pptx.pdf';

        return (
            <div>
                {this.props.groupName == 'as_time_goes_by' ? (
                    <Document file={pdfSource} onLoadSuccess={this.setPdfPages}>
                        {pdfPages}
                    </Document>
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
