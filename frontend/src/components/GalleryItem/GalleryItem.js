import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import {
    LazyLoadImage,
    trackWindowScroll
} from 'react-lazy-load-image-component';
import EXIF from 'exif-js';
import './GalleryItem.css';

const EXIF_IMAGE_UPSIDE_DOWN = 3;
const EXIF_IMAGE_SIDE = 6;
const GalleryItem = props => {
    const imageRef = useRef(null);
    //function to call after image lazily loaded
    //check if EXIF orientation value caused image to rotate
    //use css property to re-rotate based on orientation tag value
    const checkOrientationValue = () => {
        //find ReactDOM node of current ref
        //get child node which contains img element
        let currentNode = ReactDOM.findDOMNode(imageRef.current);
        let imageNode = currentNode.childNodes[0];

        //get EXIF data of img element (Exchangeable Image File)
        EXIF.getData(imageNode, () => {
            //reference: https://sirv.com/help/resources/rotate-photos-to-be-upright/
            //exif orientation ranges from 1 to 8
            let exifOrientationValue = EXIF.getTag(imageNode, 'Orientation');
            //check for rotated images, set back to 1
            switch (exifOrientationValue) {
                case EXIF_IMAGE_UPSIDE_DOWN:
                    imageNode.style.transform = 'rotate(180deg)';
                    break;
                case EXIF_IMAGE_SIDE:
                    imageNode.style.transform = 'rotate(90deg)';
                    break;
                default:
                    break;
            }
        });
    };

    return (
        <div className="col-lg-4">
            <a href={props.imageSrc} rel="noopener noreferrer" target="_blank">
                <LazyLoadImage
                    className="galleryImage"
                    alt="gallery"
                    src={props.imageSrc}
                    effect="blur"
                    ref={imageRef}
                    afterLoad={checkOrientationValue}
                    scrollPosition={props.scrollPosition}
                />
            </a>
        </div>
    );
};

//HOC to pass scroll position as prop
//reference: https://www.npmjs.com/package/react-lazy-load-image-component
export default trackWindowScroll(GalleryItem);
