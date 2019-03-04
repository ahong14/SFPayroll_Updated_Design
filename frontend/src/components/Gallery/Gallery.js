import React, { Component } from 'react';
import './Gallery.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import image1NPW from '../../photos/eventsphoto2.png';
import image2NPW from '../../photos/eventsphoto3.png';
import image3NPW from '../../photos/eventsphoto4.png';
import image4NPW from '../../photos/npw2018group.png';
import image5NPW from '../../photos/npw2018smileys.png';
import image6NPW from '../../photos/npw2018.png';
import image7NPW from '../../photos/npw2018gift1.png';
import image8NPW from '../../photos/npw2018gift2.png';
import image9NPW from '../../photos/npw2018gift3.png';
import image10NPW from '../../photos/npw2018gift4.png';
import image11NPW from '../../photos/npw2018gift7.png';
import image12NPW from '../../photos/npw2018gift8.png';
import image13NPW from '../../photos/npw2018gift11.png';
import image14NPW from '../../photos/npw2018gift12.png';
import image15NPW from '../../photos/npw2018gift13.png';
import image16NPW from '../../photos/npw2018gift14.png';
import image17 from '../../photos/npw2018owhen.png';
import image18 from '../../photos/aboutus1Updated.jpg';
import image19 from '../../photos/about_us_2.JPG';
import image20 from '../../photos/about_us_3.JPG';
import image21 from '../../photos/about_us_4.JPG';
import image22 from '../../photos/about_us_5.JPG';
import image23 from '../../photos/carousel_image.jpg';
import image24 from '../../photos/events_photo.jpg';


const imageJSON = {
  "images": 
    [
      {
        "src": image2NPW,
        "caption": "NPW 2018"
      },
    
      {
        "src": image4NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image1NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image5NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image6NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image3NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image7NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image8NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image9NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image10NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image11NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image12NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image13NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image14NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image15NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image16NPW,
        "caption": "NPW 2018"
      },

      {
        "src": image17,
        "caption": "NPW 2018"
      },

      {
        "src": image24,
        "caption": "Congress"
      },

      {
        "src": image18,
        "caption": "NPW"
      },

      {
        "src": image19,
        "caption": "NPW"
      },

      {
        "src": image20,
        "caption": "NPW"
      },

      {
        "src": image21,
        "caption": "NPW"
      },

      {
        "src": image22,
        "caption": "NPW"
      },

      {
        "src": image23,
        "caption": "CPC"
      },

      
    ]
}


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: imageJSON.images
    }
  }

  componentDidMount(){
    console.log(this.state.images);
  }

  render() {
    const images = this.state.images.map(image => {
      console.log(image);
      return <GalleryItem imageSrc = {image.src} caption = {image.caption}/>
    });

    return (
      <div className = "container galleryContainer">
        <h1 className = "text-center"> Gallery </h1>
        <div className = "row"> 
          {images}
        </div>
      </div>
    ); 
  }
}

export default Gallery;
