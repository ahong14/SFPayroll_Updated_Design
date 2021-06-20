import React, { useState, useEffect } from 'react';
import GallerySlides from '../GallerySlides/GallerySlides';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
import './GalleryGroup.css';

const GalleryGroup = props => {
    const [imageSources, setImageSources] = useState([]);

    useEffect(() => {
        //make api request to get image sources based on current group name
        if (props.groupName === 'as_time_goes_by') {
            axios
                .get(`/api/images/${props.groupName}`)
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
                                        return `/api/imageSource/${props.groupName}/${response.data.directory}/${image}`;
                                    }
                                );
                                imageSources.push(response.data);
                            });
                            setImageSources(imageSources);
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
                .get(`/api/images/${props.groupName}`)
                .then(res => {
                    //create image sources based on returned image names in image group
                    let currentImageSources = res.data.images.map(image => {
                        return `/api/imageSource/${props.groupName}/${image}`;
                    });
                    setImageSources(currentImageSources);
                })
                .catch(err => {
                    alert(err);
                });
        }
    }, []);

    //render GalleryItem for each image source
    const renderImages = imageSources.map(image => {
        return <GalleryItem imageSrc={image} />;
    });

    const gallerySlides = imageSources.map((gallery, index) => {
        return (
            <GallerySlides
                galleryId={'gallery' + index}
                imageSources={gallery.images}
            />
        );
    });

    return (
        <div>
            {props.groupName === 'as_time_goes_by' ? (
                // setup carousel if as_time_goes_by
                <div>{gallerySlides}</div>
            ) : (
                <div className="row galleryGroupContainer">{renderImages}</div>
            )}
        </div>
    );
};

export default GalleryGroup;
