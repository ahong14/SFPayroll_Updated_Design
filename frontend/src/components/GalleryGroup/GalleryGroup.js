import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
import './GalleryGroup.css';
import EXIF from 'exif-js';

class GalleryGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageSources: []
        }
    }

    //make api request to get image sources based on current group name
    componentDidMount(){
        axios.get(`/api/images/${this.props.groupName}`)
            .then(res => {
                //create image sources based on returned image names in image group
                let currentImageSources = res.data.images.map(image => {
                    return `/api/imageSource/${this.props.groupName}/${image}`;
                });

                this.setState({
                    imageSources: currentImageSources
                })
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    }

    //wait for images to return
    //check EXIF Orientation values for each image
    //if orientation value != 1, image was rotated, need to rotate back
    componentDidUpdate(prevProps, prevState){
        if(prevState.imageSources.length == 0 && this.state.imageSources.length > 0){
            //get all images and check orientation value for each image
            let imageElements = document.getElementsByClassName("galleryImage");
            imageElements =  [...imageElements];
            imageElements.forEach(element => {
                //reference: https://stackoverflow.com/questions/59703859/how-to-use-exif-js-in-a-react-component
                //when image loads async, check orientation tag value
                element.onload = () => {
                    EXIF.getData(element, () => {
                        //reference: https://sirv.com/help/resources/rotate-photos-to-be-upright/
                        //exif orientation ranges from 1 to 8
                        let exifOrientationValue = EXIF.getTag(element, 'Orientation');
                        //check for rotated images, set back to 1
                        switch(exifOrientationValue){
                            case 3:
                                element.style.transform = "rotate(180deg)";
                                break;
                            case 6:
                                element.style.transform = "rotate(90deg)";
                                break;
                            default:
                                break;
                        }
                    })
                }
            });
        }
    }

    render(){
        //render GalleryItem for each image source
        const renderImages = this.state.imageSources.map(image => {
            return(
                <GalleryItem imageSrc={image}/>
            )
        })
        return(
            <div className="row galleryGroupContainer">
                { renderImages }
            </div>
        )
    }
}

export default GalleryGroup;