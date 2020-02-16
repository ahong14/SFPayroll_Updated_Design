import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import EXIF from 'exif-js';
import './GalleryItem.css';

class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.imageRef = React.createRef()
  }

  //function to call after image lazily loaded
  //check if EXIF orientation value caused image to rotate
  //use css property to re-rotate based on orientation tag value
  checkOrientationValue = () => {
    //find ReactDOM node of current ref
    //get child node which contains img element
    let currentNode = ReactDOM.findDOMNode(this.imageRef.current);
    let imageNode = currentNode.childNodes[0];
    //get EXIF data of img element (Exchangeable Image File)
    EXIF.getData(imageNode, () => {
      //reference: https://sirv.com/help/resources/rotate-photos-to-be-upright/
      //exif orientation ranges from 1 to 8
      let exifOrientationValue = EXIF.getTag(imageNode, 'Orientation');
      //check for rotated images, set back to 1
      switch(exifOrientationValue){
          case 3:
              imageNode.style.transform = "rotate(180deg)";
              break;
          case 6:
              imageNode.style.transform = "rotate(90deg)";
              break;
          default:
              break;
      }
    })
  }

  render() {
    return (
      <div className="col-lg-4">
        <a href={this.props.imageSrc} rel="noopener noreferrer" target="_blank"> 
          <LazyLoadImage
            className="galleryImage"
            alt="gallery"
            src={this.props.imageSrc}
            effect="blur"
            ref={this.imageRef}
            afterLoad={this.checkOrientationValue}
            scrollPosition={this.props.scrollPosition}
          />
        </a>
      </div>
    )
  }
}

//HOC to pass scroll position as prop
//reference: https://www.npmjs.com/package/react-lazy-load-image-component
export default trackWindowScroll(GalleryItem);
