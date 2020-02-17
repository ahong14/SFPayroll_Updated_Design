import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
import './GalleryGroup.css';

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

    render(){
        //render GalleryItem for each image source
        const renderImages = this.state.imageSources.map(image => {
            return(
                <GalleryItem imageSrc={image}/>
            )
        });
        
        return(
            <div className="row galleryGroupContainer">
                { renderImages }
            </div>
        )
    }
}

export default GalleryGroup;